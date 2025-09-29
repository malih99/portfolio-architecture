// src/components/ui/Button.tsx
import React, { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "outline" | "soft" | "link";
type Size = "sm" | "md" | "lg";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-[15px]",
  lg: "h-11 px-5 text-base",
};

const base = [
  "inline-flex items-center justify-center gap-2",
  "rounded-xl font-semibold select-none",
  "transition-colors duration-150",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
  "focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900",
  "disabled:opacity-50 disabled:pointer-events-none",
].join(" ");

const variants: Record<Variant, string> = {
  primary: [
    "bg-indigo-600 text-white hover:bg-indigo-700",
    "dark:bg-indigo-500 dark:hover:bg-indigo-400",
    "shadow-sm",
  ].join(" "),
  outline: [
    "bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-100",
    "dark:bg-zinc-900/40 dark:text-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800",
  ].join(" "),
  soft: [
    "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    "dark:bg-indigo-950 dark:text-indigo-200 dark:hover:bg-indigo-900",
  ].join(" "),
  link: [
    "bg-transparent p-0 h-auto",
    "text-indigo-700 hover:underline underline-offset-4",
    "dark:text-indigo-300",
  ].join(" "),
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth,
      leadingIcon,
      trailingIcon,
      loading,
      children,
      className = "",
      ...rest
    },
    ref
  ) => {
    const cls = [
      base,
      variants[variant],
      variant === "link" ? "" : sizes[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <motion.button
        ref={ref}
        className={cls}
        whileTap={variant === "link" ? undefined : { scale: 0.98 }}
        {...rest}
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                opacity="0.25"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <span>Loading…</span>
          </>
        ) : (
          <>
            {leadingIcon ? (
              <span className="shrink-0">{leadingIcon}</span>
            ) : null}
            <span>{children}</span>
            {trailingIcon ? (
              <span className="shrink-0">{trailingIcon}</span>
            ) : null}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
