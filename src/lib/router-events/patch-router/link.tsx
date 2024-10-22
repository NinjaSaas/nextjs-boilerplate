import { forwardRef } from "react";
import NextLink from "next-intl/link";
import { Route } from "@/types";

import { onStart } from "../events";
import { shouldTriggerStartEvent } from "./should-trigger-start-event";

export const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(
  function Link({ href, onClick, ...rest }, ref) {
    const useLink = href && href.startsWith("/");
    if (!useLink) return <a href={href} onClick={onClick} {...rest} />;

    return (
      <NextLink
        href={href as Route}
        onClick={(event) => {
          if (shouldTriggerStartEvent(href, event)) onStart();
          if (onClick) onClick(event);
        }}
        {...rest}
        ref={ref}
      />
    );
  },
);
