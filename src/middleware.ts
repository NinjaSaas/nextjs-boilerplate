import { NextResponse, type NextRequest } from "next/server";
import { fallbackLng, languages } from "@/i18n/settings";

const ROUTES = {
  user: ["/home", "/account", "/recommendation"],
  auth: ["/login", "/register"],
  admin: ["/admin"],
  survey: ["/survey", "/survey/next"],
  default: {
    login: "/login",
    user: "/home",
    comingSoon: "/coming-soon",
  },
};

const redirect = (req: NextRequest, redirectURL: string) =>
  NextResponse.redirect(new URL(redirectURL, req.nextUrl.origin).toString());

const matchPath = (pathname: string, paths: string[]) =>
  paths.some((path) => pathname.endsWith(path));

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Lazy-load dependencies
  const [
    { default: createIntlMiddleware },
    { comingSoon },
    { createClient },
    { ADMIN_ROLE },
  ] = await Promise.all([
    import("next-intl/middleware"),
    import("./app").then((m) => ({ comingSoon: m.comingSoon })),
    import("./lib/servers/auth"),
    import("./app").then((m) => ({
      ADMIN_ROLE: m.ADMIN_ROLE,
    })),
  ]);

  if (comingSoon) return redirect(req, ROUTES.default.comingSoon);

  const intlMiddleware = createIntlMiddleware({
    locales: languages,
    defaultLocale: fallbackLng,
  });

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return matchPath(pathname, [...ROUTES.user])
      ? redirect(req, ROUTES.default.login)
      : intlMiddleware(req);
  }

  if (user.id && matchPath(pathname, ROUTES.auth)) {
    return redirect(req, ROUTES.default.user);
  }

  const { role } = user.user_metadata;

  if (matchPath(pathname, ROUTES.admin) && role !== ADMIN_ROLE) {
    return redirect(req, ROUTES.default.user);
  }

  return pathname.startsWith("/api")
    ? NextResponse.next()
    : intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
