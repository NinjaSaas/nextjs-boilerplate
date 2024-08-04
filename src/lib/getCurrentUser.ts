import { UserRole } from "@prisma/client";

import { prisma as db } from "./prisma";
import { getUser } from "./servers/user";

export const getCurrentUser = async () => {
  const user = await getUser();
  return user;
};

export const isAdmin = async (userId?: string) => {
  if (!userId) return false;

  const { userRole } =
    (await db.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        userRole: true,
      },
    })) || {};

  return userRole === UserRole.Admin;
};
