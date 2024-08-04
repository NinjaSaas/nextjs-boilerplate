/**
 * @see https://youtu.be/qCLV0Iaq9zU
 */

import { createClient } from "@/lib/servers/auth";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/routers/_app";
import { createContext } from "@/server/trpc";

const handler = async (req: Request) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async ({ req, resHeaders }) =>
      await createContext({ user, req, resHeaders }),
  });
};

export { handler as GET, handler as POST };
