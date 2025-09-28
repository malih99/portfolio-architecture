import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  // پروژه‌های شاخص (سه‌تا اول)
  const featured = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* متن */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-100">
            {t("homeTitle") || "Innovative Architectural Design"}
          </h1>
          <p className="mt-5 text-sm md:text-base text-zinc-600 dark:text-zinc-300 max-w-lg">
            {t("homeSubtitle") ||
              "We are a leading architecture firm dedicated to creating innovative and sustainable spaces that blend aesthetics with functionality."}
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="/portfolio">
              <Button>{t("viewPortfolio") || "View Portfolio"}</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">{t("contactUs") || "Contact Us"}</Button>
            </Link>
          </div>
        </motion.div>

        {/* تصویر هرو */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="order-first lg:order-last"
        >
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="w-full rounded-2xl shadow-xl object-cover h-72 md:h-96"
          />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="mt-16 md:mt-20">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {t("featuredProjects") || "Featured Projects"}
          </h2>
          <p className="mt-1 text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {t("featuredSubtitle") ||
              "A glimpse into our curated selection of innovative and impactful works."}
          </p>
        </motion.header>

        {/* گرید پروژه‌ها */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <ProjectGrid projects={featured} />
        </motion.div>

        <div className="mt-8 text-center">
          <Link to="/portfolio">
            <Button variant="ghost">
              {t("viewAllProjects") || "View All Projects →"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
