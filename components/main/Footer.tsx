"use client";

import React from "react";
//import the contact component
import Contact from "../sub/Contact";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <Contact />
    </div>
  );
};

export default Footer;