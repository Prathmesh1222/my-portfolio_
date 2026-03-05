"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "CV", href: "/cv" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.2,
        }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass border border-card-border rounded-full px-2 py-2 flex items-center gap-1"
      >
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.4 + i * 0.08,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200 rounded-full hover:bg-foreground/5"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.85, rotate: 90 }}
          className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.15, rotate: 15 }}
          whileTap={{ scale: 0.85, rotate: -30 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="p-2 rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            {theme === "dark" ? (
              <motion.svg
                key="sun"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.3 }}
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </motion.svg>
            ) : (
              <motion.svg
                key="moon"
                initial={{ rotate: 90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -90, scale: 0 }}
                transition={{ duration: 0.3 }}
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Contact Me */}
        <motion.a
          href="mailto:prathmesh1222@gmail.com"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.7 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="ml-1 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-full hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/20"
        >
          Contact Me
        </motion.a>
      </motion.nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 glass border border-card-border rounded-2xl p-4 flex flex-col gap-2 min-w-[200px] md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 8 }}
                className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200 rounded-xl hover:bg-foreground/5"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
