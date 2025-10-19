"use client";

import { motion } from "framer-motion";
import { Aperture, Clock, GitBranch, Shield } from "lucide-react";

const processSteps = [
  {
    icon: GitBranch,
    title: "Agile Development",
    description:
      "Flexible, iterative sprints guarantee continuous progress and fast adaptation to changing requirements.",
    color: "text-blue-500",
  },
  {
    icon: Aperture,
    title: "Total Transparency",
    description:
      "Clients have real-time access to our codebase, task boards, and communication channels. No black boxes.",
    color: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Quality Assurance (QA)",
    description:
      "Dedicated QA engineers ensure rigorous testing, performance tuning, and robust security from day one.",
    color: "text-green-500",
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    description:
      "Post-launch, our team provides timely maintenance and support to ensure 100% uptime and success.",
    color: "text-yellow-500",
  },
];

export const ProcessSection = () => (
  <section
    id="process"
    className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300  dark:border-gray-800"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-base font-semibold text-rose-600 dark:text-rose-400 tracking-wide uppercase">
          Our Commitment
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Why Bornosoft is the Right Partner
        </p>
      </motion.div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 text-center bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md transition duration-300 transform hover:shadow-xl hover:bg-indigo-50/50 dark:hover:bg-gray-700/50 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <step.icon className={`w-10 h-10 mx-auto mb-4 ${step.color}`} />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
