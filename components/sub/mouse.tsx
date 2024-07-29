"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface MousePosition {
  x: number;
  y: number;
}

const Mouse: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const mouseVariants = {
    x: mousePosition.x,
    y: mousePosition.y,
    };

  return (

    <motion.div
    className="cursor"
    animate={mouseVariants}
    />
  );
};

export default Mouse;
