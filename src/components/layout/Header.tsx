import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa");

  return (
    <header className="border-b dark:border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">
          Arch<span className="text-indigo-600">Studio</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:underline">
            {t("homeTitle")}
          </Link>
          <Link to="/portfolio" className="hover:underline">
            {t("featuredProjects")}
          </Link>
          <Link to="/contact" className="hover:underline">
            {t("contactUs")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="toggle-lang"
            className="text-sm px-2 py-1 rounded-md border"
          >
            {i18n.language === "fa" ? "FA" : "EN"}
          </button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggle}
            aria-label="toggle-theme"
            className="p-2 rounded-md border"
          >
            {dark ? "🌙" : "☀️"}
          </motion.button>

          {/* mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="menu"
              className="p-2 rounded-md border"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu (animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t dark:border-gray-800"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <Link to="/" onClick={() => setOpen(false)} className="block">
                {t("homeTitle")}
              </Link>
              <Link
                to="/portfolio"
                onClick={() => setOpen(false)}
                className="block"
              >
                {t("featuredProjects")}
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block"
              >
                {t("contactUs")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
