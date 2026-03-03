"use client";

import { motion } from "framer-motion";

export default function HeroChat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: 0.3,
      }}
      className="w-full max-w-2xl mx-auto mt-28 mb-8 px-4"
    >
      <motion.div
        whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.3)" }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative glass border border-[var(--color-card-border)] rounded-2xl px-5 py-4 flex items-center gap-3 transition-colors duration-300 group cursor-pointer"
      >
        {/* Spark Icon — animated pulse + spin */}
        <motion.div
          className="flex-shrink-0"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-violet-400 group-hover:text-violet-300 transition-colors"
          >
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="currentColor"
              opacity="0.8"
            />
            <path
              d="M19 2L19.5 4.5L22 5L19.5 5.5L19 8L18.5 5.5L16 5L18.5 4.5L19 2Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Typing animation text */}
        <motion.span
          className="text-sm text-[var(--color-muted-2)] select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Hi, I&apos;m Prathmesh. Ask me anything about Prathmesh...
        </motion.span>

        {/* Blinking cursor */}
        <motion.span
          className="inline-block w-[2px] h-4 bg-violet-400 ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />

        {/* Subtle gradient glow on the bottom */}
        <motion.div
          className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* Shimmer sweep effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-violet-500/5 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
