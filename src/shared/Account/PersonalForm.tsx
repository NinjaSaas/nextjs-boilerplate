"use client";

import React, { ChangeEvent, FC, useMemo } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "@/providers/trpcProvider";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { UploadApiResponse } from "cloudinary";
import { Controller, FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  ageOptions,
  educationOptions,
  genderOptions,
  occupationOptions,
  preferredCommunicationMethodOptions,
  preferredLanguageOptions,
  relationshipOptions,
} from "@/data/account";
import useUploadImage from "@/hooks/useUploadImage";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import CustomRadio from "@/components/CustomRadio";
import CustomSelect from "@/components/CustomSelect";
import Input from "@/components/Input";
import Label from "@/components/Label";

export interface PersonalFormProps {
  className?: string;
  label?: string;
  desc?: string;
  children?: React.ReactNode;
  user?: any;
  uploader: (form: FormData) => Promise<UploadApiResponse>;
}

interface UploadResponse {
  imageUrl: string;
}

const PersonalForm: FC<PersonalFormProps> = ({ user }) => {
  const { control, handleSubmit, getValues, setValue } = useForm<FieldValues>({
    //resolver: yupResolver(accountSchema),
    shouldUnregister: false,
    defaultValues: useMemo(() => {
      return {
        name: user?.name,
        email: user?.email,
        gender: user?.gender,
        occupation: user?.occupation,
        relationship: user?.relationship,
        education: user?.education,
        age: user?.age,
        image: user?.image,
        phone: user?.phone,
        preferredLanguage: user?.preferredLanguage,
        preferredCommunicationMethod: user?.preferredCommunicationMethod[0],
      };
    }, [user]),
  });
  const utils = trpc.useContext();
  const router = useRouter();

  const { mutate, isLoading } = trpc.user.updatePersonalProfile.useMutation({
    retry: false,
    onSuccess: () => {
      toast.success("Update personal info successfully");
      utils.user.profile.invalidate();
      router.refresh();
    },
    onError: () => toast.error("Something went wrong, please try again"),
  });
  const onSubmit = (data: any) => {
    // Remove null values from the data object
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== null),
    );

    // Add userId to the cleaned data object
    const newData = { ...cleanedData, id: user.id };

    // Call mutate with the cleaned data
    mutate(newData);
  };
  const {
    isLoading: isUploadingImage,
    file,
    setFile,
    setIsLoading,
  } = useUploadImage();

  const uploaderHandler = async (
    formData: FormData,
  ): Promise<UploadResponse | null> => {
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const form = new FormData();
      form.append("fileUpload", file);

      setIsLoading(true); // Start loading
      const result = await uploaderHandler(form);
      setIsLoading(false); // End loading

      if (result && result.imageUrl) {
        setValue("image", result.imageUrl);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-4 ">
      <h2 className="font-display text-3xl text-primary-900 dark:text-secondary-100 font-medium">
        Personal information
      </h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex shrink-0 items-start">
          <div className="relative flex overflow-hidden rounded-full">
            <Avatar
              size="xl"
              imgUrl={file ? URL.createObjectURL(file) : getValues("image")}
            />
            <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-black bg-opacity-60 text-neutral-50">
              <PhotoIcon width={24} />
              <span className="mt-1 text-xs">Change Image</span>
            </div>
            <input
              type="file"
              accept=".png, .jpeg, .jpg, image/png, image/jpeg, image/jpg"
              disabled={isUploadingImage}
              className="absolute inset-0 cursor-pointer opacity-0"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="mt-10 max-w-3xl grow space-y-6 md:mt-0 md:pl-16">
          {/* --Email-- */}
          <div>
            <Label>Email</Label>
            <Input value={user?.email} className="mt-2" type="email" disabled />
          </div>
          {/* --Full Name-- */}
          <div>
            <Label>Full Name</Label>
            <Controller
              name={"name"}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="mt-2"
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* ---Gender-- */}
            <div>
              <Label>Gender</Label>
              <Controller
                name={"gender"}
                control={control}
                render={({ field }) => {
                  return (
                    <CustomSelect
                      {...field}
                      isSearchable={false}
                      options={genderOptions}
                      value={field.value}
                      className="mt-2"
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
            </div>
            {/* --Age-- */}
            <div>
              <Label>Age</Label>
              <Controller
                name={"age"}
                control={control}
                render={({ field }) => {
                  return (
                    <CustomSelect
                      {...field}
                      isSearchable={false}
                      options={ageOptions}
                      value={field.value}
                      className="mt-2"
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 grid-col">
            {/* --Occupation-- */}
            <div>
              <Label>Occupation</Label>
              <Controller
                name={"occupation"}
                control={control}
                render={({ field }) => {
                  return (
                    <CustomSelect
                      {...field}
                      isSearchable={false}
                      options={occupationOptions}
                      value={field.value}
                      className="mt-2"
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
            </div>
            {/* --Relationship-- */}
            <div>
              <Label>Relationship</Label>
              <Controller
                name={"relationship"}
                control={control}
                render={({ field }) => {
                  return (
                    <CustomSelect
                      {...field}
                      isSearchable={false}
                      options={relationshipOptions}
                      value={field.value}
                      className="mt-2"
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
            </div>
            {/* --Education-- */}
            <div className="col-span-2 md:col-span-1">
              <Label>Education</Label>
              <Controller
                name={"education"}
                control={control}
                render={({ field }) => {
                  return (
                    <CustomSelect
                      {...field}
                      isSearchable={false}
                      options={educationOptions}
                      value={field.value}
                      className="mt-2"
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                    />
                  );
                }}
              />
            </div>
          </div>

          <div className="pt-2"></div>
        </div>
      </div>
      <h2 className="font-display text-3xl text-primary-900 dark:text-secondary-100 font-medium">
        Contact and Preferences
      </h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex shrink-0 items-start min-w-[128px]"></div>
        <div className="mt-10 max-w-3xl grow space-y-6 md:mt-0 md:pl-16">
          {/* --Phone-- */}
          <div>
            <Label>Phone</Label>
            <Controller
              name={"phone"}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="mt-2"
                  placeholder="0661998877"
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              )}
            />
          </div>
          {/* ---Preferred language-- */}
          <div>
            <Label>Preferred language</Label>
            <Controller
              name={"preferredLanguage"}
              control={control}
              render={({ field }) => {
                return (
                  <CustomSelect
                    {...field}
                    isSearchable={false}
                    options={preferredLanguageOptions}
                    value={field.value}
                    className="mt-2"
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                  />
                );
              }}
            />
          </div>
          {/* --Full Name-- */}
          <div>
            <Label>Your coach will call you for your sessions via:</Label>
            <div className="flex gap-2">
              {preferredCommunicationMethodOptions.map((option) => {
                return (
                  <Controller
                    key={option.id}
                    name={"preferredCommunicationMethod"}
                    control={control}
                    render={({ field }) => (
                      <CustomRadio
                        {...field}
                        intent="circle"
                        id={option.id}
                        labelClassName="absolute pt-[4.5rem]"
                        label={option.label}
                        value={option.value}
                        checked={field.value === option.value}
                        icon={option.icon}
                        onClick={() => {
                          field.onChange(option.value);
                        }}
                      />
                    )}
                  />
                );
              })}
            </div>
          </div>

          <div className="pt-1"></div>
          <Button
            loading={isLoading || isUploadingImage}
            type="submit"
            className="min-w-28"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PersonalForm;
