"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Mail, MessageSquare, Send, CheckCircle2, Github, MapPin, Sparkles } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission / mailto redirect
    const mailtoLink = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-[#1a1f2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            Have a project in mind, an engineering challenge to solve, or an opportunity to discuss? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  I typically respond to inquiries within 24 business hours. You can also reach me directly through my social channels.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#181d2e] border border-[#262f47] text-gray-200 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="truncate">{siteConfig.contactEmail}</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181d2e] border border-[#262f47] text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>

                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#181d2e] border border-[#262f47] text-gray-200 hover:text-white hover:border-gray-500 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-400 shrink-0" />
                  <span>github.com/anuragkumarpandit2000-jpg</span>
                </a>
              </div>

              <div className="pt-2 border-t border-[#1e2335]">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Open for freelance contracts & full-time roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111522] border border-[#232a3d] rounded-2xl p-6 sm:p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Opening Your Email Client...
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
                    Your message details have been pre-filled. If your client didn&apos;t open automatically, write directly to{" "}
                    <span className="text-blue-400 font-mono">{siteConfig.contactEmail}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-blue-400 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-gray-300 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full bg-[#181d2e] border border-[#262f47] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-gray-300 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full bg-[#181d2e] border border-[#262f47] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full bg-[#181d2e] border border-[#262f47] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full bg-[#181d2e] border border-[#262f47] rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
