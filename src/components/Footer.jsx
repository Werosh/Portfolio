import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="relative py-6 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Glowing Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bg-teal-500 rounded-full top-1/3 left-1/4 w-96 h-96 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bg-purple-500 rounded-full top-2/3 right-1/3 w-72 h-72 blur-2xl opacity-20 animate-pulse"></div>
      </div>

      <motion.div
        className="space-y-2 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg tracking-widest font-orbitron">
          &copy; {new Date().getFullYear()} | Designed by Werosh Kriyanjala
        </p>
        <p className="text-sm font-light tracking-wide">
          Exploring the Cosmos of Code
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
