"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface Props {
  src: string;
  title: string;
  description: string;
  sourceLink: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  sourceLink,
}: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center w-full z-[20] rounded-2xl shadow-lg border border-[#2A0E61] p-4 mb-6 max-w-[400px]" // Adjusted max-width to 400px
    >
      <div className="relative rounded-lg overflow-hidden p-2.5">
        <Image
          src={src}
          alt={title}
          width={400} // Adjusted width to 400px
          height={250} // Adjusted height to 250px
          className="w-full object-cover rounded-lg"
        />
      </div>

      <div className="relative p-4 justify-center">
        <h1 className="text-xl font-semibold text-white">{title}</h1> {/* Adjusted text size to text-xl */}
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex space-x-4 mt-4">
          <motion.a
            variants={slideInFromLeft(1.2)} // Adjusted animation variant
            initial="hidden"
            animate="visible"
            href={sourceLink}
            target="_blank"
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            &nbsp;Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
