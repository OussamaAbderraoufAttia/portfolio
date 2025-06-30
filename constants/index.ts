import { link } from "fs";
// import portfolioBackground EcommerceApp DocScribe AlgeriaCoinClassification DrManagerBackground
import portfolioBackground from "../public/portfolioBackground.jpg";
import EcommerceApp from "../public/EcommerceApp.png";
import DocScribe from "../public/DocScribe.png";
import AlgeriaCoinClassification from "../public/AlgeriaCoinClassification.png";
import DrManagerBackground from "../public/DrManagerBackground.png";
import soai_logo from "../public/soai_logo.png";
import gdg_logo from "../public/gdg_logo.png";
import cse_logo from "../public/cse_logo.png";
import DHCPWebsiteOverview from "../public/DHCP Website - Overview.png";
import PuterJS from "../public/PuterJSOverview.png";
import { IconType } from 'react-icons/lib';


export const Language = [
  {
    skill_name: "Python",
    Image: "/language/python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Dart",
    Image: "/language/dart.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/language/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Type Script",
    Image: "/language/typescript.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "c++",
    Image: "/language/c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    Image: "/language/c++.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Solidity",
    Image: "/language/solidity.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Verilog",
    Image: "/language/verilog.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/language/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML 5",
    Image: "/language/html.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/ooouussaammaaa/",
  },
  {
    name: "Linkedin",
    src: "/linkedin.svg",
    link: "https://www.linkedin.com/in/oussama-abderraouf-attia-494b32225/",
  },
];

export const Frontend_skill = [
  {
    skill_name: "Flutter",
    Image: "/frontend/flutter.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "react",
    Image: "/frontend/react.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/frontend/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    Image: "/frontend/bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: "/frontend/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/frontend/next.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Framer motion",
    Image: "/frontend/framer.png",
    width: 70,
    height: 70,
  },
];

export const Backend_skill = [
  {
    skill_name: "FastAPI",
    Image: "/lib/fastapi.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    Image: "/lib/flask.svg",
    width: 80,
    height: 50,
  },
  {
    skill_name: "Express js",
    Image: "/lib/express.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Fire base",
    Image: "/lib/Firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Node js",
    Image: "/lib/node-js.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Django",
    Image: "/lib/django.png",
    width: 70,
    height: 70,
  },
];

export const Database = [
  {
    skill_name: "My SQL",
    Image: "/database/sql.svg",
    width: 100,
    height: 70,
  },
  {
    skill_name: "Mongo DB",
    Image: "/database/mongo.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "CockroachDB",
    Image: "/database/cockroachdb.png",
    width: 70,
    height: 70,
  },
];

export const Tools = [
  {
    skill_name: "git",
    Image: "/tool/git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Linux",
    Image: "/tool/linux.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "android studio",
    Image: "/tool/android.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vs code",
    Image: "/tool/vscode.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    Image: "/tool/docker.webp",
    width: 70,
    height: 70,
  },
];

export const Other_skill = [

];

