import React from "react";
import { siteConfig } from "@/config/site";
import { Terminal, Cpu, Layers, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#1a1f2e] bg-[#0b0e17]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" />
            <span>Engineering & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Behind the Architecture
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            I build software with obsessive attention to user experience, system stability, and modern cloud scalability.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Bridging Logic and Visual Delight
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                As a software engineer, I don&apos;t just write lines of code; I architect systems that solve real problems. From low-latency backend microservices to responsive interactive interfaces and mobile experiences, my focus is always on engineering longevity and clarity.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether deploying containerized applications, implementing strict security headers, or polishing pixel-perfect animations, I believe that great software is both functionally resilient and visually unforgettable.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Standards-Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  Performance-First
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-pink-400" />
                  User-Centric Design
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Pills */}
          <div id="skills" className="lg:col-span-5">
            <div className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                <span>Core Technologies</span>
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 rounded">
                  {siteConfig.skills.length} Tools
                </span>
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Technologies I utilize daily to engineer resilient and modern web, mobile, and cloud applications:
              </p>

              <div className="flex flex-wrap gap-2">
                {siteConfig.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[#181d2e] border border-[#262f47] text-gray-200 text-xs font-medium hover:border-blue-500 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
