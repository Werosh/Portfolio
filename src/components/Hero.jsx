import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const EnhancedHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const textToType = [
    { text: "Werosh Kriyanjala", color: "#1d4ed8", icon: "👨‍💻" },
    { text: "a Software Engineer", color: "#15803d", icon: "⚡" },
    { text: "a Front-End Developer", color: "#d97706", icon: "🎨" },
    { text: "a Youtuber", color: "#dc2626", icon: "🎥" },
  ];

  useEffect(() => {
    let timeout;
    const currentTextObj = textToType[currentTextIndex];
    const currentText = currentTextObj.text;
    
    if (!isDeleting && displayedText.length < currentText.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, Math.random() * 50 + 30); // Random delay for more natural typing
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // Pause at the end of typing
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
      }, Math.random() * 30 + 20);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textToType.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting]);

  const getCurrentTextColor = () => {
    return textToType[currentTextIndex].color || "black";
  };

  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden text-gray-800 dark:text-gray-100">
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 w-96 h-96 filter blur-3xl dark:from-blue-800/30 dark:to-purple-800/30"
        initial={{ x: "-100vw", y: "-50vh", scale: 0.8 }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["0vh", "50vh", "0vh"],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-green-200/30 to-yellow-200/30 w-72 h-72 filter blur-3xl dark:from-green-800/30 dark:to-yellow-800/30"
        initial={{ x: "100vw", y: "50vh", scale: 1.2 }}
        animate={{
          x: ["100vw", "-100vw", "100vw"],
          y: ["50vh", "-50vh", "50vh"],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Main Heading */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            I am{" "}
            <span className="relative inline-block" style={{ color: getCurrentTextColor() }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="inline-flex items-center"
                >
                  {displayedText}
                  <span className="ml-2">{textToType[currentTextIndex].icon}</span>
                </motion.span>
              </AnimatePresence>
              <span className="absolute -right-[2px] top-[0.15em] h-[0.9em] w-[3px] bg-current animate-pulse" />
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A passionate and driven software engineering student at the prestigious
          University of Moratuwa, dedicated to mastering the art and science of
          software engineering through innovative solutions and continuous learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 rounded-lg shadow-lg hover:shadow-blue-500/30 hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 text-lg font-bold text-white transition-all bg-gray-800 rounded-lg shadow-lg hover:shadow-gray-500/30 hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -translate-x-1/2 bottom-8 left-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1.2,
            y: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHero;