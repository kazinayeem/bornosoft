import React, { useState, useMemo } from "react";
import {
  DollarSign,
  Layers3,
  Brush,
  Server,
  Calculator,
  CheckCircle,
  Smartphone,
  Cpu,
} from "lucide-react";

// --- Configuration & Constants ---
const EXCHANGE_RATE = 122.5; // Updated: 1 USD = 122.5 BDT
const CURRENCIES = {
  USD: { symbol: "$", code: "USD", rate: 1 },
  BDT: { symbol: "৳", code: "BDT", rate: EXCHANGE_RATE },
};

// Base cost definitions for features in USD (REDUCED FOR EXTREME VALUE/SMALL COMPANIES)
const COSTS = {
  // --- A. Project Scope (Base App Type) ---
  APP_TYPE: [
    // Reduced from $999
    {
      name: "Simple Landing Page / Portfolio",
      cost: 599,
      description:
        "Static content, basic forms, minimal functionality. (Best Entry Value!)",
    },
    // Reduced from $2500
    {
      name: "Single Page Application (SPA) MVP",
      cost: 1200,
      description: "Dynamic content, client-side routing, core features only.",
    },
    // Reduced from $5000
    {
      name: "E-commerce / Marketplace MVP",
      cost: 2500,
      description: "Product listings, basic payment integration, user auth.",
    },
    // Reduced from $9000
    {
      name: "Custom SaaS Platform MVP",
      cost: 4500,
      description:
        "Complex business logic, multiple user roles, high integration needs.",
    },
  ],
  // --- B. Platform/Devices ---
  PLATFORM: [
    {
      name: "Web Only (Responsive)",
      cost: 0,
      description: "Standard desktop and mobile web browser support.",
    },
    // Reduced from $1500
    {
      name: "Web + iOS/Android Mobile App (Hybrid)",
      cost: 800,
      description:
        "One codebase for web and cross-platform mobile apps (React Native/Flutter).",
    },
    // Reduced from $3500
    {
      name: "Web + Native iOS & Android Apps",
      cost: 1800,
      description:
        "Separate, high-performance native development for each platform.",
    },
  ],
  // --- C. Design & UX ---
  DESIGN: [
    {
      name: "Standard (Template-based UI)",
      cost: 500,
      description: "Uses existing UI kits and templates for maximum speed.",
    },
    // Reduced from $1500
    {
      name: "Custom Modern Design (UI/UX)",
      cost: 700,
      description:
        "Custom wireframes, high-fidelity prototypes, brand integration.",
    },
    // Reduced from $2500
    {
      name: "Advanced Interactive Design & Animations",
      cost: 1200,
      description:
        "Custom animations, micro-interactions, complex data visualization.",
    },
  ],
  // --- D. Core Functionality (Add-ons - Lowered for value) ---
  FUNCTIONALITY: [
    // Reduced from $500
    { name: "User Authentication (Login, Register, Reset)", cost: 300 },
    // Reduced from $900
    { name: "Third-Party API Integration (e.g., Maps, Payment)", cost: 450 },
    // Reduced from $1800
    { name: "Custom Admin Dashboard / CMS", cost: 800 },
    // Reduced from $1200
    { name: "Real-time Chat / Notifications", cost: 600 },
    // Reduced from $2500
    {
      name: "AI/ML Feature Integration (e.g., recommendation engine)",
      cost: 1500,
    },
  ],
  // --- E. Non-Functional Requirements (Lowered for value) ---
  INFRASTRUCTURE: [
    { name: "Basic Hosting & Deployment (Shared/Simple VPS)", cost: 0 },
    // Reduced from $900
    { name: "Scalable Cloud Infrastructure (AWS/GCP/Azure)", cost: 400 },
    // Reduced from $800
    { name: "Advanced Security & Penetration Testing", cost: 350 },
    // Reduced from $1500
    { name: "Dedicated DevOps & CI/CD Pipeline Setup", cost: 600 },
  ],
};

// --- TypeScript Interfaces (Unchanged) ---
interface Option {
  name: string;
  cost: number;
  description?: string;
}

