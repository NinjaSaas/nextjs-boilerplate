import type { Metadata } from "next";
import { siteConfig } from "@/app";
import { fallbackLng, languages } from "@/i18n/settings";

import { fullURL } from "@/data/meta/builder";

export const DEFAULT_METADATA: Metadata = {
  metadataBase: fullURL(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  viewport: "width=device-width, initial-scale=1",
  creator: siteConfig.author,
  publisher: "NinjaSaas",
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  robots: "index, follow",

  applicationName: "NinjaSaas",
  alternates: {
    canonical: "https://ninjasaas.com",
  },
  openGraph: {
    type: "website",
    locale: fallbackLng,
    alternateLocale: languages.filter((locale) => locale !== fallbackLng),
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url.base,
    title: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 640,
        alt: "NinjaSaas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url.base}/og-image.png`],
    creator: siteConfig.author,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
