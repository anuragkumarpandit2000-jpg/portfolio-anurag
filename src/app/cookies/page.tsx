import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Cookie, ArrowLeft, Settings, ShieldCheck, Info, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteConfig.shortName}`,
  description: `Cookie Policy and tracking disclosure for ${siteConfig.siteUrl}`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/cookies`,
  },
};

export default function CookiePolicyPage() {
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
            <Cookie className="w-4 h-4" />
            <span>Browser Storage & Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated: {lastUpdated} • Domain:{" "}
            <span className="text-blue-400 font-mono">{siteConfig.siteUrl}</span>
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-300">
          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-400" />
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text data files saved to your computer or mobile device when you browse websites. They are widely used to make web applications function properly, maintain sessions, record user preferences, and provide aggregated analytics to site owners.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              2. How We Use Cookies
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#181d2e] border border-[#262f47]">
                <h3 className="font-semibold text-white text-sm mb-1">
                  Strictly Necessary Cookies
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  These cookies and local storage tokens are essential for you to navigate this website securely, authenticate domain routing, and ensure security protection against automated bot attacks. They do not store personally identifiable data.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#181d2e] border border-[#262f47]">
                <h3 className="font-semibold text-white text-sm mb-1">
                  Preference & Functional Cookies
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  These cookies record your voluntary preferences—such as your chosen display theme or whether you have acknowledged our privacy banner—so you don&apos;t have to reconfigure them upon subsequent visits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#181d2e] border border-[#262f47]">
                <h3 className="font-semibold text-white text-sm mb-1">
                  Performance & Analytics (Optional)
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  If activated, privacy-first analytics tools collect aggregate, anonymized visitor statistics (such as page load duration and popular project demos) without associating this data with individual user identities.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-400" />
              3. Managing & Disabling Cookies
            </h2>
            <p>
              You have the right to accept or decline cookies at any time. You can adjust your preferences via the banner displayed on this website or directly within your browser settings (Chrome, Firefox, Safari, Edge).
            </p>
            <p className="text-xs text-gray-400">
              Please note that disabling strictly necessary cookies may slightly impact the visual consistency or feature availability of certain dynamic portfolio demos.
            </p>
          </section>

          <section className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-400" />
              4. Questions and Contact Information
            </h2>
            <p>
              If you have any questions regarding our use of cookies or local storage, please contact:
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