export const projects = [
  {
    name: "My Personal Portfolio",
    description:
      "A digital showcase of my professional journey, skills, and accomplishments.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "A fully designed and developed by me website", color: "yellow-text-gradient" },
    ],
    image: portfolioBackground,
    source_code_link: "https://github.com/OussamaAbderraoufAttia/Portfolio-Website",
  },
  {
    name: "Dr.Manager - Binary Image Segmentation",
    description:
      "Tracking Doctor's appointments and managing patient's data and doing smart diagnostic using AI.",
    tags: [
      { name: "Flask", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "green-text-gradient" },
      { name: "U-net", color: "pink-text-gradient" },
      { name: "A fully designed and developed and deployed during TC - ETIC - 2024", color: "yellow-text-gradient" },
    ],
    image: DrManagerBackground,
    source_code_link: "https://github.com/OussamaAbderraoufAttia/bisbackend",
  },
  {
    name: "Algeria Coin Classifier",
    description:
    "An image classification model designed to identify and categorize Algerian coins using convolutional neural networks. In the first of its own, this model classifies Algerian coins with an accuracy of 87.5%.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
    ],
    image: AlgeriaCoinClassification,
    source_code_link:
      "https://github.com/OussamaAbderraoufAttia/AlgerianCoinClassifier",
  },
  {
    name: "Doc Talents Website",
    description:
      "A website that has been developed for the management of the registrations and the re-registrations of the doctoral students",
    tags: [
      { name: "MERN Stack", color: "blue-text-gradient" },
    ],
    image: DocScribe,
    source_code_link: "https://github.com/Imeneallouche/Doc-Talents-Website",
  },
  {
    name: "Ecommerce App",
    description:
      "full-stack eCommerce app using Flutter & Firebase",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Dart", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: EcommerceApp,
    source_code_link: "https://github.com/OussamaAbderraoufAttia/ecommerce_app",
  },
  {
  name: "DHCP DZ – Landing Page",
  description:
    "A modern landing page designed and developed for DHCP DZ to present its mission, services, and contact flow with clean UI and responsive design.",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "Tailwind CSS", color: "green-text-gradient" },
    { name: "Typescript", color: "pink-text-gradient" },
    { name: "Fully designed and developed", color: "yellow-text-gradient" },
  ],
  image: DHCPWebsiteOverview, // import this from your assets or link it from /public if you're using a custom loader
  source_code_link: "https://github.com/OussamaAbderraoufAttia/dhcp-dz",
},
{
  name: "PuterJS Claude – Visual Identity",
  description:
    "A design-first identity system for a side project built with Next.js, including logo, colors, and export-ready assets directly from code components.",
  tags: [
    { name: "Figma", color: "blue-text-gradient" },
    { name: "Next.js", color: "green-text-gradient" },
    { name: "Design System", color: "pink-text-gradient" },
    { name: "Branding & UI Identity", color: "yellow-text-gradient" },
  ],
  image: PuterJS, // as above, import or serve from public
  source_code_link: "https://github.com/OussamaAbderraoufAttia/puterjs-claude",
},

    
];



export const experiences = [
  {
    title: "SOAI Events Deparmtment Manager",
    company_name: "School of AI Club  | Algiers Chapter | Algeria",
    icon: soai_logo,
    iconBg: "#161329",
    date: "Sep 2022 - Oct 2023",
    points: [
      "Coordinated logistics for various events including workshops, seminars, and conferences, ensuring smooth operations and timely execution.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
      "Collaborated with team members to develop innovative solutions for logistical challenges, resulting in improved event experiences."
    ],
  },
  {
    title: "GDG Algiers Logistics Co-manager",
    company_name: "Google Developers Group Club | Algeria Chapter | Algeria",
    icon: gdg_logo,
    iconBg: "#161329",
    date: "July 2023 - Present",
    points: [
      "Innovated solutions collaboratively to tackle logistical challenges, enhancing event quality.",
      "Acquired practical skills in MERN Stack development, including React, Node.js, and MongoDB, through hands-on projects and workshops.",
      "Guided a team of 10+ members in executing logistics for various events, ensuring seamless operations and timely execution.",
    ],
  },
  {
    title: "CSE Club Member",
    company_name: "Club Scientifique de l'ESI | ESI Alger | Algiers",
    icon: cse_logo,
    iconBg: "#161329",
    date: "Nov 2021 - Present",
    points: [
      "Developing a fully functional mobile application using Flutter, Firebase, and Google Cloud Platform, gaining hands-on experience in app development.",
      "Leading a team of 6 members in brainstorming and implementing innovative solutions for technical challenges including innovating a visual identity and a responsive web app.",
      "Doing my first ever workshop on the basics of Pascal, teaching 20+ students the fundamentals of programming and problem-solving and algorithmic thinking.",
      "Participated in various hackathons and coding competitions, honing my problem-solving skills and gaining experience in working under pressure like Datahack."
    ],
  },
];

