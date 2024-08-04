import { UserRole } from "@prisma/client";
import * as trpc from "@trpc/server";

import { procedure } from "./trpc";

export const userProcedure = procedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      ...ctx,
      user: { ...ctx.user },
    },
  });
});

export const guestProcedure = procedure.use(({ ctx, next }) => {
  return next({
    ctx,
  });
});

export const adminProcedure = userProcedure.use(async ({ ctx, next }) => {
  const { userRole } =
    (await ctx.prisma.user.findFirst({
      where: {
        id: ctx.user.id || "",
      },
      select: {
        userRole: true,
      },
    })) || {};

  if (userRole !== UserRole.Admin) {
    throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx,
  });
});

// Add more procedures here
