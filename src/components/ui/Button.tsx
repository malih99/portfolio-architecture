import React, { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "outline" | "soft" | "link" | "glass" | "ghost";
type Size = "xs" | "sm" | "md" | "lg";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
  /** وقتی true باشد، دکمه مربع و کاملاً گرد می‌شود (برای آیکن فقط) */
  icon?: boolean;
};

const sizes: Record<Size, string> = {
  xs: "h-8 px-2.5 text-[13px]",
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-[15px]",
  lg: "h-11 px-5 text-base",
};
const iconSizes: Record<Size, string> = {
  xs: "h-8 w-8",
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-11 w-11",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] " +
  "disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-2xl " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 ring-offset-[var(--bg)] " +
  "transition-colors duration-150 will-change-[background-color,color,border-color]";

const variants: Record<Variant, string> = {
  primary:
    "text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-[var(--primary-hover)] active:brightness-95 shadow-sm",
  outline:
    "bg-transparent text-[var(--text)] border border-[var(--border)] hover:bg-[var(--muted)] active:bg-[var(--muted)]/80",
  soft: "text-[var(--accent-foreground)] bg-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent)]/90 active:bg-[var(--accent)]/80 shadow-sm",
  link: "bg-transparent text-[var(--primary)] hover:text-[var(--primary-hover)] underline underline-offset-4 p-0 h-auto rounded-none !ring-0",
  /* برای هدر: شیشه‌ای + کنتراست امن در هر دو تم */
  glass:
    "backdrop-blur-md border text-[var(--text)]/90 " +
    "border-black/10 dark:border-white/10 " +
    "bg-white/60 dark:bg-white/5 " +
    "hover:bg-white/75 dark:hover:bg-white/10 " +
    "active:bg-white/90 dark:active:bg-white/15 " +
    "shadow-[0_1px_0_0_rgba(0,0,0,.03)]",
  /* شفاف با هاور ملایم */
  ghost:
    "bg-transparent text-[var(--text)] " +
    "hover:bg-black/[.06] dark:hover:bg-white/[.08] " +
    "active:bg-black/[.08] dark:active:bg-white/[.12]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      leadingIcon,
      trailingIcon,
      loading,
      icon,
      ...rest
    },
    ref
  ) => {
    const shape = icon ? `rounded-full ${iconSizes[size]}` : sizes[size];

    return (
      <motion.button
        ref={ref}
        whileTap={variant !== "link" ? { scale: 0.98 } : undefined}
        className={clsx(
          base,
          variants[variant],
          shape,
          fullWidth && "w-full",
          className
        )}
        {...rest}
      >
        {loading ? (
          <>
            <span className="sr-only">Loading</span>
            <span className="inline-block animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          </>
        ) : icon ? (
          // حالت آیکن-فقط
          <span className="leading-none">{children}</span>
        ) : (
          <>
            {leadingIcon ? (
              <span className="shrink-0 leading-none">{leadingIcon}</span>
            ) : null}
            <span className="leading-none">{children}</span>
            {trailingIcon ? (
              <span className="shrink-0 leading-none">{trailingIcon}</span>
            ) : null}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
