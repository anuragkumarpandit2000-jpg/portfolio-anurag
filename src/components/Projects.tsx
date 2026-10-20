import React from "react";
import { siteConfig } from "@/config/site";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[#1a1f2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            A selection of production-grade systems, AI tools, and creative digital platforms I have engineered.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#111522] border border-[#232a3d] hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10"
            >
              <div>
                {/* Header / Tagline */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-900/40 px-2 py-0.5 rounded">
                    Featured
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-1"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors p-1"
                        aria-label={`Visit ${project.title} live preview`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-gray-400 mb-3">
                  {project.tagline}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-[#1e2335]">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181d2e] text-gray-300 border border-[#262f47]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
