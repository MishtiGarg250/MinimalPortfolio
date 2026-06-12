import React from "react";

const techCategories = [
  {
    title: "Programming Languages",
    skills: ["C/C++", "JavaScript", "TypeScript", "Python", "SQL"]
  },
  {
    title: "Frontend Technologies",
    skills: ["React.js", "Next.js", "Tailwind CSS", "D3.js", "Framer Motion"]
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Socket.IO", "REST APIs"]
  },
  {
    title: "Databases & ORMs",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Drizzle"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "n8n", "Cloudinary", "Vercel"]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-8 border-b border-white/10 dark:border-white/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {techCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((tech, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 text-sm border border-gray-300 dark:border-white/20 font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
