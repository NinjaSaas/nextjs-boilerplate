import { PathName } from "@/types";
import ncNanoId from "@/utils/ncNanoId";
import {
  ArrowTrendingUpIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon as SolidCalendarDaysIcon,
  HomeIcon as SolidHomeIcon,
} from "@heroicons/react/24/solid";

import { CustomLink } from "@/data/types";
import { NavItemType } from "@/shared/Navigation/NavigationItem";

export const NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/find-therapist" as PathName,
    name: "Therapists",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Business",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "About",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Resources",
    type: "none",
  },

  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Contact",
    type: "none",
  },
];

export const USER_RIGHT_NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/home" as PathName,
    name: "Home",
    type: "icon",
    icon: HomeIcon,
    activeIcon: SolidHomeIcon,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Insights",
    type: "icon",
    icon: ArrowTrendingUpIcon,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Discover",
    type: "icon",
    icon: GlobeAltIcon,
  },
  {
    id: ncNanoId(),
    href: "/schedule" as PathName,
    name: "Schedule",
    type: "icon",
    icon: CalendarDaysIcon,
    activeIcon: SolidCalendarDaysIcon,
  },
];

export const MOBILE_NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/home" as PathName,
    name: "Home",
    type: "icon",
    icon: HomeIcon,
    activeIcon: SolidHomeIcon,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Insights",
    type: "icon",
    icon: ArrowTrendingUpIcon,
    activeIcon: SolidHomeIcon,
  },
  {
    id: ncNanoId(),
    href: "/schedule" as PathName,
    name: "Schedule",
    type: "icon",
    icon: CalendarDaysIcon,
    activeIcon: SolidCalendarDaysIcon,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Discover",
    type: "icon",
    icon: GlobeAltIcon,
    activeIcon: SolidHomeIcon,
  },

  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Schedule",
    type: "icon",
    icon: CalendarDaysIcon,
    activeIcon: SolidCalendarDaysIcon,
  },
];

export const USER_LEFT_NAVIGATION: NavItemType[] = [
  /* {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Refer",
    type: "icon",
    icon: GiftIcon,
  }, */
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Messages",
    type: "icon",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Saved",
    type: "icon",
    icon: BookmarkIcon,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Help",
    type: "icon",
    icon: QuestionMarkCircleIcon,
  },
];

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

export const FOOTER_NAVIGATION: WidgetFooterMenu[] = [
  {
    id: ncNanoId(),
    title: "Getting Started",
    menus: [
      { href: "#", label: "How It Works" },
      { href: "#", label: "Setting Up Your Account" },
      { href: "#", label: "Choosing the Right Therapist" },
      { href: "#", label: "Privacy & Security" },
      { href: "#", label: "Frequently Asked Questions" },
    ],
  },
  {
    id: ncNanoId(),
    title: "About Us",
    menus: [
      { href: "#", label: "Our Mission" },
      { href: "#", label: "Our Therapists" },
      { href: "#", label: "Testimonials" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Community Involvement" },
    ],
  },
  {
    id: ncNanoId(),
    title: "Resources",
    menus: [
      { href: "#", label: "Blog" },
      { href: "#", label: "Guided Meditation" },
      { href: "#", label: "Self-Care Tips" },
      { href: "#", label: "Videos & Workshops" },
      { href: "#", label: "Books & Resources" },
    ],
  },
  {
    id: ncNanoId(),
    title: "Contact",
    menus: [
      { href: "#", label: "Contact Us" },
      { href: "#", label: "Support Center" },
      { href: "#", label: "Live Chat" },
      { href: "#", label: "Phone Support" },
      { href: "#", label: "Email Support" },
    ],
  },
];
