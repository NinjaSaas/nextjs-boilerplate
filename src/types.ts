import { ComponentType } from "react";
import { Metadata } from "next";
import type { Route as NextRoute } from "next";
import { type FileWithPath } from "react-dropzone";
import { PaletteMode } from "@mui/material";
import { UserRole } from "@prisma/client";
import { LucideProps } from "lucide-react";

// Get ready to update to nextjs version 13.2 with X typedRoutes
export type Route<T extends string = string> = NextRoute<T>;
export type PathName = Route;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<object>;
}

export type WithChildren<T = unknown> = T & { children: React.ReactNode };

export type PageParams = { params: { locale: string } };

export type GenerateMetadata = (
  params: PageParams,
) => Metadata | Promise<Metadata>;

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideProps;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export type FileWithPreview = FileWithPath & {
  preview: string;
};

export interface GuestsObject {
  guestAdults?: number;
  guestChildren?: number;
  guestInfants?: number;
}

export type StaySearchFormFields = "location" | "guests" | "dates";

export interface PropertyType {
  name: string;
  description: string;
  checked: boolean;
}

export type ClassOfProperties = PropertyType;

export type DateRage = [Date | null, Date | null];

export type SessionUser = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  gender: string | null;
  age: string | null;
  occupation: string | null;
  relationship: string | null;
  education: string | null;
};

export type AppUser = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  gender: string | null;
  age: string | null;
  occupation: string | null;
  relationship: string | null;
  education: string | null;
  phone: string | null;
  preferredCommunicationMethod: string[];
  preferredLanguage: string | null;
  isAdmin?: boolean;
  userRole?: UserRole;
};

/** -----------------  START CALENDAR ------------------------- */
export type UseBgColorType = {
  [key: string]: {
    color: string;
    backgroundColor: string;
  };
};

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type CalendarFiltersType =
  | "Personal"
  | "Business"
  | "Family"
  | "Holiday"
  | "ETC";

export type Mode = PaletteMode | "semi-dark";

export type ThemeConfig = {
  direction: "ltr" | "rtl";
};

export type Settings = {
  direction: "ltr" | "rtl";
};
