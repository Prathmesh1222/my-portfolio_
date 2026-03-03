"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "FRAMEWORKS",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "FastAPI"],
  },
  {
    title: "AI / ML",
    skills: ["Generative AI", "LLMs", "RAG"],
  },
  {
    title: "TOOLS / OS",
    skills: ["Git", "Ubuntu"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
            Tech Stack
          </h2>
        </div>
        <p className="text-sm font-mono text-[var(--color-muted-2)]">
          0x0C :: Infrastructure & Tools.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
          >
            {/* Top gradient reveal on hover */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <h4 className="text-[var(--color-foreground)] font-bold tracking-wider mb-4 text-sm md:text-base">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors duration-300 cursor-default border border-violet-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
