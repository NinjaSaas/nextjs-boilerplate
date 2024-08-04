import { NextApiRequest, NextApiResponse } from "next";
import Iron from "@hapi/iron";
import { Session } from "@supabase/supabase-js";
import cookie, { CookieSerializeOptions, parse, serialize } from "cookie";

export function getCookies(req: Request) {
  const cookieHeader = req.headers.get("Cookie");
  if (!cookieHeader) return {};
  return cookie.parse(cookieHeader);
}

export function getCookie(req: Request, name: string) {
  const cookieHeader = req.headers.get("Cookie");
  if (!cookieHeader) return;
  const cookies = cookie.parse(cookieHeader);
  return cookies[name];
}

export function setCookie(
  resHeaders: Headers,
  name: string,
  value: string,
  options?: CookieSerializeOptions,
) {
  resHeaders.append("Set-Cookie", cookie.serialize(name, value, options));
}

export async function setTempCookie(session: Session, res: NextApiResponse) {
  const token = await Iron.seal(session, TEMP_TOKEN_SECRET, Iron.defaults);

  const cookie = serialize(TEMP_COOKIE, token, {
    maxAge: session.expires_in,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
}

export async function getSessionFromTempCookie(
  req: NextApiRequest,
): Promise<Session | undefined> {
  const cookie = req.headers.cookie as string;

  const cookies = parse(cookie ?? "");

  const tempCookie = cookies[TEMP_COOKIE];

  if (!tempCookie) {
    return undefined;
  }

  const session = await Iron.unseal(
    tempCookie,
    TEMP_TOKEN_SECRET,
    Iron.defaults,
  );

  return session;
}

export function setAuthCookie(session: Session, res: NextApiResponse) {
  const { access_token, refresh_token, expires_in } = session;

  const authCookies = [
    { name: ACCESS_TOKEN_COOKIE, value: access_token },
    refresh_token
      ? { name: REFRESH_TOKEN_COOKIE, value: refresh_token }
      : undefined,
  ]
    .filter(isDefined)
    .map(({ name, value }) =>
      serialize(name, value, {
        maxAge: expires_in,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
      }),
    );

  // Also clear the temp cookie
  const updatedCookies = [
    ...authCookies,
    serialize(TEMP_COOKIE, "", { maxAge: -1, path: "/" }),
  ];

  res.setHeader("Set-Cookie", updatedCookies);
}

const isDefined = <T>(value: T | undefined): value is T => !!value;

const TEMP_TOKEN_SECRET = process.env.TEMP_TOKEN_SECRET!;
const TEMP_COOKIE = "as-mfa-cookie";
const ACCESS_TOKEN_COOKIE = "sb-access-token";
const REFRESH_TOKEN_COOKIE = "sb-refresh-token";
