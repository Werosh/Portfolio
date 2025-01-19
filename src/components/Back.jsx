import React from "react";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-50 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-800">
      {/* Animated Gradient Circles */}
      <motion.div
        className="absolute bg-white rounded-full opacity-70 w-96 h-96 filter blur-[80px] dark:bg-gray-700"
        initial={{ x: "-100vw", y: "-50vh", scale: 0.8 }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["0vh", "50vh", "0vh"],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bg-gray-200 rounded-full w-72 h-72 filter blur-[60px] opacity-50 dark:bg-gray-600"
        initial={{ x: "100vw", y: "50vh", rotate: 0 }}
        animate={{
          x: ["100vw", "-100vw", "100vw"],
          y: ["50vh", "-50vh", "50vh"],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bg-gray-300 rounded-full opacity-50 w-80 h-80 filter blur-[70px] dark:bg-gray-500"
        initial={{ x: "0", y: "100vh", scale: 1 }}
        animate={{
          x: ["0", "-50vw", "50vw", "0"],
          y: ["100vh", "50vh", "-100vh", "0"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Additional Layered Subtle Effect */}
      <motion.div
        className="absolute bg-gradient-to-r from-gray-100 via-white to-gray-200 w-[500px] h-[500px] rounded-full opacity-20 filter blur-[120px] dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Subtle Center Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white via-gray-50 to-transparent opacity-80 dark:bg-gradient-radial dark:from-gray-900 dark:via-black dark:to-transparent" />
    </div>
  );
};

export default Back;
