"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface UXUIProject {
  title: string;
  description: string;
  coverImage: string;
  behanceUrl: string;
  tools?: string[];
  year?: number;
}

const UXUIProjectCard = ({
  coverImage,
  title,
  description,
  behanceUrl,
  tools,
  year,
}: UXUIProject) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center w-full z-[20] rounded-lg shadow-md border border-[#2A0E61] p-3 mb-4 max-w-[280px]"
    >
      <div className="relative rounded-lg overflow-hidden p-1.5">
        <Image
          src={coverImage}
          alt={title}
          width={280}
          height={160}
          className="w-full object-cover rounded-lg"
        />
      </div>

      <div className="relative p-3">
        <h1 className="text-base font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-300 text-xs">{description}</p>
        {tools && (
          <p className="mt-1 text-gray-300 text-xs">
            Tools: {tools.join(", ")}
          </p>
        )}
        {year && (
          <p className="mt-1 text-gray-300 text-xs">Year: {year}</p>
        )}
        <div className="flex space-x-2 mt-3">
          <motion.a
            variants={slideInFromLeft(1.2)}
            initial="hidden"
            animate="visible"
            href={behanceUrl}
            target="_blank"
            className="p-1.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[160px]"
          >
            View on Behance
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default UXUIProjectCard;