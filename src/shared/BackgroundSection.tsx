import React, { FC } from "react";

export interface BackgroundSectionProps {
  className?: string;
  children?: React.ReactNode;
}

const BackgroundSection: FC<BackgroundSectionProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`nc-BackgroundSection  bg-neutral-100 dark:bg-black dark:bg-opacity-20  absolute inset-y-0 w-screen max-w-full left-1/2 transform -translate-x-1/2 rounded-xl md:rounded-[40px] z-0 ${className}`}
      data-nc-id="BackgroundSection"
    >
      {children}
    </div>
  );
};

export default BackgroundSection;
