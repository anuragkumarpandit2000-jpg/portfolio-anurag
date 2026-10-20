"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        // Small delay so it animates in gracefully
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access restricted (e.g. strict privacy mode)
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookie_consent", "declined");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#111420]/95 backdrop-blur-md border border-[#262b3d] p-5 rounded-2xl shadow-2xl text-sm">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-blue-400 font-semibold">
            <Cookie className="w-5 h-5" />
            <span>Cookie & Privacy Preferences</span>
          </div>
          <button
            onClick={handleDecline}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-gray-300 text-xs leading-relaxed mb-4">
          This site uses strictly necessary and performance cookies to optimize
          your experience, protect against spam, and verify domain routing. You
          can review our full practices in our{" "}
          <Link
            href="/cookies"
            className="text-blue-400 hover:underline font-medium"
          >
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-blue-400 hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" />
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="bg-[#1e2230] hover:bg-[#262b3d] text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg text-xs transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
