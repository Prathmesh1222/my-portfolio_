"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 16 },
  },
};

export default function BentoGrid() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 text-indigo-500 bg-indigo-500/10 text-xs font-bold tracking-widest uppercase mb-3">
          About Me
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight">
          Background & Leadership
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Col 1: Portrait */}
        <motion.div
          variants={cardItem}
          className="relative rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden md:row-span-2 min-h-[360px] md:min-h-[440px] shadow-xl group card-glow"
        >
          <Image
            src="/prathmesh.jpg"
            alt="Prathmesh Jadhav"
            fill
            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="text-xs uppercase tracking-widest text-indigo-300 font-bold mb-1 block">
              Software Engineer & AI Developer
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">Prathmesh Jadhav</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">VIT Bhopal University</p>
          </div>
        </motion.div>

        {/* Col 2, Row 1: Clubs & Leadership */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 transition-all duration-300 flex flex-col justify-between card-glow overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">
                Clubs & Leadership
              </span>
              <span className="text-xl">🏛️</span>
            </div>
            <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
              Joint Secretary
            </h4>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed font-normal">
              Joint Secretary at <strong className="text-[var(--color-foreground)] font-semibold">Stats-O-Locked</strong> & Resource Team Core member at <strong className="text-[var(--color-foreground)] font-semibold">Insight Club</strong>. Leading technical strategy and managing developer initiatives.
            </p>
          </div>
        </motion.div>

        {/* Col 3, Row 1: University */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 transition-all duration-300 flex flex-col justify-between card-glow overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-indigo-500 font-bold">
                Education
              </span>
              <span className="text-xl">🎓</span>
            </div>
            <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-1">
              B.Tech in CSE
            </h4>
            <p className="text-xs text-indigo-500 font-semibold mb-3">VIT Bhopal University (2024 - 2028)</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Pre-Final Year Computer Science Engineering student focusing on scalable cloud systems, algorithms, and modern AI engineering.
            </p>
          </div>
        </motion.div>

        {/* Col 2, Row 2: Focus Areas */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 transition-all duration-300 flex flex-col justify-between card-glow overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-violet-500 font-bold">
                Focus Areas
              </span>
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
              GenAI & Agentic AI
            </h4>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
              Specializing in Retrieval-Augmented Generation (RAG), GraphRAG, LangGraph multi-agent orchestration, and modern cloud deployment.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["LangChain", "RAG", "Agentic AI", "FastAPI"].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-hover)] text-[var(--color-foreground)] font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Col 3, Row 2: Currently */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 transition-all duration-300 flex flex-col justify-between card-glow overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold">
                Current Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Available
              </span>
            </div>
            <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
              Building AI Systems
            </h4>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Architecting intelligent web platforms and exploring autonomous agent workflows. Always open for high-impact technical collaborations.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
