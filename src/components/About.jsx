import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myImg from "../assets/images/my/dp.jpg";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 30px rgba(123, 31, 162, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
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
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-gray-300/10 to-transparent dark:via-gray-700/20 opacity-30"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2
          className="mb-16 text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text"
          variants={textVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div variants={textVariants} className="space-y-6">
            <motion.div
              className="p-6 shadow-xl rounded-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-xl leading-relaxed">
                I'm a passionate software engineer with a strong focus on building
                modern and performant web applications. I thrive on challenges and
                enjoy exploring new technologies to create innovative solutions.
              </p>
            </motion.div>

            <motion.div
              className="p-6 shadow-xl rounded-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-xl leading-relaxed">
                My background in computer science from the University of Moratuwa
                has provided me with a solid foundation in software development
                principles.
              </p>
            </motion.div>

            <motion.div
              className="p-6 shadow-xl rounded-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-xl leading-relaxed">
                I'm particularly interested in front-end development using React
                and modern JavaScript frameworks. I'm always eager to learn and
                collaborate with other developers to push the boundaries of what's
                possible on the web.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <motion.div
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="relative overflow-hidden rounded-full w-72 h-72"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={myImg}
                  alt="Profile"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                className="absolute rounded-full -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-lg -z-10"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  opacity: isHovered ? 0.5 : 0.3,
                }}
              />
            </motion.div>

            <motion.a
              href="#contact"
              className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;