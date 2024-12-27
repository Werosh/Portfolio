import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandGoogleHome } from "react-icons/tb";
import { SiSimplenote, SiRetool } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { BiSolidContact } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="w-full bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold flex items-center gap-2"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <VscSettingsGear className="text-primary animate-spin" />
          <span>Werosh Kriyanjala</span>
        </motion.div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex gap-8 text-lg">
          {[
            { href: "#hero", icon: <TbBrandGoogleHome />, label: "Home" },
            { href: "#about", icon: <SiSimplenote />, label: "About" },
            { href: "#projects", icon: <SiRetool />, label: "Projects" },
            { href: "#skills", icon: <LuBrainCircuit />, label: "Skills" },
            { href: "#contact", icon: <BiSolidContact />, label: "Contact" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center gap-2 hover:text-primary transition duration-300"
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
            className="text-2xl hover:text-primary transition duration-300"
          >
            {isOpen ? <CgCloseO /> : <VscSettingsGear />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {" "}
        {/* Use AnimatePresence */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-gray-800"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {[
                { href: "#hero", icon: <TbBrandGoogleHome />, label: "Home" },
                { href: "#about", icon: <SiSimplenote />, label: "About" },
                { href: "#projects", icon: <SiRetool />, label: "Projects" },
                { href: "#skills", icon: <LuBrainCircuit />, label: "Skills" },
                {
                  href: "#contact",
                  icon: <BiSolidContact />,
                  label: "Contact",
                },
              ].map((link, index) => (
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
                    className="flex items-center gap-2 text-lg hover:text-primary transition duration-300"
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
