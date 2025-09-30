import React from "react";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation();
  const tt = (k: string) => String(t(k));

  return (
    <div
      className="mx-auto max-w-screen-xl px-4 md:px-6 py-8 md:py-12"
      dir={i18n.dir()}
    >
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <div className="text-[11px] uppercase tracking-wider text-indigo-600 font-semibold">
          {tt("portfolioEyebrow")}
        </div>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {tt("portfolioTitle")}
        </h2>
        <p className="mt-1 text-[13.5px] text-zinc-700 dark:text-zinc-300 max-w-2xl">
          {tt("portfolioSubtitle")}
        </p>
      </motion.header>

      <div className="h-px bg-black/10 dark:bg-white/10 mb-8 rounded" />
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default Portfolio;
