import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Terminal, Code2, Cpu, Database, Globe, Zap } from "lucide-react";

const CyberSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [matrixRain, setMatrixRain] = useState([]);
  const [glitchText, setGlitchText] = useState(false);

  const skillsData = [
    {
      name: "JavaScript.exe",
      icon: <Code2 className="w-6 h-6" />,
      level: 90,
      color: "#f7df1e",
      status: "ACTIVE",
      type: "FRONTEND",
    },
    {
      name: "React.sys",
      icon: <Globe className="w-6 h-6" />,
      level: 85,
      color: "#61dafb",
      status: "RUNNING",
      type: "FRAMEWORK",
    },
    {
      name: "Python.bin",
      icon: <Terminal className="w-6 h-6" />,
      level: 70,
      color: "#3776ab",
      status: "STABLE",
      type: "BACKEND",
    },
    {
      name: "Java.jar",
      icon: <Cpu className="w-6 h-6" />,
      level: 60,
      color: "#f89820",
      status: "LOADED",
      type: "SYSTEM",
    },
    {
      name: "MongoDB.db",
      icon: <Database className="w-6 h-6" />,
      level: 55,
      color: "#4db33d",
      status: "CONNECTED",
      type: "DATABASE",
    },
    {
      name: "HTML.html",
      icon: <Code2 className="w-6 h-6" />,
      level: 95,
      color: "#e34c26",
      status: "ACTIVE",
      type: "FRONTEND",
    },
    {
      name: "CSS.css",
      icon: <Code2 className="w-6 h-6" />,
      level: 90,
      color: "#264de4",
      status: "ACTIVE",
      type: "FRONTEND",
    },
    {
      name: "MySQL.sql",
      icon: <Database className="w-6 h-6" />,
      level: 75,
      color: "#4479a1",
      status: "STABLE",
      type: "DATABASE",
    },
    {
      name: "React Native.sys",
      icon: <Globe className="w-6 h-6" />,
      level: 80,
      color: "#61dafb",
      status: "RUNNING",
      type: "FRAMEWORK",
    },
    {
      name: "C#.exe",
      icon: <Terminal className="w-6 h-6" />,
      level: 70,
      color: "#239120",
      status: "STABLE",
      type: "BACKEND",
    },
    {
      name: "PHP.php",
      icon: <Code2 className="w-6 h-6" />,
      level: 65,
      color: "#777bb4",
      status: "ACTIVE",
      type: "BACKEND",
    },
  ];

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

  // Glitch effect for title
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen py-20 overflow-hidden text-green-400 dark:bg-black bg-gradient-to-b from-black/50 via-transparent to-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
        {/* Terminal-style Header */}
        <motion.div
          className="mb-16 font-mono text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block p-2 mb-4 text-sm border rounded-lg border-green-500/30 bg-black/50">
            <span className="text-green-500">root@system</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~/skills</span>
            <span className="text-gray-500">$</span>
            <span className="ml-2">cat abilities.sh</span>
          </div>

          <h2
            className={`text-5xl font-bold text-green-400 ${
              glitchText ? "animate-pulse" : ""
            }`}
          >
            {"<System_Capabilities />"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-100, 100], [30, -30]);
            const rotateY = useTransform(x, [-100, 100], [-30, 30]);

            return (
              <motion.div
                key={index}
                className="relative font-mono border rounded-lg border-green-500/30 bg-black/50 backdrop-blur-sm"
                style={{ x, y, rotateX, rotateY, perspective: 1000 }}
                drag
                dragElastic={0.1}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 20px ${skill.color}30`,
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="p-6 space-y-4">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">{skill.icon}</span>
                      <span className="text-xl font-bold">{skill.name}</span>
                    </div>
                    <span className="px-2 py-1 text-xs border rounded-full border-green-500/30">
                      {skill.status}
                    </span>
                  </div>

                  {/* Skill Type */}
                  <div className="text-sm text-green-300/70">
                    {"// Type: "}
                    {skill.type}
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 overflow-hidden rounded-full bg-green-900/30">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-green-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  {/* Skill Level */}
                  <div className="flex justify-between text-sm">
                    <span>Proficiency Level:</span>
                    <span className="text-green-300">{skill.level}%</span>
                  </div>

                  {/* Loading Line Effect */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute w-full h-0.5 bg-green-500/20"
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default CyberSkills;
