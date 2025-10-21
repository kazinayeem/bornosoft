"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc",
    company: "TechStart",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "BornoSoft transformed our outdated system into a modern, AI-powered platform. Their expertise in full-stack development and commitment to quality exceeded our expectations. Highly recommended!",
  },
  {
    name: "Michael Chen",
    position: "CTO, FinanceHub",
    company: "FinanceHub",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    text: "Working with BornoSoft was a game-changer for our business. They delivered a scalable cloud solution on time and within budget. The team's technical proficiency is outstanding.",
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, GreenEco Solutions",
    company: "GreenEco",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "The AI chatbot integration they built for us increased our customer engagement by 300%. BornoSoft's innovative approach and transparent communication made the entire process seamless.",
  },
  {
    name: "David Park",
    position: "Product Manager, DataFlow",
    company: "DataFlow",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Exceptional quality and attention to detail. BornoSoft built our progressive web app with amazing performance. Their post-launch support has been phenomenal. True professionals!",
  },
  {
    name: "Lisa Thompson",
    position: "Director, HealthCare Plus",
    company: "HealthCare Plus",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "BornoSoft's team understood our complex healthcare requirements perfectly. They delivered a HIPAA-compliant solution with robust security features. Couldn't be happier with the results!",
  },
  {
    name: "James Wilson",
    position: "VP Engineering, RetailMax",
    company: "RetailMax",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    text: "Their agile development approach and dedication to our success made all the difference. BornoSoft delivered a custom e-commerce platform that boosted our sales by 250%. Outstanding work!",
  },
];

export const TestimonialsSection = () => (
  <section
    id="testimonials"
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
        <h2 className="text-base font-bold text-brand-primary dark:text-brand-accent tracking-wide uppercase mb-3">
          ⭐ Client Success Stories
        </h2>
        <p className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Don&apos;t just take our word for it — hear what our clients say about their experience
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative p-8 bg-gray-50/95 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-blue-500/20 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.2)",
            }}
            viewport={{ once: true }}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-primary/20 dark:text-brand-accent/20" />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow select-text">
              &ldquo;{testimonial.text}&rdquo;
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary dark:border-brand-accent">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white select-text">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 select-text">
                  {testimonial.position}
                </p>
                <p className="text-sm text-gray-900 dark:text-white font-extrabold select-text mt-1">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Join 50+ satisfied clients who transformed their business with BornoSoft
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-xl text-white font-bold bg-gradient-primary hover:shadow-glow-blue shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Start Your Success Story →
        </a>
      </motion.div>
    </div>
  </section>
);
