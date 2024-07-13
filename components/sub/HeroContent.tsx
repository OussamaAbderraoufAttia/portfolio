"use client";
import { FaDownload, FaLinkedin, FaMailBulk, FaGithub } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";










const copyToClipboard = () => {
  const email = "lo_attia@esi.dz";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20] overflow-hidden"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[20px] font-semibold">
            Oussama Abderraouf ATTIA
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I put
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Codes{" "}
            </span>
            in the machine👨‍💻🐈‍⬛
          </span>
        </motion.div>

        <div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a passionate Computer Science and Engineering student in my
            final semester with a solid background in backend and blockchain
            development. I have a fundamental knowledge of software design,
            development, testing, and have worked on various efficient and
            scalable mobile and web applications. I am interested in building
            and collaborating on innovative projects.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              variants={slideInFromLeft(1)}
              className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              href="https://drive.usercontent.google.com/download?id=1ap2Y1bTMdn8kDodRHyjm6jv18KMjL8uD&export=download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="h-4 w-4 inline" />
              &nbsp;Resume
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1.2)}
              initial="hidden"
              animate="visible"
              className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              onClick={copyToClipboard}
            >
              <FaMailBulk className="h-4 w-4 inline" />
              &nbsp;Email
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1.4)}
              className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              href="https://www.linkedin.com/in/ash-fahim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-4 w-4 inline" />
              &nbsp;LinkedIn
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1.6)}
              className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              href="https://github.com/AshFahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-4 w-4 inline" />
              &nbsp;GitHub
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
