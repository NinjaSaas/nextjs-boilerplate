// app/utils/useScreenType.ts
"use client";

import { useMediaQuery } from "@mantine/hooks";

function useScreenType() {
  // Define the breakpoint for mobile screens
  const mobileBreakpoint = 768;

  // Use the useMediaQuery hook to check if the current screen width is less than the mobile breakpoint
  const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`);

  // Return 3 if mobile, otherwise return 4
  return isMobile ? 4 : 6;
}

export default useScreenType;
