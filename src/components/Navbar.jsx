import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandGoogleHome } from "react-icons/tb";
import { SiSimplenote, SiRetool } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { BiSolidContact } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // // Toggle Dark Mode
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // // Persist dark mode state in local storage
  // useEffect(() => {
  //   const savedMode = localStorage.getItem("darkMode");
  //   if (savedMode) {
  //     setIsDarkMode(JSON.parse(savedMode));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-400 shadow-md dark:text-white dark:bg-gray-800">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 text-xl font-bold"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <VscSettingsGear className="text-primary animate-spin" />
          <span>Werosh Kriyanjala</span>
        </motion.div>

        {/* Menu for larger screens */}
        <div className="hidden gap-8 text-lg md:flex">
          {[{ href: "#hero", icon: <TbBrandGoogleHome />, label: "Home" },
            { href: "#about", icon: <SiSimplenote />, label: "About" },
            { href: "#projects", icon: <SiRetool />, label: "Projects" },
            { href: "#skills", icon: <LuBrainCircuit />, label: "Skills" },
            { href: "#contact", icon: <BiSolidContact />, label: "Contact" }].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center gap-2 transition duration-300 hover:text-primary"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered delay
              whileHover={{ scale: 1.2 }}
            >
              {link.icon} {link.label}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl transition duration-300 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <CgCloseO /> : <VscSettingsGear />}
          </button>
        </div>

        {/* Dark Mode Toggle */}
        {/* <div className="ml-4">
          <button
            onClick={toggleDarkMode}
            className="text-2xl transition duration-300 hover:text-primary"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="dark:bg-gray-800 md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {[{ href: "#hero", icon: <TbBrandGoogleHome />, label: "Home" },
                { href: "#about", icon: <SiSimplenote />, label: "About" },
                { href: "#projects", icon: <SiRetool />, label: "Projects" },
                { href: "#skills", icon: <LuBrainCircuit />, label: "Skills" },
                { href: "#contact", icon: <BiSolidContact />, label: "Contact" }].map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-lg transition duration-300 hover:text-primary"
                  >
                    {link.icon} {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
