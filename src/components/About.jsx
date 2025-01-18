import React from "react";
import { motion } from "framer-motion";
import myImg from "../assets/images/my/dp.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="relative py-20 overflow-hidden text-gray-700 dark:text-gray-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Transparent Overlay with Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-gray-300/10 to-transparent dark:via-gray-700/20 opacity-30"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2
          className="mb-8 text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <p className="mb-4 leading-relaxed text-[21px] text-gray-700 dark:text-gray-300">
              I'm a passionate software engineer with a strong focus on building
              modern and performant web applications. I thrive on challenges and
              enjoy exploring new technologies to create innovative solutions.
              My background in computer science from the University of Moratuwa
              has provided me with a solid foundation in software development
              principles.
            </p>
            <p className="leading-relaxed text-[21px] text-gray-700 dark:text-gray-300">
              I'm particularly interested in front-end development using React
              and modern JavaScript frameworks. I'm always eager to learn and
              collaborate with other developers to push the boundaries of what's
              possible on the web.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            {/* Profile Image */}
            <div className="relative w-64 h-64 overflow-hidden rounded-full bg-gradient-to-r from-blue-400/40 to-blue-600/40 dark:from-purple-700/50 dark:to-indigo-700/50">
              <img
                src={myImg}
                alt="Profile"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-2 rounded-full border-blue-500/50 dark:border-purple-500/50 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <a
            href="#contact"
            className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 dark:bg-purple-700 dark:hover:bg-purple-600"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
