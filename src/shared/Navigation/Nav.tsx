"use client";

import React from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import { Route } from "@/types";
import { Fingerprint, HeartPulse, UserCircle } from "lucide-react";

export const Nav = () => {
  const listNav = [
    { name: "/account", icon: <UserCircle width={"20"} /> },
    { name: "/mental-wellness", icon: <HeartPulse width={"20"} /> },
    { name: "/mood-tracking", icon: <Fingerprint width={"20"} /> },
  ];
  const pathname = usePathname();
  const lng = useLocale();
  return (
    <div className="container ">
      <div className="hiddenScrollbar flex space-x-8 overflow-x-auto md:space-x-14">
        {listNav.map((item, i) => {
          const isActive = pathname === item.name;
          return (
            <>
              <Link
                key={i}
                href={item.name as Route}
                className={`flex gap-1 shrink-0 border-b-2 py-2 capitalize md:py-4 ${
                  isActive
                    ? "border-primary-500 font-medium"
                    : "border-transparent"
                }`}
              >
                {" "}
                {item.icon}
                {item.name
                  .replace("-", " ")
                  .replaceAll("/", " ")
                  .replace(lng as string, "")}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
