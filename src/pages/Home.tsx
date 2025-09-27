import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import type { Project } from "../types/project";
import { useTranslation } from "react-i18next";

const featured: Project[] = [
  {
    id: "1",
    title: "Modern Residence",
    image: "/src/assets/images/p3.jpg",
    excerpt: "Luxury family home",
    description: "",
    images: ["/src/assets/images/p1.jpg", "/src/assets/images/p2.jpg"],
  },
  {
    id: "2",
    title: "Urban Office",
    image: "/src/assets/images/1.jpg",
    excerpt: "Commercial space",
    description: "",
    images: ["/src/assets/images/1.jpg", "/src/assets/images/p4.jpg"],
  },
  {
    id: "3",
    title: "Community Center",
    image: "/src/assets/images/p1.jpg",
    excerpt: "Public design",
    description: "",
    images: ["/assets/images/p3.jpg", "/assets/images/p1.jpg"],
  },
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {t("homeTitle")}
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            We are a leading architecture firm dedicated to creating innovative
            and sustainable spaces.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="/portfolio">
              <Button>{t("viewPortfolio")}</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">{t("contactUs")}</Button>
            </Link>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <img
            src="/src/assets/images/hero.jpg"
            alt="hero"
            className="w-full rounded-md shadow-lg object-cover h-80"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">{t("featuredProjects")}</h2>
        <ProjectGrid projects={featured} />
      </section>
    </div>
  );
};

export default Home;
