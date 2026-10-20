import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Scale, ArrowLeft, FileCheck, AlertTriangle, ShieldCheck, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.shortName}`,
  description: `Terms and Conditions governing the use of ${siteConfig.siteUrl}`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/terms`,
  },
};

export default function TermsOfServicePage() {
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
            <Scale className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated: {lastUpdated} • Domain:{" "}
            <span className="text-blue-400 font-mono">{siteConfig.siteUrl}</span>
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-300">
          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-400" />
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and{" "}
              <strong className="text-white">{siteConfig.author}</strong> regarding your access to and use of{" "}
              <span className="text-blue-400 font-mono">{siteConfig.siteUrl}</span>.
            </p>
            <p>
              By accessing or browsing this website, you confirm that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree, you are expressly prohibited from using the site.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, all original code samples, layout architectures, visual designs, graphics, branding, text, and media published on this domain are the proprietary intellectual property of{" "}
              <strong className="text-white">{siteConfig.author}</strong> and are protected by applicable copyright and international intellectual property treaties.
            </p>
            <p>
              Open-source repositories linked from this portfolio are governed by their respective licenses (e.g. MIT, Apache 2.0, or GPL) as specified within their GitHub repositories. You may not claim proprietary ownership over the original designs or brand marks presented here without prior written authorization.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              3. Permitted and Prohibited Conduct
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
              <li>Use the website in any manner that could disable, overburden, damage, or impair server infrastructure.</li>
              <li>Employ automated scraping, crawling, or denial-of-service vectors that interfere with normal site operations.</li>
              <li>Submit fraudulent, deceptive, or abusive inquiries through the contact interface.</li>
              <li>Attempt unauthorized penetration testing, vulnerability scanning, or security bypasses on this domain without prior written consent.</li>
            </ul>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-400" />
              4. Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p>
              This website, including its demo showcases and documentation, is provided on an &quot;AS-IS&quot; and &quot;AS-AVAILABLE&quot; basis without warranties of any kind, either express or implied.
            </p>
            <p>
              In no event shall <strong className="text-white">{siteConfig.author}</strong> be held liable for any indirect, consequential, exemplary, incidental, or punitive damages arising from your access to or inability to access this website or reliance on any showcase demonstrations.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-400" />
              5. Governing Law & Contact
            </h2>
            <p>
              These Terms shall be interpreted and governed in accordance with applicable laws. We reserve the right to update these terms at any time; changes become effective upon posting.
            </p>
            <div className="p-4 rounded-xl bg-[#181d2e] border border-[#262f47] text-sm">
              <p className="text-white font-medium">{siteConfig.author}</p>
              <p className="text-blue-400 font-mono">{siteConfig.contactEmail}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
