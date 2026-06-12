import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-white/10 dark:border-white/20 z-50">
      <div className="max-w-4xl mx-auto px-8 h-16 flex items-center justify-center sm:justify-end">
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#tech-stack" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
