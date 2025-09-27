import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  const base =
    "px-4 py-2 rounded-md font-medium transition-shadow focus:outline-none";
  const cls =
    variant === "primary"
      ? base + " bg-indigo-600 text-white shadow-md hover:shadow-lg"
      : base + " bg-transparent border text-gray-700 dark:text-gray-200";
  return (
    <motion.button whileTap={{ scale: 0.98 }} className={cls} {...rest}>
      {children}
    </motion.button>
  );
};

export default Button;
