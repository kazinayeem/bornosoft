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
    <section className="relative pt-28 sm:pt-32 pb-20 min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: currentBg === index ? 0.18 : 0,
            scale: 1 + 0.02 * index,
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${img})`,
            filter: "brightness(0.5) saturate(0.9) contrast(1.1)",
            mixBlendMode: "soft-light",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30 dark:from-blue-500/10 dark:to-purple-500/10 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold 
              text-brand-primary dark:text-brand-accent bg-gradient-to-r from-blue-50 to-purple-50 
              dark:from-gray-800 dark:to-gray-800 border border-brand-primary/20 rounded-full mb-6 shadow-lg"
          >
            🚀 Trusted by 50+ Businesses Worldwide
          </motion.span>

          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white 
              mb-5 sm:mb-6 leading-tight sm:leading-tight md:leading-[1.1]"
          >
            Transform Ideas Into{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Digital Solutions
          </motion.h1>

          {/* Animated Text Flip */}
          <motion.div
            className="mb-6 sm:mb-8 text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 
              flex flex-wrap justify-center items-center gap-2 px-2"
          >
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

          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 
              mb-10 leading-relaxed px-3"
          >
            We build{" "}
            <strong className="text-brand-primary dark:text-brand-accent">
              AI-powered web applications
            </strong>{" "}
            that scale your business from concept to market leadership. Expert
            full-stack development with <strong>95% on-time delivery</strong>{" "}
            and 24-hour response guarantee.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-white text-base sm:text-lg 
                font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation →
            </a>

            <a
              href="#solutions"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-brand-primary dark:text-brand-accent 
                bg-white dark:bg-gray-800 border-2 border-brand-primary dark:border-brand-accent 
                hover:bg-brand-primary hover:text-white hover:border-brand-primary 
                dark:hover:bg-brand-accent dark:hover:text-gray-900 dark:hover:border-brand-accent 
                shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-bold text-base sm:text-lg"
            >
              <Rocket className="w-5 h-5" /> See Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
