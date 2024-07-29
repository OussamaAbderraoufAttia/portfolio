import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
} from "react-icons/rx";
//import the contact component
import Contact from "./Contact";
import { FaDiscord, FaLinkedin, FaMailBulk, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <Contact />
    </div>
  );
};

export default Footer;