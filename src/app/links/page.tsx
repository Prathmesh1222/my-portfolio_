"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const myLinks = [
  {
    category: "SOCIALS",
    items: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/prathmesh1222/" },
      { name: "GitHub", url: "https://github.com/Prathmesh1222" },
      { name: "X (Twitter)", url: "#" },
    ],
  },
  {
    category: "CONTACT",
    items: [
      { name: "Gmail", url: "mailto:prathmeshjadhav3651@gmail.com" },
      { name: "Discord", url: "#" },
    ],
  },
];

export default function LinksPage() {
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
            My Links
          </h2>
          <p className="text-sm font-mono text-[var(--color-muted-2)]">
            0x0B :: Connect & Contact.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="w-full flex justify-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          {myLinks.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col p-6 sm:p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
            >
              {/* Top gradient reveal on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <h4 className="text-[var(--color-foreground)] font-bold tracking-wider mb-6 text-sm md:text-base">
                {section.category}
              </h4>
              <ul className="space-y-5">
                {section.items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between"
                    >
                      <span className="text-[var(--color-muted)] group-hover/link:text-[var(--color-foreground)] transition-colors duration-200 font-medium">
                        {link.name}
                      </span>
                      <span className="text-violet-400 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
