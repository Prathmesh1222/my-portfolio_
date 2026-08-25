"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "PROGRAMMING",
    icon: "🐍",
    skills: ["Python", "Java", "C++", "SQL", "JavaScript"],
    accent: "from-blue-600 to-cyan-500",
    pillColor: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30",
  },
  {
    title: "AI / ML",
    icon: "🧠",
    skills: ["GenAI", "Agentic AI", "RAG", "GraphRAG", "LangChain", "LangGraph", "FAISS", "LLMs", "NLP"],
    accent: "from-violet-600 to-purple-500",
    pillColor: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/30",
  },
  {
    title: "FRONTEND",
    icon: "💻",
    skills: ["React.js", "HTML", "CSS", "Vite"],
    accent: "from-emerald-600 to-teal-500",
    pillColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
  },
  {
    title: "BACKEND",
    icon: "⚙️",
    skills: ["Flask", "FastAPI", "REST APIs"],
    accent: "from-orange-600 to-amber-500",
    pillColor: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/30",
  },
  {
    title: "AUTOMATION",
    icon: "⚡",
    skills: ["n8n", "MCP", "Gmail API", "Airtable"],
    accent: "from-pink-600 to-rose-500",
    pillColor: "bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/30",
  },
  {
    title: "TOOLS",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Docker", "Linux", "GCP", "Vercel"],
    accent: "from-indigo-600 to-blue-500",
    pillColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
  },
];

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 mb-24">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 text-indigo-500 bg-indigo-500/10 text-xs font-bold tracking-widest uppercase mb-3">
          Technologies
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-4">
          Tech Stack & Domain Skills
        </h2>

        {/* Real-time Interactive Skill Search */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="🔍 Search any tech skill (e.g. RAG, Python, Docker)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-2.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card)] text-xs md:text-sm text-[var(--color-foreground)] placeholder-[var(--color-muted-2)] focus:outline-none focus:border-indigo-500 shadow-sm transition-all"
          />
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => {
          const filteredSkills = category.skills.filter((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (searchTerm && filteredSkills.length === 0) return null;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 200, damping: 20 }}
              className="group flex flex-col p-6 rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] transition-all duration-300 card-glow relative overflow-hidden shadow-lg"
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.accent}`}
              />

              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[var(--color-foreground)] font-extrabold tracking-wider text-xs uppercase flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.title}
                </h4>
                <span className="text-[11px] font-mono text-[var(--color-muted-2)]">
                  {filteredSkills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {filteredSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`tech-pill px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer ${category.pillColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
