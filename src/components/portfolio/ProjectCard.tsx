import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { motion, type Variants } from "framer-motion";

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div variants={item}>
      <Link
        to={`/portfolio/${project.id}`}
        className="group block rounded-lg overflow-hidden border border-black/[0.08] dark:border-white/[0.08] 
                   bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm hover:shadow-lg 
                   transition-all duration-300 hover:-translate-y-0.5"
      >
        {/* تصویر */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* گرادینت پایین برای readability */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
          {project.year && (
            <div className="absolute top-2 ltr:left-2 rtl:right-2 text-[10px] px-2 py-0.5 rounded-full bg-black/70 text-white/90 shadow-sm">
              {project.year}
            </div>
          )}
        </div>

        {/* متن */}
        <div className="p-3 md:p-3.5">
          <h3 className="text-[14px] md:text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-0.5 text-[12px] text-zinc-600 dark:text-zinc-400 line-clamp-1">
              {project.subtitle}
            </p>
          )}
          {project.tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-full 
                             bg-gradient-to-r from-indigo-50 to-indigo-100 
                             dark:from-zinc-800 dark:to-zinc-700 
                             text-indigo-600 dark:text-indigo-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
