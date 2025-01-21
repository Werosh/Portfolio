import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  Send,
  Mail,
  Phone,
  Home,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [matrixRain, setMatrixRain] = useState([]);

  // Matrix rain effect - matching the Projects component style
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

  const socialLinks = [
    { icon: Github, link: "https://github.com/Werosh", label: "GITHUB_CONNECTION" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/werosh-kriyanjala-0318b1292/", label: "LINKEDIN_NODE" },
    { icon: Instagram, link: "https://www.instagram.com/werosh_k/", label: "INSTA_PORTAL" },
    { icon: Facebook, link: "https://www.facebook.com/werosh.kriyanjala.3", label: "FB_NETWORK" },
    { icon: Youtube, link: "https://www.youtube.com/c/KiraGamingSL", label: "YT_STREAM" },
    { icon: MessageSquare, link: "https://wa.link/8yrqoc", label: "WA_CHANNEL" },
    { icon: Send, link: "https://t.me/Mr_WKz", label: "TG_UPLINK" },
  ];

  const contactInfo = [
    { icon: Mail, value: "weroshprofy@gmail.com", link: "mailto:weroshprofy@gmail.com" },
    { icon: Phone, value: "+94 76 94 96 250", link: "tel:+94769496250" },
    { icon: Home, value: "Kurunegala, Sri Lanka", link: null },
  ];

  return (
    <motion.section
    id="contact"
      className="relative py-20 overflow-hidden text-green-400 dark:bg-black bg-gradient-to-b from-black/50 via-transparent to-black/50"
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
            <span className="text-blue-400">~/contact</span>
            <span className="text-gray-500">$</span>
            <span className="ml-2">./initiate_connection.sh</span>
          </div>
          
          <h2 className="text-2xl font-bold text-green-400 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {"<Establish_Connection />"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Protocols */}
          <motion.div
            className="relative overflow-hidden font-mono border rounded-lg border-green-500/30 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-green-500/30">
              <div className="flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                <span className="text-lg font-bold">{"CONTACT_PROTOCOLS"}</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 font-mono"
                  whileHover={{ x: 10, color: "#4ade80" }}
                >
                  <item.icon className="w-5 h-5" />
                  {item.link ? (
                    <a href={item.link} className="flex items-center hover:text-green-300">
                      <span className="text-gray-500">{">"}</span> {item.value}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <span><span className="text-gray-500">{">"}</span> {item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Network Nodes */}
          <motion.div
            className="relative overflow-hidden font-mono border rounded-lg border-green-500/30 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-green-500/30">
              <div className="flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                <span className="text-lg font-bold">{"NETWORK_NODES"}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-2 space-x-3 font-mono transition-all border rounded-lg border-green-500/30 hover:bg-green-500/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredIcon(index)}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <social.icon className="w-5 h-5" />
                  <AnimatePresence>
                    {hoveredIcon === index && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="text-sm"
                      >
                        {social.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;