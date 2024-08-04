import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "border-neutral-300",
    "bg-transparent",
    "text-primary-500",
    "focus:ring-primary-500",
  ],
  {
    variants: {
      intent: {
        primary: ["border-neutral-200"],
      },
      sizeType: {
        md: ["h-6", "w-6"],
        base: ["w-4", "h-4", "md:h-6", "md:w-6", "mt-1"],
      },
    },
    defaultVariants: {
      intent: "primary",
      sizeType: "md",
    },
  },
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof button> {
  intent?: "primary";
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  sizeType?: "md" | "base";
  labelClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
}
const Radio = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      sizeType,
      intent,
      label,
      id,
      name,
      value,
      labelClassName = " block text-sm font-medium  ",
      onChange,
      ...args
    },
    ref,
  ) => {
    return (
      <div className="flex items-center">
        <input
          className={twMerge(button({ intent, sizeType, className }))}
          id={id}
          ref={ref}
          name={name}
          value={value}
          {...args}
          onChange={onChange}
          type="radio"
        />
        <label
          className={`ml-3 text-neutral-700 dark:text-neutral-300 ${labelClassName}`}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  },
);

export default Radio;
