import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../components/ThemeContext";

const ThemeButton = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.div
      aria-label="Toggle theme"
      role="button"
      className="absolute top-4 right-4 z-[48] w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer shadow-lg mt-[50px]"
      onClick={toggleTheme}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full shadow-md dark:bg-gray-500"
        layout
        animate={{
          x: darkMode ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        {darkMode ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white"
          >
            🌙
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-yellow-500"
          >
            ☀️
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ThemeButton;
