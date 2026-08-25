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
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
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
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 text-violet-500 text-xs font-semibold tracking-widest uppercase mb-3">
          About Me
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">
          Background & Leadership
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {/* Col 1: Portrait */}
        <motion.div
          variants={cardItem}
          className="relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden md:row-span-2 min-h-[340px] md:min-h-[420px] shadow-lg group"
        >
          <Image
            src="/prathmesh.jpg"
            alt="Prathmesh Jadhav"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="text-xs uppercase tracking-widest text-violet-300 font-semibold mb-1 block">
              Software Engineer & Architect
            </span>
            <h3 className="text-2xl font-bold text-white">Prathmesh Jadhav</h3>
            <p className="text-xs text-gray-300 mt-1">VIT Bhopal University</p>
          </div>
        </motion.div>

        {/* Col 2, Row 1: Clubs & Leadership */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 hover:bg-[var(--color-card-hover)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-violet-500 font-bold">
                Clubs & Leadership
              </span>
              <span className="text-xl">🏛️</span>
            </div>
            <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
              Joint Secretary
            </h4>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Joint Secretary at <strong className="text-[var(--color-foreground)] font-semibold">Stats-O-Locked</strong> & Resource Team Core member at <strong className="text-[var(--color-foreground)] font-semibold">Insight Club</strong>. Leading technical initiatives and managing team resources.
            </p>
          </div>
        </motion.div>

        {/* Col 3, Row 1: University */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 hover:bg-[var(--color-card-hover)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-violet-500 font-bold">
                Education
              </span>
              <span className="text-xl">🎓</span>
            </div>
            <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-1">
              B.Tech in CSE
            </h4>
            <p className="text-xs text-violet-500 font-medium mb-3">VIT Bhopal University (2024 - 2028)</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Pre-Final Year Computer Science Engineering student focusing on scalable systems, core algorithms, data structures, and modern AI engineering.
            </p>
          </div>
        </motion.div>

        {/* Col 2, Row 2: Focus Areas */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 hover:bg-[var(--color-card-hover)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-violet-500 font-bold">
                Focus Areas
              </span>
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
              GenAI & Agentic AI
            </h4>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Deeply invested in Retrieval-Augmented Generation (RAG), GraphRAG, LangGraph multi-agent orchestration, and full-stack software development.
            </p>
          </div>
        </motion.div>

        {/* Col 3, Row 2: Currently */}
        <motion.div
          variants={cardItem}
          className="group relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 hover:bg-[var(--color-card-hover)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-violet-500 font-bold">
                Current Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Available
              </span>
            </div>
            <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
              Building AI Systems
            </h4>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Architecting intelligent web platforms and exploring autonomous workflows. Always open for high-impact technical collaborations.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
