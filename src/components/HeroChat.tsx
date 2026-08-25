"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const quickPrompts = [
  "🏆 Google Olympics 1st Rank",
  "☁️ OCI GenAI & Azure Certified",
  "🤖 LangGraph & RAG Projects",
  "🏛️ Joint Secretary Stats-O-Locked",
];

export default function HeroChat() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChipClick = (prompt: string) => {
    setSelectedPrompt(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: 0.3,
      }}
      className="w-full max-w-2xl mx-auto mt-20 mb-8 px-4"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative glass border border-[var(--color-card-border)] rounded-3xl p-5 shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden card-glow"
      >
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="flex items-center gap-3 mb-3">
          {/* Spark Icon — animated pulse + spin */}
          <motion.div
            className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>

          {/* Prompt input placeholder / selected prompt */}
          <div className="flex-1 min-w-0">
            <span className="text-sm font-medium text-[var(--color-foreground)] select-none truncate block">
              {selectedPrompt ? selectedPrompt : "Hi! Ask me anything about Prathmesh's projects & skills..."}
            </span>
          </div>

          {/* Copy / Action Badge */}
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20"
              >
                Selected ✓
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-card-border)]">
          {quickPrompts.map((prompt) => (
            <motion.button
              key={prompt}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleChipClick(prompt)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                selectedPrompt === prompt
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/25 font-semibold"
                  : "bg-[var(--color-card-solid)] text-[var(--color-muted)] border-[var(--color-card-border)] hover:border-indigo-500/40 hover:text-[var(--color-foreground)]"
              }`}
            >
              {prompt}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
