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
        className="w-full rounded-xl overflow-hidden shadow-2xl border border-[var(--color-card-border)] bg-gray-50 dark:bg-[#0d1117]"
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-gray-200 dark:bg-[#161b22] border-b border-[var(--color-card-border)]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="mx-auto text-xs font-mono text-gray-500 dark:text-[#8b949e] flex items-center gap-2">
            prathmesh@production:~/achievements
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-green-600 dark:text-[#3fb950] font-bold">➜</span>
            <span className="text-blue-600 dark:text-[#58a6ff] font-bold">~</span>
            <span className="text-purple-600 dark:text-[#d2a8ff]">cat</span>
            <span className="text-gray-800 dark:text-[#c9d1d9]">milestones.json</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-5 bg-gray-800 dark:bg-[#c9d1d9] inline-block"
            />
          </div>

          <div className="flex flex-col gap-8 text-xs sm:text-sm">
            <div className="text-gray-600 dark:text-[#8b949e]">[</div>
            {achievements.map((achievement, idx) => (
              <div key={idx} className="pl-4 sm:pl-8 flex flex-col gap-2">
                <div className="text-gray-600 dark:text-[#8b949e]">{'{'}</div>
                <div className="pl-4 sm:pl-8 flex flex-col gap-1">
                  <div>
                    <span className="text-blue-600 dark:text-[#58a6ff]">"title"</span>
                    <span className="text-gray-600 dark:text-[#8b949e]">: </span>
                    <span className="text-green-600 dark:text-[#27c93f]">"{achievement.title}"</span>
                    <span className="text-gray-600 dark:text-[#8b949e]">,</span>
                  </div>
                  <div>
                    <span className="text-blue-600 dark:text-[#58a6ff]">"date"</span>
                    <span className="text-gray-600 dark:text-[#8b949e]">: </span>
                    <span className="text-orange-500 dark:text-[#e0af68]">"{achievement.date}"</span>
                    <span className="text-gray-600 dark:text-[#8b949e]">,</span>
                  </div>
                  <div>
                    <span className="text-blue-600 dark:text-[#58a6ff]">"description"</span>
                    <span className="text-gray-600 dark:text-[#8b949e]">: </span>
                    <span className="text-gray-800 dark:text-[#c9d1d9] leading-relaxed">"{achievement.description}"</span>
                  </div>
                </div>
                <div className="text-gray-600 dark:text-[#8b949e]">
                  {idx === achievements.length - 1 ? '}' : '},'}
                </div>
              </div>
            ))}
            <div className="text-gray-600 dark:text-[#8b949e]">]</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
