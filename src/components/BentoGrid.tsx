"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 14 },
  },
};

/* Hover-reveal card */
function HoverCard({
  title,
  defaultText,
  hoverText,
  className = "",
}: {
  title: string;
  defaultText: string;
  hoverText: string;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardItem}
      className={`relative overflow-hidden rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 cursor-pointer transition-shadow duration-500 card-glow ${className}`}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-full"
      >
        <h3 className="text-xs uppercase tracking-widest text-[var(--color-muted-2)] mb-3 font-medium">
          {title}
        </h3>
        <div className="relative min-h-[60px]">
          <p
            className={`text-sm leading-relaxed transition-colors duration-500 ${
              hovered
                ? "text-[var(--color-foreground)]"
                : "text-[var(--color-muted)]"
            }`}
          >
            {hovered ? hoverText : defaultText}
          </p>
        </div>
        {/* Accent line at bottom */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-500 ease-out ${
            hovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </motion.div>
  );
}

/* Static Tech Stack card — replaces the old animated marquee */
function TechStackCard() {
  const techCategories = [
    { label: "Programming", items: "Python, Java, C++, SQL, JavaScript" },
    { label: "AI/ML", items: "GenAI, Agentic AI, RAG, LangChain, LLMs, NLP" },
    { label: "Frontend", items: "React.js, HTML, CSS, Vite" },
    { label: "Backend", items: "Flask, FastAPI, REST APIs" },
    { label: "Automation", items: "n8n, MCP, Gmail API, Airtable" },
    { label: "Tools", items: "Git, Docker, Linux, GCP, Vercel" },
  ];

  return (
    <motion.div
      variants={cardItem}
      className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 col-span-1 md:col-span-2 card-glow transition-shadow duration-500"
    >
      <h3 className="text-xs uppercase tracking-widest text-[var(--color-muted-2)] mb-4 font-medium">
        Tech Stack
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {techCategories.map((cat) => (
          <div key={cat.label} className="flex gap-2 text-sm">
            <span className="text-violet-400 font-semibold whitespace-nowrap min-w-[90px]">
              {cat.label}:
            </span>
            <span className="text-[var(--color-muted)] leading-relaxed">
              {cat.items}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* Location card */
function LocationCard() {
  return (
    <motion.div
      variants={cardItem}
      className="relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden card-glow transition-shadow duration-500"
    >
      {/* Dark map background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--color-card-border)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path d="M0 150 Q100 120 200 150 T400 140" fill="none" stroke="var(--color-muted-2)" strokeWidth="1.5" />
          <path d="M0 180 Q150 200 250 170 T400 190" fill="none" stroke="var(--color-muted-2)" strokeWidth="1" />
          <path d="M200 0 Q180 100 200 200 T210 300" fill="none" stroke="var(--color-muted-2)" strokeWidth="1.5" />
          <path d="M120 0 Q140 80 120 160 T130 300" fill="none" stroke="var(--color-muted-2)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative p-6 flex flex-col justify-end h-full min-h-[180px]">
        {/* Static Pin marker */}
        <div className="mb-4">
          <div className="relative inline-block">
            <div className="w-3 h-3 bg-violet-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
          </div>
        </div>
        <h3 className="text-xs uppercase tracking-widest text-[var(--color-muted-2)] mb-1 font-medium">
          Location
        </h3>
        <a
          href="https://maps.app.goo.gl/VD7QZziA3GjpeKTT9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-foreground)] text-lg font-medium hover:text-violet-500 transition-colors duration-300 inline-flex items-center gap-1.5"
        >
          VIT Bhopal, India
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
        </a>
      </div>
    </motion.div>
  );
}

/* Profile card — uses actual photo */
function ProfileCard() {
  return (
    <motion.div
      variants={cardItem}
      className="relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden row-span-2 card-glow transition-shadow duration-500 min-h-[300px]"
    >
      {/* Actual photo */}
      <div className="absolute inset-0">
        <Image
          src="/prathmesh.jpg"
          alt="Prathmesh"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Bottom overlay with name */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xs uppercase tracking-widest text-gray-300 mb-1 font-medium">
          Portrait
        </h3>
        <p className="text-white font-medium text-lg">Prathmesh Jadhav</p>
      </div>
    </motion.div>
  );
}

/* Main Bento Grid */
export default function BentoGrid() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-8 text-center"
      >
        About Me
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {/* Row 1 */}
        <ProfileCard />

        <HoverCard
          title="Clubs"
          defaultText="Tech Core at Stats-O-Locked & Resource Team Core at Insight Club."
          hoverText="Actively contributing to tech initiatives at Stats-O-Locked and managing resources at Insight Club. Organizing events, driving innovation, and building solutions that bridge data science and engineering."
        />

        <HoverCard
          title="University"
          defaultText="Pursuing Computer Science Engineering at VIT Bhopal."
          hoverText="Currently in my 2nd year, diving deep into algorithms, data structures, and modern software development practices. Passionate about pushing the boundaries of what's possible with code."
        />

        <HoverCard
          title="Interests"
          defaultText="Deeply interested in Generative AI, Agentic AI, and Full-Stack Development."
          hoverText="Exploring the frontiers of artificial intelligence — from building intelligent RAG-powered agents to crafting modern full-stack applications. I'm fascinated by technologies that will shape our future."
        />

        {/* Row 2 - Static tech stack spanning 2 cols */}
        <TechStackCard />

        {/* Location card */}
        <LocationCard />

        {/* Currently card */}
        <motion.div
          variants={cardItem}
          className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 card-glow transition-shadow duration-500"
        >
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-muted-2)] mb-3 font-medium">
            Currently
          </h3>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            Building AI-powered applications and exploring the intersection of RAG systems and modern web development.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="inline-flex items-center gap-1 text-xs text-green-400">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for collaboration
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
