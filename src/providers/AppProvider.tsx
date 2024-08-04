"use client";

import { useEffect, type ComponentProps } from "react";
import { AbstractIntlMessages } from "next-intl";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { HandleOnComplete } from "@/lib/router-events";
import useAppStore from "@/store/app";
import { AppUser, WithChildren } from "@/types";
import { Analytics } from "@vercel/analytics/react";

import { TooltipProvider } from "@/shared/Primitives/Tooltip";

import ClientCommons from "./ClientCommons";
import { TailwindIndicator } from "./indicators/tailwind-indicator";
import { NextIntlProvider } from "./nextintl-provider";
import { TRPCProvider } from "./trpcProvider";

type ThemeProviderProps = WithChildren<
  ComponentProps<typeof NextThemeProvider>
>;

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}

type AppProviderProps = {
  locale: string;
  messages: AbstractIntlMessages;
  children?: React.ReactNode;
  user: AppUser | null;
};

export const AppProvider = ({
  children,
  locale,
  messages,
  user,
}: AppProviderProps) => {
  const { setCurrentUser } = useAppStore();

  useEffect(() => {
    setCurrentUser(user);
  }, [user, setCurrentUser]);

  return (
    <TRPCProvider>
      <ThemeProvider>
        <NextIntlProvider locale={locale} messages={messages}>
          <TooltipProvider>
            {children}
            <ClientCommons />
            <HandleOnComplete />
            <TailwindIndicator />
            <Analytics />
          </TooltipProvider>
        </NextIntlProvider>
      </ThemeProvider>
    </TRPCProvider>
  );
};
