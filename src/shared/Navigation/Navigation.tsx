import React, { FC } from "react";

import {
  NAVIGATION,
  USER_LEFT_NAVIGATION,
  USER_RIGHT_NAVIGATION,
} from "@/data/navigation";

import NavigationItem from "./NavigationItem";

interface NavigationProps {
  type?: "moderated" | "main" | "dashboard";
}

const Navigation: FC<NavigationProps> = ({ type = "main" }) => {
  switch (type) {
    case "dashboard":
      return (
        <>
          <ul className="relative hidden w-full justify-between lg:flex lg:flex-wrap lg:space-x-1">
            <div className="flex">
              {USER_RIGHT_NAVIGATION.map((item) => (
                <NavigationItem key={item.id} menuItem={item} type={type} />
              ))}
            </div>
            <div className="flex">
              {USER_LEFT_NAVIGATION.map((item) => (
                <NavigationItem key={item.id} menuItem={item} type={type} />
              ))}
            </div>
          </ul>
        </>
      );
    case "main":
      return (
        <>
          <ul className="relative hidden w-full justify-center lg:flex lg:flex-wrap lg:space-x-1 xl:justify-end">
            {NAVIGATION.map((item) => (
              <NavigationItem key={item.id} menuItem={item} />
            ))}
          </ul>
        </>
      );
    default:
      return null;
  }
};

export default Navigation;
