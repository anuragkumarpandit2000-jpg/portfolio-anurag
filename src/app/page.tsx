import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About & Core Competencies Section */}
      <About />

      {/* 3. Featured Projects Showcase */}
      <Projects />

      {/* 4. Services & Offerings */}
      <Services />

      {/* 5. Contact & Collaboration Form */}
      <Contact />
    </main>
  );
}
