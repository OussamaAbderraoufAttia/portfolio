import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import socials from '@/constants/index';

// Define the type for a social media entry
interface Social {
  name: string;
  url: string;
  icon: React.ComponentType<{ size: string }>;
}

const SocialMedia: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-auto border-gray-600 gap-4 mt-8 p-8"
      style={{
        backgroundColor: 'rgba(17, 24, 39, 0.5)',
        zIndex: 10,
        borderRadius: '12px'
      }}
    >
      <h2 className="text-2xl font-semibold text-center">
        Do not hesitate to check my socials
      </h2>
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
        <div className="flex gap-6">
          {socials.map((social: Social) => (
            <Link
              key={social.name}
              href={social.url}
              className="cancel-drag"
              aria-label={`My ${social.name}`}
              target="_blank"
              rel="noreferrer"
            >
              {<social.icon size="1.9rem" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
