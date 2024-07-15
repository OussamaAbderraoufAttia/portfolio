// components/sub/ExperienceCard.tsx
import React from "react";
import Image from "next/image";

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto" style={{ backgroundColor: experience.iconBg }}>
        <Image
          src={experience.icon}
          alt={experience.company_name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col w-full md:w-2/3">
        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
        <p className="text-secondary text-lg font-semibold">{experience.company_name}</p>
        <p className="text-white mt-2">{experience.date}</p>
        <ul className="mt-4 list-disc list-inside space-y-2">
          {experience.points.map((point, index) => (
            <li key={index} className="text-white text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
