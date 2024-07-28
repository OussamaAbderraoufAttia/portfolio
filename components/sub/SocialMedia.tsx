import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '@/components/sub/Button';
import Card from '@/components/sub/Card';
import socials from '@/constants/index';

// Define the type for a social media entry
interface Social {
  name: string;
  url: string;
  icon: React.ComponentType<{ size: string }>;
}

const SocialMedia: React.FC = () => {
  return (
    <Card 
    className="flex  flex-col relative mt-8 w-full h-28  justify-center gap-6 p-8"
    style={{
        backgroundColor: 'rgba(17, 24, 39, 0.5)', 
        zIndex: 10
    }}
    >
      <h2 className="text-2xl font-semibold max-md:text-center">
        Have an interesting project in mind? 👋
      </h2>
      <div className="inline-flex flex-col items-center gap-6 lg:flex-row">
        <Button
          as={Link}
          className="cancel-drag px-4 py-2"
          href="mailto:maulanaajk@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          Contact Me
        </Button>
        <div className="inline-flex gap-6">
          {socials.map((social: Social) => (
            <Link
              key={social.name}
              href={social.url}
              className="cancel-drag"
              aria-label={`My ${social.name}`}
              target="_blank"
              rel="noreferrer"
            >
              {<social.icon size="1.3rem" />}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SocialMedia;
