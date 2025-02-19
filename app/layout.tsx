// src/app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oussama Abderraouf ATTIA - Portfolio",
  description: "This is my second version of my portfolio website in which I used Next.js, Tailwind CSS, and Framer Motion. I hope you like it!",
  icons: {
    icon: "/favicon.ico",  // Adjusted path for favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* No need for the favicon link tag here */}
      </head>
      <body className={`${inter.className} bg-[#030018] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        <main>
          {children}
          <StarsCanvas />
        </main>
        <Footer />
      </body> 
    </html>
  );
}
