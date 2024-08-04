import { ComponentType } from "react";
import { Metadata } from "next";
import type { Route as NextRoute } from "next";
import { type FileWithPath } from "react-dropzone";
import { PaletteMode } from "@mui/material";
import { AvailabilityType, Day, Fee, Language, UserRole } from "@prisma/client";
import { LucideIcon, LucideProps } from "lucide-react";

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

export type ScheduledSession = {
  therapistId?: string;
  feeId?: string;
  sessionDate?: Date;
};

export type RecommendedTherapist = {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
  bio: string;
  contact: {
    id: string;
    therapistId: string;
    email: string;
    phone: string;
    website: string;
  };
  certifications: string[];
  specialties: string[];
  languages: Language[];
  location: string;
  education: {
    id: string;
    therapistId: string;
    name: string;
    university: string;
  }[];
  qualifications: string[];
  credentials: string;
  experienceYears: number;
  professionalExperience: string[];
  awards: {
    id: string;
    therapistId: string;
    date: string;
    awardingBody: string;
    awardDetails: string;
  }[];
  methods: string[];
  tools: string[];
  availability: {
    id: string;
    therapistId: string;
    availabilityType: AvailabilityType;
    rangeAvailability?: {
      id: string;
      availabilityId: string;
      days: Day[];
      startTime: Date;
      endTime: Date;
      startDate: Date;
      endDate: Date;
    };
    specificSlots?: {
      id: string;
      availabilityId: string;
      startDateTime: Date;
      endDateTime: Date;
    }[];
    onlineSessions: boolean;
  };
  fees: {
    id: string;
    therapistId: string;
    service: string;
    fee: string;
    time: string;
  }[];
  reviews: {
    id: string;
    therapistId: string;
    rating: number;
    reviewText: string;
  }[];
  sessions: Appointment[];
  sessionMaterial: SessionMaterial[];
};

type Appointment = {
  id: string;
  clientId: string;
  therapistId: string;
  sessionDate: Date;
  status: AppointmentStatus;
  feedback?: Feedback;
  reminderSent: boolean;
  reminderPreference: ReminderPreference;
};

enum AppointmentStatus {
  SCHEDULED = "SCHEDULED",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

enum ReminderPreference {
  EMAIL = "EMAIL",
  SMS = "SMS",
  BOTH = "BOTH",
  NONE = "NONE",
}

type Feedback = {
  id: string;
  appointmentId: string;
  rating: number;
  comments?: string;
  date: Date;
};

type SessionMaterial = {
  id: string;
  title: string;
  description: string;
  type: string;
  url: string;
  uploadDate: Date;
  therapistId: string;
};
/** ----------------- START Survey TYPES ----------------------- */
export interface SurveyOption {
  id: string;
  label: string;
  value: string;
  defaultChecked: boolean;
}
export interface SurveyQuestion {
  id: string;
  title: string;
  name: string;
  type: "radio" | "checkbox" | "text" | "textarea" | "select" | "customRadio";
  conditional: boolean;
  message?: boolean;
  messageTitle?: string;
  messageBody?: string;
  dependsOn?: string;
  condition?: (response: string) => boolean;
  options: SurveyOption[];
}

export interface SurveyGroupArray {
  id: string;
  title: string;
  grouped?: boolean;
  description?: string;
  questions: SurveyQuestion[][]; // Array of arrays
}
export interface SurveyGroup {
  id: string;
  title: string;
  grouped?: boolean;
  description?: string;
  questions: SurveyQuestion[] | SurveyQuestion[][];
}
export interface Survey {
  title: string;
  description: string;
  longDescription?: string;
  groups: SurveyGroup[];
}
/** ----------------- END Survey TYPES ----------------------- */

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

export type CalendarColors = {
  ETC: ThemeColor;
  Family: ThemeColor;
  Holiday: ThemeColor;
  Personal: ThemeColor;
  Business: ThemeColor;
};

export type CalendarStoreType = {
  events: CalendarEvent[];
  selectedEvent: null | CalendarEvent;
  selectedCalendars: CalendarFiltersType[] | string[];
};

export type CalendarType = {
  calendarApi: any;
  dispatch?: any;
  store?: CalendarStoreType;
  direction: "ltr" | "rtl";
  calendarsColor: CalendarColors;
  setCalendarApi: (val: any) => void;
  updateEvent?: (event: CalendarEvent) => void;
  handleAddEventSidebarToggle: () => void;
  handleSelectEvent?: (event: CalendarEvent) => void;
  events?: CalendarEvent[];
  feeId: string;
};

export type Mode = PaletteMode | "semi-dark";

export type ThemeConfig = {
  direction: "ltr" | "rtl";
};

export type Settings = {
  direction: "ltr" | "rtl";
};

export interface CalendarEvent {
  id: string;
  url: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  extendedProps: {
    calendar: string;
    therapistId: string;
    feeId: string;
    availabilityId: string;
    onlineSessions: boolean;
  };
}

export interface Availability {
  id: string;
  therapistId: string;
  availabilityType: "RANGE" | "SPECIFIC_SLOTS";
  onlineSessions: boolean;
  rangeAvailability?: {
    id: string;
    availabilityId: string;
    days: (
      | "MONDAY"
      | "TUESDAY"
      | "WEDNESDAY"
      | "THURSDAY"
      | "FRIDAY"
      | "SATURDAY"
      | "SUNDAY"
    )[];
    startTime: string;
    endTime: string;
    startDate: string;
    endDate: string;
  };
  specificSlots?: any[]; // Not used in this function, but included for completeness
}

export type SessionType = {
  id: string;
  defaultChecked: boolean;
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type FeePicklist = {
  [key: string]: {
    id: string;
    service: string;
    fee: string;
    time: string;
    icon: LucideIcon;
  };
};

export type FeeData = {
  id: string;
  therapistId: string;
  service: string;
  fee: string;
  time: string;
};

export type FeeSelectType = {
  id: string;
  defaultChecked: boolean;
  label: string;
  value: string | undefined;
  icon: LucideIcon;
  fee: string;
  time: string;
};

export type CurrentPsyCard = {
  fees: Fee[];
  availability: any;
};
