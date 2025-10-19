"use client";
import React from "react";

import { HeroSection } from "@/components/HeroSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const App = () => {
  return (
    <div
      className="min-h-screen font-sans antialiased text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <SolutionsSection />
        <PricingSection />
        <ProcessSection />
        <TechStackSection />
        <TeamSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
