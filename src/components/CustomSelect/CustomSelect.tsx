import * as React from "react";
import { FC, forwardRef } from "react";
//import Select, { ActionMeta, SingleValue } from "react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { SelectOption } from "@/data/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cvaConfig = cva(
  [
    "w-full",
    "capitalize",
    "bg-white",
    "focus:border-primary-300",
    "focus:ring",
    "focus:ring-primary-200",
    "focus:ring-opacity-50",
    "dark:border-neutral-700",
    "dark:bg-neutral-900",
    "dark:focus:ring-primary-6000",
    "dark:focus:ring-opacity-25 ",
  ],
  {
    variants: {
      intent: {
        primary: [""],
      },
      sizeType: {
        md: ["h-11", ""],
      },
      rounded: {
        md: ["rounded-md"],
        xl: ["rounded-xl"],
      },
    },
    defaultVariants: {
      intent: "primary",
      sizeType: "md",
      rounded: "md",
    },
  },
);

export interface CustomSelectProps extends VariantProps<typeof cvaConfig> {
  intent?: "primary";
  sizeType?: "md";
  rounded?: "md" | "xl";
  className?: string;
  name: string;
  value?: string;
  options: SelectOption[];
  defaultValue?: string;
  contentClassName?: string;
  isSearchable?: boolean;
  nextStep?: () => void;
  placeholder?: string;
  onChange?: ((value: string) => void) | undefined;
  isSessionSelect?: boolean;
}

const CustomSelect: FC<CustomSelectProps> = forwardRef(
  (
    {
      className = " py-5 mt-2",
      intent,
      sizeType,
      rounded,
      contentClassName = "",
      name,
      options,
      onChange,
      value,
      defaultValue,
      placeholder = "Select an option",
    },
    ref: any,
  ) => {
    return (
      <Select
        name={name}
        onValueChange={onChange}
        value={value}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          ref={ref}
          aria-label="select"
          className={twMerge(
            cvaConfig({ className, intent, sizeType, rounded }),
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={contentClassName}>
          <SelectGroup>
            {options &&
              options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="py-2 cursor-pointer capitalize flex items-center"
                >
                  <div className="flex gap-2 justify-end ">
                    {option.icon && <option.icon width={24} height={24} />}
                    {option.time ? (
                      <span className="leading-6">
                        {option.label.replace("Session", "")} ({option.time} MIN
                        / {option.fee} DH)
                      </span>
                    ) : (
                      option.label
                    )}
                  </div>
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      /*  <Select
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        {...args}
        contentClassName={contentClassName}
        className={twMerge(select({ intent, sizeType, className }))}
        ref={ref}
        instanceId={name}
      /> */
    );
  },
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