export const testimonials = [
  {
    photo: '/anonymous.png',
    fullName: 'Berkat Cheraz Ichrek',
    role: 'Member, GDG Algiers and student at ESI Algiers',
    testimonial: `Oussama is literally the best! Always there to help and guide us, his support meant everything to our team. He truly made our season unforgettable.\n Logistiquement✨️`,
  },
  {
    photo: '/anonymous.png',
    fullName: 'Amina Bouzid',
    role: 'Member, SOAI Algiers and student at ESI Algiers',
    testimonial: `Oussama is a great leader and a great team player. He is always there to help and guide us. He has a great sense of responsibility and is always ready to take on new challenges. He is a great asset to our team. I am glad to have him as a team member.`,
  },
  {
    photo: '/anonymous.png',
    fullName: 'Mostefai Mounir Sofiane',
    role: 'Member, GDG Algiers and student at ESI Algiers',
    testimonial: `Oussama is a great team player and a great leader. He is always there to help and guide us. He has a great sense of responsibility and is always ready to take on new challenges. He is a great asset to our team. I am glad to have him as a team member.`,
  },
  {
    photo: '/anonymous.png',
    fullName: 'Sofiane Bouzid',
    role: 'Member, SOAI Algiers and student at ESI Algiers',
    testimonial: `Oussama is a great team player and a great leader. He is always there to help and guide us. He has a great sense of responsibility and is always ready to take on new challenges. He is a great asset to our team. I am glad to have him as a team member.`,
  },
  {
    photo: '/anonymous.png',
    fullName: 'Abdeldjalil Lamara',
    role: 'Ai and data engineering enthusiast, Gdg member and usthb student & Graphic designer.',
    testimonial: `I have had the pleasure of working with Oussama, and I can confidently say he is one of the best colleagues I have ever worked with. His strong communication, organization, and technical skills make him an invaluable asset to any team.\nOussama is hardworking, motivated, and dedicated, consistently delivering high-quality results. His ability to effectively collaborate and drive projects forward is unparalleled. I would always want Oussama on my team and highly recommend him for any professional endeavor.`,
  },
  
  // Add more testimonials as needed
];


import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMedium,
} from 'react-icons/fa6';

interface Socials {
  name: string;
  url: string;
  icon: IconType;
}

const socials: Socials[] = [
  {
      name: 'Facebook',
      url: 'https://www.facebook.com/john.loyde.77/',
      icon: FaFacebook,
  },
  {
      name: 'Instagram',
      url: 'https://www.instagram.com/ooouussaammaaa/',
      icon: FaInstagram,
  },
  {
      name: 'Github',
      url: 'https://github.com/OussamaAbderraoufAttia',
      icon: FaGithub,
  },
  {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/oussama-abderraouf-attia-494b32225/',
      icon: FaLinkedin,
  },
  {
      name: 'Medium',
      url: 'https://medium.com/@lo_attia',
      icon: FaMedium,
  },
  
];

export default socials;





export interface UXUIProject {
  title: string;
  description: string;
  coverImage: string; // local path to image or Behance thumbnail
  behanceUrl: string;
  tools?: string[];
  year?: number;
}

