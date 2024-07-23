import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-8" // Reduced padding
      id="projects"
    >
      <h1 className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4"> {/* Reduced heading padding */}
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-6 w-full px-6"> {/* Reduced gap and padding */}
        <ProjectCard
          src="/portfolioBackground.jpg"
          title="My FIRST ever Personal Portfolio"
          description="This is my first ever personal portfolio website. It is built with Next.js, Tailwind CSS, and ReactJS."
          sourceLink="https://github.com/OussamaAbderraoufAttia/Portfolio-Website"
        />
        <ProjectCard
          src="/DrManagerBackground.png"
          title="Dr.Manager - Binary Image Segmentation"
          description="A fully designed and developed and deployed during TC - ETIC - 2024: Tracking Doctor's appointments and managing patient's data and doing smart diagnostic using AI."
          sourceLink="https://github.com/OussamaAbderraoufAttia/bisbackend"
        />
        <ProjectCard
          src="/AlgeriaCoinClassification.png"
          title="Algeria Coin Classifier"
          description="An image classification model designed to identify and categorize Algerian coins using convolutional neural networks. In the first of its own, this model classifies Algerian coins with an accuracy of 87.5%."
          sourceLink="https://github.com/OussamaAbderraoufAttia/AlgerianCoinClassifier"
        />
        <ProjectCard
          src="/DocScribe.png"
          title="Doc Talents Website"
          description="A website that has been developed for the management of the registrations and the re-registrations of the doctoral students made with MERN Stack."
          sourceLink="https://github.com/Imeneallouche/Doc-Talents-Website"
        />
        <ProjectCard
          src="/EcommerceApp.png"
          title="Ecommerce App"
          description="full-stack eCommerce app using Flutter & Firebase made with Flutter, Dart, and Firebase."
          sourceLink="https://github.com/OussamaAbderraoufAttia/ecommerce_app"
        />
      </div>
    </div>
  );
};

export default Projects;
