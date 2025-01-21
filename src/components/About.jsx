import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Cpu, Database, Globe } from 'lucide-react';
import myImg from"../assets/images/my/dp.jpg"

const CyberAbout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [matrixRain, setMatrixRain] = useState([]);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { text: "Full Stack Development", icon: <Code2 className="w-6 h-6" />, color: "#22c55e" },
    { text: "System Architecture", icon: <Cpu className="w-6 h-6" />, color: "#22d3ee" },
    { text: "Database Engineering", icon: <Database className="w-6 h-6" />, color: "#a855f7" },
    { text: "Web Technologies", icon: <Globe className="w-6 h-6" />, color: "#ef4444" },
  ];

  // Matrix rain effect
  useEffect(() => {
    const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
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
      setMatrixRain(prev => 
        prev.map(drop => ({
          ...drop,
          y: drop.y > 100 ? -10 : drop.y + drop.speed,
          char: Math.random() < 0.1 ? characters[Math.floor(Math.random() * characters.length)] : drop.char,
          opacity: Math.random(),
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Skill rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="about"
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

      {/* Content Container */}
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="mb-16 font-mono text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block p-2 mb-4 text-sm border rounded-lg border-green-500/30 bg-black/50">
            <span className="text-green-500">root@system</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~/about</span>
            <span className="text-gray-500">$</span>
            <span className="ml-2">cat profile.sh</span>
          </div>
          
          <h2 className="text-5xl font-bold text-green-400">
            {"<About_Profile />"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
             {
              "title": "About.Me",
              "content": "Passionate and dedicated software engineering undergraduate at the University of Moratuwa, with a strong foundation in problem-solving and a commitment to delivering high-quality solutions. I thrive on tackling complex challenges and continuously learning to stay ahead in the ever-evolving tech landscape."
            },
            {
              "title": "System.Profile",
              "content": "Enthusiastic software engineer specializing in modern web technologies and system architecture."
            },
            {
              "title": "Core.Skills",
              "content": "Proficient in full-stack development with expertise in React, Node.js, and cloud infrastructure."
            },
            {
              "title": "Current.Status",
              "content": "Actively developing innovative solutions and exploring cutting-edge technologies."
            }
            ].map((section, index) => (
              <motion.div
                key={index}
                className="p-6 font-mono border rounded-lg border-green-500/30 bg-black/50 backdrop-blur-sm"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-5 h-5" />
                  <span className="text-sm text-green-300">{section.title}</span>
                </div>
                <p className="text-lg leading-relaxed">
                  <span className="text-gray-500">{">"}</span> {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="relative overflow-hidden border-2 rounded-lg w-72 h-72 border-green-500/50"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={myImg}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
                {/* Scanning line effect */}
                <motion.div
                  className="absolute w-full h-1 bg-green-500/50"
                  animate={{
                    top: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              </motion.div>

              {/* Terminal-style skill display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute left-0 right-0 p-4 text-center -bottom-20"
                >
                  <div className="flex items-center justify-center gap-2 p-2 font-mono text-lg border rounded-lg border-green-500/30 bg-black/90">
                    {skills[currentSkill].icon}
                    <span style={{ color: skills[currentSkill].color }}>
                      {skills[currentSkill].text}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.a
              href="#contact"
              className="px-8 py-4 font-mono text-lg font-bold text-black transition-all bg-green-400 border rounded-lg hover:shadow-green-500/30 hover:scale-105 border-green-500/50"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              {"<Initialize_Connection />"}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CyberAbout;