"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { settings } from "@/app";
import { fallbackLng } from "@/i18n/settings";
import { Link } from "@/lib/router-events";
import { AppUser, Route } from "@/types";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

import { MOBILE_NAVIGATION } from "@/data/navigation";
import useScrolled from "@/hooks/useScrolled"; // Adjust the import path as needed
import MenuBar from "@/shared/MenuBar";
import Navigation from "@/shared/Navigation/Navigation";
import LocaleSwitcher from "@/shared/Switchers/LocaleSwitcher";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/SwitchDarkMode";

export interface MainNavProps {
  className?: string;
  type?: "moderated" | "main" | "dashboard" | "basic";
  isLoading?: boolean;
  user: AppUser;
  children?: React.ReactNode;
}

const MainNav: FC<MainNavProps> = ({
  className = "",
  type = "main",
  children,
}) => {
  const locationPathName = usePathname();
  const locale = useLocale();

  const activeMessage =
    fallbackLng === locale
      ? locationPathName === "/messages"
      : locationPathName === "/" + locale + "/messages";

  const isActive = (href: string) => {
    const fullPath = `/${locale}${href}`;
    return fallbackLng === locale
      ? locationPathName === href
      : locationPathName === fullPath;
  };

  const renderMobileNavigation = () => {
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 h-14 w-full md:hidden">
        {MOBILE_NAVIGATION.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center py-2 w-8 ${
              isActive(item.href)
                ? "text-primary-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {item.icon &&
              (isActive(item.href) && item.activeIcon ? (
                <item.activeIcon className="h-7 w-7 stroke-[1.5] text-primary-800" />
              ) : (
                <item.icon className="h-7 w-7 stroke-[1.5] text-primary-800" />
              ))}
          </Link>
        ))}
      </nav>
    );
  };

  const isScrolled = useScrolled();
  switch (type) {
    case "main":
      return (
        <header
          className={`nc-Header h-fit ${isScrolled ? "nc-header-bg" : ""} sticky inset-x-0 top-0 z-50 w-full ${className}`}
        >
          <div className={` relative  ${className}`}>
            <div className="relative flex h-16 md:h-20 justify-between  px-4 md:px-14 2xl:container">
              <div className="hidden flex-1 justify-start space-x-4 sm:space-x-10 md:flex">
                <Logo className=" -mt-2 " size="base" />
                <Navigation />
              </div>

              <div className="!mx-auto flex  flex-[3] md:hidden md:px-3 ">
                <div className="flex-1 self-center">
                  <div className="flex items-center justify-between">
                    <Logo className="-ml-1 -mt-2 " size="base" />
                    <MenuBar />
                  </div>
                </div>
              </div>

              <div className="hidden flex-1 shrink-0 justify-end text-neutral-700 dark:text-neutral-100 md:flex lg:flex-none">
                <div className="hidden gap-2 space-x-0.5 xl:flex">
                  {settings.themeToggleEnabled && <ThemeSwitcher />}
                  {settings.internationalizationEnabled && (
                    <LocaleSwitcher className="flex h-12 items-center justify-center self-center" />
                  )}
                  {children}
                </div>

                <div className="flex items-center xl:hidden">
                  {settings.themeToggleEnabled && <ThemeSwitcher />}
                  <div className="px-0.5" />
                  <MenuBar />
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    case "moderated":
      return (
        <div className={` relative z-10 ${className}`}>
          <div className="relative flex h-20 justify-between px-4 ">
            <div className="!mx-auto flex  flex-[3] md:px-3 ">
              <div className="flex-1 self-center">
                <div className="flex items-center justify-between">
                  <Logo className="-ml-1 -mt-2  self-center" />
                  <MenuBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "basic":
      return (
        <div className={` relative z-10 ${className}`}>
          <div className="relative flex h-20 justify-between px-4 ">
            <div className="!mx-auto flex  flex-[3] md:px-3 ">
              <div className="flex-1 self-center">
                <div className="flex items-center justify-between">
                  <Logo className="-ml-1 -mt-2 w-48 self-center" />
                  <div className="flex">
                    {settings.themeToggleEnabled && <ThemeSwitcher />}
                    {settings.internationalizationEnabled && (
                      <LocaleSwitcher className="flex h-12 items-center justify-center self-center" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "dashboard":
      return (
        <>
          <header
            className={`nc-Header h-fit nc-header-bg  sticky inset-x-0 top-0 z-50 w-full ${className}`}
          >
            <div className={` relative z-10 ${className}`}>
              <div className="relative flex h-12 md:h-20 justify-between container">
                <div className="md:flex-1 justify-start !ml-0 space-x-4 sm:space-x-10 md:flex">
                  <Logo className=" -mt-2 hidden md:inline-block" size="lg" />
                  <Navigation type="dashboard" />
                </div>

                <div className="!mx-auto flex  flex-[3] md:hidden md:px-1 ">
                  <div className="flex-1 self-center">
                    <div className="flex  items-center justify-between ">
                      <Logo className="-ml-1 -mt-2 " />
                      <div
                        className={`${
                          activeMessage ? " border-b border-primary-6000" : ""
                        } menu-item flex items-center grow justify-end`}
                      >
                        <Link
                          rel="noopener noreferrer"
                          className={`${
                            activeMessage ? "text-primary-6000" : ""
                          } inline-flex flex-col items-center rounded-lg px-4 py-2 font-display  text-primary-900 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 xl:px-5 xl:text-base`}
                          href={"/" as Route}
                        >
                          <ChatBubbleLeftEllipsisIcon width={24} height={24} />
                        </Link>
                      </div>{" "}
                      <MenuBar />
                    </div>
                  </div>
                </div>

                <div className="hidden flex-1 shrink-0 justify-end text-neutral-700 dark:text-neutral-100 md:flex lg:flex-none">
                  <div className="hidden gap-2 space-x-0.5 xl:flex">
                    {settings.themeToggleEnabled && <ThemeSwitcher />}
                    {settings.internationalizationEnabled && (
                      <LocaleSwitcher className="flex h-12 items-center justify-center self-center" />
                    )}
                    {children}
                  </div>

                  <div className="flex items-center xl:hidden">
                    {settings.themeToggleEnabled && <ThemeSwitcher />}
                    <div className="px-0.5" />

                    <MenuBar />
                  </div>
                </div>
              </div>
            </div>
          </header>
          {renderMobileNavigation()}
        </>
      );
  }
};

export default MainNav;
