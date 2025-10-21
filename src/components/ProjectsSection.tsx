"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    client: "RetailMax",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    description: "Complete platform overhaul with AI-powered product recommendations and real-time inventory management.",
    metrics: [
      { label: "Sales Increase", value: "+250%", icon: TrendingUp },
      { label: "User Growth", value: "+180%", icon: Users },
      { label: "Page Speed", value: "98/100", icon: Zap },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    title: "AI-Powered Healthcare Dashboard",
    client: "HealthCare Plus",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description: "HIPAA-compliant patient management system with predictive analytics and automated reporting.",
    metrics: [
      { label: "Efficiency", value: "+300%", icon: TrendingUp },
      { label: "Patients Served", value: "50K+", icon: Users },
      { label: "Uptime", value: "99.9%", icon: Zap },
    ],
    technologies: ["Python", "TensorFlow", "React", "MongoDB"],
    link: "#",
  },
  {
    title: "FinTech Mobile Banking App",
    client: "FinanceHub",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description: "Cross-platform mobile banking solution with biometric authentication and real-time transactions.",
    metrics: [
      { label: "Downloads", value: "100K+", icon: Users },
      { label: "Rating", value: "4.8/5.0", icon: TrendingUp },
      { label: "Transactions", value: "$5M+", icon: Zap },
    ],
    technologies: ["React Native", "Node.js", "Redis", "Docker"],
    link: "#",
  },
  {
    title: "Cloud Infrastructure Migration",
    client: "TechStart Inc",
    category: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    description: "Complete migration from on-premise to AWS with auto-scaling, load balancing, and disaster recovery.",
    metrics: [
      { label: "Cost Savings", value: "-40%", icon: TrendingUp },
      { label: "Performance", value: "+200%", icon: Zap },
      { label: "Availability", value: "99.95%", icon: Users },
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "Docker"],
    link: "#",
  },
  {
    title: "AI Chatbot Integration",
    client: "GreenEco Solutions",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    description: "Intelligent customer support chatbot with natural language processing and multi-language support.",
    metrics: [
      { label: "Engagement", value: "+300%", icon: TrendingUp },
      { label: "Resolution Rate", value: "85%", icon: Zap },
      { label: "Response Time", value: "<2s", icon: Users },
    ],
    technologies: ["Python", "GPT-4", "React", "WebSocket"],
    link: "#",
  },
  {
    title: "Data Analytics Platform",
    client: "DataFlow",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Real-time analytics dashboard with predictive modeling and automated insights generation.",
    metrics: [
      { label: "Data Processed", value: "10TB+", icon: Zap },
      { label: "Users", value: "5K+", icon: Users },
      { label: "Insights", value: "95% Accuracy", icon: TrendingUp },
    ],
    technologies: ["Python", "Apache Spark", "React", "MongoDB"],
    link: "#",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
  <section
    id="projects"
    className="py-24 bg-gray-50/80 dark:bg-transparent transition-colors duration-300 backdrop-blur-sm"
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
          💼 Featured Projects
        </h2>
        <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Real Results from{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Real Projects
          </span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Explore our portfolio of successful projects that drove measurable business impact
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-blue-500/20 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-bold text-white bg-brand-primary rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white select-text">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="text-brand-primary dark:text-brand-accent hover:scale-110 transition-transform flex-shrink-0"
                  aria-label="View project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-brand-secondary dark:text-brand-accent font-semibold mb-3 select-text">
                Client: <span className="text-brand-primary dark:text-white">{project.client}</span>
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed select-text">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                {project.metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div key={idx} className="text-center">
                      <Icon className="w-5 h-5 text-brand-primary dark:text-brand-accent mx-auto mb-2" />
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold text-brand-primary dark:text-brand-accent bg-blue-50 dark:bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      {!showAll && projects.length > 4 && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-4 rounded-xl text-white font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View More Projects ({projects.length - 4} more) →
          </button>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Ready to see similar results for your business?
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-xl text-white font-bold bg-gradient-primary hover:shadow-glow-blue shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Let&apos;s Build Something Amazing →
        </a>
      </motion.div>
    </div>
  </section>
  );
};
