import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CyberMouseTracker = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovered, setIsHovered] = useState(false);
  const [glitchText, setGlitchText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Create smooth spring animations
  const springConfig = { damping: 25, stiffness: 700 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Matrix characters for glitch effect
  const matrixChars =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

  useEffect(() => {
    const moveCallback = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCallback);

    // Glitch text interval
    const glitchInterval = setInterval(() => {
      if (isHovered) {
        const newChar =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        setGlitchText(newChar);
      }
    }, 100);

    return () => {
      window.removeEventListener("mousemove", moveCallback);
      clearInterval(glitchInterval);
    };
  }, [isHovered]);

  useEffect(() => {
    const handleHover = () => {
      setCursorVariant("hover");
      setIsHovered(true);
    };

    const handleUnhover = () => {
      setCursorVariant("default");
      setIsHovered(false);
    };

    const elements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );
    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(74, 222, 128, 0.2)",
      borderColor: "rgba(74, 222, 128, 0.5)",
    },
    hover: {
      scale: 1.5,
      backgroundColor: "rgba(74, 222, 128, 0.4)",
      borderColor: "rgba(74, 222, 128, 0.8)",
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 w-8 h-8 pointer-events-none mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="absolute w-full h-full border rounded-full"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        {/* Trailing effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full border border-green-400 rounded-full"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
              scale: 1 - i * 0.2,
            }}
            animate={{
              opacity: [0.3, 0],
              scale: [1, 2],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Glitch text effect */}
        {isHovered && (
          <motion.div
            className="absolute font-mono text-lg text-green-500"
            style={{
              x: 20,
              y: 20,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
            }}
          >
            {glitchText}
          </motion.div>
        )}
      </motion.div>

      {/* Secondary cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 w-2 h-2 bg-green-400 rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CyberMouseTracker;
