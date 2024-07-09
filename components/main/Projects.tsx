import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/projects/4shadi.png"
          title="4shadi"
          description="4Shadi is a marriage match making platform for divorcee's and married people. Python,FastAPI,MicroService, mongoDB,MySQL,Nextjs14-TypeScript"
          demoLink=""
          sourceLink="https://github.com/Eddie2111/4Shadi"
        />
        <ProjectCard
          src="/projects/carshop.png"
          title="Vehicle Accessories Inventory Shop"
          description="The project is built using the Laravel framework and is designed to cater to both users and administrators."
          demoLink="https://demo1.fusan.live/"
          sourceLink="https://github.com/AshFahim/Vehicle-Accessories-Inventory-Shop"
        />
        <ProjectCard
          src="/projects/ghewmeew.png"
          title="GhewMew"
          description=" A pet adoption website where you can adopt pets and also donate to the organization. Built with Python, FastAPI, MySQL, and React.js."
          demoLink="https://demo-link-3.com"
          sourceLink="https://source-link-3.com"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/projects/beeppay.png"
          title="BeepPay"
          description="It was a prototype app for a startup. It was built with Flutter and Firebase."
          demoLink="https://demo-link-3.com"
          sourceLink="https://source-link-3.com"
        />
        <ProjectCard
          src="/projects/fabric.png"
          title="Company Register on HyperLedger Fabric"
          description="Made a company register on HyperLedger Fabric,CockroachDB and forntend with Html, CSS, and JavaScript."
          demoLink="https://demo-link-3.com"
          sourceLink="https://github.com/AshFahim/Company-Register-on-HyperLedger-Fabric"
        />
        <ProjectCard
          src="/projects/furni.png"
          title="Furnicraft"
          description="A responsive furniture e-commerce portfolio website built with HTML, CSS, JavaScript, and Bootstrap."
          demoLink="https://www.furnicraftbd.com/"
          sourceLink="https://github.com/AshFahim/furnicraft_web"
        />
      </div>
    </div>
  );
};

export default Projects;
