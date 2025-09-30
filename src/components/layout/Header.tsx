import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const Sun = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <circle cx="12" cy="12" r="4" strokeWidth="1.6" />
    <path
      strokeWidth="1.6"
      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
    />
  </svg>
);
const Moon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path
      strokeWidth="1.6"
      d="M20 12.5A8 8 0 1 1 11.5 4a6.5 6.5 0 0 0 8.5 8.5Z"
    />
  </svg>
);
const Globe = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
    <path
      strokeWidth="1.6"
      d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    />
  </svg>
);
const Menu = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const X = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
  </svg>
);

const SoftLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <NavLink
    to={to}
    className="relative px-2 py-1 text-sm md:text-[15px] text-zinc-800 dark:text-zinc-200"
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10">{children}</span>
        <motion.span
          layoutId="nav-underline"
          className="absolute left-2 right-2 -bottom-[2px] h-[2px] rounded bg-indigo-600"
          initial={false}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </>
    )}
  </NavLink>
);

const Header: React.FC = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLang = (id: "fa" | "en") => {
    i18n.changeLanguage(id);
    localStorage.setItem("lang", id);
    document.documentElement.dir = i18n.dir(id);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-black/5 dark:border-white/10 bg-white/90 dark:bg-zinc-900/80">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="h-14 md:h-16 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Arch<span className="text-indigo-600">Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <SoftLink to="/">{t("navHome")}</SoftLink>
            <SoftLink to="/portfolio">{t("navPortfolio")}</SoftLink>
            <SoftLink to="/contact">{t("navContact")}</SoftLink>
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              size="xs"
              variant="glass"
              leadingIcon={<Globe className="w-4 h-4" />}
              onClick={() => changeLang(i18n.language === "fa" ? "en" : "fa")}
              aria-label="toggle-language"
            >
              {i18n.language.toUpperCase()}
            </Button>

            <Button
              size="xs"
              variant="glass"
              icon
              aria-label="toggle-theme"
              onClick={toggle}
            >
              <span className="text-amber-400">
                {dark ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </span>
            </Button>

            <Button
              size="xs"
              variant="glass"
              icon
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="toggle-menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

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
              <div className="mx-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 shadow-lg p-3">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                >
                  {t("navHome")}
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                >
                  {t("navPortfolio")}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-xl hover:bg-black/[.04] dark:hover:bg-white/[.06]"
                >
                  {t("navContact")}
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
