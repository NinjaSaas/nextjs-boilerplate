import { NextResponse } from "next/server";
import { BASE_URL } from "@/app";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/servers/auth";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string(),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    const { email, password } = bodySchema.parse(await req.json());

    const exists = await prisma.user.findFirst({
      where: { email },
    });

    if (!exists) {
      return NextResponse.redirect(BASE_URL + "/login?error=CredentialsSignin");
    }

    const supabase = createClient();

    const result = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
      options: {},
    });

    /* if (result.data.session) {
      const { access_token, refresh_token, expires_in } = result.data.session;
      const session = await supabase.auth.setSession(result.data.session);
    } */

    if (result.error) {
      return new Response(result.error.message, { status: 422 });
    }
    return new Response(JSON.stringify(result.data.user), {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
