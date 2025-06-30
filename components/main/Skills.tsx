"use client";
import {
  Backend_skill,
  Frontend_skill,
  Tools,
  Language,
  Database,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-0 h-full relative overflow-hidden py-4"
    >
      <SkillText />

      {/* Language Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-0 gap-1 items-center">
        {Language.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7}
            height={image.height * 0.7}
            index={index}
            className="w-12 h-12 md:w-16 md:h-16"
          />
        ))}
      </div>

      {/* Backend Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-0 gap-1 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7}
            height={image.height * 0.7}
            index={index}
            className="w-12 h-12 md:w-16 md:h-16"
          />
        ))}
      </div>

      {/* Frontend Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-0 gap-1 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7}
            height={image.height * 0.7}
            index={index}
            className="w-12 h-12 md:w-16 md:h-16"
          />
        ))}
      </div>

      {/* Tools */}
      <div className="flex flex-row justify-around flex-wrap mt-0 gap-1 items-center">
        {Tools.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7}
            height={image.height * 0.7}
            index={index}
            className="w-12 h-12 md:w-16 md:h-16"
          />
        ))}
      </div>

      {/* Database */}
      <div className="flex flex-row justify-around flex-wrap mt-0 gap-1 items-center mb-2">
        {Database.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width * 0.7}
            height={image.height * 0.7}
            index={index}
            className="w-12 h-12 md:w-16 md:h-16"
          />
        ))}
      </div>

      {/* Full-width background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;