import { Prisma, PrismaClient } from "@prisma/client";

import { prisma as db } from "@/data/db";

export const fetchTherapistById = async (
  id: string,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >,
) => {
  const therapist = await (prisma ?? db).therapist.findFirst({
    where: {
      id,
    },
    include: {
      availability: {
        include: {
          rangeAvailability: true,
          specificSlots: true,
        },
      },
      contact: true,
      education: true,
      awards: true,
      reviews: true,
      fees: true,
      user: true,
    },
  });
  if (!therapist) return;
  return therapist;
};
