"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUp, Github, Mail, Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1a1f2e] bg-[#07090e] py-12 text-xs text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#161a29]">
          {/* Brand & Author */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">
              {siteConfig.shortName}
            </span>
            <span className="text-gray-600">•</span>
            <span>Engineered by {siteConfig.author}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111522] border border-[#232a3d] hover:text-white hover:border-gray-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="p-2 rounded-lg bg-[#111522] border border-[#232a3d] hover:text-white hover:border-gray-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#111522] border border-[#232a3d] hover:text-white hover:border-gray-500 transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal Policies & Domain Compliance (Privacy, Terms, Cookies) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved. Built for production & custom domain deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-medium text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-blue-500" />
              <span>Privacy Policy</span>
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/terms"
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/cookies"
              className="hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