// NOTE: LucideIcon is assumed to be imported from lucide-react
interface FeatureSection {
  title: string;
  icon: any; // Using 'any' as a quick fix for LucideIcon type mismatch in this context
  options: Option[];
  type: "radio" | "checkbox";
  key: keyof typeof COSTS;
  required: boolean;
}

interface CostBreakdown {
  [key: string]: number;
}

// --- Data Structure for Calculator Sections (Unchanged) ---
const featureSections: FeatureSection[] = [
  {
    title: "A. Project Scope (Base Type)",
    icon: Layers3,
    type: "radio",
    key: "APP_TYPE",
    required: true,
    options: COSTS.APP_TYPE.map((o) => ({ ...o })),
  },
  {
    title: "B. Platforms & Devices",
    icon: Smartphone,
    type: "radio",
    key: "PLATFORM",
    required: true,
    options: COSTS.PLATFORM.map((o) => ({ ...o })),
  },
  {
    title: "C. Design & User Experience",
    icon: Brush,
    type: "radio",
    key: "DESIGN",
    required: true,
    options: COSTS.DESIGN.map((o) => ({ ...o })),
  },
  {
    title: "D. Core Functionality Add-ons",
    icon: Cpu,
    type: "checkbox",
    key: "FUNCTIONALITY",
    required: false,
    options: COSTS.FUNCTIONALITY.map((o) => ({ ...o, description: "" })),
  },
  {
    title: "E. Infrastructure & Scalability",
    icon: Server,
    type: "checkbox",
    key: "INFRASTRUCTURE",
    required: false,
    options: COSTS.INFRASTRUCTURE.map((o) => ({ ...o, description: "" })),
  },
];

// --- Helper Functions (Unchanged) ---
const formatCurrency = (amount: number, currency: "USD" | "BDT") => {
  const { symbol, code } = CURRENCIES[currency];
  return `${symbol} ${amount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })} ${code}`;
};

// --- Section Component (Radio Buttons - UI Enhancements) ---
interface RadioSectionProps {
  section: FeatureSection;
  selectedOptions: CostBreakdown;
  onSelect: (key: string, value: string, cost: number) => void;
}

const RadioSection: React.FC<RadioSectionProps> = ({
  section,
  selectedOptions,
  onSelect,
}) => {
  const selectedName = Object.keys(selectedOptions)
    .find((name) => name.startsWith(section.key))
    ?.split("::")[1];

  return (
    <fieldset className="space-y-4">
      {section.options.map((option) => (
        <div key={option.name} className="relative">
          <input
            type="radio"
            id={`${section.key}-${option.name}`}
            name={section.key}
            value={option.name}
            checked={selectedName === option.name}
            onChange={() => onSelect(section.key, option.name, option.cost)}
            className="sr-only peer"
          />
          <label
            htmlFor={`${section.key}-${option.name}`}
            className={`
                            flex p-5 border rounded-xl cursor-pointer transition duration-300
                            group  justify-between items-center 
                            bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700
                            hover:shadow-lg peer-checked:shadow-xl
                            peer-checked:border-blue-600 peer-checked:ring-4 peer-checked:ring-blue-200 dark:peer-checked:ring-blue-800/50
                        `}
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {option.name}
              </span>
              {option.description && (
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {option.description}
                </span>
              )}
            </div>

            {/* Modified Price Display: USD big, BDT small */}
            <div className="ml-4 shrink-0 text-right">
              {option.cost > 0 ? (
                <>
                  <span className="font-bold text-lg text-blue-600 dark:text-blue-400 block">
                    {formatCurrency(option.cost, "USD")}
                  </span>
                  {/* BDT text size reduced to custom 10px and font-weight set to normal */}
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-normal block">
                    ~ {formatCurrency(option.cost * EXCHANGE_RATE, "BDT")}
                  </span>
                </>
              ) : (
                <span className="font-bold text-lg text-blue-600 dark:text-blue-400">
                  Included
                </span>
              )}
            </div>
            <CheckCircle
              className={`w-7 h-7 text-blue-600 opacity-0 transition-opacity ml-4 shrink-0 ${
                selectedName === option.name ? "opacity-100" : ""
              }`}
            />
          </label>
        </div>
      ))}
    </fieldset>
  );
};

