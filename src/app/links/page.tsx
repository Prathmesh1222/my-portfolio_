"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CursorGlow from "@/components/CursorGlow";

const myLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Prathmesh1222",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.265-3.345.72-4.05-1.62-4.05-1.62-.54-1.38-1.32-1.755-1.32-1.755-1.08-.735.075-.72.075-.72 1.2.09 1.83 1.23 1.83 1.23 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    bg: "hover:bg-[#24292e]/20 hover:border-[#24292e]",
    color: "group-hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prathmesh1222/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: "hover:bg-[#0077b5]/20 hover:border-[#0077b5]",
    color: "group-hover:text-[#0077b5]",
  },
  {
    name: "Gmail",
    url: "mailto:prathmesh@example.com", // You can replace with actual email
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
    bg: "hover:bg-[#ea4335]/20 hover:border-[#ea4335]",
    color: "group-hover:text-[#ea4335]",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative gradient background similar to home page */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto z-10"
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
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Connect</span>{" "}
          <span className="text-[var(--color-foreground)]">With Me</span>
        </h1>
        <p className="text-[var(--color-muted)] mb-12">
          Find me on these platforms or drop me an email.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {myLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] ${link.bg} transition-all duration-300 card-glow`}
            >
              <div className={`text-[var(--color-muted-2)] ${link.color} transition-colors duration-300`}>
                {link.icon}
              </div>
              <span className="font-medium text-[var(--color-foreground)]">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
