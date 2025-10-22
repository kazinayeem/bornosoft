import { RefreshCw, Receipt, Clock, Mail } from "lucide-react";
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
  const policySections = [
    {
      icon: RefreshCw,
      title: "1. Policy Overview",
      content:
        "BornosoftNr is committed to customer satisfaction. We strive to deliver high-quality Morfen (Modern) Software solutions. This policy outlines the terms under which refunds may be provided for our services and digital products.",
      color: "text-indigo-600",
    },
    {
      icon: Receipt,
      title: "2. Eligibility for Refund (Service Projects)",
      content:
        "Custom software development projects are generally non-refundable due to the bespoke nature of the work. Refunds for service contracts (e.g., dedicated development, consulting) will only be considered under the following conditions: (a) If BornosoftNr fails to meet mutually agreed-upon project milestones as defined in the Statement of Work (SOW), and all attempts at remedy have failed. (b) For unused retainer hours, subject to a 10% administrative fee.",
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "3. Digital Products (SaaS/Licenses)",
      content:
        "For subscription-based software or digital licenses, a refund may be requested within **seven (7) days** of the initial purchase date, provided the product has not been substantially used (e.g., generating excessive API calls, or using core features extensively). Beyond this initial 7-day period, all fees are non-refundable. Monthly subscriptions can be cancelled at any time, with access continuing until the end of the current billing cycle.",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "4. Request Procedure",
      content:
        "All refund requests must be submitted formally to our Billing Department via email at billing@bornosoftnr.com. The request must include: (a) Invoice Number, (b) Date of Purchase, and (c) a detailed explanation of the reason for the request. Our team will review the request within 10 business days.",
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
      <Helmet>
        <title>Refund Policy - BornoSoftNr</title>
        <meta
          name="description"
          content="Read BornoSoftNr's Refund Policy for our services and digital products. Learn eligibility, procedure, and terms for refunds."
        />
        <link rel="canonical" href="https://bornosoftnr.com/refund-policy" />

        {/* Open Graph */}
        <meta property="og:title" content="Refund Policy - BornoSoftNr" />
        <meta
          property="og:description"
          content="Read BornoSoftNr's Refund Policy for our services and digital products."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bornosoftnr.com/refund-policy"
        />
        <meta
          property="og:image"
          content="https://bornosoftnr.com/og-image-refund-policy.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund Policy - BornoSoftNr" />
        <meta
          name="twitter:description"
          content="Read BornoSoftNr's Refund Policy for our services and digital products."
        />
        <meta
          name="twitter:image"
          content="https://www.yourdomain.com/og-image-refund-policy.jpg"
        />
      </Helmet>

      <main className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Refund Policy
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
              This policy is subject to change without notice. For any questions
              regarding our refund process, please contact us directly.
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

export default RefundPolicy;
