import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My Experience
      </h1>
      <div className="w-full max-w-screen-lg relative">
        {experiences.map((experience, index) => (
          <div
            key={`experience-${index}`}
            className={`mb-10 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center md:items-start w-full relative`}
          >
            {/* Timeline Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 -mt-3 md:top-auto md:-mt-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Left Timeline Card */}
            <div
              className={`bg-[#1d1836] text-white p-6 rounded-lg shadow-lg w-full md:w-2/5 mt-4 md:mt-0 ${
                index % 2 === 0 ? "md:mr-4" : "md:ml-4"
              }`}
            >
              <div className="text-gray-300 mb-2 md:text-right md:mb-0">
                {experience.date}
              </div>
              <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
              <p className="text-gray-400">{experience.company_name}</p>
              <ul className="mt-4 ml-7 space-y-2 list-disc">
                {experience.points.map((point, pointIndex) => (
                  <li
                    key={`experience-point-${pointIndex}`}
                    className="text-gray-400 text-sm pl-1 tracking-wide"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline Icon with Image */}
            <div className="relative flex-shrink-0 flex justify-center items-center w-16 h-16 md:w-20 md:h-20">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="rounded-full border-4 border-[#ffffff] w-12 h-12 md:w-16 md:h-16"></div>
              </div>
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={48}
                height={48}
                className="object-contain rounded-full"
              />
            </div>

            {/* Timeline Line */}
            {index !== experiences.length - 1 && (
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 md:border-l-6 border-[#ffffff] ${
                  index % 2 === 0 ? "top-0" : "bottom-0"
                }`}
              ></div>
            )}

            {/* Remove Timeline Line after the last card */}
            {index === experiences.length - 1 && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 md:border-l-6 border-[#ffffff] top-0"
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
