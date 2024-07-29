import Image from "next/image";
import Hero from "../components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Experience from "@/components/main/Experience";
import Testimonials from "@/components/main/Testimonials";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Chatbot from "@/components/Chatbot/Chatbot";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Chatbot />   
      </div>
    </main>
  );
}
