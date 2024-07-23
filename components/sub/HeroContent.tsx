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
      style={{ transform: "scale(0.75)", transformOrigin: "top" }} // Scaling effect
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start md:mr-20">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[15px] md:text-[20px] font-semibold">
            Oussama Abderraouf ATTIA
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl md:text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
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
            I&apos;m a Computer Science student at 
            ESI (The Higher National School of Computer Science Algiers) 
            and multilingual speaker with a passion for artificial intelligence, 
            and neural language processing, computer vision and UX/UI Design 
            I am looking to join a company that values innovation, collaboration, 
            and continuous learning and am confident that my enthusiasm and drive will 
            help me succeed in any role that leverages my passion for technology.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              variants={slideInFromLeft(1)}
              className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px]"
              href="https://drive.google.com/file/d/1WeHR-sPqeZHGi3y1qQy-EFfdDWj6-o8W"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="h-4 w-4 inline" />
              &nbsp;Resume
            </motion.a>
            
            <motion.a
              variants={slideInFromLeft(1.4)}
              className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px]"
              href="https://www.linkedin.com/in/oussama-abderraouf-attia-494b32225/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-4 w-4 inline" />
              &nbsp;LinkedIn
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1.6)}
              className="p-2.5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px]"
              href="https://github.com/OussamaAbderraoufAttia"
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
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0 md:ml-20" // Added margin to the left of the image
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={487}
          width={487}
          className="max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
