import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandGoogleHome, TbCircuitDiode } from "react-icons/tb";
import { SiSimplenote, SiRetool } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { BiSolidContact } from "react-icons/bi";
import { VscTerminal } from "react-icons/vsc";
import { CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setGlitchText(true);
    setTimeout(() => setGlitchText(false), 1000);
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const navClasses = `fixed top-0 z-50 w-full backdrop-blur-md dark:bg-black/70 border-b ${
    scrolled ? "border-green-500/50" : "border-green-500/20"
  }`;

  return (
    <nav className={navClasses}>
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <motion.div
          className="flex items-center gap-2 font-mono text-xl"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <TbCircuitDiode className="text-green-500 animate-pulse" />
          <span
            className={`text-green-400 ${glitchText ? "animate-pulse" : ""}`}
          >
            ./werosh_kriyanjala
          </span>
        </motion.div>

        <div className="hidden gap-8 text-lg md:flex">
          {[
            { href: "#hero", icon: <TbBrandGoogleHome />, label: "HOME:/" },
            { href: "#about", icon: <SiSimplenote />, label: "ABOUT.txt" },
            { href: "#projects", icon: <SiRetool />, label: "PROJECTS.exe" },
            { href: "#skills", icon: <LuBrainCircuit />, label: "SKILLS.sys" },
            { href: "#contact", icon: <BiSolidContact />, label: "CONTACT.sh" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center gap-2 font-mono text-green-400 transition-all duration-300 hover:text-green-200 hover:scale-110 group"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <span className="text-green-500 group-hover:animate-ping">
                {link.icon}
              </span>
              <span className="group-hover:tracking-wider">{link.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-green-400 transition duration-300 hover:text-green-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <CgCloseO /> : <VscTerminal />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t bg-black/90 backdrop-blur-md md:hidden border-green-500/20"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {[
                { href: "#hero", icon: <TbBrandGoogleHome />, label: "HOME:/" },
                { href: "#about", icon: <SiSimplenote />, label: "ABOUT.txt" },
                {
                  href: "#projects",
                  icon: <SiRetool />,
                  label: "PROJECTS.exe",
                },
                {
                  href: "#skills",
                  icon: <LuBrainCircuit />,
                  label: "SKILLS.sys",
                },
                {
                  href: "#contact",
                  icon: <BiSolidContact />,
                  label: "CONTACT.sh",
                },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 font-mono text-lg text-green-400 transition-all duration-300 hover:text-green-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-green-500">{link.icon}</span>
                    {link.label}
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
