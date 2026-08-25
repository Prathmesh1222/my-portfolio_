"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["Python", "Java", "C++", "SQL", "JavaScript"],
    accent: "from-blue-500 to-cyan-500",
    pillColor: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20 group-hover:bg-blue-500/20",
  },
  {
    title: "AI / ML",
    skills: ["GenAI", "Agentic AI", "RAG", "GraphRAG", "LangChain", "LangGraph", "FAISS", "LLMs", "NLP"],
    accent: "from-violet-500 to-purple-500",
    pillColor: "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20 group-hover:bg-violet-500/20",
  },
  {
    title: "FRONTEND",
    skills: ["React.js", "HTML", "CSS", "Vite"],
    accent: "from-emerald-500 to-teal-500",
    pillColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20 group-hover:bg-emerald-500/20",
  },
  {
    title: "BACKEND",
    skills: ["Flask", "FastAPI", "REST APIs"],
    accent: "from-orange-500 to-amber-500",
    pillColor: "bg-amber-600 dark:text-orange-300 bg-orange-500/10 border-orange-500/20 group-hover:bg-orange-500/20",
  },
  {
    title: "AUTOMATION",
    skills: ["n8n", "MCP", "Gmail API", "Airtable"],
    accent: "from-pink-500 to-rose-500",
    pillColor: "bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/20 group-hover:bg-pink-500/20",
  },
  {
    title: "TOOLS",
    skills: ["Git", "GitHub", "Docker", "Linux", "GCP", "Vercel"],
    accent: "from-indigo-500 to-blue-500",
    pillColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20 group-hover:bg-indigo-500/20",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 text-violet-500 text-xs font-semibold tracking-widest uppercase mb-3">
          Technologies
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">
          Tech Stack & Domain Skills
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, type: "spring", stiffness: 200, damping: 20 }}
            className="group flex flex-col p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
          >
            {/* Top gradient reveal on hover */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <h4 className="text-[var(--color-foreground)] font-bold tracking-wider mb-4 text-xs uppercase">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors duration-300 cursor-default ${category.pillColor}`}
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
