import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Route } from "@/types";

import LogoSvg from "./LogoSvg";
import LogoSvgLight from "./LogoSvgLight";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-42 md:w-24" }) => {
  return (
    <Link
      aria-label="Logo"
      href={"/" as Route}
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      <LogoSvgLight />
      <LogoSvg />
    </Link>
  );
};

export default Logo;
