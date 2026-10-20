import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Anurag",
    "Software Engineer",
    "Full-Stack Developer",
    "Flutter Developer",
    "Next.js",
    "React Developer",
    "Creative Visual Technologist",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.links.github }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@anurag",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Domain Verification Placeholder (for Google Search Console / AdSense / Bing) */}
        {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-gray-100 antialiased selection:bg-blue-600 selection:text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
