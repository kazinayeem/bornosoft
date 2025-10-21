"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Mail, Linkedin, Github, Twitter, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Mohammad Ali Nayeem",
    position: "Full Stack Developer & Software Engineer",
    bio: "Passionate about building scalable, user-friendly, and modern web applications. Experienced in full-stack development with a strong interest in AI, Machine Learning, and Data Science.",
    image: "https://avatars.githubusercontent.com/u/85398213?v=4",
    location: "Dhaka, Bangladesh",
    socials: {
      email: "nayeem@bornosoft.com",
      linkedin: "https://linkedin.com/in/mohammadalinayeem",
      github: "https://github.com/kazinayeem",
      twitter: "https://twitter.com/mohammadalinayeem",
      website: "https://nayeem.dev"
    }
  },
  {
    name: "Reduan Ahmad",
    position: "Full Stack Developer & Software Engineer",
    bio: "Dedicated to creating modern, efficient, and visually engaging web experiences. Skilled in frontend and backend development, transforming ideas into seamless digital solutions.",
    image: "https://avatars.githubusercontent.com/u/143122014?v=4",
    location: "Dhaka, Bangladesh",
    socials: {
      email: "reduanahmadswe@gmail.com",
      linkedin: "https://linkedin.com/in/reduanahmadswe",
      github: "https://github.com/reduanahmadswe",
      twitter: "https://twitter.com/reduanahmadswe",
      website: "https://reduanahmadswe.site"
    }
  },
];

export const TeamSection = () => (
  <section
    id="team"
    className="py-24 bg-gray-50/80 dark:bg-transparent transition-colors duration-300 backdrop-blur-sm"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-auto self-center">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
          Meet the Experts
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Driven by Passion, Defined by Expertise
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white/95 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-blue-500/20 transition duration-500 hover:shadow-2xl hover:ring-2 ring-brand-primary/50 dark:ring-brand-accent/50 transform hover:scale-[1.03] w-full sm:w-[380px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Optimized Image */}
            <motion.div
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative mb-6 w-36 h-36 rounded-full border-4 border-indigo-500 dark:border-indigo-400 overflow-hidden shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="150px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://placehold.co/150x150/000000/FFFFFF?text=Team";
                }}
              />
            </motion.div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {member.name}
            </h3>

            <div className="flex items-center justify-center space-x-2 text-rose-600 dark:text-rose-400 mb-3 font-medium text-sm">
              <Briefcase className="w-4 h-4" />
              <span>{member.position}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {member.bio}
            </p>

            <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <MapPin className="w-4 h-4" />
              <span>{member.location}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <motion.a
                href={`mailto:${member.socials.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-br from-red-500 to-pink-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href={member.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Portfolio"
              >
                <Globe className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
