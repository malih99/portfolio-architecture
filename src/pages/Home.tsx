import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import Img from "../components/ui/Image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FeaturedProjectsSlider from "../components/portfolio/FeaturedProjectsSlider";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const tt = (k: string) => String(t(k));
  const featured = projects.slice(0, 3);

  const ArrowRight = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
            {tt("homeTitle")}
          </h2>
          <p className="mt-5 text-base md:text-[17px] text-zinc-800 dark:text-zinc-200 max-w-xl">
            {tt("homeSubtitle")}
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/portfolio">
              <Button
                size="md"
                variant="primary"
                trailingIcon={<ArrowRight className="w-4.5 h-4.5" />}
              >
                {tt("viewPortfolio")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="md" variant="outline">
                {tt("contactUs")}
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Img
            src="/images/hero.jpg"
            alt="Modern villa"
            className="w-full rounded-2xl shadow-xl object-cover h-72 md:h-96"
            priority
            ratio="16/9"
          />
        </motion.div>
      </section>

      <section className="mt-16 md:mt-20">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {tt("featuredProjects")}
          </h2>
          <p className="mt-1 text-sm md:text-base text-zinc-700 dark:text-zinc-300 max-w-2xl">
            {tt("featuredSubtitle")}
          </p>
        </motion.header>

        <FeaturedProjectsSlider items={featured} />

        <div className="mt-8 text-center">
          <Link to="/portfolio">
            <Button
              variant="soft"
              size="md"
              trailingIcon={<ArrowRight className="w-4.5 h-4.5" />}
            >
              {tt("viewAllProjects")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
