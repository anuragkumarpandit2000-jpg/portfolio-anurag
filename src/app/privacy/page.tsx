import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Shield, ArrowLeft, Lock, Eye, FileText, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.shortName}`,
  description: `Privacy Policy and data protection terms for ${siteConfig.siteUrl}`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 20, 2026";

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-200 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Page Header */}
        <div className="border-b border-[#1f2638] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-4 h-4" />
            <span>Legal Compliance & Domain Verification</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated: {lastUpdated} • Domain:{" "}
            <span className="text-blue-400 font-mono">{siteConfig.siteUrl}</span>
          </p>
        </div>

        {/* Body Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-300">
          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-400" />
              1. Overview
            </h2>
            <p>
              Your privacy is respected and protected. This Privacy Policy outlines how{" "}
              <strong className="text-white">{siteConfig.author}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating under{" "}
              <span className="text-blue-400 font-mono">{siteConfig.siteUrl}</span>, collects, uses, and safeguards any information provided when you interact with this portfolio website.
            </p>
            <p>
              By accessing this website, you consent to the practices described in this document. If you do not agree with any terms, please discontinue use of this site.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              2. Information We Collect
            </h2>
            <p>
              We collect minimal information necessary to deliver and maintain a secure, high-performance web experience:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">Voluntary Information:</strong> When you send a message through the contact form or directly via email, we collect your name, email address, subject line, and the message content you provide.
              </li>
              <li>
                <strong className="text-white">Technical & Usage Logs:</strong> Standard web hosting servers automatically record routine access logs, including your IP address, browser type, operating system, referring URL, timestamp, and requested pages. This information is utilized solely to defend against cyber threats and ensure domain stability.
              </li>
              <li>
                <strong className="text-white">Cookies:</strong> We use essential session cookies and optional analytical preferences. Please refer to our{" "}
                <Link href="/cookies" className="text-blue-400 underline">
                  Cookie Policy
                </Link>{" "}
                for full details.
              </li>
            </ul>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              3. How We Use Your Information
            </h2>
            <p>
              Any information collected is used exclusively for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
              <li>To reply to your project inquiries, questions, or contract proposals.</li>
              <li>To evaluate and improve website performance, responsiveness, and navigation.</li>
              <li>To protect against automated abuse, fraudulent traffic, and security exploits.</li>
              <li>To maintain compliance with applicable legal and statutory requirements.</li>
            </ul>
            <p className="pt-2 font-medium text-white">
              We do not sell, rent, trade, or monetize your personal information to third parties or data brokers.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-400" />
              4. Third-Party Infrastructure & Services
            </h2>
            <p>
              This website may utilize reputable third-party infrastructure providers (such as Vercel, Cloudflare, GitHub Pages, or Google Fonts) to serve content and ensure worldwide CDN availability. These providers operate under their respective privacy protocols.
            </p>
            <p>
              External links to third-party platforms (e.g. GitHub, LinkedIn, X/Twitter, external live demo websites) are governed by those third parties&apos; own terms. We encourage you to review their independent policies.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-400" />
              5. Your Rights & Contact Details
            </h2>
            <p>
              Under applicable international privacy regulations (including GDPR and CCPA), you have the right to request access to, correction of, or deletion of any personal communications or contact data we hold about you.
            </p>
            <p>
              For any privacy inquiries or domain compliance questions, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#181d2e] border border-[#262f47] text-sm">
              <p className="text-white font-medium">{siteConfig.author}</p>
              <p className="text-blue-400 font-mono">{siteConfig.contactEmail}</p>
              <p className="text-gray-400">{siteConfig.location}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
