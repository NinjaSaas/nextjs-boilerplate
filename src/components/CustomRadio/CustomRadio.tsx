import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const radio = cva(
  [
    "flex",
    "relative",
    "cursor-pointer",
    "items-center",
    "justify-center",
    "rounded-full",
    "text-primary-6000",
    "transition",

    "dark:bg-neutral-700",
    "dark:hover:bg-primary-6000",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary-100",
          "hover:bg-primary-6000",
          "hover:text-white",
        ],
        circle: [" flex-col", "mt-2"],
      },
      sizeType: {
        md: ["w-full"],
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
    VariantProps<typeof radio> {
  intent?: "primary" | "circle";
  className?: string;
  labelClassName?: string;
  ref?: React.Ref<HTMLInputElement>;
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  sizeType?: "md";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  icon?: React.FC<{ width: number; hanging: number } | any>;
}
const Radio = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      labelClassName = "",
      sizeType,
      intent,
      label,
      id,
      name,
      value,
      onClick,
      ...args
    },
    ref,
  ) => {
    return (
      <div
        onClick={onClick}
        className={twMerge(radio({ intent, sizeType, className }))}
      >
        <input
          name={name}
          id={id}
          ref={ref}
          defaultChecked={args.defaultChecked}
          value={value}
          type="radio"
          {...args}
          className="peer hidden border-none bg-transparent   text-primary-500 focus:ring-primary-500"
        />
        {intent === "circle" && (
          <div className="flex items-center justify-center peer-checked:bg-primary-700 hover:bg-primary-300 bg-primary-500 text-white p-4 rounded-full">
            {args.icon && <args.icon width={24} height={24} />}
          </div>
        )}
        <label
          htmlFor={id}
          className={twMerge(
            "h-full w-full cursor-pointer  peer-checked:text-primary-800  peer-checked:font-bold   p-4 text-center text-sm font-semibold dark:text-neutral-300",
            labelClassName,
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);

export default Radio;
