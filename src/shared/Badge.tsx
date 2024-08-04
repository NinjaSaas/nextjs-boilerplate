import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { Route } from "@/types";

import { TwMainColor } from "@/data/types";

export interface BadgeProps {
  className?: string;
  name: ReactNode;
  color?: TwMainColor;
  href?: Route<string>;
  isCustom?: boolean;
}

const Badge: FC<BadgeProps> = ({
  className = "relative",
  name,
  color = "blue",
  isCustom = false,
  href,
}) => {
  const getColorClass = (hasHover = true) => {
    switch (color) {
      case "primary":
        return `text-badgePrimary-50 bg-badgePrimary-800 ${
          hasHover ? "hover:bg-badgePrimary-900" : ""
        }`;
      case "green":
        return `text-badgeGreen-50 bg-badgeGreen-800 ${
          hasHover ? "hover:bg-badgeGreen-900" : ""
        }`;
      case "indigo":
        return `text-badgeIndigo-50 bg-badgeIndigo-800 ${
          hasHover ? "hover:bg-badgeIndigo-900" : ""
        }`;
      case "blue":
        return `text-badgeBlue-50 bg-badgeBlue-800 ${
          hasHover ? "hover:bg-badgeBlue-900" : ""
        }`;
      case "brown":
        return `text-badgeBrown-50 bg-badgeBrown-800 ${
          hasHover ? "hover:bg-badgeBrown-900" : ""
        }`;
      case "red":
        return `text-badgeRed-50 bg-badgeRed-800 ${
          hasHover ? "hover:bg-badgeRed-900" : ""
        }`;
      case "gray":
        return `text-gray-800 bg-gray-200 ${
          hasHover ? "hover:bg-gray-800" : ""
        }`;
      case "purple":
        return `text-purple-800 bg-purple-100 ${
          hasHover ? "hover:bg-purple-800" : ""
        }`;
      case "yellow":
        return `text-secondary-900 bg-secondary-500 ${
          hasHover ? "hover:bg-yellow-800" : ""
        }`;
      case "darkGreen":
        return `text-primary-50 bg-primary-500 ${
          hasHover ? "hover:bg-badgeDarkGreen-900" : ""
        }`;
      default:
        return `text-badgePrimary-50 bg-badgePrimary-800 ${
          hasHover ? "hover:bg-badgePrimary-900" : ""
        }`;
    }
  };

  const CLASSES =
    "  inline-flex px-2.5 py-1 rounded-full font-light  text-xs leading" +
    className;
  return href ? (
    <Link
      href={href || ""}
      className={`transition-colors hover:text-white duration-300 ${CLASSES} ${getColorClass()}`}
    >
      {name}
    </Link>
  ) : (
    <span
      className={`${CLASSES} ${!isCustom && getColorClass(false)} ${className}`}
    >
      {name}
    </span>
  );
};

export default Badge;
