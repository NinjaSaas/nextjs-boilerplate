import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/lib/router-events";
import useAppStore from "@/store/app";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { authSchema, ILogin } from "@/data/valids/auth";

import AuthForm from "./AuthForm";
import SocialAuthProviders from "./SocialAuthProviders";

interface Props {
  heading: string;
  description: string;
  callbackUrl: string;
  type?: "login" | "signup";
}

function Auth({ heading, description, callbackUrl, type }: Props) {
  //TODO add form error
  const { handleSubmit, control, reset, formState } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(authSchema),
  });

  const router = useRouter();
  const { setCurrentUser } = useAppStore();
  const lng = useLocale();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data: ILogin) => {
      return fetch("/api/auth/login", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
    },

    onSuccess: async (data: { json: () => any }) => {
      const user = await data.json();
      setCurrentUser(user);
      router.refresh();
      router.push(`/${lng}/home`);
    },
    onError: () => {
      toast.error("Error signing");
    },
  });

  const onSubmit = useCallback(
    async (data: ILogin) => {
      try {
        await mutateAsync({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        console.error(err);
        toast.error("Error signing up");
      }
    },
    [mutateAsync, router, reset],
  );

  return (
    <>
      <div
        className={`nc-PageLogin container relative row-start-3 md:row-start-2 bg-white`}
      >
        <h2 className="my-4 flex items-center justify-center text-2xl font-semibold leading-[115%] text-primary-6000 dark:text-neutral-100 md:text-3xl md:leading-[115%]">
          {heading}
        </h2>
        <p className="mb-6 flex  justify-center">{description}</p>
        <div className="mx-auto max-w-md space-y-6 ">
          <SocialAuthProviders callbackUrl={callbackUrl} />
          <span className="block text-center text-sm text-neutral-400 dark:text-neutral-300">
            By creating an account you agree to the terms and conditions and our
            privacy policy.
          </span>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block bg-white text-primary-500 px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
              OR
            </span>
            <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border border-primary-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <AuthForm
            type={type}
            control={control}
            formState={formState}
            onSubmit={handleSubmit(onSubmit)}
            loading={isLoading}
          />

          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link href="/register" className="font-semibold underline">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Auth;
