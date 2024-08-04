import { NextResponse } from "next/server";
import { BASE_URL } from "@/app";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/servers/auth";

import { getCookie } from "@/server/common/cookie";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const callbackUrl = getCookie(request, "authCallbackUrl");
  let redirectUrl;
  try {
    if (code) {
      const supabase = createClient();
      const result = await supabase.auth.exchangeCodeForSession(code);
      const id = result.data.user?.id;
      const email = result.data.user?.email as string;
      const exists = await prisma.user.findFirst({
        where: { email },
      });

      if (!exists) {
        await prisma.user.create({
          data: {
            id: id,
            name: result.data.user?.user_metadata?.username || "User",
            email: result.data.user?.email,
            image: result.data.user?.user_metadata?.avatar_url,
          },
        });
      } else {
        // user session data
        await supabase.auth.updateUser({
          data: {
            hasSurvey: exists.hasSurvey,
            userRole: exists.userRole,
            gender: exists.gender,
            education: exists.education,
            relationship: exists.relationship,
            occupation: exists.occupation,
            age: exists.age,
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
    redirectUrl = "/not-found";
  }

  redirectUrl = callbackUrl ? BASE_URL + callbackUrl : BASE_URL;

  return NextResponse.redirect(redirectUrl);
}
