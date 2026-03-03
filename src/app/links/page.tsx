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
      { name: "Gmail", url: "mailto:prathmesh@example.com" },
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
        className="w-full rounded-xl overflow-hidden shadow-2xl border border-[var(--color-card-border)] bg-[#0d1117]"
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="mx-auto text-xs font-mono text-[#8b949e] flex items-center gap-2">
            prathmesh@production:~/links
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#3fb950] font-bold">➜</span>
            <span className="text-[#58a6ff] font-bold">~</span>
            <span className="text-[#d2a8ff]">cat</span>
            <span className="text-[#c9d1d9]">contact_urls.json</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-5 bg-[#c9d1d9] inline-block"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {myLinks.map((section) => (
              <div key={section.category}>
                <h4 className="text-[#58a6ff] font-bold tracking-wider mb-4 text-xs md:text-sm">
                  {section.category}
                </h4>
                <ul className="space-y-4">
                  {section.items.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col sm:flex-row sm:items-center gap-2"
                      >
                        <span className="text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-200">
                          {link.name}:
                        </span>
                        <span className="text-[#27c93f] opacity-80 group-hover:opacity-100 group-hover:underline transition-all duration-200 break-all text-xs sm:text-sm">
                          "{link.url}"
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
