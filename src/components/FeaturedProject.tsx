"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  { icon: "📖", name: "Theory", desc: "Streamed AI answers grounded in your documents" },
  { icon: "🗺️", name: "Mind Map", desc: "Auto-generated concept maps from your notes" },
  { icon: "📝", name: "Quiz", desc: "Dynamic quiz generation for self-assessment" },
  { icon: "🃏", name: "Flashcards", desc: "Spaced repetition cards from your material" },
];

const techStack = ["Python", "FastAPI", "FAISS", "Gemini API", "RAG", "SSE Streaming", "JavaScript", "HTML/CSS"];

export default function FeaturedProject() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="text-center mb-12"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 text-violet-400 text-xs font-medium tracking-widest uppercase mb-4"
        >
          Featured Project
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-3">
          Cyphraxi
        </h2>
        <p className="text-[var(--color-muted-2)] text-sm max-w-2xl mx-auto leading-relaxed">
          An intelligent RAG study engine that transforms your raw lectures into
          AI-powered theory answers, mind maps, quizzes, and flashcards — all
          grounded in your actual documents. No hallucinations, just pure data.
        </p>
      </motion.div>

      {/* Main project card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.15 }}
        whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)" }}
        className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden card-glow"
      >
        {/* Header banner */}
        <motion.div
          className="relative w-full bg-gradient-to-br from-violet-600/20 via-purple-500/15 to-blue-500/20 p-8 md:p-12 overflow-hidden"
        >
          {/* Animated floating particles in banner */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 15 }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xl shadow-lg shadow-violet-500/20"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              🧠
            </motion.div>
            <div>
              <h3 className="text-[var(--color-foreground)] text-xl font-bold">Cyphraxi</h3>
              <p className="text-violet-500 text-sm">AI-Powered Study Engine</p>
            </div>
          </motion.div>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xl">
            Upload your syllabus. Decode your lectures. Get theory answers, mind maps, quizzes &amp; flashcards — built by engineers, for engineers.
          </p>
          {/* Decorative elements */}
          <motion.div
            className="absolute top-6 right-8 text-violet-500/20 text-6xl font-bold select-none hidden md:block"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            ⚛
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Feature tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {features.map((feature, i) => (
              <motion.button
                key={feature.name}
                onClick={() => setActiveFeature(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 150, damping: 15 }}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group p-4 rounded-xl border transition-all duration-300 text-left ${
                  activeFeature === i
                    ? "border-violet-500/40 bg-violet-500/10"
                    : "border-[var(--color-card-border)] bg-[var(--color-card-hover)] hover:border-violet-500/20"
                }`}
              >
                <motion.span
                  className="text-xl mb-2 block"
                  animate={activeFeature === i ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.span>
                <h4 className={`text-sm font-semibold mb-1 transition-colors ${
                  activeFeature === i ? "text-violet-500" : "text-[var(--color-foreground)]"
                }`}>
                  {feature.name}
                </h4>
                <p className="text-xs text-[var(--color-muted-2)] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Tech stack + Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.04 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="tech-pill px-3 py-1 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-hover)] text-xs text-[var(--color-muted)] cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.a
                href="https://github.com/Prathmesh1222/study.ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-hover)] text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-violet-500/30 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source Code
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
