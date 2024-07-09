"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { FaLinux } from "react-icons/fa";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[7px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <FaLinux className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[20px] font-semibold">
          I use Arch btw
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        From Brainwaves to Browser Tabs
      </motion.div>
    </div>
  );
};

export default SkillText;
