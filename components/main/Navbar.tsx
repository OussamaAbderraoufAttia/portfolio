"use client";
import { useState } from "react";
import Image from "next/image";
import OussamaImage from "../../public/Oussama.jpg";
import closeIcon from "../../public/X.svg";
import menuIcon from "../../public/menu.svg";
import { Socials } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="w-full fixed top-0 bg-[#03001418] backdrop-blur-md z-50 px-4 shadow-[0_10px_30px_rgba(42,14,97,0.5)]">
      <div className="w-full h-[60px] flex items-center justify-between m-auto px-4">
        {/* Mobile Toggle Button */}
        <div className="flex items-center md:hidden">
          <a href="#about-me" className="flex items-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={OussamaImage}
                alt="Oussama's Image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
            </div>
            <span className="font-bold ml-2 text-white text-xs">Oussama</span>
          </a>
        </div>
        
        {/* Desktop Profile */}
        <a href="#about-me" className="hidden md:flex items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={OussamaImage}
              alt="Oussama's Image"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full"
            />
          </div>
          <span className="font-bold ml-2 text-white text-xs hidden md:block">
            Oussama Abderraouf ATTIA
          </span>
        </a>
        
        {/* Centered Menu Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center h-full">
          <div className="flex items-center justify-center border border-[#7042f861] bg-[#0300145e] px-4 py-1 rounded-full text-white text-xs">
            <a href="#about-me" className="cursor-pointer nav-link mx-2">
              About me
            </a>
            <span className="text-white mx-1">|</span>
            <a href="#skills" className="cursor-pointer nav-link mx-2">
              Skills
            </a>
            <span className="text-white mx-1">|</span>
            <a href="#projects" className="cursor-pointer nav-link mx-2">
              Projects
            </a>
            <span className="text-white mx-1">|</span>
            <a href="#Experience" className="cursor-pointer nav-link mx-2">
              Experience
            </a>
            <span className="text-white mx-1">|</span>
            <a href="#Smart-Assistant" className="cursor-pointer nav-link mx-2">
              Smart Assistant
            </a>
            <span className="text-white mx-1">|</span>
            <a href="#Contact-me" className="cursor-pointer nav-link mx-2">
              Contact me
            </a>
          </div>
        </div>
        
        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-2">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="rounded-lg"
              />
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-white focus:outline-none w-8 h-8 flex items-center justify-center rounded-lg"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <Image src={closeIcon} alt="Close menu" width={20} height={20} />
            ) : (
              <Image src={menuIcon} alt="Open menu" width={20} height={20} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-[#0300145e] mt-2 py-2 px-4 rounded-lg space-y-2">
          <a
            href="#about-me"
            className="block text-white font-bold text-xs hover:opacity-50"
          >
            About me
          </a>
          <a
            href="#skills"
            className="block text-white font-bold text-xs hover:opacity-50"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-white font-bold text-xs hover:opacity-50"
          >
            Projects
          </a>
          <a
            href="#Experience"
            className="block text-white font-bold text-xs hover:opacity-50"
          >
            Experience
          </a>
          <a
            href="#Smart-Assistant"
            className="block text-white font-bold text-xs hover:opacity-50"
          >
            Smart Assistant
          </a>
          <a
            href="#Contact-me"
            className="block text-white font-bold text-xs hover:opacity-50"
          >
            Contact me
          </a>
          {/* Social Icons for Mobile */}
          <div className="flex flex-row gap-2">
            {Socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;