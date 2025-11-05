import { useState, useMemo } from "react";
import {
  Rocket,
  Lightbulb,
  TrendingUp,
  Users,
  ShieldCheck,
  Zap,
  Code,
  Globe,
  Languages,
} from "lucide-react";

// --- High-Quality Multilingual Content (EN & BN) ---

const coreValues = [
  {
    icon: Lightbulb,
    en: {
      title: "Innovation",
      description:
        "We constantly explore new technologies and creative approaches to solve complex problems.",
    },
    bn: {
      title: "উদ্ভাবন",
      description:
        "আমরা সবসময় নতুন প্রযুক্তি আর সৃজনশীল ভাবনা খুঁজি, যাতে জটিল সমস্যাগুলো সহজভাবে সমাধান করা যায়।",
    },
    color: "text-yellow-500",
    bg: "bg-yellow-100/70 dark:bg-yellow-900/30",
  },
  {
    icon: TrendingUp,
    en: {
      title: "Growth",
      description:
        "We empower our clients and teams to achieve measurable progress and sustainable growth.",
    },
    bn: {
      title: "বৃদ্ধি",
      description:
        "আমরা আমাদের টিম আর ক্লায়েন্টদের এমনভাবে সহায়তা করি, যাতে তারা দৃশ্যমান অগ্রগতি ও টেকসই সাফল্য অর্জন করতে পারে।",
    },
    color: "text-green-600",
    bg: "bg-green-100/70 dark:bg-green-900/30",
  },
  {
    icon: Users,
    en: {
      title: "Collaboration",
      description:
        "We believe in strong partnerships and open communication to deliver outstanding results.",
    },
    bn: {
      title: "সহযোগিতা",
      description:
        "আমরা বিশ্বাস করি, খোলা যোগাযোগ আর টিমওয়ার্কই একসাথে দারুণ কিছু তৈরি করতে পারে।",
    },
    color: "text-blue-600",
    bg: "bg-blue-100/70 dark:bg-blue-900/30",
  },
  {
    icon: ShieldCheck,
    en: {
      title: "Security",
      description:
        "We design software with security-first principles to protect data and maintain trust.",
    },
    bn: {
      title: "নিরাপত্তা",
      description:
        "আমরা প্রতিটি সফটওয়্যার এমনভাবে তৈরি করি যাতে তথ্য নিরাপদ থাকে আর আস্থা অটুট থাকে।",
    },
    color: "text-red-600",
    bg: "bg-red-100/70 dark:bg-red-900/30",
  },
  {
    icon: Code,
    en: {
      title: "Technical Excellence",
      description:
        "We follow best practices and rigorous standards to build high-quality, reliable software.",
    },
    bn: {
      title: "কারিগরি উৎকর্ষ",
      description:
        "আমরা সর্বোত্তম নিয়ম মেনে এমন সফটওয়্যার তৈরি করি যা মানসম্পন্ন ও নির্ভরযোগ্য।",
    },
    color: "text-indigo-600",
    bg: "bg-indigo-100/70 dark:bg-indigo-900/30",
  },
  {
    icon: Globe,
    en: {
      title: "Global Perspective",
      description:
        "We consider international standards and cultural contexts to deliver globally impactful solutions.",
    },
    bn: {
      title: "বৈশ্বিক দৃষ্টিভঙ্গি",
      description:
        "আমরা আন্তর্জাতিক মান আর সংস্কৃতিকে সম্মান করে এমন সমাধান দিই, যা বিশ্বব্যাপী প্রভাব ফেলে।",
    },
    color: "text-purple-600",
    bg: "bg-purple-100/70 dark:bg-purple-900/30",
  },
  {
    icon: Zap,
    en: {
      title: "Agility",
      description:
        "We adapt quickly to changing markets and technologies to stay ahead of the curve.",
    },
    bn: {
      title: "দ্রুততা",
      description:
        "আমরা দ্রুত পরিবর্তনের সাথে মানিয়ে নিই, যাতে সবসময় এক ধাপ এগিয়ে থাকতে পারি।",
    },
    color: "text-pink-600",
    bg: "bg-pink-100/70 dark:bg-pink-900/30",
  },
  {
    icon: Rocket,
    en: {
      title: "Vision",
      description:
        "We aim for ambitious goals and bold ideas that propel our clients into the future.",
    },
    bn: {
      title: "দূরদর্শিতা",
      description:
        "আমরা বড় স্বপ্ন দেখি — এমন সাহসী ধারণায় কাজ করি যা আমাদের ক্লায়েন্টদের ভবিষ্যতের পথে এগিয়ে নেয়।",
    },
    color: "text-orange-600",
    bg: "bg-orange-100/70 dark:bg-orange-900/30",
  },
];

