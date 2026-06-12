import React from "react";

const projects = [
  {
    title: "LOOMINAI",
    description: "Agentic AI Marketing Automation Platform. Built an AI-powered platform using LLM-powered workflows for autonomous content generation, editing, publishing, and analytics. Designed 4 automated n8n pipelines.",
    link: "https://main.d33mvd2ftupha7.amplifyapp.com/",
    github: "https://github.com/MishtiGarg250/LoominAI",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Express.js", "MongoDB", "n8n", "Cloudinary", "LLMs"]
  },
  {
    title: "ALPHALENS",
    description: "AI-Powered Real-Time Trading Intelligence Platform. Real-time AI trading analytics with TradingView charts, DistilRoBERTa sentiment analysis, and abnormal volume detection.",
    link: "https://alpha-lens-trading-partner-pv55.vercel.app/",
    github: "https://github.com/vinay2047/AlphaLens-Trading-Partner",
    year: "2026",
    techStack: ["Next.js", "Redis", "MongoDB", "Clerk", "TradingView", "Tailwind CSS"]
  },
  {
    title: "PixelPerfect",
    description: "A modern, full-stack web application combining a feature-rich blogging platform with a structured learning track system for content creators and learners.",
    link: "#",
    github: "#",
    year: "2025",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Prisma", "PostgreSQL"]
  },
  {
    title: "Uniq",
    description: "A smart, real-time virtual queue and reservation system that digitizes campus services using live tracking, predictive wait times, and multi-platform access.",
    link: "#",
    github: "#",
    year: "2026",
    techStack: ["Next.js", "React", "Node.js"] // Update if different
  },
  {
    title: "PixelFi",
    description: "AI-Powered Wealth Portfolio Management. Structures investments, tracking, and future targets into an intelligent financial OS with real-time market data, custom asset tracking, and automated background jobs.",
    link: "#",
    github: "#",
    year: "2026",
    techStack: ["Next.js", "Express", "PostgreSQL", "Prisma", "Clerk", "Finnhub", "TanStack Query"]
  },
  {
    title: "Cirql",
    description: "Real-Time Social Video Platform. Features collaborative watch party rooms with YouTube sync, live chat, and a friend system with direct messaging and notifications.",
    link: "#",
    github: "#",
    year: "2025",
    techStack: ["Next.js", "Express", "Socket.IO", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Aether",
    description: "AI-Powered Personal Workspace. Organizes notes, tasks, and links with Google Generative AI. Features an interactive D3.js knowledge graph, Google Calendar sync, and background job processing via BullMQ.",
    link: "#",
    github: "#",
    year: "2026",
    techStack: ["Next.js", "Express", "MongoDB", "D3.js", "BullMQ", "Redis", "Generative AI"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 border-b border-white/10 dark:border-white/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group border border-white/20 dark:border-white/10 p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
                <p className="text-current opacity-70 group-hover:opacity-100 transition-opacity mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 border border-current opacity-60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm font-medium">
                <a 
                  href={project.link} 
                  target={project.link !== "#" ? "_blank" : "_self"} 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:underline"
                >
                  View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target={project.github !== "#" ? "_blank" : "_self"} 
                    rel="noreferrer" 
                    className="flex items-center gap-2 hover:underline"
                  >
                    GitHub <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
