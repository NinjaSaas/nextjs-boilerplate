import React, { FC } from "react";
import { AppUser } from "@/types";

import MainNav from "./MainNav";

export interface HeaderProps {
  type?: "moderated" | "main" | "dashboard";
  className?: string;

  isLoading?: boolean;
  user: AppUser;
}

const Header: FC<HeaderProps> = ({
  className = "",
  type = "main",
  isLoading,
  user,
}) => {
  return (
    <header
      className={`nc-Header h-fit  sticky inset-x-0 top-0 z-50 w-full ${className}`}
    >
      <MainNav type={type} isLoading={isLoading} user={user} />
    </header>
  );
};

export default Header;
