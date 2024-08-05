import { router } from "../trpc";
import { adminRouter } from "./subRouters/admin.router";
import { authRouter } from "./subRouters/auth.router";
import { guestRouter } from "./subRouters/guest.router";
import { userRouter } from "./subRouters/user.router";

export const appRouter = router({
  user: userRouter,
  admin: adminRouter,
  auth: authRouter,
  guest: guestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
