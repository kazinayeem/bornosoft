"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technologyStack = [
  {
    name: "React / Vue",
    category: "Frontend",
    icon: "https://www.svgrepo.com/show/354259/react.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://www.svgrepo.com/show/452075/node-js.svg",
  },
  {
    name: "Python",
    category: "Backend",
    icon: "https://www.svgrepo.com/show/452091/python.svg",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "https://www.svgrepo.com/show/448266/aws.svg",
  },
  {
    name: "TensorFlow / PyTorch",
    category: "AI/ML",
    icon: "https://www.svgrepo.com/show/354440/tensorflow.svg",
  },
  {
    name: "PostgreSQL / MongoDB",
    category: "Database",
    icon: "https://www.svgrepo.com/show/303301/postgresql-logo.svg",
  },
  {
    name: "Kubernetes / Docker",
    category: "DevOps",
    icon: "https://www.svgrepo.com/show/376331/kubernetes.svg",
  },
];

export const TechStackSection = () => (
  <section
    id="tech"
    className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300  dark:border-gray-800"
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
          Technology Mastery
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Our Cutting-Edge Stack
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          We use battle-tested, modern frameworks and platforms to ensure
          performance and scalability.
        </p>
      </motion.div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {technologyStack.map((tech, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center w-36 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
            }}
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={tech.icon}
                alt={`${tech.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white text-center">
              {tech.name}
            </p>
            <span className="text-xs text-indigo-500 dark:text-indigo-400 mt-1 uppercase tracking-wider text-center">
              {tech.category}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
