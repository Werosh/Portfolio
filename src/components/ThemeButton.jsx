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
      className={`
        fixed top-4 right-4 z-[48] w-16 h-8 
        flex items-center rounded-full p-1 cursor-pointer shadow-lg mt-[50px]
        ${darkMode ? 
          'bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700' : 
          'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100'
        }
        hover:shadow-xl transition-shadow duration-300
      `}
      onClick={toggleTheme}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.8 }}
    >
      <motion.div
        className={`
          flex items-center justify-center w-6 h-6 rounded-full shadow-md
          ${darkMode ?
            'bg-gradient-to-br from-indigo-900 via-slate-800 to-slate-900' :
            'bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400'
          }
        `}
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
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-200"
          >
            🌙
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="text-amber-600"
          >
            ☀️
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ThemeButton;