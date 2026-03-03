"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 lg:p-12 mt-12 mb-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col mb-8 gap-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-2)] hover:text-[#58a6ff] transition-colors mb-4 w-fit group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          cd ..
        </Link>
        <div className="flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
            My Achievements
          </h2>
          <p className="text-sm font-mono text-[var(--color-muted-2)] hidden sm:block">
            0x0D :: Milestones & Wins.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="w-full flex justify-center"
      >
        <div className="flex flex-col gap-6 w-full max-w-3xl">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col gap-3 p-6 sm:p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
            >
              {/* Top gradient reveal on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-[var(--color-foreground)]">{achievement.title}</h3>
                <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full w-fit border border-violet-500/20">{achievement.date}</span>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm sm:text-base">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
