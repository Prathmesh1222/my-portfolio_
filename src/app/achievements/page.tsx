"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const certifications = [
  {
    title: "Marketing Analytics (NPTEL – SWAYAM)",
    org: "IIT Kharagpur",
    date: "Ongoing",
  },
  {
    title: "LLMs using Python Workshop",
    org: "Techfest, IIT Bombay",
    date: "Dec 2025",
  },
  {
    title: "Cloud Computing (NPTEL – SWAYAM)",
    org: "IIT Kharagpur",
    date: "Jan 2026",
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    org: "Google",
    date: "Dec 2025",
  },
  {
    title: "Machine Learning with Python",
    org: "IBM (ID: F1BT7A4ZJJYN)",
    date: "Nov 2025",
  },
];

const hackathons = [
  {
    title: "Hack2Skill Hackathon",
    desc: "Participant | Innovation & Problem Solving",
  },
  {
    title: "VITB Campus Hackathon",
    desc: "Participant | Project Development",
  },
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
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-2)] hover:text-violet-400 transition-colors mb-4 w-fit group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
        <div className="flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
            Achievements
          </h2>
          <p className="text-sm font-mono text-[var(--color-muted-2)] hidden sm:block">
            0x0D :: Milestones & Wins.
          </p>
        </div>
      </motion.div>

      {/* Certifications & Workshops */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="mb-12"
      >
        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6 flex items-center gap-2">
          <span className="text-violet-500">_</span> Certifications & Workshops
        </h3>
        <div className="flex flex-col gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div>
                <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-1">{cert.title}</h4>
                <p className="text-sm text-[var(--color-muted)]">{cert.org}</p>
              </div>
              <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full w-fit border border-violet-500/20 whitespace-nowrap">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements & Hackathons */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6 flex items-center gap-2">
          <span className="text-violet-500">_</span> Achievements & Hackathons
        </h3>
        <div className="flex flex-col gap-4">
          {hackathons.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.08, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-4 p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div>
                <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-1">{hack.title}</h4>
                <p className="text-sm text-[var(--color-muted)]">{hack.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
