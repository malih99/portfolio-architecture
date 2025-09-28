import React, { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "ghost";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className = "", ...rest }, ref) => {
    const base =
      "px-4 py-2 rounded-md font-medium transition-shadow focus:outline-none";
    const cls =
      variant === "primary"
        ? `${base} bg-indigo-600 text-white shadow-md hover:shadow-lg`
        : `${base} bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200`;

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`${cls} ${className}`}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
