"use client";

import React, { useEffect, useState } from "react";
import { styles } from "./styles";

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

  return <span>{currentText}</span>;
};

const LandingPage: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center text-center gap-5`}
      >
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Oussama</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
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
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
