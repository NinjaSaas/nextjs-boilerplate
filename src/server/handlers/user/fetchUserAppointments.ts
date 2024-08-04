import { AppointmentStatus, Prisma, PrismaClient } from "@prisma/client";

import { prisma as db } from "@/data/db";

export const fetchUserAppointments = async (
  userId: string,
  status?: AppointmentStatus | "ALL",
  limit = 50,
  cursor?: string,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >,
) => {
  const where: Prisma.AppointmentWhereInput = {
    clientId: userId,
  };

  if (status && status !== "ALL") {
    where.status = status;
  }

  const appointments = await (prisma ?? db).appointment.findMany({
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
};
