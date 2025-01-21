import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronDown, Code2, Cpu } from "lucide-react";

const EnhancedHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [matrixRain, setMatrixRain] = useState([]);

  const textToType = [
    { text: "Werosh Kriyanjala", color: "#22c55e", icon: <Terminal className="w-8 h-8" /> },
    { text: "Software.engineer", color: "#22d3ee", icon: <Cpu className="w-8 h-8" /> },
    { text: "Frontend.dev()", color: "#a855f7", icon: <Code2 className="w-8 h-8" /> },
    { text: "Content.creator()", color: "#ef4444", icon: <Terminal className="w-8 h-8" /> },
  ];

  // Matrix rain effect
  useEffect(() => {
    const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const generateRain = () => {
      return Array.from({ length: 25 }, () => ({
        x: Math.random() * 100,
        y: -Math.random() * 100,
        char: characters[Math.floor(Math.random() * characters.length)],
        speed: 0.8 + Math.random() * 1.5,
        opacity: Math.random() * 0.7 + 0.3,
      }));
    };

    setMatrixRain(generateRain());
    const interval = setInterval(() => {
      setMatrixRain((prev) =>
        prev.map((drop) => ({
          ...drop,
          y: drop.y > 100 ? -10 : drop.y + drop.speed,
          char: Math.random() < 0.1 ? characters[Math.floor(Math.random() * characters.length)] : drop.char,
          opacity: Math.random() * 0.7 + 0.3,
        }))
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    let timeout;
    const currentTextObj = textToType[currentTextIndex];
    const currentText = currentTextObj.text;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textToType.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting]);

  const getCurrentTextColor = () => textToType[currentTextIndex].color;

  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden text-green-400 dark:bg-black">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {matrixRain.map((drop, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xl text-green-500"
            animate={{
              y: [`${drop.y}%`, `${drop.y + 100}%`],
              opacity: [drop.opacity, 0],
            }}
            transition={{
              duration: drop.speed * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: `${drop.x}%` }}
          >
            {drop.char}
          </motion.div>
        ))}
      </div>

      {/* Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Terminal-like Header */}
        <motion.div
          className="mb-8 font-mono"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block p-2 mb-4 text-sm border rounded-lg border-green-500/30 bg-black/50">
            <span className="text-green-500">root@system</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~/identity</span>
            <span className="text-gray-500">$</span>
            <span className="ml-2">initialize.sh</span>
          </div>

          <h1 className="text-2xl font-bold leading-tight md:text-6xl lg:text-7xl">
            I am{" "}
            <span className="relative inline-block" style={{ color: getCurrentTextColor() }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center gap-4"
                >
                  {displayedText}
                  {textToType[currentTextIndex].icon}
                </motion.span>
              </AnimatePresence>
              <span className="absolute -right-[2px] top-[0.15em] h-[0.9em] w-[3px] bg-current animate-pulse" />
            </span>
          </h1>
        </motion.div>

        {/* Description with Tech Style */}
        <motion.div
          className="max-w-2xl mx-auto mt-6 font-mono text-lg text-green-400/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="p-4 border rounded-lg border-green-500/30 bg-black/50 backdrop-blur-sm">
            <code>
              {">"} status: online<br />
              {">"} location: Sri_Lanka -{'>'} Kurunegala<br />
              {">"} mission: mastering_software_engineering<br />
              {">"} status: seeking_innovative_solutions
            </code>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 font-mono text-lg font-bold text-black transition-all bg-green-400 border rounded-lg shadow-lg hover:shadow-green-500/30 hover:scale-105 border-green-500/50"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            {"<View_Projects />"}
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 font-mono text-lg font-bold text-green-400 transition-all border border-green-500 rounded-lg shadow-lg hover:shadow-green-500/30 hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            {"<Contact_Me />"}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute text-green-400 -translate-x-1/2 bottom-8 left-1/2"
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
          <ChevronDown className="w-8 h-8 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHero;
