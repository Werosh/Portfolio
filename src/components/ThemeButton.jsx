import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../components/ThemeContext";
import { Terminal, Sun, Moon } from "lucide-react";

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
        fixed top-[70px] right-4 z-[40] w-20 h-10
        flex items-center rounded-lg p-1 cursor-pointer 
        ${darkMode ? 
          'bg-black border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 
          'bg-transparent border-2 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]'
        }
        hover:scale-105 transition-all duration-300
        before:content-[''] before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent 
        before:animate-[scan_2s_ease-in-out_infinite]
      `}
      onClick={toggleTheme}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <Terminal 
        className={`absolute left-2 w-4 h-4 ${darkMode ? 'text-cyan-500' : 'text-orange-500'}`}
      /> */}
      <motion.div
        className={`
          flex items-center justify-center w-8 h-8 rounded 
          ${darkMode ?
            'bg-cyan-950 border border-cyan-500' :
            'bg-orange-950 border border-orange-500'
          }
        `}
        layout
        animate={{
          x: darkMode ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className={darkMode ? 'text-cyan-500' : 'text-orange-500'}
        >
          {darkMode ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ThemeButton;