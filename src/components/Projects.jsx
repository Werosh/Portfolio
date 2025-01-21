import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ExternalLink, Code, Lock, Globe } from "lucide-react";

const CyberProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [matrixRain, setMatrixRain] = useState([]);

  // Matrix rain effect
  useEffect(() => {
    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const generateRain = () => {
      return Array.from({ length: 25 }, () => ({
        x: Math.random() * 100,
        y: -Math.random() * 100,
        char: characters[Math.floor(Math.random() * characters.length)],
        speed: 0.5 + Math.random() * 2,
        opacity: Math.random(),
      }));
    };

    setMatrixRain(generateRain());
    const interval = setInterval(() => {
      setMatrixRain((prev) =>
        prev.map((drop) => ({
          ...drop,
          y: drop.y > 100 ? -10 : drop.y + drop.speed,
          char:
            Math.random() < 0.1
              ? characters[Math.floor(Math.random() * characters.length)]
              : drop.char,
          opacity: Math.random(),
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const projectsData = [
    {
      title: "Group_Portfolio.exe",
      description:
        "Personal portfolio platform with advanced UI/UX implementations",
      icon: <Globe className="w-6 h-6" />,
      status: "ONLINE",
      link: "https://bluhbluhdev.netlify.app/",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Buy_Book_Anywhere.sys",
      description: "Library search engine with ML-powered recommendations",
      icon: <Code className="w-6 h-6" />,
      status: "DEPLOYED",
      link: "https://demolibry.netlify.app/",
      tech: ["Python", "TensorFlow", "AWS"],
    },

    {
      title: "Herbal_Haven.sys",
      description:
        "The HerBal HaVen website offers a selection of herbal products and remedies designed to enhance well-being. It highlights the benefits of using natural ingredients for health and provides easy access to a variety of herbal solutions.",
      icon: <Globe className="w-6 h-6" />,
      status: "ACTIVE",
      link: "https://hebalhaven.netlify.app/",
      tech: ["Vue.js", "Firebase"],
    },
    {
      title: "Serenity_Hotel.app",
      description:
        "Hotel Sentry is a platform offering hotel booking services. It provides features such as browsing hotel options, checking availability, and making reservations.",
      icon: <Terminal className="w-6 h-6" />,
      status: "ONLINE",
      link: "https://hotelsentry.netlify.app/",
      tech: ["React", "Node.js"],
    },
    {
      title: "Early_Portfolio.old",
      description:
        "The Werosh K website is the personal portfolio of Werosh Kriyanjala, a software engineering student at the University of Moratuwa. The site showcases his technical skills and projects, including web development and software engineering work.",
      icon: <Globe className="w-6 h-6" />,
      status: "ONLINE",
      link: "https://weroshport.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Salon_IMS.exe",
      description:
        "Salon Inventory Management System simplifies and optimizes inventory management for salon operations. It features tools for tracking stock, managing suppliers, and recording daily sales.",
      icon: <Code className="w-6 h-6" />,
      status: "FINISHED",
      tech: ["C#", "MySQL"],
    },
    {
      title: "Movie_Picker.test",
      description:
        "The website MovYPikker provides a platform for browsing and discovering movies across various genres. It offers information about films such as IMDb ratings, genres, release year, and detailed descriptions.",
      icon: <Globe className="w-6 h-6" />,
      status: "ONLINE",
      link: "https://movypikker.netlify.app/",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden text-green-400 dark:bg-black bg-gradient-to-b from-black/50 via-transparent to-black/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {matrixRain.map((drop, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xl text-green-500"
            animate={{
              y: [`${drop.y}%`, `${drop.y + 100}%`],
              opacity: [drop.opacity, 0],
            }}
            transition={{
              duration: drop.speed * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: `${drop.x}%` }}
          >
            {drop.char}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="mb-16 font-mono text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block p-2 mb-4 text-sm border rounded-lg border-green-500/30 bg-black/50">
            <span className="text-green-500">root@system</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~/projects</span>
            <span className="text-gray-500">$</span>
            <span className="ml-2">ls -la projects/</span>
          </div>

          <h2 className="text-2xl font-bold text-green-400 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {"<Project_Directory />"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden font-mono border rounded-lg border-green-500/30 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between p-4 border-b border-green-500/30">
                <div className="flex items-center gap-2">
                  {project.icon}
                  <span className="text-lg font-bold">{project.title}</span>
                </div>
                <span className="px-2 py-1 text-xs border rounded-full border-green-500/30">
                  {project.status}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="leading-relaxed">
                  <span className="text-gray-500">{">"}</span>{" "}
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <div className="text-sm text-green-300">
                    {"// Tech Stack"}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs border rounded-full border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 mt-4 text-black transition-all bg-green-400 rounded-lg hover:bg-green-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-4 h-4" />
                    {"<Execute_Project />"}
                  </motion.a>
                )}
              </div>

              {/* Scanning line effect */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute w-full h-1 bg-green-500/20"
                  animate={{
                    top: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CyberProjects;
