import React from "react";
import { useParams } from "react-router-dom";
import ProjectSlideshow from "../components/portfolio/ProjectSlideshow";
import Button from "../components/ui/Button";
import type { Project } from "../types/project";

const mock: Project = {
  id: "1",
  title: "Modern Residence",
  image: "/images/p1.jpg",
  excerpt: "Luxury family home",
  description: "Detailed description",
  images: ["/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg"],
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = mock.id === id ? mock : undefined;

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProjectSlideshow images={project.images || []} />
      <div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-6">
          <Button
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
