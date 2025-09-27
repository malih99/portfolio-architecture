import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../types/project";

const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
};

export default ProjectGrid;
