"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C++", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "✨" },
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Git", icon: "🔀" },
  { name: "Ubuntu", icon: "🐧" },
  { name: "Generative AI", icon: "🤖" },
  { name: "LLMs", icon: "🧠" },
  { name: "RAG", icon: "📚" },
  { name: "FastAPI", icon: "🚀" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-10"
      >
        <h3 className="text-xs uppercase tracking-widest text-[var(--color-muted-2)] mb-3 font-medium">
          Tech Stack
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
          My Skills
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={skillItem}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-4 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-colors duration-200"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-sm font-medium text-[var(--color-foreground)]">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
