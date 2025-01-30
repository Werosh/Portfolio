import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ModernMouseTracker = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animations with custom config
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCallback = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCallback);
    return () => window.removeEventListener("mousemove", moveCallback);
  }, []);

  useEffect(() => {
    const handleHover = () => setCursorVariant("hover");
    const handleUnhover = () => setCursorVariant("default");

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
      opacity: 0.6,
    },
    hover: {
      scale: 1.5,
      opacity: 0.8,
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Primary cursor circle */}
        <motion.div
          className="relative w-12 h-12"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 blur-sm" />
          
          {/* Border ring */}
          <div className="absolute inset-0 border rounded-full border-white/20 backdrop-blur-sm" />
        </motion.div>

        {/* Trailing effects */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{
              scale: 1 - i * 0.2,
            }}
            animate={{
              opacity: [0.2, 0],
              scale: [1, 1.5],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-sm" />
          </motion.div>
        ))}
      </motion.div>

      {/* Secondary cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-50 w-1.5 h-1.5 rounded-full pointer-events-none bg-gradient-to-r from-violet-500 to-fuchsia-500"
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

export default ModernMouseTracker;