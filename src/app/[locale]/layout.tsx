import { use } from "react";
import type { Metadata } from "next";
import { Lateef } from "next/font/google";
import localFont from "next/font/local";
import { getMessages } from "@/i18n/server";
import { languages } from "@/i18n/settings";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { AppProvider } from "@/providers/AppProvider";
import LoglibAnalytics from "@/providers/LoglibAnalytics";
import { Toaster } from "react-hot-toast";

import { getUserProfile } from "@/server/handlers/user/getUserProfile";
import { DEFAULT_METADATA } from "@/data/meta";

// Primary font for Headings: Recoleta
const recoleta = localFont({
  src: [
    {
      path: "../../fonts/recoleta/Recoleta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/recoleta/Recoleta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/recoleta/Recoleta-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/recoleta/Recoleta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
});
// coming soon
// Secondary Font for Headings: ninjasaas

// Body Font Specific Pages: triomphe
const triomphe = localFont({
  src: [
    {
      path: "../../fonts/triomphe/Triomphe-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/triomphe/Triomphe-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../fonts/triomphe/Triomphe-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-triomphe",
});

// Accent Font (for Arabic Touch): Lateef
const lateef = Lateef({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lateef",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export const metadata: Metadata = DEFAULT_METADATA;
export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = use(getMessages(locale));

  const userAuth = use(getCurrentUser());
  const user = userAuth && use(getUserProfile(userAuth.id));

  return (
    <html
      suppressHydrationWarning
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
      className={`${recoleta.variable} ${triomphe.variable} ${lateef.variable}`}
    >
      <body className="bg-secondary-100 font-body  text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
        <AppProvider locale={locale} messages={messages} user={user}>
          {children}
          <LoglibAnalytics />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
            }}
          />
        </AppProvider>
      </body>
    </html>
  );
}
