import { motion } from "framer-motion";
import { Award, Clock, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Users,
    label: "Happy Clients",
    value: 50,
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    label: "Projects Completed",
    value: 120,
    suffix: "+",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    label: "On-Time Delivery",
    value: 95,
    suffix: "%",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Award,
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    label: "Security Audits Passed",
    value: 100,
    suffix: "%",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Zap,
    label: "Avg Response Time",
    value: 24,
    suffix: "h",
    color: "from-indigo-500 to-purple-500",
  },
];

const CountUpAnimation = ({
  end,
  duration = 2,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const TrustIndicatorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-transparent dark:to-transparent transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
        >
          <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
            📊 Proven Track Record
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full p-8 bg-white/90 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-transparent group-hover:bg-transparent">
                  {/* Animated Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  ></div>

                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${stat.color} blur-xl -z-10`}
                  ></div>

                  {/* Icon with Enhanced Design */}
                  <div className="relative mb-6 flex justify-center">
                    <motion.div
                      className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>

                  {/* Counter with Enhanced Typography */}
                  <div className="relative text-center">
                    <motion.h3
                      className="text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br group-hover:text-white transition-colors duration-500"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span
                        className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent group-hover:text-white transition-all duration-500`}
                      >
                        {isVisible ? (
                          <CountUpAnimation
                            end={stat.value}
                            suffix={stat.suffix}
                          />
                        ) : (
                          `0${stat.suffix}`
                        )}
                      </span>
                    </motion.h3>
                    <p className="text-base font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide group-hover:text-white transition-colors duration-500">
                      {stat.label}
                    </p>

                    {/* Decorative Line */}
                    <div
                      className={`mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r ${stat.color} group-hover:bg-white group-hover:w-24 transition-all duration-500`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Partnerships */}
        <motion.div
          className="mt-24 p-10 bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border-2 border-gray-200 dark:border-gray-700 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8 text-center">
            Trusted Technology Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              "AWS",
              "Google Cloud",
              "Microsoft Azure",
              "MongoDB",
              "PostgreSQL",
              "Docker",
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-300 dark:border-gray-600"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
