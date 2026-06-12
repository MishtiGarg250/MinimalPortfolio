import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 border-b border-white/10 dark:border-white/20">
      <div className="max-w-4xl mx-auto flex flex-col space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">About Me</h2>
          <div className="text-lg text-gray-400 space-y-4">
            <p>
              I am a sophomore pursuing my B.Tech in Electronics and Communication Engineering. I am deeply passionate about software engineering and constantly amazed by how large-scale systems are built from the ground up.
            </p>
            <p>
              My focus is on learning the architecture behind production-ready and scalable software. I love to experiment with my knowledge, taking on new challenges to hone my skills and build impactful tools.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="border border-white/20 dark:border-white/10 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-white/5 transition-colors">
            <div>
              <h4 className="text-xl font-medium">Indian Institute of Information Technology (IIIT), Allahabad</h4>
              <p className="text-gray-400">B.Tech in Electronics and Communication Engineering</p>
            </div>
            <div className="mt-2 sm:mt-0 text-sm text-gray-500 font-medium">
              Sophomore
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