export  const uxuiProjects: UXUIProject[] = [
  {
    title: "DHCP DZ – Landing Page UI",
    description:
      "A modern and professional landing page for DHCP DZ, designed to highlight services and streamline contact flow with a clean, tech-focused aesthetic.",
    coverImage: "/DHCP Website - Overview.png",
    behanceUrl: "https://www.behance.net/gallery/229255127/DHCP-DZ-Landing-Page-UI",
    tools: ["Figma"],
    year: 2025,
  },
  {
    title: "GHack – Landing Page UI",
    description:
      "A landing page for GHack Algiers, an event organized by GDG Algiers in early 2024, designed to inform visitors, answer questions, and provide a registration form.",
    coverImage: "/Ghack.png",
    behanceUrl: "https://www.behance.net/gallery/229254851/GHack-Website-UI",
    tools: ["Figma", "Blender"],
    year: 2024,
  },
  {
    title: "PuterJS Claude – Visual Identity",
    description:
      "A visual identity exploration for a side project, featuring logo design, color system, and export guidelines. The VI was originally built using Next.js, aligning design with front-end needs.",
    coverImage: "/PuterJS.png",
    behanceUrl: "https://www.behance.net/gallery/229254501/PuterJS-Claude-VI",
    tools: ["Figma", "Next.js"],
    year: 2025,
  },
  {
    title: "Doc Talents – Web Design UI",
    description:
      "User interface design for a registration management system for doctoral students, tailored to support the MERN stack implementation with a clean, intuitive layout.",
    coverImage: "/Doc Talents.png",
    behanceUrl: "https://www.behance.net/gallery/229254059/Doc-Talents",
    tools: ["Figma"],
    year: 2023,
  },
  {
    title: "EsiGPT – AI Chat UI",
    description:
      "An AI assistant designed by ESI students for ESI students, offering smart search across ESI Trésor and the ability to answer questions on indexed documents.",
    coverImage: "/EsiGPT.png",
    behanceUrl: "https://www.behance.net/gallery/229253647/EsiGPT",
    tools: ["Figma"],
    year: 2024,
  },
  {
    title: "Dr. Manager – Medical Dashboard UI",
    description:
      "A dashboard interface designed for managing doctor appointments, patient records, and smart diagnostics using AI, developed during TC - ETIC 2024.",
    coverImage: "/Dr manager.png",
    behanceUrl: "https://www.behance.net/gallery/229253409/Dr-Manager",
    tools: ["Figma"],
    year: 2024,
  },
];




export interface WebProject {
  src: string;
  title: string;
  description: string;
  sourceLink: string;
  liveDemo?: string; // optional live demo link
}


export const webProjects: WebProject[] = [
  {
    src: "/portfolioBackground.jpg",
    title: "My FIRST ever Personal Portfolio",
    description:
      "This is my first ever personal portfolio website. It is built with Next.js, Tailwind CSS, and ReactJS.",
    sourceLink: "https://github.com/OussamaAbderraoufAttia/Portfolio-Website",
  },
  {
    src: "/DrManagerBackground.png",
    title: "Dr.Manager - Binary Image Segmentation",
    description:
      "A fully designed and developed and deployed during TC - ETIC - 2024: Tracking Doctor's appointments and managing patient's data and doing smart diagnostic using AI.",
    sourceLink: "https://github.com/OussamaAbderraoufAttia/bisbackend",
  },
  {
    src: "/AlgeriaCoinClassification.png",
    title: "Algeria Coin Classifier",
    description:
      "An image classification model designed to identify and categorize Algerian coins using convolutional neural networks. In the first of its own, this model classifies Algerian coins with an accuracy of 87.5%.",
    sourceLink:
      "https://github.com/OussamaAbderraoufAttia/AlgerianCoinClassifier",
  },
  {
    src: "/DocScribe.png",
    title: "Doc Talents Website",
    description:
      "A website that has been developed for the management of the registrations and the re-registrations of the doctoral students made with MERN Stack.",
    sourceLink: "https://github.com/Imeneallouche/Doc-Talents-Website",
  },
  {
    src: "/EcommerceApp.png",
    title: "Ecommerce App",
    description:
      "Full-stack eCommerce app using Flutter & Firebase made with Flutter, Dart, and Firebase.",
    sourceLink: "https://github.com/OussamaAbderraoufAttia/ecommerce_app",
  },
  {
    src: "/DHCP Website - Overview.png",
    title: "DHCP DZ – Landing Page",
    description:
      "A modern landing page designed and developed for DHCP DZ to present its mission, services, and contact flow with clean UI and responsive design.",
    sourceLink: "https://github.com/OussamaAbderraoufAttia/dhcp-dz",
    liveDemo: "https://dhcp-dz.vercel.app/",
  },
  {
    src: "/PuterJSOverview.png",
    title: "PuterJS Claude – Visual Identity",
    description:
      "A design-first identity system for a side project built with Next.js, including logo, colors, and export-ready assets directly from code components.",
    sourceLink: "https://github.com/OussamaAbderraoufAttia/puterjs-claude",
    liveDemo: "https://puterjs-claude.vercel.app/",
  },
];
