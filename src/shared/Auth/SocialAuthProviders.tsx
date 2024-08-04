"use client";

import { useState } from "react";
import { BASE_URL, loginSocials } from "@/app";
import { createClient } from "@/lib/clients/auth";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Provider } from "@supabase/supabase-js";
import { setCookie } from "cookies-next";

import { useIsClient } from "@/hooks/use-is-client";
import Button from "@/components/Button";

function SocialAuthProviders({ callbackUrl }: { callbackUrl: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const mounted = useIsClient();
  const supabase = createClient();

  const handleOnClick = async (provider: Provider) => {
    setIsLoading(true);
    setCookie("authCallbackUrl", callbackUrl, {
      expires: new Date(Date.now() + 900000),
      path: "/",
    });
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${BASE_URL}/auth/callback`,
        queryParams: {
          callbackUrl,
        },
      },
    });
  };

  return (
    <div className="flex justify-center gap-10">
      <Button
        intent="circle"
        size="none"
        disabled={isLoading || !mounted}
        className="h-12 w-12 bg-primary-50  dark:bg-neutral-800 "
      >
        <PhoneIcon className="h-6 w-6 text-primary-700" />
      </Button>
      {loginSocials.map((item, index) => (
        <Button
          intent="circle"
          size="none"
          key={index}
          disabled={isLoading || !mounted}
          className="h-12 w-12 bg-primary-50  dark:bg-neutral-800 "
          onClick={() => handleOnClick(item.provider)}
        >
          {item.icon && item.icon}
        </Button>
      ))}
    </div>
  );
}

export default SocialAuthProviders;
