"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What services does BornoSoft offer?",
    answer:
      "We offer comprehensive digital solutions including full-stack web development, AI-powered applications, mobile app development, cloud infrastructure management, database optimization, and progressive web apps. Our team specializes in React, Node.js, Python, and modern cloud platforms like AWS.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex web applications with AI integration typically require 4-12 weeks. We provide detailed timelines during our free consultation and maintain 95% on-time delivery rate.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing: Starter packages from $100 USD (~12,000 BDT) for simple projects, Professional packages from $420 USD (~50,000 BDT) for businesses with AI features, and custom Enterprise solutions. All prices are one-time project fees with transparent cost breakdown.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! All projects include 30 days of free post-launch support. We also offer ongoing maintenance packages with 24/7 support, security updates, performance monitoring, and feature enhancements. Our dedicated support team ensures 100% uptime for critical applications.",
  },
  {
    question: "Can you work with existing systems?",
    answer:
      "Absolutely! We specialize in system integration and legacy modernization. We can integrate with your existing databases, APIs, and third-party services. Our team has experience with various platforms and can ensure smooth migration with zero downtime.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use cutting-edge technologies: React/Vue for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for databases, AWS/Azure for cloud, TensorFlow/PyTorch for AI/ML, and Docker/Kubernetes for DevOps. We always choose the best tech stack for your specific needs.",
  },
  {
    question: "Do you sign NDAs and protect intellectual property?",
    answer:
      "Yes, we take confidentiality seriously. We sign NDAs before project discussions and ensure all intellectual property rights belong to you. Our team follows strict security protocols and industry best practices to protect your data.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow agile development with continuous testing, code reviews, and QA processes. Every project undergoes rigorous security audits, performance testing, and user acceptance testing. We maintain transparent communication with real-time project tracking.",
  },
  {
    question: "Can you scale solutions as our business grows?",
    answer:
      "Yes! We build scalable architectures from day one. Our solutions use microservices, auto-scaling cloud infrastructure, and optimized databases that can handle growth from 100 to 1 million users. We also provide performance monitoring and optimization services.",
  },
  {
    question: "What makes BornoSoft different from other agencies?",
    answer:
      "We combine technical excellence with business understanding. Our team offers 24-hour response guarantee, total transparency with real-time project access, 95% on-time delivery, dedicated QA engineers, and post-launch support. We're not just developers—we're your technology partners.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 bg-white/80 dark:bg-transparent transition-colors duration-300 backdrop-blur-sm"
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
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              We&apos;ve Got Answers
            </span>
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with BornoSoft
          </p>
        </motion.div>

        {/* FAQ Accordion - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-brand-primary dark:border-brand-accent shadow-xl"
                  : "border-gray-200 dark:border-gray-700 hover:border-brand-primary/50 dark:hover:border-brand-accent/50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-start justify-between text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-br from-blue-600 to-purple-600 scale-110"
                      : "bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500"
                  }`}>
                    <span className={`font-bold ${
                      openIndex === index ? "text-white" : "text-gray-600 dark:text-gray-300"
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white pr-4 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? "bg-brand-primary dark:bg-brand-accent"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}>
                    <ChevronDown className={`w-5 h-5 ${
                      openIndex === index ? "text-white" : "text-gray-600 dark:text-gray-300"
                    }`} />
                  </div>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 rounded-xl border border-brand-primary/20 dark:border-brand-accent/20">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="relative text-center mt-16 p-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-black text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Our team is here to help. Get in touch for a free consultation and let&apos;s discuss your project.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 rounded-xl text-brand-primary font-black bg-white hover:bg-gray-100 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-white/50"
            >
              Contact Us Now →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
