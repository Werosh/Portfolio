import React from "react";
import { motion } from "framer-motion";
import pro1 from "../assets/images/project-images/bba.png";
import pro2 from "../assets/images/project-images/hbv.png";
import pro3 from "../assets/images/project-images/mp.png";
import pro4 from "../assets/images/project-images/op.png";
import pro5 from "../assets/images/project-images/hotelsen.png";
import pro6 from "../assets/images/project-images/salon.jpg";
import pro7 from "../assets/images/project-images/bluh.png";

const projectsData = [
  {
    title: "Group Portfolio",
    description:
      "The Bluh Bluh DEV website serves as a personal portfolio and informational platform for a developer. It allows visitors to explore the developer's work, learn about their skills and expertise, and connect with them through the provided contact details.",
    imgUrl: pro7,
    link: "https://bluhbluhdev.netlify.app/",
  },
  {
    title: "Buy Book Anywhere",
    description:
      "The DemoLibry website serves as a library search platform, allowing users to search for books in various categories. It helps users find relevant books from library collections, providing details like book titles, authors, and availability.",
    imgUrl: pro1,
    link: "https://demolibry.netlify.app/",
  },
  {
    title: "Herbal Haven",
    description:
      "The HerBal HaVen website offers a selection of herbal products and remedies designed to enhance well-being. It highlights the benefits of using natural ingredients for health and provides easy access to a variety of herbal solutions.",
    imgUrl: pro2,
    link: "https://hebalhaven.netlify.app/",
  },
  {
    title: "Serenity Hotel",
    description:
      "Hotel Sentry is a platform offering hotel booking services. It provides features such as browsing hotel options, checking availability, and making reservations.",
    imgUrl: pro5,
    link: "https://hotelsentry.netlify.app/",
  },
  {
    title: "Early Portfolio",
    description:
      "The Werosh K website is the personal portfolio of Werosh Kriyanjala, a software engineering student at the University of Moratuwa. The site showcases his technical skills and projects, including web development and software engineering work.",
    imgUrl: pro4,
    link: "https://weroshport.netlify.app/",
  },
  {
    title: "Salon Inventory Management System",
    description:
      "Salon Inventory Management System simplifies and optimizes inventory management for salon operations. It features tools for tracking stock, managing suppliers, and recording daily sales.",
    imgUrl: pro6,
  },
  {
    title: "Movie Picker",
    description:
      "The website MovYPikker provides a platform for browsing and discovering movies across various genres. It offers information about films such as IMDb ratings, genres, release year, and detailed descriptions.",
    imgUrl: pro3,
    link: "https://movypikker.netlify.app/",
  },
];

const Projects = () => {
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
      id="projects"
      className="relative py-20 overflow-hidden text-gray-700 dark:text-gray-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-gray-400/10 to-transparent dark:via-gray-700/20 opacity-30"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-gray-800 dark:text-white"
          variants={itemVariants}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden transition-transform duration-300 rounded-lg shadow-lg bg-white/20 backdrop-blur-sm hover:rotate-3 hover:shadow-2xl dark:bg-gray-800/30"
              style={{
                transformOrigin: "center",
              }}
              variants={itemVariants}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 z-10 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 hover:opacity-100"></div>

              {/* Project Image */}
              <img
                src={project.imgUrl}
                alt={project.title}
                className="object-cover w-full h-64 transition-transform duration-300 transform hover:scale-110"
              />

              {/* Project Info */}
              <div className="relative z-10 p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 dark:text-gray-100 hover:text-purple-500">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 text-white transition duration-300 bg-purple-600 rounded hover:bg-purple-500 hover:shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
