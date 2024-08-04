import { z } from "zod";

import { guestProcedure } from "../../procedures";
import { router } from "../../trpc";

export const guestRouter = router({
  getTherapists: guestProcedure
    .input(
      z.object({
        page: z.number().default(1),
        limit: z.number().default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { page, limit } = input;
      const skip = (page - 1) * limit;

      const [therapists, total] = await Promise.all([
        ctx.prisma.therapist.findMany({
          skip,
          take: limit,
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
            fees: true,
            availability: {
              include: {
                rangeAvailability: true,
                specificSlots: true,
              },
            },
            reviews: {
              select: {
                rating: true,
                reviewText: true,
              },
            },
            contact: true,
            education: true,
            awards: true,
          },
        }),
        ctx.prisma.therapist.count(),
      ]);

      return {
        therapists,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      };
    }),

  getUsers: guestProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany();
    return users;
  }),
});
