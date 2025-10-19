"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Top Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1 text-sm font-semibold leading-5 text-indigo-600 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 shadow-md"
          >
            The Future of Digital Solutions is Here
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Empowering{" "}
            <span className="text-rose-600 dark:text-rose-400">Businesses</span>{" "}
            with Smart Technology
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10"
          >
            Bornosoft delivers modern web applications and intelligent AI
            solutions, seamlessly integrated to accelerate your business growth
            and streamline operations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#solutions"
              className="inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.03]"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg font-semibold rounded-xl text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.03]"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Launch Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
