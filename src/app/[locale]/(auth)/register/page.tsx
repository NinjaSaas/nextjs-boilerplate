"use client";

import React from "react";
import { useLocale } from "next-intl";
import { Contact2Icon, ShieldCheck } from "lucide-react";

import Auth from "@/shared/Auth/Signup";

function PageSignup() {
  const lng = useLocale();
  const callbackUrl = `/${lng}`;
  return (
    <>
      <div className="bg-white py-2 flex xl:rounded-xl justify-center mx-auto heroImg w-1/2">
        <Auth
          type="signup"
          heading=" Please create your account"
          description="Login with Social Media or enter your details."
          callbackUrl={callbackUrl}
        />
      </div>
      <div className="flex justify-center gap-4  py-6 px-4 w-1/2 mx-auto text-sm">
        <div className="flex gap-4 ml-2 w-1/2">
          <Contact2Icon className="h-auto w-12 text-secondary-800" />
          <p className="text-primary-6000 font-thin">
            <span className="font-bold">
              All you need is an email and password{" "}
            </span>
            no other information is needed.
          </p>
        </div>
        <div className="flex gap-4 w-1/2">
          <ShieldCheck className="h-auto w-12 text-secondary-800" />
          <p className="text-primary-6000 font-thin">
            All the information you give us are{" "}
            <span className="font-bold">
              {" "}
              secured, we will not leak them anywhere.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default PageSignup;
