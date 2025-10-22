import {
  Rocket,
  Lightbulb,
  TrendingUp,
  Users,
  ShieldCheck,
  Zap,
  Code,
  Globe,
} from "lucide-react";
import { Helmet } from "react-helmet";

/**
 * Core values array with icon, title, description, and color.
 */
const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly explore new technologies and creative approaches to solve complex problems.",
    color: "text-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We empower our clients and teams to achieve measurable progress and sustainable growth.",
    color: "text-green-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in strong partnerships and open communication to deliver outstanding results.",
    color: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "We design software with security-first principles to protect data and maintain trust.",
    color: "text-red-500",
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "We follow best practices and rigorous standards to build high-quality, reliable software.",
    color: "text-indigo-500",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We consider international standards and cultural contexts to deliver globally impactful solutions.",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Agility",
    description:
      "We adapt quickly to changing markets and technologies to stay ahead of the curve.",
    color: "text-pink-500",
  },
  {
    icon: Rocket,
    title: "Vision",
    description:
      "We aim for ambitious goals and bold ideas that propel our clients into the future.",
    color: "text-orange-500",
  },
];

/**
 * Main application component for the BornosoftNr About Us Page.
 */
const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - BornoSoft</title>
        <meta
          name="description"
          content="Learn about BornoSoft, a leading AI-powered software development company in Bangladesh."
        />
        <link rel="canonical" href="https://bornosoftnr.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us - BornoSoft" />
        <meta
          property="og:description"
          content="Leading AI-powered software company."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bornosoftnr.com/about" />
        <meta
          property="og:image"
          content="https://bornosoftnr.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - BornoSoft" />
        <meta
          name="twitter:description"
          content="Leading AI-powered software company."
        />
        <meta
          name="twitter:image"
          content="https://bornosoftnr.com/og-image.jpg"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
        <main>
          {/* Hero Section */}
          <header className="py-24 bg-gradient-to-r from-indigo-700 to-blue-600 text-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
                A New Era of Morfen Software
              </h1>
              <p className="text-xl sm:text-2xl font-light text-indigo-100 max-w-4xl mx-auto">
                Since our strategic restart in 2025, BornosoftNr has dedicated
                itself to delivering{" "}
                <strong>future-ready, intelligent solutions</strong> that
                redefine market standards.
              </p>
              <div className="mt-10 flex justify-center">
                <Rocket className="w-20 h-20 text-white opacity-80 animate-bounce" />
              </div>
            </div>
          </header>

          {/* Our Story and Mission */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="lg:flex lg:gap-16 items-start">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-indigo-500 pb-2 inline-block">
                    Our Strategic Pivot
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    BornosoftNr was originally established with a vision of
                    excellence. Recognizing the rapid evolution of digital
                    markets,{" "}
                    <strong>January 2025 marked our pivotal moment</strong>. We
                    re-structured, re-focused, and adopted the latest Morfen
                    (Modern) Cloud and AI paradigms to ensure our offerings are
                    fundamentally superior.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We are now a global powerhouse for mission-critical systems,
                    combining deep domain expertise with revolutionary
                    technology to drive measurable economic advantage for our
                    partners worldwide.
                  </p>
                </div>
                <div className="lg:w-1/2 p-8 bg-indigo-50 rounded-2xl shadow-xl border-t-4 border-indigo-600">
                  <h3 className="text-3xl font-extrabold text-indigo-800 mb-4 flex items-center">
                    <Zap className="w-8 h-8 mr-3 text-indigo-600" />
                    Our New Mission
                  </h3>
                  <p className="text-xl text-indigo-700 font-medium leading-snug">
                    To architect, build, and maintain the next generation of
                    intelligent, hyper-scalable software infrastructure that
                    powers global digital economies.
                  </p>
                  <p className="mt-4 text-sm text-indigo-600">
                    — Focused on AI integration, zero-trust security, and
                    cloud-native resilience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                Our Core Principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white rounded-xl shadow-2xl transition transform hover:scale-[1.05] duration-300 hover:shadow-indigo-300/50"
                  >
                    <div className="p-4 inline-block rounded-full bg-indigo-50 mb-6">
                      <value.icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                Global Impact, Local Expertise
              </h2>

              <div className="bg-gray-900 p-12 rounded-2xl shadow-2xl text-white max-w-4xl mx-auto">
                <p className="text-xl font-light mb-6">
                  Ready to partner with the experts redefining Morfen software
                  engineering?
                </p>
                <h3 className="text-4xl font-extrabold mb-8 text-indigo-300">
                  Let's Transform Your Vision.
                </h3>
                <button
                  className="bg-indigo-500 text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                  onClick={() => console.log("Navigating to Contact Page")}
                >
                  Start a Conversation Today
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutUs;
