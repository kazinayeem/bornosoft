import React, { useState } from "react";

// --- Icon Definitions (Lucide Icons for use in TSX) ---
interface IconProps extends React.SVGProps<SVGSVGElement> {}

const ArrowRight = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Award = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 18 17 23 15.79 13.88" />
  </svg>
);
const CheckCircle = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const DollarSign = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const UserCheck = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

type Language = "en" | "bn";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface Feature {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
}

const translations = {
  en: {
    methodology: "Our Methodology",
    title: "Agile Scrum SDLC in Action",
    subtitle:
      "We don't just write code; we partner with you using a highly iterative and transparent **Scrum-based Software Development Life Cycle (SDLC)**. This ensures flexibility, fast feedback, and continuous delivery of value.",
    button: "Discuss Your Sprint",
    whyUsMethodology: "Why We Are Best",
    whyUsTitle: "Unmatched Expertise & Guarantees",
    whyUsSubtitle:
      "Choosing Bornosoftnr means opting for risk reduction and guaranteed quality, driven by our elite team and robust processes.",
    scrumSteps: [
      {
        id: 1,
        title: "Product Backlog",
        description:
          "Defining and prioritizing all features, requirements, and enhancements needed for the final solution, maintained by a dedicated Product Owner.",
      },
      {
        id: 2,
        title: "Sprint Planning",
        description:
          "Selecting achievable items from the backlog to be completed in the upcoming short, time-boxed iteration (Sprint), typically 2-4 weeks.",
      },
      {
        id: 3,
        title: "Development & Daily Scrums",
        description:
          "The team builds and tests the software in parallel, meeting daily (Daily Scrums) to synchronize activities and identify and resolve impediments quickly.",
      },
      {
        id: 4,
        title: "Sprint Review",
        description:
          "The team demonstrates the completed, working software increment to stakeholders for crucial feedback and adaptation.",
      },
      {
        id: 5,
        title: "Sprint Retrospective",
        description:
          "The entire team reflects on the past Sprint to identify specific, actionable improvements for the process, tools, and collaboration model.",
      },
    ] as Step[],
    bestFeatures: [
      {
        icon: CheckCircle,
        title: "Zero-Defect Code",
        description:
          "We implement rigorous testing protocols, including TDD and BDD, guaranteeing software stability and minimal post-launch issues.",
      },
      {
        icon: Award,
        title: "Modern Expertise & Tech",
        description:
          "We work with the latest knowledge in modern technology and use new-age tools in every project. We believe in the latest technology to ensure the best results from day one.",
      },
      {
        icon: DollarSign,
        title: "Fixed-Price, Flexible Scope",
        description:
          "Clear, upfront pricing with the agility to pivot features during the sprint, offering the best of budget certainty and development flexibility.",
      },
      {
        icon: UserCheck,
        title: "Local Compliance & Trust",
        description:
          "We strictly adhere to all Bangladesh labor laws, regulatory compliance standards, and local business practices, ensuring ethical and transparent operations.",
      },
    ] as Feature[],
  },
  bn: {
    methodology: "আমাদের কার্যপদ্ধতি",
    title: "কার্যকর অ্যাজাইল স্ক্রাম পদ্ধতি",
    subtitle:
      "আমরা শুধু কোড লিখি না, বরং একটি উচ্চ পুনরাবৃত্তিমূলক ও সম্পূর্ণ স্বচ্ছ **স্ক্রাম-ভিত্তিক সফটওয়্যার ডেভেলপমেন্ট লাইফ সাইকেল (SDLC)**-এর মাধ্যমে আপনার সাথে অংশীদারিত্ব করি। এতে নমনীয়তা, দ্রুত ফিডব্যাক এবং ধারাবাহিক মূল্য সরবরাহ নিশ্চিত হয়।",
    button: "আপনার স্প্রিন্ট নিয়ে আলোচনা করুন",
    whyUsMethodology: "আমরা কেন সেরা",
    whyUsTitle: "অতুলনীয় দক্ষতা ও শতভাগ নিশ্চয়তা",
    whyUsSubtitle:
      "Bornosoftnr-কে বেছে নেওয়া মানেই ঝুঁকি কমিয়ে নিশ্চিত গুণগত মান গ্রহণ করা। আমাদের অভিজ্ঞ দল এবং শক্তিশালী কার্যপদ্ধতিই এর প্রধান চালিকা শক্তি।",
    scrumSteps: [
      {
        id: 1,
        title: "প্রোডাক্ট ব্যাকলগ",
        description:
          "একটি ডেডিকেটেড প্রোডাক্ট ওনার দ্বারা পরিচালিত হয়ে চূড়ান্ত সমাধানের জন্য প্রয়োজনীয় সমস্ত ফিচার, প্রয়োজনীয়তা এবং উন্নতিগুলি সংজ্ঞায়িত করা ও অগ্রাধিকার দেওয়া।",
      },
      {
        id: 2,
        title: "স্প্রিন্ট পরিকল্পনা",
        description:
          "পরবর্তী সংক্ষিপ্ত, সময়-নির্ধারিত স্প্রিন্ট (সাধারণত ২-৪ সপ্তাহ) সম্পন্ন করার জন্য ব্যাকলগ থেকে কার্যকর আইটেমগুলো নির্বাচন ও প্রস্তুতি নেওয়া।",
      },
      {
        id: 3,
        title: "ডেভেলপমেন্ট ও দৈনিক স্ক্রাম",
        description:
          "দল একই সাথে সফটওয়্যার তৈরি ও পরীক্ষা করে। প্রতিদিনের দৈনিক স্ক্রাম মিটিং-এ কার্যক্রমের সমন্বয় করা হয় এবং দ্রুত সমস্যা চিহ্নিত করে সমাধান করা হয়।",
      },
      {
        id: 4,
        title: "স্প্রিন্ট পর্যালোচনা",
        description:
          "গুরুত্বপূর্ণ ফিডব্যাক এবং অভিযোজনের জন্য দল স্টেকহোল্ডারদের কাছে সম্পূর্ণ, সচল সফটওয়্যারের অংশ প্রদর্শন করে।",
      },
      {
        id: 5,
        title: "স্প্রিন্ট রেট্রোস্পেকটিভ",
        description:
          "পুরো দল প্রক্রিয়া, সরঞ্জাম এবং সহযোগিতার মডেলের নির্দিষ্ট, কার্যকর উন্নতির জন্য গত স্প্রিন্ট নিয়ে পর্যালোচনা করে।",
      },
    ] as Step[],
    bestFeatures: [
      {
        icon: CheckCircle,
        title: "ত্রুটিমুক্ত কোড",
        description:
          "আমরা TDD এবং BDD সহ কঠোর পরীক্ষা প্রোটোকল প্রয়োগ করি, যা সফটওয়্যারের স্থিতিশীলতা এবং লঞ্চ-পরবর্তী ন্যূনতম সমস্যা নিশ্চিত করে।",
      },
      {
        icon: Award,
        title: "আধুনিক দক্ষতা ও প্রযুক্তি",
        description:
          "আমরা আধুনিক প্রযুক্তির সর্বশেষ জ্ঞান নিয়ে কাজ করি এবং প্রতিটি প্রকল্পে নতুন যুগের টুলস ব্যবহার করি। প্রথম দিন থেকেই সেরা ফলাফল নিশ্চিত করতে আমরা লেটেস্ট টেকনোলজিতে বিশ্বাসী।",
      },
      {
        icon: DollarSign,
        title: "নির্দিষ্ট মূল্য, নমনীয় কর্মপরিধি",
        description:
          "অগ্রিম নির্দিষ্ট মূল্য নিশ্চিত করা হয়। পাশাপাশি, স্প্রিন্টের মধ্যে প্রয়োজন অনুযায়ী ফিচার পরিবর্তনের নমনীয়তা থাকে, যা বাজেট এবং ডেভেলপমেন্টের মধ্যে সেরা সমন্বয় তৈরি করে।",
      },
      {
        icon: UserCheck,
        title: "স্থানীয় নিয়ম ও আস্থা",
        description:
          "আমরা কঠোরভাবে বাংলাদেশের শ্রম আইন, নিয়ন্ত্রক সম্মতি মানদণ্ড এবং স্থানীয় ব্যবসায়িক প্রক্রিয়া অনুসরণ করি। এটি আমাদের কার্যক্রমে নৈতিকতা ও স্বচ্ছতা নিশ্চিত করে।",
      }, // **NEW BANGLA FEATURE ADDED**
    ] as Feature[],
  },
};

