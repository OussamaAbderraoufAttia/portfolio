"use client";

import React, { useEffect, useState } from "react";
import { FaDownload, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Typewriter: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = texts[currentIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(100);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setSpeed(150);
      }
    };

    const timeout = setTimeout(handleType, speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, speed, texts, currentIndex]);

  return <span className="text-white">{currentText}</span>;
};

const HeroContent: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start md:mr-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="flex flex-col items-start"
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Hi, I'm <span className="text-[#915EFF]">Oussama</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}
            className="text-base md:text-lg mt-2 text-white"
          >
            I do{" "}
            <Typewriter
              texts={[
                "Ai & ML",
                "Computer Vision",
                "Web Development",
                "UX/UI Design",
                "Mobile Development",
              ]}
            />
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="flex flex-col items-start gap-5 mt-6 w-full"
        >
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[8px] h-4 w-4" />
            <h1 className="Welcome-text text-[13px] md:text-[18px] font-semibold">
              Oussama Abderraouf ATTIA
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 text-xl md:text-3xl font-bold text-white w-full"
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

          <motion.div
            className="p-6 w-full max-w-[1600px] h-auto flex flex-col gap-4 rounded-lg bg-gray-800 bg-opacity-80"
            variants={slideInFromLeft(0.8)}
            style={{
              zIndex: 10,
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <motion.p
              className="text-base text-gray-300 my-1 max-w-full leading-relaxed"
            >
              I'm Oussama, a Computer Science student at ESI (École Supérieure d'Informatique, Algiers), with a deep passion for artificial intelligence, natural language processing, computer vision, and user-centered design. Since beginning my tech journey in 2021, I've built a strong foundation through academic excellence and hands-on experience. 
              <br /><br />
              Beyond the classroom, I've explored advanced domains such as quantum computing, agentic AI, and knowledge-augmented techniques, like retrieval-augmented generation (RAG), to enhance model performance and contextual reasoning. I've also worked on freelance projects, which have sharpened my ability to build practical, user-focused solutions.
              <br /><br />
              As a multilingual communicator, I value collaboration, innovation, and continuous learning. I'm eager to contribute to a forward-thinking team where I can apply my skills, grow professionally, and drive meaningful impact through technology.
            </motion.p>

            <div className="flex flex-row md:flex-row gap-3 mt-3">
              {/* Resume Button - Shows icon only on mobile, icon+text on desktop */}
              <motion.a
                variants={slideInFromLeft(1)}
                className="p-2 md:p-2.5 button-primary text-center text-white cursor-pointer rounded-lg flex-1 md:flex-1 flex items-center justify-center gap-1 md:gap-2 transition-all duration-200 hover:bg-opacity-80 min-w-[40px]"
                href="https://drive.google.com/file/d/1WeHR-sPqeZHGi3y1qQy-EFfdDWj6-o8W"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
              >
                <FaFileAlt className="h-4 w-4 md:h-3.5 md:w-3.5" />
                <span className="hidden md:inline text-sm md:text-base">Resume</span>
              </motion.a>
              
              {/* LinkedIn Button - Shows icon only on mobile, icon+text on desktop */}
              <motion.a
                variants={slideInFromLeft(1.2)}
                className="p-2 md:p-2.5 button-primary text-center text-white cursor-pointer rounded-lg flex-1 md:flex-1 flex items-center justify-center gap-1 md:gap-2 transition-all duration-200 hover:bg-opacity-80 min-w-[40px]"
                href="https://www.linkedin.com/in/oussama-abderraouf-attia-494b32225/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4 md:h-3.5 md:w-3.5" />
                <span className="hidden md:inline text-sm md:text-base">LinkedIn</span>
              </motion.a>
              
              {/* GitHub Button - Shows icon only on mobile, icon+text on desktop */}
              <motion.a
                variants={slideInFromLeft(1.4)}
                className="p-2 md:p-2.5 button-primary text-center text-white cursor-pointer rounded-lg flex-1 md:flex-1 flex items-center justify-center gap-1 md:gap-2 transition-all duration-200 hover:bg-opacity-80 min-w-[40px]"
                href="https://github.com/OussamaAbderraoufAttia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4 md:h-3.5 md:w-3.5" />
                <span className="hidden md:inline text-sm md:text-base">GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center mt-10 md:mt-0 md:ml-10"
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