interface CheckboxSectionProps {
  section: FeatureSection;
  selectedOptions: CostBreakdown;
  onToggle: (key: string, name: string, cost: number) => void;
}

const CheckboxSection: React.FC<CheckboxSectionProps> = ({
  section,
  selectedOptions,
  onToggle,
}) => {
  const isSelected = (name: string) =>
    selectedOptions[`${section.key}::${name}`] !== undefined;

  return (
    <fieldset className="space-y-4">
      {section.options.map((option) => (
        <div key={option.name} className="relative">
          <input
            type="checkbox"
            id={`${section.key}-${option.name}`}
            checked={isSelected(option.name)}
            onChange={() => onToggle(section.key, option.name, option.cost)}
            className="sr-only peer"
          />
          <label
            htmlFor={`${section.key}-${option.name}`}
            className={`
                            flex p-5 border rounded-xl cursor-pointer transition duration-300
                            group  justify-between items-center 
                            bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700
                            hover:shadow-lg peer-checked:shadow-xl
                            peer-checked:border-green-600 peer-checked:ring-4 peer-checked:ring-green-200 dark:peer-checked:ring-green-800/50
                        `}
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {option.name}
              </span>
            </div>
            <div className="ml-4 shrink-0 text-right">
              <span className="font-bold text-lg text-green-600 dark:text-green-400 block">
                + {formatCurrency(option.cost, "USD")}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-normal block">
                ~ {formatCurrency(option.cost * EXCHANGE_RATE, "BDT")}
              </span>
            </div>

            <CheckCircle
              className={`w-7 h-7 text-green-600 transition-opacity ml-4 shrink-0 ${
                isSelected(option.name) ? "opacity-100" : "opacity-0"
              }`}
            />
          </label>
        </div>
      ))}
    </fieldset>
  );
};

