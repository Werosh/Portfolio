import React from "react";
import { motion } from "framer-motion";
import myImg from "../assets/images/my/dp.jpg"

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
      className="relative py-20 overflow-hidden text-gray-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-gray-900 via-transparent to-transparent opacity-10"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2
          className="mb-8 text-4xl font-bold text-center text-white"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <p className="mb-4 leading-relaxed text-[21px]">
              I'm a passionate software engineer with a strong focus on building
              modern and performant web applications. I thrive on challenges and
              enjoy exploring new technologies to create innovative solutions.
              My background in computer science from the University of Moratuwa
              has provided me with a solid foundation in software development
              principles.
            </p>
            <p className="leading-relaxed text-[21px]">
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
            {/* You can add an image or a more complex component here */}
            <div className="relative w-64 h-64 overflow-hidden rounded-full bg-gradient-to-r from-purple-800 to-indigo-800">
              {/* <div className="absolute inset-0 bg-black opacity-20"></div>{" "} */}
              {/* Subtle overlay */}
              {/* Add your image inside this div with object-cover */}
              <img src={myImg }alt="Profile" className="object-cover w-full h-full" />
              <div className="absolute inset-0 border-2 border-[#1F51FF] rounded-full mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <a
            href="#contact"
            className="px-6 py-3 text-white transition duration-300 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-500"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
