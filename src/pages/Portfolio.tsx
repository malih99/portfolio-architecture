import React from "react";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import type { Project } from "../types/project";

const projects: Project[] = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: `Project ${i + 1}`,
  image: `/assets/p${(i % 3) + 1}.jpg`,
  excerpt: "Exquisite architecture project",
  images: [`/assets/p${(i % 3) + 1}.jpg`, `/assets/p${((i + 1) % 3) + 1}.jpg`],
}));

const Portfolio: React.FC = () => (
  <div className="container mx-auto px-6 py-12">
    <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
    <ProjectGrid projects={projects} />
  </div>
);

export default Portfolio;