const CostCalculator: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<"USD" | "BDT">(
    "USD"
  );
  const [selectedOptions, setSelectedOptions] = useState<CostBreakdown>({});

  // Initialize radio button defaults (required sections only)
  React.useEffect(() => {
    const initialSelections: CostBreakdown = {};
    featureSections
      .filter((s) => s.type === "radio" && s.required)
      .forEach((section) => {
        // Set the first option as default if nothing is selected
        const firstOption = section.options[0];
        const key = `${section.key}::${firstOption.name}`;
        initialSelections[key] = firstOption.cost;
      });
    setSelectedOptions((prev) => ({ ...prev, ...initialSelections }));
  }, []);

  // Handler for Radio Button sections (single selection)
  const handleRadioSelect = (key: string, name: string, cost: number) => {
    setSelectedOptions((prev) => {
      // Find and remove any existing selection for this key
      const newOptions = { ...prev };
      Object.keys(newOptions).forEach((optionKey) => {
        if (optionKey.startsWith(key)) {
          delete newOptions[optionKey];
        }
      });
      // Add the new selection
      newOptions[`${key}::${name}`] = cost;
      return newOptions;
    });
  };

  // Handler for Checkbox sections (multiple selections)
  const handleCheckboxToggle = (key: string, name: string, cost: number) => {
    const fullKey = `${key}::${name}`;
    setSelectedOptions((prev) => {
      const newOptions = { ...prev };
      if (newOptions[fullKey] !== undefined) {
        // Remove if already selected
        delete newOptions[fullKey];
      } else {
        // Add if not selected
        newOptions[fullKey] = cost;
      }
      return newOptions;
    });
  };

  // Memoized calculation of the total cost
  const totalCostUSD = useMemo(() => {
    return Object.values(selectedOptions).reduce((sum, cost) => sum + cost, 0);
  }, [selectedOptions]);

  // Convert total cost to the selected currency
  const finalCost = useMemo(() => {
    return totalCostUSD * CURRENCIES[selectedCurrency].rate;
  }, [totalCostUSD, selectedCurrency]);

  const currencySymbol = CURRENCIES[selectedCurrency].symbol;
  const currencyCode = CURRENCIES[selectedCurrency].code;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4 sm:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 pt-8">
          <Calculator className="w-14 h-14 mx-auto mb-4 text-purple-700 dark:text-purple-400" />
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Value-Focused Project Estimator
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            Build your high-quality, professional software solution with clear,
            competitive pricing designed for small businesses and startups.
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* --- Left Column: Configuration & Sections (Col 1-2) --- */}
          <div className="lg:col-span-2 space-y-12">
            {/* Currency Toggle */}
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 flex items-center">
                <DollarSign className="w-7 h-7 mr-3 text-green-600" /> Currency
                Selection
              </h3>
              <div className="flex space-x-4">
                {Object.values(CURRENCIES).map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() =>
                      setSelectedCurrency(currency.code as "USD" | "BDT")
                    }
                    className={`
                                    flex-1 py-3 px-6 rounded-xl text-lg font-semibold transition duration-200
                                    ${
                                      selectedCurrency === currency.code
                                        ? "bg-green-700 text-white shadow-lg shadow-green-500/50"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                                    }
                                `}
                  >
                    {currency.symbol} {currency.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Selection Sections */}
            {featureSections.map((section) => (
              <div
                key={section.key}
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <section.icon className="w-7 h-7 mr-3 text-purple-600" />
                  {section.title}
                  {section.required && (
                    <span className="ml-3 text-sm text-red-500 dark:text-red-400 font-bold tracking-wider">
                      {" "}
                      (MANDATORY)
                    </span>
                  )}
                </h3>

                {section.type === "radio" ? (
                  <RadioSection
                    section={section}
                    selectedOptions={selectedOptions}
                    onSelect={handleRadioSelect}
                  />
                ) : (
                  <CheckboxSection
                    section={section}
                    selectedOptions={selectedOptions}
                    onToggle={handleCheckboxToggle}
                  />
                )}
              </div>
            ))}
          </div>

          {/* --- Right Column: Summary & Total (Col 3) --- */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="sticky top-12">
              {/* Total Cost Display */}
              <div className="bg-purple-700 text-white p-8 rounded-xl shadow-2xl shadow-purple-500/50 dark:shadow-purple-700/50">
                <p className="text-lg font-semibold opacity-90 tracking-wider">
                  Estimated Project Total
                </p>
                <div className="flex items-baseline mt-3">
                  <span className="text-6xl font-extrabold leading-none">
                    {currencySymbol}
                  </span>
                  <span className="text-6xl font-extrabold leading-none ml-2">
                    {finalCost.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <span className="text-2xl font-bold ml-3 opacity-90">
                    {currencyCode}
                  </span>
                </div>
                <p className="text-xs mt-4 opacity-70 italic font-medium">
                  *This is an estimated price for the MVP scope. Final quote
                  requires a detailed discovery phase.
                </p>
              </div>

              {/* Breakdown Summary */}
              <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-3 mb-4">
                  Detailed Cost Breakdown (USD)
                </h4>
                <dl className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                  {Object.entries(selectedOptions).map(([key, cost]) => {
                    const [, name] = key.split("::");
                    return cost > 0 ? (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <dt className="font-medium text-gray-600 dark:text-gray-400">
                          {name}
                        </dt>
                        <dd className="font-extrabold text-gray-900 dark:text-white">
                          ${cost.toLocaleString()}
                        </dd>
                      </div>
                    ) : null;
                  })}

                  <div className="pt-4 border-t border-gray-300 dark:border-gray-700 flex justify-between font-extrabold text-lg text-purple-700 dark:text-purple-400">
                    <dt>Project Subtotal</dt>
                    <dd>${totalCostUSD.toLocaleString()}</dd>
                  </div>
                </dl>
              </div>

              {/* Contact CTA */}
              <div className="mt-6">
                <button className="w-full py-4 px-6 bg-indigo-600 text-white font-extrabold rounded-xl shadow-xl hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.01]">
                  Get A Fixed Price Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
