import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My Experience
      </h1>
      <div className="w-full max-w-screen-lg relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 md:border-l-8 border-gray-700"></div>
        {experiences.map((experience, index) => (
          <div
            key={`experience-${index}`}
            className={`mb-10 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full md:w-2/3`}
          >
            {/* Timeline icon */}
            <div className="relative flex-shrink-0 flex justify-center items-center w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-purple-500"></div>
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={64}
                height={64}
                className="object-contain rounded-full"
              />
            </div>
            {/* Timeline content */}
            <div className="bg-[#1d1836] text-white p-6 rounded-lg shadow-lg w-full mt-4 md:mt-0 md:ml-4">
              <div className="text-gray-300 mb-2">{experience.date}</div>
              <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
              <p className="text-gray-400">{experience.company_name}</p>
              <ul className="mt-4 ml-7 space-y-2 list-disc">
                {experience.points.map((point, pointIndex) => (
                  <li key={`experience-point-${pointIndex}`} className="text-gray-400 text-sm pl-1 tracking-wide">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
