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
        className="w-full rounded-xl overflow-hidden shadow-2xl border border-[var(--color-card-border)] bg-[#1a1b26]"
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-[#16161e] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f7768e]" />
            <div className="w-3 h-3 rounded-full bg-[#e0af68]" />
            <div className="w-3 h-3 rounded-full bg-[#9ece6a]" />
          </div>
          <div className="mx-auto text-xs font-mono text-[var(--color-muted-2)] flex items-center gap-2">
            prathmesh@production:~/stack
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#9ece6a]">➜</span>
            <span className="text-[#7aa2f7]">~</span>
            <span className="text-[#e0af68]">cat</span>
            <span className="text-[var(--color-foreground)]">capabilities.json</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-4 bg-[var(--color-foreground)] inline-block"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h4 className="text-[#7aa2f7] font-semibold tracking-wider mb-4 text-xs">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
