"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  const letters = "PRATHMESH".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full text-center mb-16 px-4 pt-32 relative z-10"
    >
      {/* Large spaced-out name */}
      <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 mb-6 sm:mb-8 flex-wrap">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              delay: 0.6 + i * 0.1,
            }}
            className="hero-letter text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[var(--color-foreground)] tracking-wider select-none cursor-default hover:text-violet-500 transition-colors duration-200"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Subtitle with frosted glass pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: 1.6,
        }}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-card-border)]"
        style={{ background: "var(--color-card)" }}
      >
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
        <span className="text-sm md:text-base text-[var(--color-muted)] uppercase tracking-[0.25em] font-medium">
          Pre-Final Year CS Engineering Student
        </span>
      </motion.div>

      {/* Decorative line under subtitle */}
      <motion.div
        className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "240px" }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}
