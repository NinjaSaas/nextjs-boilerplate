import React, { FC, use } from "react";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { Link } from "@/lib/router-events";
import { AppUser, Route } from "@/types";

import { getUserProfile } from "@/server/handlers/user/getUserProfile";
import Button from "@/components/Button";

import AvatarDropdown from "./AvatarDropdown";
import MainNav from "./MainNav";

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";

interface SiteHeaderProps {
  type?: "moderated" | "main" | "dashboard" | "basic";
  className?: string;
  hasBorder?: boolean;
}

const SiteHeader: FC<SiteHeaderProps> = ({ type = "main" }) => {
  const userAuth = use(getCurrentUser());

  const user = userAuth && use(getUserProfile(userAuth.id));
  const renderUserLogin = () => {
    if (user && user?.name) {
      return <AvatarDropdown user={user} />;
    } else {
      return (
        <Button intent={"secondary"} className="mr-2 " href="/login">
          Login
        </Button>
      );
    }
  };

  return (
    <>
      <MainNav type={type} user={user as AppUser} >
        {renderUserLogin()}
      </MainNav>

      <div className="invisible absolute h-1"></div>
    </>
  );
};

export default SiteHeader;
