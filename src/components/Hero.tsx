import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Github, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161a29] border border-[#2a324b] text-blue-400 text-xs font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for High-Impact Roles & Collaborations</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.15]">
          Engineering scalable software &{" "}
          <span className="gradient-text">cinematic digital experiences.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I&apos;m <span className="text-white font-medium">{siteConfig.author}</span>. A Full-Stack Engineer and Creative Technologist specializing in building ultra-responsive web applications, mobile platforms, and high-retention digital systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#161a29] hover:bg-[#20263b] text-gray-200 border border-[#262b3d] font-medium px-6 py-3 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4 text-gray-400" />
            <span>Get in Touch</span>
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111420] hover:bg-[#181d2e] text-gray-300 border border-[#222738] font-medium px-5 py-3 rounded-xl transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Highlight feature badges */}
        <div className="pt-8 border-t border-[#1e2335] max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#0e111b]/80 border border-[#1b2030]">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Full-Stack Ready</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#0e111b]/80 border border-[#1b2030]">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Mobile / Flutter</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#0e111b]/80 border border-[#1b2030]">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Custom Domain & Policy Ready</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#0e111b]/80 border border-[#1b2030]">
            <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
            <span>Modern Aesthetic</span>
          </div>
        </div>
      </div>
    </section>
  );
}
