import React from "react";
import HeroContent from "../sub/HeroContent";
import LandingPage from "../sub/LandingPage";

const Hero = () => {
  return (
    <div className=" relative flex flex-col h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover opacity-[0.7]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      
      <div className="flex flex-col ">
      <LandingPage />
      </div>
      <HeroContent />
    </div>
  );
};

export default Hero;
