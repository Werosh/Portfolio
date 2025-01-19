import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsappSquare,
  FaTelegram,
  FaPhoneSquare,
  FaHome,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [activeSection, setActiveSection] = useState("contact");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/Werosh", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/werosh-kriyanjala-0318b1292/", label: "LinkedIn" },
    { icon: FaInstagram, link: "https://www.instagram.com/werosh_k/", label: "Instagram" },
    { icon: FaFacebook, link: "https://www.facebook.com/werosh.kriyanjala.3", label: "Facebook" },
    { icon: FaYoutube, link: "https://www.youtube.com/c/KiraGamingSL", label: "YouTube" },
    { icon: FaWhatsappSquare, link: "https://wa.link/8yrqoc", label: "WhatsApp" },
    { icon: FaTelegram, link: "https://t.me/Mr_WKz", label: "Telegram" },
  ];

  const contactInfo = [
    { icon: MdEmail, value: "weroshprofy@gmail.com", link: "mailto:weroshprofy@gmail.com" },
    { icon: FaPhoneSquare, value: "+94 76 94 96 250", link: "tel:+94769496250" },
    { icon: FaHome, value: "Kurunegala, Sri Lanka", link: null },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 text-gray-300 bg-gradient-to-b from-gray-900 to-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-16 text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            variants={cardVariants}
            className="relative group"
          >
            <div className="p-8 transition-all duration-300 transform bg-gray-500 shadow-2x5l dark:bg-gray-800 rounded-xl group-hover:scale-105 ">
              <h3 className="mb-6 text-2xl font-semibold text-purple-400">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="text-2xl dark:text-purple-500"
                    >
                      <item.icon />
                    </motion.div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="transition-colors duration-300 hover:text-purple-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="relative group"
          >
            <div className="p-8 transition-all duration-300 transform bg-gray-500 shadow-2xl dark:bg-gray-800 rounded-xl group-hover:scale-105">
              <h3 className="mb-6 text-2xl font-semibold text-purple-400">Social Networks</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 space-x-3 transition-colors duration-300 rounded-lg hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredIcon(index)}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="text-2xl dark:text-purple-500"
                    >
                      <social.icon />
                    </motion.div>
                    <AnimatePresence>
                      {hoveredIcon === index && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="dark:text-purple-400"
                        >
                          {social.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;