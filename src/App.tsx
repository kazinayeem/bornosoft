import React from "react";

import { HeroSection } from "./components/HeroSection";
import { TrustIndicatorsSection } from "./components/TrustIndicatorsSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { ProcessSection } from "./components/ProcessSection";
import { TechStackSection } from "./components/TechStackSection";
import { TeamSection } from "./components/TeamSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BackToTop } from "./components/BackToTop";

const App: React.FC = () => {
  React.useEffect(() => {
    // ✅ Add Tawk.to script dynamically
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/68f71caf410f37194f262ad0/1j82kg3qj";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return (
    <div className="min-h-screen w-full relative font-sans antialiased">
      {/* Azure Depths Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Light overlay */}
      <div className="fixed inset-0 z-0 bg-white dark:bg-transparent transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 text-gray-800 dark:text-gray-100">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <TrustIndicatorsSection />
          <SolutionsSection />
          <TechStackSection />
          <ProcessSection />
          <ProjectsSection />
          <TestimonialsSection />
          <TeamSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;
