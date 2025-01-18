import React from "react";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-800">
      {/* Animated Gradient Circles */}
      <motion.div
        className="absolute bg-white rounded-full opacity-50 w-96 h-96 filter blur-2xl dark:bg-gray-700"
        initial={{ x: "-100vw", y: "-50vh" }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["0vh", "50vh", "0vh"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bg-gray-300 rounded-full w-72 h-72 filter blur-2xl opacity-40 dark:bg-gray-600"
        initial={{ x: "100vw", y: "50vh" }}
        animate={{
          x: ["100vw", "-100vw", "100vw"],
          y: ["50vh", "-50vh", "50vh"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bg-gray-200 rounded-full opacity-40 w-80 h-80 filter blur-2xl dark:bg-gray-500"
        initial={{ x: "0", y: "100vh" }}
        animate={{
          x: ["0", "-50vw", "50vw", "0"],
          y: ["100vh", "50vh", "-100vh", "0"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Subtle Center Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white via-gray-200 to-transparent opacity-60 dark:bg-gradient-radial dark:from-gray-900 dark:via-black dark:to-transparent" />
    </div>
  );
};

export default Back;