const content = {
  en: {
    heroTitle: "A New Era of Morfen Software",
    heroSubtitle:
      "Since our strategic restart in 2025, BornosoftNr has dedicated itself to delivering **future-ready, intelligent solutions** that redefine market standards.",
    storyTitle: "Our Strategic Pivot",
    storyP1:
      "BornosoftNr was originally established with a vision of excellence. Recognizing the rapid evolution of digital markets, **January 2025 marked our pivotal moment**. We restructured and adopted the latest AI paradigms to ensure our offerings are fundamentally superior.",
    storyP2:
      "We are now a global powerhouse combining deep expertise with revolutionary technology to deliver measurable advantages.",
    missionTitle: "Our New Mission",
    missionText:
      "To architect and maintain the next generation of intelligent, hyper-scalable software infrastructure.",
    missionSubtext: "— Focused on AI, Zero-Trust Security & Cloud Resilience.",
    valuesTitle: "Our Core Principles",
    ctaTitle: "Global Impact, Local Expertise",
    ctaText1:
      "Ready to partner with the experts redefining modern software engineering?",
    ctaText2: "Let's Transform Your Vision.",
    ctaButton: "Start a Conversation",
    langToggle: "বাংলা",
  },
  bn: {
    heroTitle: "আধুনিক সফটওয়্যারের নতুন যুগ",
    heroSubtitle:
      "২০২৫ সালে আমাদের নতুন সূচনার পর থেকে, BornosoftNr তৈরি করছে **ভবিষ্যৎ-প্রস্তুত, স্মার্ট সমাধান**, যা বাজারের মানকে নতুনভাবে সংজ্ঞায়িত করছে।",
    storyTitle: "আমাদের পরিবর্তনের গল্প",
    storyP1:
      "বর্নোসফট শুরু থেকেই উৎকর্ষতার লক্ষ্য নিয়ে কাজ করেছে। প্রযুক্তির দ্রুত পরিবর্তন বুঝে **২০২৫ সালের জানুয়ারিতেই আমরা বড় রূপান্তর আনি**, নতুন কৌশল ও আধুনিক এআই প্রযুক্তি গ্রহণ করি।",
    storyP2:
      "এখন আমরা একটি বৈশ্বিক টেক টিম, যারা আধুনিক প্রযুক্তি ও অভিজ্ঞতার মিশেলে টেকসই পরিবর্তন আনছে।",
    missionTitle: "আমাদের লক্ষ্য",
    missionText:
      "বুদ্ধিদীপ্ত, স্কেলেবল ও নিরাপদ সফটওয়্যার সিস্টেম তৈরি করা, যা আগামী দিনের ডিজিটাল পৃথিবীকে শক্তিশালী করবে।",
    missionSubtext:
      "— মূল লক্ষ্য: এআই ইন্টিগ্রেশন, জিরো-ট্রাস্ট সিকিউরিটি, আর ক্লাউড স্থিতিশীলতা।",
    valuesTitle: "আমাদের মূল মূল্যবোধ",
    ctaTitle: "বৈশ্বিক প্রভাব, স্থানীয় দক্ষতা",
    ctaText1:
      "আপনি কি প্রস্তুত এমন বিশেষজ্ঞদের সঙ্গে কাজ করতে, যারা সফটওয়্যার ইঞ্জিনিয়ারিংকে নতুনভাবে সংজ্ঞায়িত করছে?",
    ctaText2: "চলুন, আপনার স্বপ্নকে বাস্তবে রূপ দিই।",
    ctaButton: "আজই যোগাযোগ করুন",
    langToggle: "English",
  },
};

