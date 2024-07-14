import { link } from "fs";
// import portfolioBackground EcommerceApp DocScribe AlgeriaCoinClassification DrManagerBackground
import portfolioBackground from "../public/portfolioBackground.jpg";
import EcommerceApp from "../public/EcommerceApp.png";
import DocScribe from "../public/DocScribe.png";
import AlgeriaCoinClassification from "../public/AlgeriaCoinClassification.png";
import DrManagerBackground from "../public/DrManagerBackground.png";



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
    name: "Discord",
    src: "/discord.svg",
    link: "https://discord.gg/963VBZUvCb",
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
  
    
];