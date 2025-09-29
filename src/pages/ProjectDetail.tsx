import React from "react";
import { useParams } from "react-router-dom";
import ProjectSlideshow from "../components/portfolio/ProjectSlideshow";
import Button from "../components/ui/Button";
import type { Project } from "../types/project";

const mock: Project = {
  id: "1",
  title: "Modern Residence",
  image: "/public/images/p1.jpg",
  excerpt: "Luxury family home",
  description: "Detailed description",
  images: [
    "/public/images/p1.jpg",
    "/public/images/p2.jpg",
    "/public/images/p3.jpg",
  ],
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = mock.id === id ? mock : undefined;
  if (!project) return <p>Project not found.</p>;

  const Phone = (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z"
      />
    </svg>
  );

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProjectSlideshow images={project.images || []} />
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h1>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>
        <div className="mt-6">
          <Button
            size="md"
            variant="primary"
            leadingIcon={<Phone className="w-4.5 h-4.5" />}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
