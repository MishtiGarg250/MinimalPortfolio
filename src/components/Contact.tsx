import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">Let's build something.</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Feel free to reach out for collaborations or just a friendly hello. 
          I am currently open to new opportunities.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a 
            href="mailto:gargmishti9@gmail.com" 
            className="inline-block px-8 py-4 bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform duration-300"
          >
            gargmishti9@gmail.com
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 dark:border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Mishti Garg. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://x.com/MishtiG26976" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/mishti-garg-41aa2931b/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/MishtiGarg250" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
