
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { LayoutTextFlip } from "./ui/layout-text-flip";

const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];

export const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 min-h-[100vh] flex items-center overflow-hidden">
      {/* Azure Depths Compatible Background Images */}
      {images.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: currentBg === index ? 0.15 : 0.08,
            scale: 1 + 0.02 * index,
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${img})`,
            filter: "brightness(0.5) saturate(0.8) contrast(1.1)",
            mixBlendMode: "soft-light",
          }}
        />
      ))}

      {/* Azure Depths Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 dark:from-blue-500/10 dark:to-purple-500/10 z-10"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.span className="inline-flex items-center px-5 py-2 text-sm font-semibold text-brand-primary dark:text-brand-accent bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border border-brand-primary/20 rounded-full mb-6 shadow-lg">
            🚀 Trusted by 50+ Businesses Worldwide
          </motion.span>

          <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Transform Ideas Into{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Digital Solutions
          </motion.h1>

          <motion.div className="mb-6 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 flex flex-wrap justify-center items-center gap-2">
            <span className="mr-1">We Build</span>
            <LayoutTextFlip
              text=""
              words={[
                "AI-Powered Web Apps",
                "Scalable Cloud Solutions",
                "Intelligent Dashboards",
                "Progressive Web Apps",
                "Real-Time Analytics",
                "Smart Automation Tools",
              ]}
              duration={2500}
            />
          </motion.div>

          <motion.p className="max-w-3xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            We build{" "}
            <strong className="text-brand-primary dark:text-brand-accent">
              AI-powered web applications
            </strong>{" "}
            that scale your business from concept to market leadership. Expert
            full-stack development with <strong>95% on-time delivery</strong>{" "}
            and 24-hour response guarantee.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-10 py-4 rounded-xl text-white text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation →
            </a>
            <a
              href="#solutions"
              className="px-10 py-4 rounded-xl text-brand-primary dark:text-brand-accent bg-white dark:bg-gray-800 border-2 border-brand-primary dark:border-brand-accent hover:bg-brand-primary hover:text-white hover:border-brand-primary dark:hover:bg-brand-accent dark:hover:text-gray-900 dark:hover:border-brand-accent shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-bold text-lg"
            >
              <Rocket className="w-5 h-5" /> See Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
