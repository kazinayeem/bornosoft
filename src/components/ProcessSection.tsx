
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
    className="py-24 bg-white/80 dark:bg-transparent transition-colors duration-300 backdrop-blur-sm"
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
        <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
          🤝 Our Commitment
        </h2>
        <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Why BornoSoft is{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            The Right Partner
          </span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Our proven methodology ensures your project succeeds from start to finish
        </p>
      </motion.div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 text-center bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-blue-500/20 shadow-lg hover:shadow-glow-blue dark:hover:border-blue-400/40 transition-all duration-300 transform hover:scale-[1.02] group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <step.icon className={`w-10 h-10 mx-auto mb-4 ${step.color} group-hover:scale-110 transition-transform duration-300`} />
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