const ProcessStep: React.FC<Step> = ({ id, title, description }) => (
  <div className="relative pl-12 pb-12">
    <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-xl ring-8 ring-white dark:ring-gray-800">
      {id}
    </div>
    {id < translations.en.scrumSteps.length && (
      <div
        className="absolute top-10 bottom-0 left-5 w-0.5 bg-indigo-200 dark:bg-indigo-700"
        style={{ height: "calc(100% - 2.5rem)" }}
      ></div>
    )}
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-0">
      {title}
    </h3>
    <p className="mt-2 text-gray-500 dark:text-gray-300">{description}</p>
  </div>
);

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700 group">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-200 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
      {description}
    </p>
  </div>
);

const BornosoftnrProcessApp: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans antialiased text-gray-700 dark:text-gray-200 p-4 sm:p-8 mt-0 lg:mt-9 transition-colors duration-500">
      <div className="flex justify-end max-w-7xl mx-auto mb-6 space-x-4">
        <div className="inline-flex rounded-full shadow-sm bg-white dark:bg-gray-700 p-1">
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-150 ${
              lang === "en"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("bn")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-150 ${
              lang === "bn"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>

      {/* --- 1. Agile Scrum Process Section --- */}
      <section
        id="process"
        className="py-10 sm:py-16 bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-none mb-12 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Title and Description Column */}
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                {t.methodology}
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                {t.title}
              </p>
              <p
                className="mt-4 text-xl text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: t.subtitle }}
              />

              <a
                href="#contact"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]"
              >
                {t.button} <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Process Flow Column */}
            <div className="lg:col-span-7 relative">
              {/* Visualizing the Scrum Flow (Desktop View) */}
              <div className="relative">
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-inner space-y-8 hidden sm:block">
                  {t.scrumSteps.map((step) => (
                    <ProcessStep key={step.id} {...step} />
                  ))}
                </div>
                {/* Simple list for mobile view */}
                <div className="sm:hidden space-y-6">
                  {t.scrumSteps.map((step) => (
                    <div
                      key={step.id}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-indigo-500"
                    >
                      <span className="text-sm font-bold text-indigo-600 block mb-1">
                        {lang === "en" ? `Step ${step.id}` : `ধাপ ${step.id}`}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Why We Are Best Section (Value Proposition) --- */}
      <section
        id="why-best"
        className="py-10 sm:py-16 bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-none transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
              {t.whyUsMethodology}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {t.whyUsTitle}
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
              {t.whyUsSubtitle}
            </p>
          </div>

          {/* Updated grid layout for 4 items: 2 columns on medium, 4 columns on large */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.bestFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BornosoftnrProcessApp;
