"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];

export const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 min-h-[93vh] flex items-center overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: currentBg === index ? 0.35 : 0.25, 
            scale: 1 + 0.02 * index, 
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${img})`,
            filter: "brightness(0.7) saturate(0.7)", 
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 opacity-70 z-10"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.span className="inline-flex items-center px-4 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-6 shadow-sm">
            The Future of Digital Solutions
          </motion.span>

          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Empowering <span className="text-indigo-600 dark:text-indigo-400">Businesses</span> with Smart Technology
          </motion.h1>

          <motion.div className="mb-6 text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 flex flex-wrap justify-center gap-1">
            <span className="mr-2">Delivering</span>
            <LayoutTextFlip
              text=""
              words={["Modern Web Applications", "AI-Powered Solutions", "Streamlined Growth", "Intelligent Automation"]}
            />
          </motion.div>

          <motion.p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-10 sm:text-lg">
            Bornosoft provides cutting-edge software and intelligent solutions to accelerate your business growth, streamline operations, and transform digital experiences.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#solutions" className="px-8 py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition transform hover:scale-105">
              Explore Solutions
            </a>
            <a href="#contact" className="px-8 py-3 rounded-xl text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 shadow transition transform hover:scale-105 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" /> Launch Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
