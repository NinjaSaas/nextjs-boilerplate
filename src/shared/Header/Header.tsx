import React, { FC } from "react";
import { AppUser } from "@/types";

import MainNav from "./MainNav";

export interface HeaderProps {
  type?: "moderated" | "main" | "dashboard";
  className?: string;

  hasSurvey?: boolean;
  isLoading?: boolean;
  user: AppUser;
}

const Header: FC<HeaderProps> = ({
  className = "",
  type = "main",
  isLoading,
  hasSurvey,
  user,
}) => {
  return (
    <header
      className={`nc-Header h-fit  sticky inset-x-0 top-0 z-50 w-full ${className}`}
    >
      <MainNav
        type={type}
        isLoading={isLoading}
        user={user}
        hasSurvey={hasSurvey}
      />
    </header>
  );
};

export default Header;
