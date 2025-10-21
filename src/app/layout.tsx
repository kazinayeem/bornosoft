import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

// Font configurations remain the same
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bornosoftnr.com'),
  title: {
    default: "BornoSoft | AI-Powered Web Development & Digital Solutions in Bangladesh",
    template: "%s | BornoSoft",
  },
  description:
    "Transform your business with intelligent web applications, AI integration, and cloud solutions. Expert full-stack development team in Dhaka, Bangladesh delivering scalable software solutions.",
  keywords: [
    "web development Bangladesh",
    "AI solutions",
    "full-stack development",
    "software company Dhaka",
    "custom web applications",
    "AI chatbot development",
    "cloud solutions",
    "mobile app development",
    "progressive web apps",
    "React development",
    "Node.js development",
    "Python AI development",
  ],
  authors: [{ name: "BornoSoft Team" }],
  creator: "BornoSoft",
  publisher: "BornoSoft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BornoSoft - Transform Ideas Into Intelligent Digital Solutions",
    description:
      "We build AI-powered web applications that scale your business from concept to market leadership. Expert development team in Bangladesh.",
    url: "https://bornosoftnr.com",
    siteName: "BornoSoft",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BornoSoft - Intelligent Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BornoSoft - AI-Powered Web Development",
    description:
      "Transform your business with intelligent web applications and AI solutions. Expert full-stack development in Bangladesh.",
    creator: "@bornosoft",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bornosoftnr.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BornoSoft",
    alternateName: "Bornosoft",
    url: "https://bornosoftnr.com",
    logo: "https://bornosoftnr.com/logo.png",
    description: "AI-powered web development and digital solutions company in Bangladesh",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@bornosoft.com",
    },
    sameAs: [
      "https://linkedin.com/company/bornosoft",
      "https://twitter.com/bornosoft",
      "https://github.com/bornosoft",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Mohammad Ali Nayeem",
        jobTitle: "Full Stack Developer & Software Engineer",
      },
      {
        "@type": "Person",
        name: "Reduan Ahmad",
        jobTitle: "Full Stack Developer & Software Engineer",
      },
    ],
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "AI Solutions",
      "Mobile App Development",
      "Cloud Services",
      "Software Consulting",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Script
            id="tawk-to"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68f71caf410f37194f262ad0/1j82kg3qj';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
