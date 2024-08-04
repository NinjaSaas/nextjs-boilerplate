"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL, USER_ROLE } from "@/app";
import { createClient } from "@/lib/clients/auth";
import { Link } from "@/lib/router-events";
import { trpc } from "@/providers/trpcProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { authSchema, ISignUp } from "@/data/valids/auth";
import Button from "@/components/Button";

import AuthForm from "./AuthForm";
import SocialAuthProviders from "./SocialAuthProviders";

interface Props {
  heading: string;
  description: string;
  callbackUrl: string;
  type?: "login" | "signup";
}

function Auth({ heading, description, callbackUrl, type }: Props) {
  const [hideEmailForm, setHideEmailForm] = useState(true);
  //TODO add form error
  const { handleSubmit, control, reset, formState } = useForm<ISignUp>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: zodResolver(authSchema),
  });

  const supabase = createClient();
  const { mutateAsync, isLoading } = trpc.auth.signup.useMutation({
    onSuccess: async (data) => {
      const result = await supabase.auth.signUp({
        email: data.result.email,
        password: data.result.password,
        options: {
          emailRedirectTo: `${BASE_URL}/auth/callback`,

          data: {
            username: data.result.username,
            hasSurvey: false,
            userRole: USER_ROLE,
            image:
              "https://res.cloudinary.com/dqo2aggjs/image/upload/v1696596420/default-avatar_kqqse2.jpg",
          },
        },
      });

      if (result.data) {
        reset();
        toast.success(
          "Account created successfully, please check your email for verification",
        );
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const router = useRouter();

  const onSubmit = useCallback(
    async (data: ISignUp) => {
      try {
        await mutateAsync({
          email: data.email,
          password: data.password,
          username: data.username,
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
        className={`nc-PageLogin container relative row-start-3 md:row-start-2`}
      >
        <h2 className="mt-4 py-4 flex items-center justify-center text-xl font-semibold leading-[115%] text-primary-6000 dark:text-neutral-100 md:text-3xl md:leading-[115%]">
          {heading}
        </h2>
        <p className="mb-6 flex  justify-center">{description}</p>
        <div className="mx-auto max-w-md space-y-6 ">
          <SocialAuthProviders callbackUrl={callbackUrl} />
          <span className="block text-center text-sm text-secondary-900 font-thin dark:text-neutral-300">
            By creating an account you agree to the terms and conditions and our
            privacy policy.
          </span>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
              OR
            </span>
            <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border border-primary-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          {hideEmailForm ? (
            <div className="flex justify-center">
              <Button
                className="uppercase py-6 mt-2 tracking-[1.15px]"
                intent={"accent"}
                onClick={() => setHideEmailForm(false)}
              >
                Sign up with email
              </Button>
            </div>
          ) : (
            <AuthForm
              type={type}
              control={control}
              loading={isLoading}
              onSubmit={handleSubmit(onSubmit)}
              formState={formState}
            />
          )}

          <span className="block text-center py-4 font-thin text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link href="/login" className="font-semibold underline">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Auth;
