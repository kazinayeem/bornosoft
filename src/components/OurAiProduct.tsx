import React from "react";
import {
  FileText,
  Mail,
  Settings,
  Zap,
  Users,
  Feather,
  Globe,
  Target,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  name: string;
  icon: LucideIcon;
}

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: LucideIcon;
  features: Feature[];
  accentColor: string;
}

interface FeatureItemProps {
  name: string;
  icon: LucideIcon;
  accentColor: string;
}

interface ProductCardProps {
  product: Product;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  name,
  icon: Icon,
  accentColor,
}) => {
  return (
    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 font-medium">
      <Icon
        className={`w-4 h-4 mr-2 shrink-0 text-${accentColor}-500 dark:text-${accentColor}-400`}
      />
      <span>{name}</span>
    </div>
  );
};

const products: Product[] = [
  {
    id: 1,
    name: "AI README Generator",
    tagline: "Generate professional README files instantly.",
    description:
      "Define your project's framework, level of detail, and features to automatically generate a polished, complete README file in Markdown.",
    url: "https://readme.bornosoftnr.com/",
    icon: FileText,
    features: [
      { name: "Multiple Frameworks", icon: Terminal },
      { name: "Adjustable Detail Level", icon: Settings },
      { name: "Live Preview Mode", icon: Target },
      { name: "Copy to Clipboard", icon: Zap },
    ],
    accentColor: "indigo",
  },
  {
    id: 2,
    name: "AI Email Assistant",
    tagline: "Craft perfect, context-aware emails effortlessly.",
    description:
      "Select your tone, purpose, and audience to instantly generate clear, polished, and professional emails tailored for any situation.",
    url: "https://aimail.bornosoftnr.com/",
    icon: Mail,
    features: [
      { name: "Tone & Persona Selection", icon: Users },
      { name: "Multi-Language Support", icon: Globe },
      { name: "25+ Templates", icon: Feather },
      { name: "Concise to Detailed", icon: Settings },
    ],
    accentColor: "rose",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const Icon = product.icon;
  const accent = product.accentColor;

  // Detect if accent is a "light" color (so we can use dark text in light mode)
  const isLightAccent = ["pink", "rose", "yellow", "lime", "amber"].includes(
    accent
  );

  return (
    <div
      className={`flex flex-col h-full p-6 sm:p-8 rounded-2xl border 
      border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 
      shadow-sm hover:shadow-xl transform hover:-translate-y-1 
      transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-start mb-6">
        <div
          className={`p-3 rounded-xl mr-4 mt-1 shrink-0 bg-${accent}-100 text-${accent}-600 dark:bg-${accent}-900/40 dark:text-${accent}-400`}
        >
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {product.name}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-1 font-medium">
            {product.tagline}
          </p>
        </div>
      </div>

      <p className="text-base text-gray-700 dark:text-gray-200 mb-8 grow">
        {product.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 border-t border-gray-100 dark:border-gray-700 pt-6 pb-4">
        {product.features.map((feature, index) => (
          <FeatureItem
            key={index}
            name={feature.name}
            icon={feature.icon}
            accentColor={product.accentColor}
          />
        ))}
      </div>

      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          mt-6 w-full inline-flex justify-center items-center px-6 py-3 
          text-base font-semibold rounded-lg 
          ${
            isLightAccent
              ? `text-gray-900 bg-${accent}-200 hover:bg-${accent}-300`
              : `text-white bg-${accent}-600 hover:bg-${accent}-700`
          } 
          dark:text-white dark:bg-${accent}-600 dark:hover:bg-${accent}-700
          active:scale-[0.98] focus:ring-4 focus:ring-${accent}-400/40 focus:outline-none
          shadow-md hover:shadow-lg transition-all
        `}
      >
        Visit {product.name.split(" ")[1]}
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
};

const OurAiProduct: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 pt-8">
          <Zap className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-6xl">
            AI Tools by Bornosoft
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Smart, time-saving tools designed to help you document, write, and
            communicate more efficiently.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default OurAiProduct;