const Aboutus = () => {
  const [lang, setLang] = useState<"en" | "bn">("en");
  const currentContent = useMemo(() => content[lang], [lang]);
  const handleLanguageToggle = () =>
    setLang((prev) => (prev === "en" ? "bn" : "en"));

  const renderRichText = (text: string) =>
    text.split("**").map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="text-indigo-600 dark:text-indigo-400">
          {part}
        </strong>
      ) : (
        part
      )
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <main>
        <header className="pt-32 pb-24 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-900 to-indigo-800 text-white shadow-3xl relative">
          <button
            onClick={handleLanguageToggle}
            className="fixed right-2 top-2 flex items-center space-x-2 p-3 bg-indigo-600 text-white font-bold rounded-xl shadow-2xl hover:bg-indigo-700 transition duration-300"
          >
            <Languages className="w-5 h-5" />
            <span>{currentContent.langToggle}</span>
          </button>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-snug">
              {currentContent.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl font-light text-indigo-200 dark:text-indigo-300 max-w-4xl mx-auto">
              {renderRichText(currentContent.heroSubtitle)}
            </p>
            <div className="mt-12 flex justify-center">
              <Rocket className="w-24 h-24 text-white opacity-90 animate-pulse-slow" />
            </div>
          </div>
        </header>

        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:flex lg:gap-16 items-start">
              <div className="lg:w-1/2 mb-12">
                <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-indigo-600 dark:border-indigo-400 inline-block">
                  {currentContent.storyTitle}
                </h2>
                <p className="text-lg mb-6">
                  {renderRichText(currentContent.storyP1)}
                </p>
                <p className="text-lg border-l-4 border-gray-200 dark:border-gray-700 pl-4 italic">
                  {currentContent.storyP2}
                </p>
              </div>
              <div className="lg:w-1/2 p-10 bg-indigo-50/70 dark:bg-indigo-900/30 rounded-3xl shadow-2xl border-t-8 border-indigo-600">
                <h3 className="text-3xl font-extrabold text-indigo-800 dark:text-indigo-300 mb-5 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400" />
                  {currentContent.missionTitle}
                </h3>
                <p className="text-xl font-medium">
                  {currentContent.missionText}
                </p>
                <p className="mt-6 text-sm italic text-indigo-600 dark:text-indigo-400 font-mono">
                  {currentContent.missionSubtext}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100/70 dark:bg-gray-800/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold mb-16">
              {currentContent.valuesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((v, i) => {
                const data = v[lang];
                return (
                  <div
                    key={i}
                    className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-indigo-400/50 border-b-8 border-indigo-500/20 hover:border-indigo-600 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <div
                      className={`p-4 inline-block rounded-full ${v.bg} mb-6`}
                    >
                      <v.icon className={`w-10 h-10 ${v.color}`} />
                    </div>
                    <h3 className="text-xl font-extrabold mb-3">
                      {data.title}
                    </h3>
                    <p className="text-base leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-indigo-700/10 dark:bg-indigo-950/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold mb-12">
              {currentContent.ctaTitle}
            </h2>
            <div className="bg-gray-800 dark:bg-gray-900 p-12 rounded-3xl shadow-2xl text-white max-w-4xl mx-auto border-4 border-indigo-500">
              <p className="text-xl font-light mb-6 text-gray-300">
                {currentContent.ctaText1}
              </p>
              <h3 className="text-4xl font-extrabold mb-10 text-indigo-300">
                {currentContent.ctaText2}
              </h3>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-xl text-lg transition transform hover:-translate-y-1">
                {currentContent.ctaButton}
              </button>
            </div>
          </div>
        </section>
      </main>

      <style>
        {`
          @keyframes pulse-slow {
            0%,100%{opacity:0.9;transform:scale(1)}
            50%{opacity:0.7;transform:scale(1.05)}
          }
          .animate-pulse-slow{
            animation:pulse-slow 4s ease-in-out infinite
          }
          .shadow-3xl{
            box-shadow:0 20px 40px -10px rgba(49,46,129,.4)
          }
        `}
      </style>
    </div>
  );
};

export default Aboutus;
