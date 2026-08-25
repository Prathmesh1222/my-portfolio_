"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  const letters = "PRATHMESH".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full text-center mb-16 px-4 pt-28 md:pt-36 relative z-10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[180px] bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Large spaced-out interactive name */}
      <div className="flex justify-center items-center gap-1.5 sm:gap-3 md:gap-5 lg:gap-7 mb-6 sm:mb-8 flex-wrap">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
              delay: 0.3 + i * 0.08,
            }}
            whileHover={{ scale: 1.15, y: -6 }}
            className="hero-letter text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-[var(--color-foreground)] tracking-wider select-none cursor-default hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-200"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Interactive Frosted Glass Subtitle Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 15,
          delay: 1.1,
        }}
        whileHover={{ scale: 1.04 }}
        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[var(--color-card-border)] glass card-glow cursor-pointer transition-all duration-300 shadow-md"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
        </span>
        <span className="text-xs md:text-sm text-[var(--color-foreground)] font-semibold uppercase tracking-[0.22em]">
          Pre-Final Year CS Engineering Student
        </span>
      </motion.div>

      {/* Decorative Gradient Line */}
      <motion.div
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "260px" }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}
