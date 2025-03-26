import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ backgroundImage, title, description, buttonText }) => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg shadow-lg hover:bg-orange-800 transition"
          whileHover={{ scale: 1.1 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
