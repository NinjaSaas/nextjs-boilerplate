import React, { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import BackgroundSection from "@/shared/BackgroundSection";
import Button from "@/components/Button";

const cardConfig = cva(["relative", "mb-4", "md:mb-12"], {
  variants: {
    intent: {
      primary: [],
      secondary: [],
      red: [],
      purple: [],
    },
    size: {
      default: ["px-4", "md:px-8", "py-4", "md:py-10"],
      large: ["py-6", "md:py-12"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "default",
  },
});

const bgConfig = cva(
  [
    "isolate",
    "hero-wrapper",
    "heroImg",
    "!rounded-2xl",
    "!*:max-w-full",
    "  after:rounded-2xl",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary-50"],
        secondary: ["bg-secondary-200"],
        red: ["!bg-mainRed-100"],
        purple: ["!bg-mainPurple-100"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

export interface CardProps extends VariantProps<typeof cardConfig> {
  icon?: ReactNode;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  buttonText,
  intent,
  size,
  className,
  children,
}) => (
  <div className={twMerge(cardConfig({ intent, size }), className)}>
    <BackgroundSection className={bgConfig({ intent })} />
    <div className=" relative flex flex-col lg:flex-row items-center">
      <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-2 w-full">
        {title && (
          <h2 className="font-display flex items-center font-medium text-primary-900 text-xl sm:text-2xl mt-2 sm:mt-4">
            {icon && icon}
            {title}
          </h2>
        )}
        {description && (
          <p className="font-thin text-primary-6000 mt-2 md:mt-4">
            {description}
          </p>
        )}
        {children && children}
        {buttonText && (
          <Button
            className={`mt-4 sm:mt-6 `}
            intent={intent === "purple" || intent === "red" ? "red" : "accent"}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  </div>
);

export default Card;
