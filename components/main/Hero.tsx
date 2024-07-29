"use client";

import React, { useEffect, useState } from "react";
import HeroContent from "../sub/HeroContent";
import { motion } from "framer-motion";
import { isMobile } from "@/utils/isMobile";

// Animation variants for the video
const videoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.7, transition: { duration: 1 } },
};

// Component for mobile view
const MobileHero = () => (
  <div 
    className="relative flex flex-col h-full w-full"
    id="about-me"
  >
    <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
      <HeroContent />
    </div>
  </div>
);

// Component for desktop view
const DesktopHero = () => (
  <div 
    className="relative flex flex-col h-full w-full"
    id="about-me"
  >
    <motion.div
      className="absolute top-[-340px] left-0 h-full w-full z-10"
      variants={videoVariants}
      initial="hidden"
      animate="visible"
    >
      <video
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
        {/* Fallback text in case the video fails to load */}
        Your browser does not support the video tag.
      </video>
    </motion.div>
    <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
      <HeroContent />
    </div>
  </div>
);

// Main Hero component
const Hero = () => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return isMobileDevice ? <MobileHero /> : <DesktopHero />;
};

export default Hero;
