import React from "react";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import { projects } from "../data/projects"; // 👈 دیتای جدا
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="mx-auto max-w-screen-xl px-4 md:px-6 py-8 md:py-12"
      dir={i18n.dir()}
    >
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 md:mb-8"
      >
        <div className="text-[11px] md:text-xs uppercase tracking-wider text-indigo-500/90 font-semibold">
          {t("portfolioEyebrow") || "Portfolio"}
        </div>
        <h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t("portfolioTitle") || "Featured Works"}
        </h2>
        <p className="mt-1 text-[12.5px] md:text-[13.5px] text-zinc-600 dark:text-zinc-300 max-w-2xl">
          {t("portfolioSubtitle") ||
            "A curated selection of our recent architecture and interior design projects."}
        </p>
      </motion.header>

      <div className="h-px bg-black/5 dark:bg-white/10 mb-6 md:mb-8 rounded" />
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default Portfolio;
