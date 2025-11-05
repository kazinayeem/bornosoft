import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  TrendingUp,
  Users,
  Zap,
  Cloud,
  Code,
  Database,
  Globe,
  Layers,
  DollarSign,
  HardHat,
} from "lucide-react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Metric {
  label: string;
  value: string;
  icon: IconComponent;
}

interface Project {
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  metrics: Metric[];
  technologies: string[];
  link: string;
  icon: IconComponent;
}

const projects: Project[] = [
  {
    title: "NexusFlow: Unified SaaS Platform",
    client: "Orion Solutions Group",
    category: "SaaS & Productivity",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    description:
      "A complete B2B SaaS platform offering integrated CRM, analytics, and collaboration tools, driving a 30% reduction in operational costs.",
    metrics: [
      { label: "Op-Cost Reduction", value: "-30%", icon: TrendingUp },
      { label: "Active Users", value: "20K+", icon: Users },
      { label: "Response Time", value: "<100ms", icon: Zap },
    ],
    technologies: ["React", "GoLang", "PostgreSQL", "Kafka"],
    link: "#",
    icon: Layers,
  },
  {
    title: "AuraHealth: Predictive Diagnostic Engine",
    client: "Zenith Medical Lab",
    category: "AI & Machine Learning",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    description:
      "HIPAA-compliant system using deep learning to predict patient readmission rates and automate risk assessment with 95% accuracy.",
    metrics: [
      { label: "Accuracy", value: "95%", icon: TrendingUp },
      { label: "Data Points", value: "50M+", icon: Database },
      { label: "Deployment Speed", value: "Fast", icon: Zap },
    ],
    technologies: ["Python", "TensorFlow", "Kubernetes", "Azure ML"],
    link: "#",
    icon: Database,
  },
  {
    title: "VaultLedger: Decentralized Wallet App",
    client: "Echelon Capital Partners",
    category: "Web3 & Blockchain",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    description:
      "A cross-platform mobile wallet supporting multi-chain assets, secured with zero-knowledge proof technology and biometric keys.",
    metrics: [
      { label: "Assets Secured", value: "$50M+", icon: Globe },
      { label: "Transactions", value: "10K/day", icon: Zap },
      { label: "User Rating", value: "4.9/5", icon: TrendingUp },
    ],
    technologies: ["React Native", "Solidity", "IPFS", "TypeScript"],
    link: "#",
    icon: Code,
  },
  {
    title: "AscendOps: Automated DevSecOps Pipeline",
    client: "Pixel Foundry Studios",
    category: "Cloud & DevOps",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    description:
      "Infrastructure-as-Code implementation, migrating legacy monolithic systems to a fully serverless, auto-scaling AWS architecture.",
    metrics: [
      { label: "Cost Savings", value: "40%", icon: TrendingUp },
      { label: "CI/CD Speed", value: "10x Faster", icon: Zap },
      { label: "Uptime SLA", value: "99.99%", icon: Cloud },
    ],
    technologies: ["AWS", "Terraform", "Kubernetes", "Python"],
    link: "#",
    icon: Cloud,
  },
  {
    title: "EcoDash: Real-Time Data Visualization",
    client: "TerraSense Environmental",
    category: "Data Engineering",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description:
      "High-throughput data streaming and analytics dashboard for environmental sensor data, providing immediate actionable insights.",
    metrics: [
      { label: "Data Processed", value: "1TB/hr", icon: Zap },
      { label: "Latency", value: "<50ms", icon: Database },
      { label: "Users", value: "5K+", icon: Users },
    ],
    technologies: ["Apache Spark", "Kafka", "React", "MongoDB"],
    link: "#",
    icon: TrendingUp,
  },
  {
    title: "EchoSense: Multi-Channel NLP Assistant",
    client: "ContactStream BPO",
    category: "AI Solutions",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    description:
      "Custom GPT-powered conversational AI integrated across web, mobile, and voice channels, handling 85% of initial customer inquiries.",
    metrics: [
      { label: "Inquiry Handling", value: "85%", icon: TrendingUp },
      { label: "CSAT Score", value: "+15%", icon: Users },
      { label: "Model Training", value: "12hrs", icon: Zap },
    ],
    technologies: ["Python", "GPT-4 API", "WebSocket", "React"],
    link: "#",
    icon: Users,
  },
  // --- UPDATED PROJECTS ---
  {
    title: "SwiftRoute: Multi-Vendor Logistics Network",
    client: "HT Bazar e-comm",
    category: "Logistics & Supply Chain",
    image:
      "https://images.unsplash.com/photo-1557827299-8051284568e9?q=80&w=800&auto=format&fit=crop",
    description:
      "Real-time parcel tracking and dynamic routing for multiple courier partners, featuring automated vendor selection for optimal cost and speed.",
    metrics: [
      { label: "Delivery Speed", value: "98%", icon: Zap },
      { label: "Network Partners", value: "20+", icon: Globe },
      { label: "Transaction Volume", value: "1M/month", icon: Layers },
    ],
    technologies: ["Node.js", "RabbitMQ", "PostGIS", "Vue.js"],
    link: "#",
    icon: Globe,
  },
  {
    title: "Luminus Academy: Smart Education Platform",
    client: "PathFinder Education Co.",
    category: "EdTech & Content Delivery",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop",
    description:
      "A SCORM-compliant platform for selling micro-courses, featuring adaptive learning paths, VOD encoding, and integrated payment gateways.",
    metrics: [
      { label: "Completion Rate", value: "+25%", icon: TrendingUp },
      { label: "Course Listings", value: "1,500+", icon: Database },
      { label: "Server Load (Avg.)", value: "<10%", icon: Cloud },
    ],
    technologies: ["Next.js", "Stripe", "HLS Streaming", "MongoDB"],
    link: "#",
    icon: Zap,
  },
  {
    title: "PennyPal: Cross-Platform Expense Tracker",
    client: "The Budget Architect",
    category: "Mobile FinTech",
    image:
      "https://images.unsplash.com/photo-1551408139-335194165d21?q=80&w=800&auto=format&fit=crop",
    description:
      "A fast, native-feeling mobile app for tracking and categorizing personal expenses, utilizing OCR receipt scanning and offline storage capabilities.",
    metrics: [
      { label: "Daily Active Users", value: "10K+", icon: Users },
      { label: "App Size", value: "<15MB", icon: Code },
      { label: "Sync Speed", value: "<1s", icon: Zap },
    ],
    technologies: ["React Native", "GraphQL", "SQLite", "Firebase Auth"],
    link: "#",
    icon: DollarSign,
  },
  {
    title: "FusionCI/CD: Decoupled DevOps Automation",
    client: "Vertex Retail Group",
    category: "Advanced DevOps",
    image:
      "https://images.unsplash.com/photo-1582236371720-302a28172935?q=80&w=800&auto=format&fit=crop",
    description:
      "A highly scalable, self-healing CI/CD pipeline using a GitOps approach, drastically reducing deployment failures and rollback times.",
    metrics: [
      { label: "Deployment Failure", value: "-90%", icon: TrendingUp },
      { label: "Rollback Time", value: "<5s", icon: Zap },
      { label: "Environments", value: "Staging, Prod, Dev", icon: HardHat },
    ],
    technologies: ["Jenkins", "Docker", "Ansible", "Kubernetes"],
    link: "#",
    icon: HardHat,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const Icon = project.icon;
  return (
    <motion.div
      key={index}
      className="group relative rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent 
                 bg-white dark:bg-gray-900 dark:border-indigo-500/50 hover:shadow-indigo-500/30 
                 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/800x600/1e293b/a5b4fc?text=Project+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-6 flex items-center gap-3">
          <Icon className="w-6 h-6 text-teal-400" />
          <span className="text-sm font-bold text-white tracking-wider">
            {project.category}
          </span>
        </div>
        <a
          href={project.link}
          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full 
                     text-white hover:bg-white/40 transition-all"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-extrabold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-md text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
          Client:{" "}
          <span className="text-gray-700 dark:text-gray-300">
            {project.client}
          </span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.metrics.map((metric, idx) => {
            const MetricIcon = metric.icon;
            return (
              <div key={idx} className="text-center">
                <MetricIcon className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 
                         text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const projectsRemaining = projects.length - 3;

  const gradientButtonClass =
    "px-8 py-3 rounded-xl text-white font-bold bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-md transition-transform hover:scale-105";

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-bold text-teal-500 uppercase mb-3">
            🚀 Case Studies
          </h2>
          <p className="mt-2 text-4xl sm:text-6xl font-black mb-4 leading-tight text-gray-900 dark:text-white">
            Impactful Results,{" "}
            <span className="bg-linear-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Real Innovation
            </span>
          </p>
          <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            Explore how we leverage cutting-edge technology to deliver
            measurable value and solve complex real-world challenges for our
            clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {!showAll && projectsRemaining > 0 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className={gradientButtonClass}
            >
              View {projectsRemaining} More Case Studies →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
