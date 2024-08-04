/**
 * This is an optional `page.tsx`.
 * Just used to ensure if locale cookie is not set
 * then we redirect manually to the default locale.
 * Please go to the "app/[locale]/page.tsx" file.
 */

import { redirect } from "next/navigation";
import { fallbackLng } from "@/i18n/settings";

export default function RootPage() {
  redirect(`/${fallbackLng}`);
}
