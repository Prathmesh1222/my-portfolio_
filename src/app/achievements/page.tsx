"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const achievements = [
  {
    title: "Hackathon Winner",
    description: "Secured 1st place at regional tech hackathon building an AI-powered educational tool.",
    date: "November 2025"
  },
  {
    title: "Open Source Contributor",
    description: "Merged 5+ major pull requests into popular open source repositories.",
    date: "July 2025"
  },
  {
    title: "Competitive Programming",
    description: "Solved over 300+ problems on LeetCode and reached top percentile globally.",
    date: "Current"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 p-4 relative overflow-hidden">
      {/* Decorative gradient background similar to home page */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-2)] hover:text-[var(--color-foreground)] transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">My</span>{" "}
          <span className="text-[var(--color-foreground)]">Achievements</span>
        </h1>
        <p className="text-[var(--color-muted)] mb-12">
          Milestones, hackathons, and challenges I have conquered.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col gap-2 p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow"
            >
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-xl font-medium text-[var(--color-foreground)]">{achievement.title}</h3>
                 <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">{achievement.date}</span>
               </div>
               <p className="text-[var(--color-muted)] leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
