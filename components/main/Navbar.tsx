"use client";
import { useState } from "react";
import Image from "next/image";
import OussamaImage from "../../public/Oussama.jpg";
import closeIcon from "../../public/X.svg";
import menuIcon from "../../public/menu.svg";
import { Socials } from "@/constants"; // Adjust the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full fixed top-0 bg-[#03001418] backdrop-blur-md z-50 px-10">
      <div className="w-full h-[65px] flex items-center justify-between m-auto px-[10px]">
        {/* Mobile Toggle Button */}
        <div className="flex items-center md:hidden">
          <a href="#about-me" className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={OussamaImage}
                alt="Oussama's Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="font-bold ml-2 text-white">Oussama</span>
          </a>
        </div>

        {/* Desktop Profile */}
        <a href="#about-me" className="hidden md:flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={OussamaImage}
              alt="Oussama's Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <span className="font-bold ml-2 text-white hidden md:block">
            Oussama Abderraouf ATTIA
          </span>
        </a>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center justify-between w-[500px] h-full md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-white">
            <a
              href="#about-me"
              className="cursor-pointer nav-link"
              style={{ color: "#ffffff" }} // White color
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer nav-link"
              style={{ color: "#ffffff" }} // White color
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer nav-link"
              style={{ color: "#ffffff" }} // White color
            >
              Projects
            </a>
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
                className="rounded-lg"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            className="text-white focus:outline-none w-100 h-100 flex items-center justify-center rounded-lg"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <Image src={closeIcon} alt="close" width={24} height={24} />
            ) : (
              <Image src={menuIcon} alt="menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-[#0300145e] mt-2 py-2 px-4 rounded-lg space-y-2">
          <a
            href="#about-me"
            className="block text-white font-bold hover:opacity-50"
            style={{ color: "#ffffff" }} // White color
          >
            About me
          </a>
          <a
            href="#skills"
            className="block text-white font-bold hover:opacity-50"
            style={{ color: "#ffffff" }} // White color
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-white font-bold hover:opacity-50"
            style={{ color: "#ffffff" }} // White color
          >
            Projects
          </a>
          {/* Social Icons for Mobile */}
          <div className="flex flex-row gap-2 md:hidden">
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
                  width={30}
                  height={30}
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
