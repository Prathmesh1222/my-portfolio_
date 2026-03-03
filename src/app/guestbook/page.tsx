"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const initialEntries = [
  { name: "Alex Chen", message: "Love the dark mode bento grid design! The animations are super smooth.", date: "Just now" },
  { name: "Sarah Jenkins", message: "Incredible portfolio. Your LeetCode stats are really impressive.", date: "2 hours ago" },
  { name: "David Kim", message: "The aesthetic is top-tier. Great job on the glassmorphism effects.", date: "Yesterday" }
];

export default function GuestbookPage() {
  const [entries, setEntries] = useState(initialEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setEntries([
        { name, message, date: "Just now" },
        ...entries
      ]);
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 lg:p-12 mt-12 mb-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col mb-12 gap-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-2)] hover:text-violet-400 transition-colors mb-4 w-fit group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent mb-2">
              Guestbook
            </h2>
            <p className="text-[var(--color-muted)] text-sm md:text-base">
              Leave a message, share your thoughts, or just say hi!
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Sign Guestbook Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="group flex flex-col p-6 sm:p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow relative overflow-hidden">
            <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
            
            <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-6">Sign the Guestbook</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[var(--color-muted-2)] uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] bg-black/20 dark:bg-white/5 text-[var(--color-foreground)] placeholder-[var(--color-muted-2)] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[var(--color-muted-2)] uppercase tracking-wider">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] bg-black/20 dark:bg-white/5 text-[var(--color-foreground)] placeholder-[var(--color-muted-2)] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  "Submit Message"
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Entries List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          {entries.map((entry, idx) => (
            <motion.div
              key={idx + entry.date}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-[var(--color-foreground)] flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                    {entry.name.charAt(0).toUpperCase()}
                  </div>
                  {entry.name}
                </h4>
                <span className="text-xs text-[var(--color-muted-2)]">{entry.date}</span>
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed pl-8">
                {entry.message}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
