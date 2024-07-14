"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { FaLinux } from "react-icons/fa";
//import 1989 from public
import Image from "next/image";
import ts98 from "../../public/Logo-1989.svg";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[7px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <div className="flex items-center">
        <Image
          src={ts98}
          alt="TS98 Logo"
          width={50} // Adjust width as needed
          height={50} // Adjust height as needed
        />
      </div>
      <h1 className="Welcome-text text-[20px] font-semibold">
        <span style={{ color: "white" }}>|</span>&nbsp;&nbsp;I am a swiftie btw
      </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[22px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies & smart solutions
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
