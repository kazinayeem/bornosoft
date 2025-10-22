import {
  FileText,
  Code,
  UserCheck,
  ShieldOff,
  Gavel,
  Repeat,
} from "lucide-react";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  const policySections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the services provided by BornosoftNr ('Morfen Software Architects'), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the Service. These terms constitute a legally binding agreement.",
      color: "text-indigo-600",
    },
    {
      icon: Code,
      title: "2. Scope of Services",
      content:
        "BornosoftNr offers custom 'Morfen' (Modern) software development, IT consulting, and licensing of digital products. All services are governed by separate, signed Statement of Work (SOW) documents, which, upon execution, are incorporated into these Terms.",
      color: "text-red-600",
    },
    {
      icon: UserCheck,
      title: "3. User Obligations and Conduct",
      content:
        "Users agree to utilize the services and licensed software only for lawful purposes. You are solely responsible for maintaining the confidentiality and security of your account credentials and for all activities that occur under your account.",
      color: "text-green-600",
    },
    {
      icon: ShieldOff,
      title: "4. Intellectual Property Rights",
      content:
        "The Service and its original content, features, and functionality are and will remain the exclusive property of BornosoftNr and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BornosoftNr.",
      color: "text-yellow-600",
    },
    {
      icon: Gavel,
      title: "5. Limitation of Liability and Disclaimer",
      content:
        "The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis. BornosoftNr and its suppliers shall not be liable for any indirect, incidental, special, consequential or punitive damages, including loss of profits or data, resulting from your use or inability to use the Service.",
      color: "text-blue-600",
    },
    {
      icon: Repeat,
      title: "6. Changes and Termination",
      content:
        "We reserve the right to modify or replace these Terms at any time with a 30-day notice for material changes. We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including breach of the Terms.",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
      <Helmet>
        <title>Terms & Conditions - BornoSoftNr</title>
        <meta
          name="description"
          content="Read BornoSoftNr's Terms & Conditions to understand the rules, obligations, and policies governing the use of our Morfen Software services."
        />
        <link rel="canonical" href="https://bornosoftnr.com/terms" />

        {/* Open Graph */}
        <meta property="og:title" content="Terms & Conditions - BornoSoftNr" />
        <meta
          property="og:description"
          content="Read BornoSoftNr's Terms & Conditions to understand the rules, obligations, and policies governing the use of our Morfen Software services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com/terms" />
        <meta
          property="og:image"
          content="https://www.yourdomain.com/og-image-terms.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions - BornoSoftNr" />
        <meta
          name="twitter:description"
          content="Read BornoSoftNr's Terms & Conditions to understand the rules, obligations, and policies governing the use of our Morfen Software services."
        />
        <meta
          name="twitter:image"
          content="https://www.yourdomain.com/og-image-terms.jpg"
        />
      </Helmet>

      <main className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-500 font-light">
              Effective Date: January 1, 2025
            </p>
          </div>

          <div className="space-y-12">
            {policySections.map((section, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 border-l-4 border-indigo-500 pl-4 py-2"
              >
                <section.icon
                  className={`w-8 h-8 flex-shrink-0 ${section.color} mt-1`}
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              For any questions regarding these Terms, please contact our Legal
              Department.
              <br />
              <span className="font-medium text-gray-700">
                BornosoftNr - Morfen Software Architects
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
