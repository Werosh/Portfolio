import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const skillsData = [
  {
    name: "JavaScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
    level: 90,
  },
  {
    name: "ReactJS",
    imageUrl:
      "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
    level: 85,
  },
  {
    name: "Python",
    imageUrl:
      "https://w1.pngwing.com/pngs/835/530/png-transparent-python-logo-programming-language-computer-programming-python-programming-basics-for-absolute-beginners-scripting-language-source-code-php-code-climate-inc.png",
    level: 70,
  },
  {
    name: "JAVA",
    imageUrl:
      "https://www.citypng.com/public/uploads/preview/hd-java-logo-transparent-background-701751694771845zainlxmlfo.png",
    level: 60,
  },
  {
    name: "C#",
    imageUrl:
      "https://e7.pngegg.com/pngimages/520/669/png-clipart-c-logo-c-programming-language-computer-icons-computer-programming-programming-miscellaneous-blue.png",
    level: 50,
  },
  {
    name: "React Native",
    imageUrl:
      "https://everyday.codes/wp-content/uploads/2019/06/react-native-1024x631-1024x631.png",
    level: 75,
  },
  {
    name: "HTML",
    imageUrl:
      "https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png",
    level: 95,
  },
  {
    name: "CSS",
    imageUrl:
      "https://www.superbefilms.com/wp-content/uploads/2016/03/css-logo.png",
    level: 90,
  },
  {
    name: "MySQL",
    imageUrl:
      "https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-svg-vector.svg",
    level: 65,
  },
  {
    name: "MongoDB",
    imageUrl:
      "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
    level: 55,
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.section
      id="skills"
      className="relative py-20 overflow-hidden text-gray-300 dark:text-gray-100"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-gray-900 via-transparent to-transparent opacity-10 dark:opacity-20"></div>
      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-black dark:text-gray-100"
          variants={itemVariants}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="mb-8 text-center text-gray-400 dark:text-gray-300"
          variants={itemVariants}
        >
          Drag to Move & Hover or click on a skill to see proficiency level...
        </motion.div>

        <div className="grid justify-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {skillsData.map((skill, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-100, 100], [30, -30]);
            const rotateY = useTransform(x, [-100, 100], [-30, 30]);

            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg group dark:bg-gray-700"
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                whileHover={{ scale: 1.1, z: 200 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                variants={itemVariants}
              >
                <div className="absolute inset-0 z-10 bg-black opacity-20 dark:bg-black dark:opacity-40"></div>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="relative z-10 object-contain w-16 h-16 mb-2 rounded-sm"
                />
                <div className="flex items-center">
                  <p className="relative z-10 mr-2 font-medium text-white dark:text-gray-100">
                    {skill.name}
                  </p>
                  {hoveredSkill === skill.name && (
                    <motion.span
                      className="relative z-10 text-sm font-bold text-purple-400 dark:text-purple-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  )}
                </div>

                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-2 mt-2 overflow-hidden bg-gray-700 rounded-b-lg dark:bg-gray-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: skill.level / 100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div className="h-full bg-purple-500"></div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
