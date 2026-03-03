"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C++", icon: "⚡", color: "from-blue-500/10 to-blue-600/10" },
  { name: "Python", icon: "🐍", color: "from-yellow-500/10 to-yellow-600/10" },
  { name: "JavaScript", icon: "✨", color: "from-yellow-400/10 to-amber-500/10" },
  { name: "TypeScript", icon: "📘", color: "from-blue-400/10 to-blue-500/10" },
  { name: "React", icon: "⚛️", color: "from-cyan-400/10 to-cyan-500/10" },
  { name: "Next.js", icon: "▲", color: "from-gray-400/10 to-gray-500/10" },
  { name: "Node.js", icon: "🟢", color: "from-green-500/10 to-green-600/10" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-teal-400/10 to-teal-500/10" },
  { name: "Git", icon: "🔀", color: "from-orange-400/10 to-orange-500/10" },
  { name: "Ubuntu", icon: "🐧", color: "from-orange-500/10 to-red-500/10" },
  { name: "Generative AI", icon: "🤖", color: "from-violet-400/10 to-violet-500/10" },
  { name: "LLMs", icon: "🧠", color: "from-pink-400/10 to-pink-500/10" },
  { name: "RAG", icon: "📚", color: "from-indigo-400/10 to-indigo-500/10" },
  { name: "FastAPI", icon: "🚀", color: "from-emerald-400/10 to-emerald-500/10" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 30, scale: 0.8, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <motion.span
            className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            My Skills
          </motion.span>
        </h2>
        <p className="text-[var(--color-muted-2)] text-sm">
          Technologies and tools I work with
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={skillItem}
            whileHover={{
              scale: 1.1,
              y: -8,
              rotate: 2,
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.15)",
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className={`skill-badge group relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-4 flex flex-col items-center gap-3 hover:border-violet-500/30 transition-all duration-300 cursor-default`}
          >
            <motion.span
              className="text-2xl"
              whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              {skill.icon}
            </motion.span>
            <span className="text-sm text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors duration-300 text-center font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
