import React from "react";
import { Helmet } from "react-helmet";
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
import { Navbar } from "./components/Navbar";
import { BackToTop } from "./components/BackToTop";

const App: React.FC = () => {
  React.useEffect(() => {
    // ✅ Tawk.to chat
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/68f71caf410f37194f262ad0/1j82kg3qj";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return (
    <div className="min-h-screen w-full relative font-sans antialiased">
      {/* SEO Helmet */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Bornosoftnr - Web & IT Solutions</title>
        <meta name="title" content="Bornosoftnr - Web & IT Solutions" />
        <meta
          name="description"
          content="Bornosoftnr provides professional web development, IT solutions, e-commerce, and digital transformation services to grow your business online."
        />
        <meta
          name="keywords"
          content="Bornosoftnr, web development, IT solutions, e-commerce, digital marketing, Bangladesh"
        />
        <meta name="author" content="Bornosoftnr" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bornosoftnr.com" />
        <meta property="og:title" content="Bornosoftnr - Web & IT Solutions" />
        <meta
          property="og:description"
          content="Bornosoftnr provides professional web development, IT solutions, e-commerce, and digital transformation services to grow your business online."
        />
        <meta
          property="og:image"
          content="https://bornosoftnr.com/og-image.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bornosoftnr.com" />
        <meta
          property="twitter:title"
          content="Bornosoftnr - Web & IT Solutions"
        />
        <meta
          property="twitter:description"
          content="Bornosoftnr provides professional web development, IT solutions, e-commerce, and digital transformation services to grow your business online."
        />
        <meta
          property="twitter:image"
          content="https://bornosoftnr.com/og-image.png"
        />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bornosoftnr",
            "url": "https://bornosoftnr.com",
            "logo": "https://bornosoftnr.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/bornosoftnr",
              "https://www.linkedin.com/company/bornosoftnr"
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
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
        <BackToTop />
      </div>
    </div>
  );
};

export default App;
