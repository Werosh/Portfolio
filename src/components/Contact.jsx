import React from "react";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      id="contact"
      className="relative py-20 overflow-hidden text-gray-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-gray-900 via-transparent to-transparent opacity-10"></div>
      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-white"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Information (Prioritized) */}
          <motion.div variants={itemVariants}>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Get in Touch
              </h3>
              <div className="flex items-center mb-2">
                <MdEmail className="mr-2 text-xl text-purple-500" />
                <a
                  href="mailto:weroshprofy@gmail.com"
                  className="transition duration-300 hover:text-purple-400"
                >
                  weroshprofy@gmail.com
                </a>{" "}
                {/* Replace with your email */}
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneSquare className="mr-2 text-xl text-purple-500" />
                <a
                  href="tel:+94769496250"
                  className="transition duration-300 hover:text-purple-400"
                >
                  +94 76 94 96 250
                </a>{" "}
                {/* Replace with your phone number */}
              </div>
              <div className="flex items-center">
                <FaHome className="mr-2 text-xl text-purple-500" />
                <p> Kurunegala , Sri Lanka</p>{" "}
                {/* Replace with your address (optional) */}
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants}>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Connect on Social Media
              </h3>
              <div className="flex flex-col">
                {" "}
                {/* Use flex column for vertical layout */}
                <a
                  href="https://github.com/Werosh"
                  className="flex items-center mb-2 transition duration-300 hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 text-xl text-purple-500" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/werosh-kriyanjala-0318b1292/"
                  className="flex items-center mb-2 transition duration-300 hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2 text-xl text-purple-500" />{" "}
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/werosh_k/"
                  className="flex items-center mb-2 transition duration-300 hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="mr-2 text-xl text-purple-500" />{" "}
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/werosh.kriyanjala.3"
                  className="flex items-center mb-2 transition duration-300 hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="mr-2 text-xl text-purple-500" />{" "}
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/c/KiraGamingSL"
                  className="flex items-center mb-2 transition duration-300 hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="mr-2 text-xl text-purple-500" /> YouTube
                </a>
                <a
                  href="https://wa.link/8yrqoc"
                  className="flex items-center mb-2 transition duration-300 hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsappSquare className="mr-2 text-xl text-purple-500" />{" "}
                  WhatsApp
                </a>
                <a
                  href="https://t.me/Mr_WKz"
                  className="flex items-center transition duration-300 hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="mr-2 text-xl text-purple-500" />{" "}
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
