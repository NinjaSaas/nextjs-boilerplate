import { guestProcedure } from "../../procedures";
import { router } from "../../trpc";

export const guestRouter = router({
  getUsers: guestProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany();
    return users;
  }),
});
