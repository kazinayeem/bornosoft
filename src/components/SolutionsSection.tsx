"use client";

import { Bot, Code, Cpu, Server, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code,
    title: "Full-Stack Web Applications",
    description:
      "Building scalable, modern websites and applications with clean architecture and superior performance.",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Bot,
    title: "Intelligent AI & Data Dashboards",
    description:
      "Deploy conversational AI agents and integrate performance metrics into actionable management dashboards.",
    color: "text-rose-500 dark:text-rose-400",
  },
  {
    icon: Cpu,
    title: "Mobile & Cross-Platform Apps",
    description:
      "Crafting native-like experiences for iOS and Android, ensuring seamless device performance.",
    color: "text-amber-500 dark:text-amber-400",
  },
  {
    icon: Server,
    title: "Cloud & Server Management",
    description:
      "Efficient cloud setup and server management to ensure scalable and secure infrastructure.",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description:
      "Designing robust and optimized databases for high performance and reliability.",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description:
      "Delivering web apps with native-like experience and offline capabilities for modern businesses.",
    color: "text-teal-500 dark:text-teal-400",
  },
];

export const SolutionsSection = () => (
  <section
    id="solutions"
    className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300  dark:border-gray-800"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
          Core Offerings
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Powering Your Business with Integrated Technology
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
              }}
              viewport={{ once: true }}
            >
              <Icon
                className={`w-12 h-12 mb-6 ${feature.color}`}
                strokeWidth={2.5}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
