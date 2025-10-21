"use client";
import React from "react";

import { HeroSection } from "@/components/HeroSection";
import { TrustIndicatorsSection } from "@/components/TrustIndicatorsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";

const App = () => {
  return (
    <div className="min-h-screen w-full relative font-sans antialiased">
      {/* Azure Depths Background - Always visible */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
      
      {/* Light Mode Overlay */}
      <div className="fixed inset-0 z-0 bg-white dark:bg-transparent transition-colors duration-500" />
      
      {/* Content Container */}
      <div className="relative z-10 text-gray-800 dark:text-gray-100">
        <Navbar />
        <main className="pt-16">
          {/* 1. Hero - First Impression */}
          <HeroSection />
          
          {/* 2. Trust Indicators - Build Credibility */}
          <TrustIndicatorsSection />
          
          {/* 3. Solutions - What We Offer */}
          <SolutionsSection />
          
          {/* 4. Tech Stack - Our Expertise */}
          <TechStackSection />
          
          {/* 5. Process - How We Work */}
          <ProcessSection />
          
          {/* 6. Projects - Proof of Work */}
          <ProjectsSection />
          
          {/* 7. Testimonials - Social Proof */}
          <TestimonialsSection />
          
          {/* 8. Team - Meet the Experts */}
          <TeamSection />
          
          {/* 9. Pricing - Clear Investment */}
          <PricingSection />
          
          {/* 10. FAQ - Answer Questions */}
          <FAQSection />
          
          {/* 11. Contact - Take Action */}
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;
