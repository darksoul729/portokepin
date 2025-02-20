"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchGitHubProjects } from "@/lib/github"; // ✅ Import dari /lib/github.ts

type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  private: boolean;
  images: string[]; 
};

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchGitHubProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  if (loading) return <p className="text-center text-white">Loading projects...</p>;

  return (
    <div className="px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center"> {/* Gap lebih besar antara kolom */}
        {projects.map((project) => (
          <div key={project.id} className="flex justify-center">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;