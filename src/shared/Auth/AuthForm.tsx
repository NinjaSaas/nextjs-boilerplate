import React from "react";
import { Control, Controller, FormState } from "react-hook-form";

import Button from "@/components/Button";
import Input from "@/components/Input";

interface Props {
  loading?: boolean;
  onSubmit: any;
  type?: "login" | "signup";
  formState: FormState<{
    email: string;
    password: string;
    username?: string | undefined;
  }>;
  control: Control<
    {
      email: string;
      password: string;
      username?: string | undefined;
    },
    any
  >;
}

const AuthForm: React.FC<Props> = ({
  onSubmit,
  type,
  control,
  loading,
  formState,
}) => {
  // Define the component's logic and rendering here

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
      {type === "signup" && (
        <label className="block relative">
          <span className="text-neutral-800 dark:text-neutral-200">
            Username
          </span>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Adon Shaka"
                className="mt-1"
                {...field}
              />
            )}
          />
          {formState.errors.username && (
            <p className="text-sm text-red-500 dark:text-red-500 absolute">
              {formState.errors.username.message}
            </p>
          )}
        </label>
      )}
      <label className="block relative">
        <span className="text-neutral-800 dark:text-neutral-200">
          Email address
        </span>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="example@example.com"
              className="mt-1"
              {...field}
            />
          )}
        />
        {formState.errors.email && (
          <p className="text-sm text-red-500 dark:text-red-500 absolute ">
            {formState.errors.email.message}
          </p>
        )}
      </label>
      <label className="block relative">
        <span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
          Password
        </span>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input type="password" className="mt-1" {...field} />
          )}
        />
        {formState.errors.password && (
          <p className="text-sm text-red-500 dark:text-red-500 ">
            {formState.errors.password.message}
          </p>
        )}
      </label>
      <Button
        type="submit"
        loading={loading}
        disabled={
          !formState.isValid ||
          !!(
            formState.errors?.password?.message ||
            formState.errors?.email?.message ||
            formState.errors?.username?.message
          )
        }
      >
        Continue
      </Button>
    </form>
  );
};

export default AuthForm;
