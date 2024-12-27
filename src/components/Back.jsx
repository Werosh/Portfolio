<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800 z-0">
      {/* Animated Gradient Circles */}
      <motion.div
        className="absolute w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl opacity-30"
        initial={{ x: "-100vw", y: "-50vh" }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["0vh", "50vh", "0vh"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-900 rounded-full filter blur-3xl opacity-20"
        initial={{ x: "100vw", y: "50vh" }}
        animate={{
          x: ["100vw", "-100vw", "100vw"],
          y: ["50vh", "-50vh", "50vh"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-red-800 rounded-full filter blur-3xl opacity-25"
        initial={{ x: "0", y: "100vh" }}
        animate={{
          x: ["0", "-50vw", "50vw", "0"],
          y: ["100vh", "50vh", "-100vh", "0"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Subtle Center Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-transparent opacity-30" />
    </div>
  );
};

=======
import React from "react";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800 z-0">
      {/* Animated Gradient Circles */}
      <motion.div
        className="absolute w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl opacity-30"
        initial={{ x: "-100vw", y: "-50vh" }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["0vh", "50vh", "0vh"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-900 rounded-full filter blur-3xl opacity-20"
        initial={{ x: "100vw", y: "50vh" }}
        animate={{
          x: ["100vw", "-100vw", "100vw"],
          y: ["50vh", "-50vh", "50vh"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-red-800 rounded-full filter blur-3xl opacity-25"
        initial={{ x: "0", y: "100vh" }}
        animate={{
          x: ["0", "-50vw", "50vw", "0"],
          y: ["100vh", "50vh", "-100vh", "0"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Subtle Center Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-transparent opacity-30" />
    </div>
  );
};

>>>>>>> 5a80ef0cdea7f9dcf3d246f7aad35a854e3cac96
export default Back;