import { createClient } from "@/lib/servers/auth";

export const getUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};
