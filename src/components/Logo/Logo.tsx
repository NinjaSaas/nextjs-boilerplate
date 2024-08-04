import * as React from "react";
import Image from "next/image";
import Link from "next-intl/link";
import LogoSvgDark from "@/images/logos/dark/ninjasaas.svg";
import LogoSvg from "@/images/logos/normale/ninjasaas.svg";
import { Route } from "@/types";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaConfig = cva(
  [
    "inline-block",
    "text-primary-6000",
    "focus:outline-none",
    "focus:ring-0",
    "self-center",
  ],
  {
    variants: {
      size: {
        md: ["w-32"],
        base: ["w-40", "md:w-auto"],
        lg: ["w-32", "md:w-auto"],
        xl: ["w-24", "md:w-32"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface LogoProps extends VariantProps<typeof cvaConfig> {
  size?: "md" | "lg" | "xl" | "base";
  className?: string;
}
const Logo = ({ size, className }: LogoProps) => {
  return (
    <>
      <Link
        href={"/" as Route}
        className={twMerge(cvaConfig({ size, className }))}
      >
        <span className="block w-full dark:hidden">
          <Image src={LogoSvg} alt="logo" />
        </span>
        <span className="hidden w-full dark:block">
          <Image src={LogoSvgDark} alt="logo" />
        </span>
      </Link>
    </>
  );
};

export default Logo;
