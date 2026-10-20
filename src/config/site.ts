/**
 * Central Site Configuration
 * -------------------------------------------------------------
 * When you connect your custom domain, simply update `siteUrl` below
 * (or set NEXT_PUBLIC_SITE_URL in your hosting environment / .env).
 * Everything—SEO, OpenGraph, Canonical URLs, Sitemap, and Policy
 * documents—will automatically sync!
 */

export const siteConfig = {
  // Domain & SEO
  name: "Anurag | Full-Stack Software Engineer & Creative Developer",
  shortName: "Anurag",
  description:
    "Portfolio of Anurag — Full-Stack Software Engineer, Mobile & Web Application Developer, and Creative Visual Technologist.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-anurag.vercel.app",
  author: "Anurag",
  contactEmail: "anuragkumarpandit2000@gmail.com",
  location: "India / Global Remote",

  // Social Links
  links: {
    github: "https://github.com/anuragkumarpandit2000-jpg",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "mailto:anuragkumarpandit2000@gmail.com",
  },

  // Navigation Links
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],

  // Policy Links (Essential for custom domain approval & legal compliance)
  policyLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],

  // Skills for Easy Editing
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Python",
    "Flutter / Dart",
    "PostgreSQL",
    "MongoDB",
    "Git & GitHub",
    "REST & GraphQL APIs",
    "Docker & Cloud",
    "Video & Motion Editing",
  ],

  // Featured Projects
  projects: [
    {
      title: "Quantum Intelligent Automation Engine",
      tagline: "Enterprise workflow orchestrator & real-time analytics",
      description:
        "High-throughput automation platform built to streamline complex business operations with reactive events and unified monitoring.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/anuragkumarpandit2000-jpg",
      featured: true,
    },
    {
      title: "Concept Master AI Studio",
      tagline: "AI-powered educational visual synthesizer",
      description:
        "Interactive learning suite designed to break down sophisticated algorithmic concepts into cinematic visual demonstrations.",
      techStack: ["React", "Python", "Tailwind CSS", "FastAPI"],
      liveUrl: "#",
      githubUrl: "https://github.com/anuragkumarpandit2000-jpg",
      featured: true,
    },
    {
      title: "The Dot — Visual Showcase Engine",
      tagline: "High-impact visual story & portfolio showcase",
      description:
        "Modern creative showcase blending cinematic motion design with performant front-end engineering.",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/anuragkumarpandit2000-jpg",
      featured: true,
    },
  ],

  // Services Offered
  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "Custom, responsive, and ultra-fast web applications built with Next.js, React, Node.js, and modern databases.",
      icon: "Code2",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform iOS and Android solutions engineered with Flutter and native integrations for silky smooth performance.",
      icon: "Smartphone",
    },
    {
      title: "API & Backend Systems",
      description:
        "Scalable RESTful & GraphQL backend APIs, authentication pipelines, and database optimization.",
      icon: "Server",
    },
    {
      title: "Creative Visuals & UI/UX",
      description:
        "Clean, intuitive user experiences combined with high-retention motion graphics and video editing.",
      icon: "Sparkles",
    },
  ],
};
