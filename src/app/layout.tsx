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
  title: {
    default: "Bornosoft: Empowering Businesses with Smart Technology",
    template: "%s | Bornosoft",
  },
  description:
    "Bornosoft empowers businesses with smart technology solutions, including custom software development, AI, and cloud services. We help your business thrive in the digital age.", // More detailed and keyword-rich

  openGraph: {
    title: "Bornosoft: Empowering Businesses with Smart Technology",
    description:
      "Bornosoft empowers businesses with smart technology solutions, including custom software development, AI, and cloud services. We help your business thrive in the digital age.",
    url: "https://bornosoftnr.com/",
    siteName: "Bornosoft",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bornosoft Logo and tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bornosoft: Smart Technology for Business Growth",
    description:
      "Custom software, AI, and cloud services to help your business thrive.",
    creator: "@yourtwitterhandle",
    images: ["/logo.png"],
  },

  // 4. Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
