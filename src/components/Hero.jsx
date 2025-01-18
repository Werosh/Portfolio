import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textToType = [
    { text: "Werosh Kriyanjala", color: "#1d4ed8" },
    { text: "a Software Engineer", color: "#15803d" },
    { text: "a Front-End Web Developer", color: "#d97706" },
    { text: "a Youtuber", color: "#dc2626" },
  ];

  useEffect(() => {
    let timeout;
    if (currentTextIndex < textToType.length) {
      const currentTextObj = textToType[currentTextIndex];
      const currentText = currentTextObj.text;
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText("");
          setCurrentTextIndex((prevIndex) => prevIndex + 1);
        }, 1500);
      }
    } else {
      setCurrentTextIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, textToType]);

  const getCurrentTextColor = () => {
    if (currentTextIndex < textToType.length) {
      return textToType[currentTextIndex].color;
    }
    return "black"; // Default color
  };

  return (
    <div
      id="hero"
      className="relative w-full h-screen overflow-hidden text-gray-800 dark:from-gray-900 dark:to-black"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute bg-blue-200 rounded-full w-96 h-96 filter blur-3xl opacity-30 dark:bg-blue-800"
        initial={{ x: "-100vw", y: "-50vh" }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["0vh", "50vh", "0vh"],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute bg-green-200 rounded-full w-72 h-72 filter blur-3xl opacity-30 dark:bg-green-800"
        initial={{ x: "100vw", y: "50vh" }}
        animate={{
          x: ["100vw", "-100vw", "100vw"],
          y: ["50vh", "-50vh", "50vh"],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          className="text-4xl font-extrabold leading-tight tracking-wide text-gray-800 dark:text-gray-100 md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          I am{" "}
          <span
            className="relative inline-block"
            style={{ color: getCurrentTextColor() }}
          >
            {displayedText}
            <span className="absolute -right-[2px] top-[0.15em] h-[0.9em] w-[3px] bg-gray-800 dark:bg-gray-100 animate-pulse"></span>
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          a passionate and driven software engineering student at the
          prestigious University of Moratuwa. <br />
          With a solid foundation in computer science and a relentless pursuit
          of excellence, I am dedicated to mastering the art and science of
          software engineering.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-8 flex gap-4 text-[21px] font-bold font-akaya"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-white transition duration-300 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
