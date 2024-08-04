import { Prisma, PrismaClient } from "@prisma/client";

import { prisma as db } from "@/data/db";

/**
 * admin use only
 */
export const getUserProfile = async (
  userId: string,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >,
) => {
  const user = await (prisma ?? db).user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      gender: true,
      age: true,
      occupation: true,
      relationship: true,
      education: true,
      phone: true,
      preferredCommunicationMethod: true,
      preferredLanguage: true,
    },
  });

  return user;
};
