import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Code } from "lucide-react";

const Footer = () => {
  const [matrixChars, setMatrixChars] = useState([]);

  // Matrix character effect for the borders
  useEffect(() => {
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const generateChars = () => {
      return Array.from({ length: 20 }, () => ({
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: Math.random() * 0.5 + 0.25
      }));
    };

    setMatrixChars(generateChars());
    const interval = setInterval(() => {
      setMatrixChars(generateChars());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-8 overflow-hidden dark:bg-black bg-gradient-to-b from-black/50 via-transparent to-black/50">
      {/* Matrix Border Effect */}
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4 opacity-50">
        {matrixChars.map((item, i) => (
          <motion.span
            key={i}
            className="font-mono text-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: item.opacity }}
            transition={{ duration: 0.5 }}
          >
            {item.char}
          </motion.span>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Terminal-style header */}
        <div className="inline-block px-4 py-2 mx-auto mb-4 font-mono text-sm border rounded-lg border-green-500/30 bg-black/50">
          <span className="text-green-500">system</span>
          <span className="text-gray-500">@</span>
          <span className="text-green-400">footer</span>
          <span className="text-gray-500">:~$</span>
          <span className="ml-2 text-green-400">echo "STATUS: ONLINE"</span>
        </div>

        {/* Copyright section */}
        <div className="relative px-6 py-4 mx-auto space-y-2 font-mono max-w-fit">
          <div className="flex items-center justify-center space-x-2">
            <Terminal className="w-4 h-4 text-green-500" />
            <motion.p
              className="text-lg tracking-wider text-green-400"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-500">&lt;</span>
              &copy; {new Date().getFullYear()} | Designed by Werosh Kriyanjala
              <span className="text-gray-500">&gt;</span>
            </motion.p>
          </div>
          
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-4 h-4 text-green-400" />
            <p className="text-sm tracking-wide text-green-900 dark:text-green-300">
              <span className="text-gray-500">//$</span> Exploring the Cosmos of Code
            </p>
          </motion.div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute left-0 w-full h-0.5 bg-green-500/20"
            animate={{
              top: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>

      {/* Bottom Matrix Border */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 opacity-50">
        {matrixChars.map((item, i) => (
          <motion.span
            key={`bottom-${i}`}
            className="font-mono text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: item.opacity }}
            transition={{ duration: 0.5 }}
          >
            {item.char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Footer;