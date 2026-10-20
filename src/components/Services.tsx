import React from "react";
import { siteConfig } from "@/config/site";
import { Code2, Smartphone, Server, Sparkles, Wrench } from "lucide-react";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-purple-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-emerald-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-[#1a1f2e] bg-[#0b0e17]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Wrench className="w-4 h-4" />
            <span>Offerings & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Can Build For You
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            Delivering end-to-end digital solutions from architecture to production deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#111522] border border-[#232a3d] hover:border-[#35405e] rounded-2xl p-6 sm:p-8 transition-colors shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#181d2e] border border-[#262f47] flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
