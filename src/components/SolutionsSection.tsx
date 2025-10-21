"use client";

import { Bot, Code, Cpu, Server, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code,
    title: "Full-Stack Web Applications",
    description:
      "Building scalable, modern websites and applications with clean architecture and superior performance.",
    color: "text-brand-primary dark:text-brand-primary",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Bot,
    title: "Intelligent AI & Data Dashboards",
    description:
      "Deploy conversational AI agents and integrate performance metrics into actionable management dashboards.",
    color: "text-brand-secondary dark:text-brand-secondary",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "Mobile & Cross-Platform Apps",
    description:
      "Crafting native-like experiences for iOS and Android, ensuring seamless device performance.",
    color: "text-brand-accent dark:text-brand-accent",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Server,
    title: "Cloud & Server Management",
    description:
      "Efficient cloud setup and server management to ensure scalable and secure infrastructure.",
    color: "text-green-600 dark:text-green-400",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description:
      "Designing robust and optimized databases for high performance and reliability.",
    color: "text-purple-600 dark:text-purple-400",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description:
      "Delivering web apps with native-like experience and offline capabilities for modern businesses.",
    color: "text-brand-accent dark:text-brand-accent",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export const SolutionsSection = () => (
  <section
    id="solutions"
    className="py-20 bg-gray-50/80 dark:bg-transparent transition-colors duration-300 backdrop-blur-sm"
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
        <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
          🎯 Core Offerings
        </h2>
        <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Powering Your Business with{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Integrated Technology
          </span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          End-to-end digital solutions tailored to transform your business challenges into competitive advantages
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="group relative p-8 bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-blue-500/20 flex flex-col items-center text-center cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.2)",
              }}
              viewport={{ once: true }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <Icon
                    className={`w-8 h-8 ${feature.color}`}
                    strokeWidth={2.5}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
