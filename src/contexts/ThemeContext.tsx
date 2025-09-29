// src/contexts/ThemeContext.tsx
import React, { createContext, useEffect, useState, useMemo } from "react";

type Ctx = { dark: boolean; toggle: () => void };

export const ThemeContext = createContext<Ctx>({
  dark: false,
  toggle: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    const root = document.documentElement; // <html>
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const value = useMemo(
    () => ({ dark, toggle: () => setDark((d) => !d) }),
    [dark]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
