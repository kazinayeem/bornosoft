
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiTool,
} from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const skillCategories = [
  {
    title: "Frontend Frameworks",
    icon: <FiCode className="text-2xl" />,
    color: "from-blue-400 to-purple-600",
    bgColor: "from-blue-500/10 to-purple-600/10",
    skills: [
      { icon: "react", name: "React" },
      { icon: "nextjs", name: "Next.js" },
      { icon: "vue", name: "Vue" },
      { icon: "tailwind", name: "Tailwind" },
      { icon: "bootstrap", name: "Bootstrap" },
      { icon: "materialui", name: "Material UI" },
    ],
  },
  {
    title: "Backend & Runtime",
    icon: <FiDatabase className="text-2xl" />,
    color: "from-green-400 to-emerald-600",
    bgColor: "from-green-500/10 to-emerald-600/10",
    skills: [
      { icon: "nodejs", name: "Node.js" },
      { icon: "express", name: "Express" },
      { icon: "python", name: "Python" },
      { icon: "django", name: "Django" },
      { icon: "fastapi", name: "FastAPI" },
      { icon: "graphql", name: "GraphQL" },
    ],
  },
  {
    title: "Databases",
    icon: <FiLayers className="text-2xl" />,
    color: "from-orange-400 to-red-600",
    bgColor: "from-orange-500/10 to-red-600/10",
    skills: [
      { icon: "postgresql", name: "PostgreSQL" },
      { icon: "mysql", name: "MySQL" },
      { icon: "mongodb", name: "MongoDB" },
      { icon: "redis", name: "Redis" },
      { icon: "sqlite", name: "SQLite" },
      { icon: "firebase", name: "Firebase" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <FiTool className="text-2xl" />,
    color: "from-purple-400 to-pink-600",
    bgColor: "from-purple-500/10 to-pink-600/10",
    skills: [
      { icon: "docker", name: "Docker" },
      { icon: "kubernetes", name: "Kubernetes" },
      { icon: "git", name: "Git" },
      { icon: "github", name: "GitHub" },
      { icon: "aws", name: "AWS" },
      { icon: "vercel", name: "Vercel" },
    ],
  },
  {
    title: "AI/ML & Data",
    icon: <FiCode className="text-2xl" />,
    color: "from-cyan-400 to-blue-600",
    bgColor: "from-cyan-500/10 to-blue-600/10",
    skills: [
      { icon: "tensorflow", name: "TensorFlow" },
      { icon: "pytorch", name: "PyTorch" },
      { icon: "opencv", name: "OpenCV" },
      { icon: "sklearn", name: "Scikit-learn" },
    ],
  },
  {
    title: "Languages",
    icon: <FiCode className="text-2xl" />,
    color: "from-yellow-400 to-orange-600",
    bgColor: "from-yellow-500/10 to-orange-600/10",
    skills: [
      { icon: "js", name: "JavaScript" },
      { icon: "ts", name: "TypeScript" },
      { icon: "python", name: "Python" },
      { icon: "java", name: "Java" },
      { icon: "cpp", name: "C++" },
      { icon: "c", name: "C" },
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section
      id="tech"
      className="py-24 bg-white/80 dark:bg-transparent backdrop-blur-sm transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
            ⚡ Technology Mastery
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Cutting-Edge
            </span>{" "}
            Stack
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We use battle-tested, modern frameworks and platforms to ensure
            performance and scalability.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={item}
              className={`bg-gradient-to-br ${category.bgColor} bg-white/95 dark:bg-gray-800/70 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-gray-100 dark:border-blue-500/20 shadow-lg hover:shadow-glow-blue dark:hover:border-blue-400/40 transition-all duration-300 group hover:scale-105`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`bg-gradient-to-r ${category.color} p-3 rounded-xl mr-4 text-white shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="group/skill relative"
                  >
                    <div className="bg-white/80 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-600/70 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-brand-primary dark:hover:border-brand-accent transition-all duration-300 text-center group-hover/skill:scale-110 group-hover/skill:shadow-lg">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 transition-transform duration-300 group-hover/skill:rotate-12"
                        loading="lazy"
                      />

                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>

                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover/skill:opacity-100 transition-all duration-300 whitespace-nowrap z-10 shadow-xl border border-white/10 pointer-events-none">
                        <div className="font-semibold">{skill.name}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 -mt-1"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
