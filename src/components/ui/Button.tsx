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
  "inline-flex items-center justify-center gap-2 rounded-xl",
  "font-semibold tracking-tight select-none antialiased",
  "transition-colors duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
  "focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-zinc-950",
  "disabled:opacity-60 disabled:cursor-not-allowed",
  "active:translate-y-[0.5px]",
].join(" ");

const variants: Record<Variant, string> = {
  primary: [
    // کنتراست بالا در هر دو تم
    "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 active:bg-indigo-700",
    "dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:active:bg-indigo-400",
    "border border-indigo-600/90 dark:border-indigo-400/80",
  ].join(" "),
  outline: [
    "bg-white text-zinc-900 hover:bg-zinc-50",
    "border border-zinc-400 dark:border-zinc-600",
    "dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800",
  ].join(" "),
  soft: [
    "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    "dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
    "border border-indigo-200 dark:border-zinc-700",
  ].join(" "),
  link: [
    "bg-transparent shadow-none border-0 p-0 h-auto",
    "text-indigo-700 hover:text-indigo-800 underline underline-offset-4",
    "dark:text-indigo-300 dark:hover:text-indigo-200",
  ].join(" "),
};

const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      fullWidth = false,
      leadingIcon,
      trailingIcon,
      loading = false,
      disabled,
      ...rest
    },
    ref
  ) => {
    const width = fullWidth ? "w-full" : "";
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        className={[
          base,
          sizes[size],
          variants[variant],
          width,
          className,
        ].join(" ")}
        disabled={isDisabled}
        whileTap={!isDisabled ? { scale: 0.98 } : undefined}
        {...rest}
      >
        {variant === "link" ? (
          <span className="inline-flex items-center gap-1.5">{children}</span>
        ) : (
          <>
            {leadingIcon ? (
              <span className="shrink-0">{leadingIcon}</span>
            ) : null}
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    strokeWidth="1.6"
                    opacity="0.25"
                  />
                  <path d="M21 12a9 9 0 0 0-9-9" strokeWidth="1.6" />
                </svg>
                <span>{children}</span>
              </span>
            ) : (
              <>
                <span>{children}</span>
                {trailingIcon ? (
                  <span className="shrink-0">{trailingIcon}</span>
                ) : null}
              </>
            )}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
