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
      "The Bluh Bluh DEV website serves as a personal portfolio and informational platform for a developer. It allows visitors to explore the developer's work, learn about their skills and expertise, and connect with them through the provided contact details. The site features a minimalist design, emphasizing ease of navigation and a professional presentation of the developer's profile and projects.",
    imgUrl: pro7,
    link: "https://bluhbluhdev.netlify.app/",
  },
  {
    title: "Buy Book Anywhere",
    description:
      "The DemoLibry website serves as a library search platform, allowing users to search for books in various categories. It helps users find relevant books from library collections, providing details like book titles, authors, and availability, making it easier to explore library resources.",
    imgUrl: pro1,
    link: "https://demolibry.netlify.app/",
  },
  {
    title: "Herbal Haven",
    description:
      "The HerBal HaVen website offers a selection of herbal products and remedies designed to enhance well-being. It highlights the benefits of using natural ingredients for health, providing easy access to a variety of herbal solutions. Users can explore products, learn about their uses, and purchase items directly through the platform.",
    imgUrl: pro2,
    link: "https://hebalhaven.netlify.app/",
  },
  {
    title: "Serenity Hotel",
    description:
      "Hotel Sentry appears to be a platform offering hotel booking services. It provides features such as browsing hotel options, checking availability, and making reservations. The website is designed to help users find hotels in specific locations with an easy-to-navigate interface.",
    imgUrl: pro5,
    link: "https://hotelsentry.netlify.app/",
  },
  {
    title: "Early Portfolio",
    description:
      "The Werosh K website is the personal portfolio of Werosh Kriyanjala, a software engineering student at the University of Moratuwa. The site showcases his technical skills and projects, including web development and software engineering work. It also highlights his academic background, passion for innovation, and commitment to professional growth.",
    imgUrl: pro4,
    link: "https://weroshport.netlify.app/",
  },
  {
    title: "Salon Inventory Management System",
    description:
      "Salon Inventory Management System is a worker-focused software designed to simplify and optimize inventory management for salon operations. It features tools for tracking stock, adding and editing items, managing suppliers, and recording daily sales. With its user-friendly interface and reliable functionality, it helps salon staff efficiently manage their inventory and streamline daily tasks.",
    imgUrl: pro6,
  },
  {
    title: "Movie Picker",
    description:
      "The website MovYPikker provides a platform for browsing and discovering movies across various genres. It offers information about films such as their IMDb ratings, genres, release year, and detailed descriptions. Users can filter movies by genre, language, and year, and find download links for different video quality options.",
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
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden transition-transform duration-300 bg-gray-800 rounded-lg shadow-lg hover:rotate-3 hover:shadow-2xl"
              style={{
                transformOrigin: "center",
              }}
              variants={itemVariants}
            >
              <div className="absolute inset-0 z-10 transition-opacity duration-300 bg-black opacity-20 hover:opacity-40"></div>
              <img
                src={project.imgUrl}
                alt={project.title}
                className="object-cover w-full h-64 transition-transform duration-300 transform hover:scale-110"
              />
              <div className="relative z-10 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 hover:text-purple-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400 transition-colors duration-300 hover:text-gray-300">
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
