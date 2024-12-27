import React from "react";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800">
      {/* Animated Gradient Circles */}
      <motion.div
        className="absolute bg-indigo-700 rounded-full w-96 h-96 filter blur-3xl opacity-30"
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
        className="absolute bg-purple-900 rounded-full w-72 h-72 filter blur-3xl opacity-20"
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
        className="absolute bg-red-800 rounded-full opacity-25 w-80 h-80 filter blur-3xl"
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
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-transparent opacity-30" />
    </div>
  );
};

export default Back;
