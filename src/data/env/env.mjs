import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Transform an empty string to undefined
 */
const emptyStringToUndefined = z.literal("").transform(() => undefined);

/**
 * An optional string type that is at least one character long, or transformed
 * to undefined
 */
const optionalString = z
  .string()
  .trim()
  .min(1)
  .optional()
  .or(emptyStringToUndefined);

export const env = createEnv({
  /**
   * Environment variables available on the client (and server).

   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   *
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  // !! We are incrementally moving towards full and strict ENV data safety.
  // !! Accordingly, possibly, optional params will be eliminated in the future.
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    NEXT_PUBLIC_MAILCHIMP_URL: z.string().url(),
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1),
  },

  /**
   * Server-side Environment variables, not available on the client. Will throw
   * if you access these variables on the client.
   *
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  // !! We are incrementally moving towards full and strict ENV data safety.
  // !! Accordingly, possibly, optional params will be eliminated in the future.
  server: {
    ANALYZE: z.string(),

    // DATABASE
    DATABASE_URL: z.string().url(),

    // AUTHENTICATION
    GOOGLE_ID: optionalString,
    GOOGLE_SECRET: optionalString,
    LINKEDIN_ID: optionalString,
    LINKEDIN_SECRET: optionalString,
    FACEBOOK_ID: optionalString,
    FACEBOOK_SECRET: optionalString,
    GITHUB_ID: optionalString,
    GITHUB_SECRET: optionalString,

    // VERCEL SPECIFIC
    VERCEL_GIT_COMMIT_SHA: z.string().optional(),
    VERCEL_URL: z.string().optional(),

    // MAILING
    //EMAIL_FROM: z.string(),
    //RESEND_API_KEY: optionalString,

    // ANALYTICS
    LOGLIB_API_KEY: z.string(),
    LOGLIB_SITE_ID: z.string(),

    //CLOUDINARY
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
    // UPLOADTHING
    //UPLOADTHING_APP_ID: z.string(),
    //UPLOADTHING_SECRET: z.string()
  },

  /**
   * SHARED BETWEEN SERVER AND CLIENT
   */
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test", "local"])
      .default("local"),
  },

  /**
   * Due to how Next.js (>= 13.4.4) bundles environment variables on the Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * Means you can't destruct `process.env` as a regular object during the Next.js edge
   * runtime (e.g. with middleware) or client-side, so we need to destruct it manually.
   *
   * 💡 You'll get type errors if not all variables from `client` are included here.
   */
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_MAILCHIMP_URL: process.env.NEXT_PUBLIC_MAILCHIMP_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
