import React from "react";
import { motion } from "framer-motion";

const ModernBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
      {/* Primary Gradient Orbs */}
      <motion.div
        className="absolute bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-60 w-[600px] h-[600px] filter blur-[100px] dark:from-blue-900/30 dark:to-purple-900/30"
        initial={{ x: "-50vw", y: "-50vh", scale: 0.8 }}
        animate={{
          x: ["-50vw", "50vw", "-50vw"],
          y: ["-20vh", "20vh", "-20vh"],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full w-[500px] h-[500px] filter blur-[90px] opacity-50 dark:from-emerald-900/30 dark:to-teal-900/30"
        initial={{ x: "50vw", y: "50vh", rotate: 0 }}
        animate={{
          x: ["50vw", "-30vw", "50vw"],
          y: ["30vh", "-30vh", "30vh"],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-rose-100 to-orange-100 rounded-full opacity-40 w-[550px] h-[550px] filter blur-[95px] dark:from-rose-900/30 dark:to-orange-900/30"
        initial={{ x: "0", y: "100vh", scale: 1 }}
        animate={{
          x: ["0", "-30vw", "30vw", "0"],
          y: ["50vh", "20vh", "-50vh", "50vh"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Secondary Subtle Elements */}
      <motion.div
        className="absolute bg-gradient-to-r from-gray-100 via-white to-gray-50 w-[700px] h-[700px] rounded-full opacity-30 filter blur-[130px] dark:from-gray-800/50 dark:via-gray-900/50 dark:to-gray-800/50"
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Ambient Light Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-white/20 dark:via-gray-900/5 dark:to-gray-900/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent dark:from-gray-900/10" />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* Glass Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5" />
    </div>
  );
};

export default ModernBackground;