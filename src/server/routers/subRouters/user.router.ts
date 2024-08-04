import { AppointmentStatus } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { differenceInHours } from "date-fns";
import { z } from "zod";

import { accountSchema } from "@/data/valids/user";

import { userProcedure } from "../../procedures";
import { router } from "../../trpc";

export const userRouter = router({
  // 1. The query function is used to define a query.
  profile: userProcedure.query(async ({ ctx }) => {
    // 2. The query function receives a ctx object with a session property containing the session data.
    return ctx.prisma.user.findFirst({
      where: {
        // 3. The id of the current user is extracted from the session data.
        id: ctx.user.id,
      },
    });
  }),
  getTherapists: userProcedure.query(async ({ ctx }) => {
    return ctx.prisma.therapist.findMany({
      select: {
        id: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        experienceYears: true,
        languages: true,
        location: true,
        fees: true,
        credentials: true,
        specialties: true,
        reviews: true,
      },
    });
  }),

  updatePersonalProfile: userProcedure
    .input(accountSchema)
    .mutation(async ({ ctx, input }) => {
      const { ...updatedData } = input; // Creating a copy of input object without userId

      return ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: updatedData,
      });
    }),

  getAppointmentInfo: userProcedure
    .input(
      z.object({
        therapistId: z.string(),
        feeId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const therapist = await ctx.prisma.therapist.findUnique({
        where: {
          id: input.therapistId,
        },
        select: {
          credentials: true,
          user: {
            select: {
              name: true,
              image: true,
            },
          },
          fees: {
            where: {
              id: input.feeId,
            },
          },
        },
      });

      if (!therapist) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Therapist not found",
        });
      }

      return therapist;
    }),

  createOrUpdateDraftAppointment: userProcedure
    .input(
      z.object({
        therapistId: z.string(),
        feeId: z.string(),
        sessionDate: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { therapistId, feeId, sessionDate } = input;

      // Check if an appointment already exists for this user and therapist in the present or future
      const existingAppointment = await ctx.prisma.appointment.findFirst({
        where: {
          clientId: ctx.user.id,
          therapistId: therapistId,
          sessionDate: {
            gte: new Date(), // Greater than or equal to the current date and time
          },
        },
        orderBy: {
          sessionDate: "asc", // Get the earliest future appointment if multiple exist
        },
      });

      if (existingAppointment) {
        const hoursDifference = differenceInHours(
          existingAppointment.sessionDate,
          new Date(),
        );

        if (hoursDifference < 24) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "APPOINTMENT_CHANGE_TIME_LIMIT",
          });
        }
        // Update the existing appointment
        const updatedAppointment = await ctx.prisma.appointment.update({
          where: {
            id: existingAppointment.id,
          },
          data: {
            feeId,
            sessionDate,
            // If the appointment was previously confirmed or scheduled, set it back to draft
            status: AppointmentStatus.DRAFT,
          },
        });

        return {
          appointment: updatedAppointment,
          action: "updated",
        };
      } else {
        // Create a new appointment
        const newAppointment = await ctx.prisma.appointment.create({
          data: {
            clientId: ctx.user.id,
            therapistId,
            feeId,
            sessionDate,
            status: AppointmentStatus.DRAFT,
          },
        });

        return {
          appointment: newAppointment,
          action: "created",
        };
      }
    }),
  getUserAppointments: userProcedure
    .input(
      z.object({
        status: z.enum(["ALL", ...Object.values(AppointmentStatus)]).optional(),
        limit: z.number().min(1).max(100).optional().default(50),
        cursor: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { status, limit, cursor } = input;
      const where: any = {
        clientId: ctx.user.id,
      };

      if (status && status !== "ALL") {
        where.status = status;
      }

      const appointments = await ctx.prisma.appointment.findMany({
        where,
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          sessionDate: "desc",
        },
        include: {
          therapist: {
            include: {
              user: {
                select: {
                  name: true,
                  image: true,
                },
              },
            },
          },
          fee: true,
          feedback: true,
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (appointments.length > limit) {
        const nextItem = appointments.pop();
        nextCursor = nextItem!.id;
      }

      return {
        appointments,
        nextCursor,
      };
    }),

  getHasAppointments: userProcedure
    .input(
      z.object({
        status: z.enum(["ALL", ...Object.values(AppointmentStatus)]).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { status } = input;
      const where: any = {
        clientId: ctx.user.id,
      };

      if (status && status !== "ALL") {
        where.status = status;
      }

      const appointmentCount = await ctx.prisma.appointment.count({
        where,
      });

      return appointmentCount > 0;
    }),
});
