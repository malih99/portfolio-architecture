import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- Icons (stroke = currentColor) ---------- */
const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="4" strokeWidth="1.6" />
    <path
      strokeWidth="1.6"
      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
    />
  </svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth="1.6"
      d="M20 12.5A8 8 0 1 1 11.5 4a6.5 6.5 0 0 0 8.5 8.5Z"
    />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
    <path
      strokeWidth="1.6"
      d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    />
  </svg>
);

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
  </svg>
);

/* ---------- Theme Toggle (آیکن همیشه زرد) ---------- */
const ThemeToggle: React.FC<{ dark: boolean; onToggle: () => void }> = ({
  dark,
  onToggle,
}) => {
  return (
    <motion.button
      onClick={onToggle}
      aria-label="toggle-theme"
      whileTap={{ scale: 0.96 }}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/[.04] dark:bg-white/[.06] shadow-sm"
    >
      <AnimatePresence initial={false} mode="wait">
        {dark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-amber-400"
          >
            <MoonIcon className="w-5 h-5" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-amber-400"
          >
            <SunIcon className="w-5 h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

/* ---------- Tiny Language Button (28px) + Popover کوچک ---------- */
const LanguageButton: React.FC<{
  value: "fa" | "en";
  onChange: (id: "fa" | "en") => void;
}> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="toggle-language"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/[.04] dark:bg-white/[.06] text-[10px] font-semibold"
      >
        {value.toUpperCase()}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -6, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="absolute right-0 mt-2 w-24 rounded-lg border border-black/10 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-lg overflow-hidden z-50"
          >
            {(["fa", "en"] as const).map((id) => (
              <button
                key={id}
                onClick={() => {
                  onChange(id);
                  setOpen(false);
                }}
                className={`w-full px-3 py-1.5 text-left text-xs hover:bg-black/[.04] dark:hover:bg-white/[.06] ${
                  value === id
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-zinc-700 dark:text-zinc-200"
                }`}
              >
                <span className="inline-flex items-center gap-1.5">
                  <GlobeIcon className="w-4 h-4" />
                  {id.toUpperCase()}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------- Soft NavLink (underline نرم) ---------- */
const SoftLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <NavLink
    to={to}
    className="relative px-2 py-1 text-sm md:text-[15px] text-zinc-700 dark:text-zinc-200"
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10">{children}</span>
        <motion.span
          layoutId="nav-underline"
          className="absolute left-2 right-2 -bottom-[2px] h-[2px] rounded bg-indigo-500/80"
          initial={false}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </>
    )}
  </NavLink>
);

/* ===================== Header ===================== */
const Header: React.FC = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLang = (id: string) => {
    i18n.changeLanguage(id);
    localStorage.setItem("lang", id);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-black/5 dark:border-white/[.06] bg-white/60 dark:bg-black/50">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="h-14 md:h-16 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Arch<span className="text-indigo-600">Studio</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <SoftLink to="/">{t("homeTitle")}</SoftLink>
            <SoftLink to="/portfolio">{t("featuredProjects")}</SoftLink>
            <SoftLink to="/contact">{t("contactUs")}</SoftLink>
          </nav>

          {/* Actions (یک‌دست و کم‌جا) */}
          <div className="flex items-center gap-1.5">
            <LanguageButton
              value={(i18n.language === "fa" ? "fa" : "en") as "fa" | "en"}
              onChange={(id) => changeLang(id)}
            />
            <ThemeToggle dark={dark} onToggle={toggle} />
            {/* Mobile menu button — رنگ صریح و سایز استاندارد */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpen((v) => !v)}
              aria-label="toggle-menu"
              className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/[.04] dark:bg-white/[.06] text-zinc-900 dark:text-zinc-100"
            >
              {open ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu (دیگه دکمه‌های هدر داخلش تکرار نمی‌شن) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed top-14 left-0 right-0 md:hidden"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <div className="mx-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-lg p-3">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                >
                  {t("homeTitle")}
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                >
                  {t("featuredProjects")}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                >
                  {t("contactUs")}
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
