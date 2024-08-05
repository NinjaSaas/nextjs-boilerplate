import { PathName } from "@/types";
import ncNanoId from "@/utils/ncNanoId";
import {
  HomeIcon,
  CodeBracketIcon,
  CubeIcon,
  DocumentTextIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SolidHomeIcon,
} from "@heroicons/react/24/solid";

import { CustomLink } from "@/data/types";
import { NavItemType } from "@/shared/Navigation/NavigationItem";

export const NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/features" as PathName,
    name: "Features",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/docs" as PathName,
    name: "Documentation",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/pricing" as PathName,
    name: "Pricing",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/blog" as PathName,
    name: "Blog",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/contact" as PathName,
    name: "Contact",
    type: "none",
  },
];

export const USER_RIGHT_NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/dashboard" as PathName,
    name: "Dashboard",
    type: "icon",
    icon: HomeIcon,
    activeIcon: SolidHomeIcon,
  },
  {
    id: ncNanoId(),
    href: "/projects" as PathName,
    name: "Projects",
    type: "icon",
    icon: CubeIcon,
  },
  {
    id: ncNanoId(),
    href: "/api" as PathName,
    name: "API",
    type: "icon",
    icon: CodeBracketIcon,
  },
  {
    id: ncNanoId(),
    href: "/docs" as PathName,
    name: "Docs",
    type: "icon",
    icon: DocumentTextIcon,
  },
];

export const MOBILE_NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/dashboard" as PathName,
    name: "Dashboard",
    type: "icon",
    icon: HomeIcon,
    activeIcon: SolidHomeIcon,
  },
  {
    id: ncNanoId(),
    href: "/projects" as PathName,
    name: "Projects",
    type: "icon",
    icon: CubeIcon,
  },
  {
    id: ncNanoId(),
    href: "/api" as PathName,
    name: "API",
    type: "icon",
    icon: CodeBracketIcon,
  },
  {
    id: ncNanoId(),
    href: "/docs" as PathName,
    name: "Docs",
    type: "icon",
    icon: DocumentTextIcon,
  },
  {
    id: ncNanoId(),
    href: "/settings" as PathName,
    name: "Settings",
    type: "icon",
    icon: CogIcon,
  },
];

export const USER_LEFT_NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/messages" as PathName,
    name: "Messages",
    type: "icon",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    id: ncNanoId(),
    href: "/saved" as PathName,
    name: "Saved",
    type: "icon",
    icon: BookmarkIcon,
  },
  {
    id: ncNanoId(),
    href: "/help" as PathName,
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
    title: "Product",
    menus: [
      { href: "#", label: "Features" },
      { href: "#", label: "Integrations" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Changelog" },
      { href: "#", label: "Roadmap" },
    ],
  },
  {
    id: ncNanoId(),
    title: "Resources",
    menus: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "API Reference" },
      { href: "#", label: "Guides" },
      { href: "#", label: "Examples" },
      { href: "#", label: "Community" },
    ],
  },
  {
    id: ncNanoId(),
    title: "Company",
    menus: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
      { href: "#", label: "Partners" },
    ],
  },
  {
    id: ncNanoId(),
    title: "Support",
    menus: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "Contact Us" },
      { href: "#", label: "Status" },
      { href: "#", label: "Security" },
      { href: "#", label: "Terms of Service" },
    ],
  },
];
