import { Link } from "@/lib/router-events";
import { Route } from "@/types";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "h-auto",
    "inline-flex",
    "transition-colors",
    "rounded-full",
    "self-center",
  ],
  {
    variants: {
      intent: {
        primary: [
          "border",
          "border-primary-6000",
          "bg-primary-6000",
          "hover:bg-primary-700",
          "text-primary-50",
          "disabled:bg-opacity-70",
        ],
        secondary: [
          "border",
          "border-primary-6000",
          "text-primary-6000",
          "hover:bg-primary-6000",
          "hover:text-primary-50",
          "bg-transparent",
          "dark:border-neutral-700",
          "dark:bg-neutral-900",
          "dark:text-neutral-300",
          "dark:hover:bg-neutral-800",
        ],
        circle: [
          "rounded-full",
          "!leading-none",
          "text-neutral-50",
          "w-9",
          "h-9",
          "disabled:bg-opacity-70",
          "transition-transform",
          "hover:translate-y-[-2px]",
        ],
        text: ["bg-transparent", "text-primary-6000", "hover:text-primary-700"],
        accent: [
          "block",
          "bg-secondary-800",
          "border-secondary-800",
          "hover:bg-primary-100",
          "hover:border-primary-100",
          "hover:text-primary-800",
          "box-border",
          "max-w-max",
          "text-[#FFEBEA]",
          "font-medium",
          "text-base",
          "leading-6",
          "text-center",
          "no-underline",
        ],
        lightAccent: [
          "block",
          "bg-secondary-800",
          "border-secondary-800",
          "hover:bg-primary-100",
          "hover:border-primary-100",
          "hover:text-primary-800",
          "box-border",
          "max-w-max",
          "bg-[#FFEBEA]",
          "shadow",
          "text-primary-6000",
          "font-medium",
          "text-base",
          "leading-6",
          "text-center",
          "no-underline",
        ],
        action: [
          "border",
          "border-primary-100",
          "bg-primary-100",
          "hover:bg-primary-6000",
          "hover:text-primary-50",
          "text-primary-6000",
          "disabled:bg-opacity-70",
        ],
        red: [
          "border",
          "border-mainRed-6000",
          "text-mainRed-50",
          "hover:bg-primary-50",
          "hover:text-primary-6000",
          "hover:border-primary-6000",
          "bg-mainRed-6000",
          "dark:border-neutral-700",
          "dark:bg-neutral-900",
          "dark:text-neutral-300",
          "dark:hover:bg-neutral-800",
        ],
      },
      size: {
        none: ["p-0"],
        sm: ["px-2", "py-1", "sm:px-2"],
        md: ["px-4", "py-3", "sm:px-9"],
        lg: ["px-6", "py-4", "sm:px-8"],
        spaced: ["px-6", "py-4", "sm:px-8"],
      },
      fontSize: {
        small: ["text-xs"],
        normal: ["text-sm", "sm:text-base", "font-medium"],
        big: ["text-base", "sm:text-lg", "font-bold"],
        bold: ["text-sm", "sm:text-base", "font-bold"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fontSize: "normal",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  underline?: boolean;
  loading?: boolean;
  href?: string;
  targetBlank?: boolean;
  onClick?: (e?: any) => void;
  disabled?: boolean;
  colorStyle?: "primary" | "secondary";
  fontSize?: "normal" | "big" | "bold" | "small";
}

export function Button({
  className,
  intent,
  size,
  underline,
  loading,
  targetBlank,
  disabled,
  onClick,
  href,
  fontSize,
  ...props
}: ButtonProps) {
  const _renderLoading = () => {
    return (
      <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  if (href) {
    return (
      <Link
        className={twMerge(
          button({ intent, size, className, underline, fontSize }),
        )}
        href={href as Route}
        target={targetBlank ? "_blank" : undefined}
        rel={targetBlank ? "noopener noreferrer" : undefined}
      >
        {loading ? _renderLoading() : props.children}
      </Link>
    );
  }
  return (
    <button
      className={twMerge(
        button({ intent, size, className, fontSize, underline }),
      )}
      {...props}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? _renderLoading() : props.children}
    </button>
  );
}
