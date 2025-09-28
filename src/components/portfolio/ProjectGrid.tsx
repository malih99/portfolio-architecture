import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../types/project";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    >
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
