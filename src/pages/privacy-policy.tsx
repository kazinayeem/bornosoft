import { Users, Target, Share2, Lock, Eye, Mail } from "lucide-react";
import { Helmet } from "react-helmet";

const Privacypolicy = () => {
  const policySections = [
    {
      icon: Users,
      title: "1. Information We Collect",
      content:
        "We collect information required to deliver our 'Morfen' (Modern) Software services, which may include user contact details, usage data (via analytics), and technical specifications of client environments necessary for service delivery and maintenance.",
      color: "text-indigo-600",
    },
    {
      icon: Target,
      title: "2. How We Use Your Information",
      content:
        "Data collected is primarily used for service provision, billing, communication, and improving the quality and performance of our software and consulting services. We also use aggregated, anonymized data for internal research and development.",
      color: "text-red-600",
    },
    {
      icon: Share2,
      title: "3. Data Sharing and Disclosure",
      content:
        "BornosoftNr does not sell or rent personal information to third parties. We may share data with trusted partners or subcontractors only when necessary to fulfill contractual obligations, or when legally required by governmental authorities.",
      color: "text-green-600",
    },
    {
      icon: Lock,
      title: "4. Data Security Measures",
      content:
        "We implement industry-standard security protocols, including encryption, access control, and regular audits, to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
      color: "text-yellow-600",
    },
    {
      icon: Eye,
      title: "5. Your Data Rights",
      content:
        "You have the right to access, update, or request the deletion of your personal data held by BornosoftNr, subject to legal and contractual constraints. Requests for data access or correction must be submitted in writing.",
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: "6. Contacting Our Privacy Officer",
      content:
        "For any questions or concerns regarding this Privacy Policy or your data, please contact our designated Privacy Officer directly via email or our official correspondence address.",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
      <Helmet>
        <title>Privacy Policy - BornoSoftNr</title>
        <meta
          name="description"
          content="Read BornoSoftNr's Privacy Policy to learn how we collect, use, and protect your personal information for Morfen Software services."
        />
        <link
          rel="canonical"
          href="https://bornosoftnr.com/privacy-policy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - BornoSoftNr" />
        <meta
          property="og:description"
          content="Read BornoSoftNr's Privacy Policy to learn how we collect, use, and protect your personal information for Morfen Software services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bornosoftnr.com/privacy-policy"
        />
        <meta
          property="og:image"
          content="https://bornosoftnr.com/og-image-privacy-policy.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - BornoSoftNr" />
        <meta
          name="twitter:description"
          content="Read BornoSoftNr's Privacy Policy to learn how we collect, use, and protect your personal information for Morfen Software services."
        />
        <meta
          name="twitter:image"
          content="https://bornosoftnr.com/og-image-privacy-policy.jpg"
        />
      </Helmet>

      <main className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Privacy Policy
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
              This policy is crucial to our commitment to data protection.
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

export default Privacypolicy;
