import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { motion } from "framer-motion";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div className="group" whileHover={{ y: -6 }}>
      <Link
        to={`/portfolio/${project.id}`}
        className="block rounded-lg overflow-hidden shadow-sm dark:bg-gray-800 bg-white"
      >
        <div className="w-full h-44 bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {project.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
