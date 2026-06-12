import React from "react";

const experiences = [
  {
    role: "Software Development Engineer (SDE) Intern",
    company: "Crecientech Infosystems [with University of Missouri]",
    date: "Feb 2026 - Present",
    description: "Developed scalable backend services using NestJS and FastAPI for biological data analysis workflows. Worked under Dr. Gyan Srivastava on integrating ML services with backend systems and frontend visualization pipelines. Built interactive gene expression heatmaps and improved UX across Next.js-based analytical dashboards. Played a key role in the architecture and end-to-end development of the TBEP tool, defining service interactions and API design.",
  },
  {
    role: "Project Mentor",
    company: "OpenCode",
    date: "2026",
    description: "Mentored contributors across 2 full-stack open-source projects, guiding development in backend architecture, scalable frontend design, workflow automation, and deployment practices. Reviewed, optimized, and merged 70+ pull requests while collaborating with 30+ contributors.",
  },
  {
    role: "Technical Team Member",
    company: "GeekHaven, IIIT Allahabad",
    date: "2025 - Present",
    description: "Collaborated with teams on building scalable web platforms, internal tools, and developer-focused applications for technical events. Contributed to frontend development, workflow integration, and UI/UX improvements.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 border-b border-white/10 dark:border-white/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Experience & Leadership</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
              <div className="md:w-1/4 text-sm text-gray-500 font-medium pt-1">
                {exp.date}
              </div>
              <div className="md:w-3/4 flex flex-col space-y-2 group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <h4 className="text-lg text-gray-400">{exp.company}</h4>
                <p className="text-gray-400 mt-2 text-justify">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
