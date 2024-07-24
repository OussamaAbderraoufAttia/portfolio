import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import { FaDiscord, FaLinkedin, FaMailBulk, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact me</div>
            <a
              href="mailto:fahimashiqurrahman@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMailBulk />
              <span className="text-[15px] ml-[6px]">
                Email: fahimashiqurrahman@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/AshFahim"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://discord.com/invite/yourinvitecode"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/yourusername"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              className="flex flex-row items-center my-[15px] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;