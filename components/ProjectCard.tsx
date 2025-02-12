"use client";
import React from "react";

type ProjectProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  private: boolean;
};

const ProjectCard: React.FC<ProjectProps> = ({ name, description, html_url, private: isPrivate }) => {
  return (
<div className="relative w-[600px] sm:w-[400px] md:w-[500px] lg:w-[700px] bg-gray-900 rounded-lg shadow-md border border-gray-800 overflow-hidden">
      
      {/* Efek Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-700 opacity-10 blur-3xl"></div>
      
      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col h-full justify-between">
        <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-all">
          {name}
        </h2>

        {/* Badge Private/Public */}
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${isPrivate ? "bg-red-600 text-white" : "bg-green-600 text-white"}`}>
          {isPrivate ? "Private" : "Public"}
        </span>

        {/* View on GitHub */}
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 font-semibold transition-all mt-2 text-sm"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
