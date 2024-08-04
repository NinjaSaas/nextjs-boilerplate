import { BASE_URL } from "@/app";
import { TRPCError } from "@trpc/server";

import { authSchema, loginSchema } from "@/data/valids/auth";

import { procedure, router } from "../../trpc";

export const authRouter = router({
  signup: procedure.input(authSchema).mutation(async ({ input, ctx }) => {
    const { email } = input;

    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    });

    if (exists) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "User already exists.",
      });
    }

    return {
      status: 201,
      message: "Success! Please check your email for further instructions.",
      result: input,
    };
  }),
  login: procedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input;
    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    });

    if (!exists) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found.",
      });
    }
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const session = await res.json();

    if (!session.access_token) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Login failed.",
      });
    }

    /*  authCookies.forEach((cookie) => {
      ctx.resHeaders.append("Set-Cookie", cookie);
    }); */

    return {
      status: 200,
      message: "Success! Please check your email for further instructions.",
      result: input,
    };
  }),
});

export type IAuthRouter = typeof authRouter;
