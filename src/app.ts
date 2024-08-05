import type { ThemeConfig } from "@/types";
import { UserRole } from "@prisma/client";
import { Provider } from "@supabase/supabase-js";

import { ContentSection, HeroHeader } from "@/server/config/appts";
import { networks } from "@/server/config/socials";

import { FOOTER_NAVIGATION, NAVIGATION } from "./data/navigation";
import { ImageSvgIcons } from "./images/icons";

export const appts = {
  name: "ninjasaas",
  social: networks({
    youtube: "@ninjasaas_maroc",
    facebook: "ninjasaas_maroc",
    twitter: "ninjasaas_maroc",
    instagram: "ninjasaas_maroc",
  }),
};

export default appts;

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://x.com/ninjasaas_maroc",
  youtube: "https://youtube.com/ninjasaas_maroc",
  instagram: "https://instagram.com/ninjasaas_maroc",
  facebook: "https://facebook.com/groups/bleverse",
};

export const contactConfig = {
  email: "contact.ninjasaas@gmail.com",
};

export const REPOSITORY_OWNER = "mouadlouhichi";
export const REPOSITORY_NAME = "ninjasaas";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const BASE_URL = process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:3000";
export const BRAND_NAME = "ninjasaas";
export const BRAND_TITLE = "Next.js Enterprise Boilerplate | ninjasaas";

export const BRAND_DESCRIPTION = "ninjasaas: Next.js Boilerplate for rapid SaaS development. Start building your next big project today.";

export const OWNER_ROLE = UserRole.Owner;
export const ADMIN_ROLE = UserRole.Admin;
export const USER_ROLE = UserRole.User;
export const GUEST_ROLE = UserRole.Guest;

export const TRIAL_LENGTH_IN_DAYS = 7;
export const ROLES = [OWNER_ROLE, ADMIN_ROLE, USER_ROLE, GUEST_ROLE] as const;

export const defaultFeatures = {
  internationalizationEnabled: true,
  themeToggleEnabled: false,
  authEnabled: true,
};

export const settings = {
  internationalizationEnabled: true,
  themeToggleEnabled: false,
};

export const siteConfig = {
  name: "ninjasaas",
  shortName: "ninjasaas",
  author: "mouadlouhichi",
  description: "Jumpstart your SaaS project with ninjasaas - a feature-rich Next.js boilerplate for rapid development and scalable applications.",
  company: {
    name: "ninjasaas",
    link: "https://www.ninjasaas.com",
    email: "contact@ninjasaas.com",
    twitter: "@ninjasaas_maroc",
  },
  handles: {
    twitter: "@ninjasaas_maroc",
  },
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "SaaS",
    "Boilerplate",
    "Enterprise",
    "Web Development",
    "Frontend Framework",
    "Performance",
    "SEO",
    "Scalable",
    "Customizable",
    "Authentication",
    "API",
    "Database",
    "Testing",
    "CI/CD",
    "Serverless",
    "Responsive Design",
  ],
  url: {
    base: baseUrl,
    author: REPOSITORY_OWNER,
  },
  ogImage: `${baseUrl}/og-image.png`,
  mainNav: NAVIGATION,
  links,
  footerNav: FOOTER_NAVIGATION,
};

export const heroHeader: HeroHeader = {
  header1: `Next.js Enterprise Boilerplate`,
  header2: `Build Scalable SaaS Applications Faster`,
  subheader: `Featuring Next.js 13, TypeScript, Tailwind CSS, tRPC, and more for rapid, enterprise-grade development.`,
};

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `ninjasaas`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`,
    },
    {
      text: `TypeScript`,
      subtext: `Type-Safe Development`,
    },
    {
      text: `Tailwind CSS`,
      subtext: `Utility-First Styling`,
    },
  ],
};

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why Choose ninjasaas?`,
  content: [
    {
      text: `Rapid Development`,
      subtext: `Pre-configured tools and components for fast setup`,
    },
    {
      text: `Scalable Architecture`,
      subtext: `Built to grow with your project needs`,
    },
    {
      text: `Enterprise-Ready`,
      subtext: `Includes authentication, API routes, and database integration`,
    },
  ],
};

export const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: ImageSvgIcons.FacebookSvg,
    provider: "facebook" as Provider,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: ImageSvgIcons.GoogleSvg,
    provider: "google" as Provider,
  },
];

export const themeConfig: ThemeConfig = {
  direction: "ltr" /* ltr | rtl */,
};

export const comingSoon = false;
