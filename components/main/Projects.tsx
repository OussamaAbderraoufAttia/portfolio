"use client";

import React, { useState } from "react";
import WebAIProjectCard from "../sub/WebAIProjectCard";
import UXUIProjectCard from "../sub/UXUIProjectCard";
import { uxuiProjects } from "@/constants";
import { webProjects } from "@/constants";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<"web" | "uxui">("web");

  return (
    <div
      className="flex flex-col items-center justify-center py-8"
      id="projects"
    >
      <h1 className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
        My Projects
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-row gap-4 mb-6">
        <button
          className={`p-2.5 text-center text-white cursor-pointer rounded-lg min-w-[140px] transition-all duration-200 font-medium
            ${
              activeCategory === "web"
                ? "bg-[#5b1ebd]/80 shadow-md"
                : "bg-[#5b1ebd]/30 hover:bg-[#5b1ebd]/80 hover:shadow-md"
            }`}
          onClick={() => setActiveCategory("web")}
        >
          Web/AI Projects
        </button>

        <button
          className={`p-2.5 text-center text-white cursor-pointer rounded-lg min-w-[140px] transition-all duration-200 font-medium
            ${
              activeCategory === "uxui"
                ? "bg-[#5b1ebd]/80 shadow-md"
                : "bg-[#5b1ebd]/30 hover:bg-[#5b1ebd]/80 hover:shadow-md"
            }`}
          onClick={() => setActiveCategory("uxui")}
        >
          UX/UI & Design Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full px-6">
        {activeCategory === "web"
          ? webProjects.map((project, index) => (
              <WebAIProjectCard
                key={index}
                src={project.src}
                title={project.title}
                description={project.description}
                sourceLink={project.sourceLink}
              />
            ))
          : uxuiProjects.map((project, index) => (
              <UXUIProjectCard
                key={index}
                coverImage={project.coverImage}
                title={project.title}
                description={project.description}
                behanceUrl={project.behanceUrl}
                tools={project.tools}
                year={project.year}
              />
            ))}
      </div>
    </div>
  );
};

export default Projects;
