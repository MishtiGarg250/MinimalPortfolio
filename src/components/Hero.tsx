import React from "react";

export default function Hero() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center p-8 border-b border-white/10 dark:border-white/20">
      <div className="max-w-4xl w-full text-center sm:text-left flex flex-col items-center sm:items-start space-y-6">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Mishti Garg
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl">
          Passionate about building scalable, production-ready software. Always learning and experimenting to bring ideas to life.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-foreground text-background font-medium hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
