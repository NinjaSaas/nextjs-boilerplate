"use client";

import React from "react";
import { NextIntlClientProvider } from "next-intl";

/**
 * Next.js 13 internationalization library
 * @see https://next-intl-docs.vercel.app
 */

// Custom function to replace _.get()
function getNestedValue(obj: any, path: string, defaultValue: any = undefined) {
  const keys = path.split(".");
  let result = obj;
  for (const key of keys) {
    if (result === undefined || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== undefined ? result : defaultValue;
}

export function NextIntlProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider
      onError={() => {}}
      getMessageFallback={({ error, key, namespace }) => {
        const nestedMessages = getNestedValue(messages, namespace ?? "", {});
        if (!nestedMessages) return key;
        if (error.code === "MISSING_MESSAGE") return nestedMessages["default"];
        return nestedMessages[key];
      }}
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
}
