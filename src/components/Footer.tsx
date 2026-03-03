"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Prathmesh1222" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="w-full border-t border-[var(--color-card-border)] py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, color: "#8b5cf6" }}
                className="text-[var(--color-muted-2)] text-sm hover:text-violet-400 transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[var(--color-muted-2)] text-sm"
          >
            © 2026 Prathmesh. Built with{" "}
            <motion.span
              className="text-[var(--color-muted)] inline-block"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              Next.js
            </motion.span>{" "}
            &{" "}
            <motion.span
              className="text-[var(--color-muted)] inline-block"
              whileHover={{ rotate: -5, scale: 1.05 }}
            >
              Tailwind CSS
            </motion.span>
            .
          </motion.p>
        </div>

        {/* Scroll to top */}
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-[var(--color-card-border)] text-[var(--color-muted-2)] hover:text-violet-400 hover:border-violet-500/30 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}
