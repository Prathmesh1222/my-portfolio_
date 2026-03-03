"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "Cyphraxi",
    tagline: "AI-Powered Study Engine",
    description:
      "An intelligent RAG study engine that transforms your raw lectures into AI-powered theory answers, mind maps, quizzes, and flashcards — all grounded in your actual documents.",
    features: [
      {
        icon: "📖",
        name: "Theory",
        desc: "Streamed AI answers grounded in your documents",
        detail:
          "Cyphraxi uses a Retrieval-Augmented Generation pipeline to search through your uploaded documents and stream back precise, well-structured theory answers. Unlike generic AI chatbots, every response is grounded in your actual material — zero hallucinations, maximum relevance.",
      },
      {
        icon: "🗺️",
        name: "Mind Map",
        desc: "Auto-generated concept maps from your notes",
        detail:
          "Automatically extracts key concepts, relationships, and hierarchies from your study material and renders them as interactive mind maps. Helps you visualize connections between topics for deeper understanding and faster revision.",
      },
      {
        icon: "📝",
        name: "Quiz",
        desc: "Dynamic quiz generation for self-assessment",
        detail:
          "Generates customizable quizzes from your documents — MCQs, short answers, and true/false questions. Difficulty adapts to your learning level, and instant feedback helps you identify weak areas for targeted study.",
      },
      {
        icon: "🃏",
        name: "Flashcards",
        desc: "Spaced repetition cards from your material",
        detail:
          "Creates smart flashcards using spaced repetition algorithms. Key terms, definitions, and concepts are extracted from your notes and presented at optimal intervals to maximize long-term retention.",
      },
    ],
    techStack: ["Python", "FastAPI", "FAISS", "Gemini API", "RAG", "SSE Streaming", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Prathmesh1222/study.ai",
    color: "from-violet-600/20 via-purple-500/15 to-blue-500/20",
    icon: "🧠",
  },
  {
    name: "Voice Calculator",
    tagline: "Natural Language Math Engine",
    description: "A next-generation voice-powered calculator that understands natural language. Speak or type commands to perform arithmetic, calculus, graphing, unit conversions, equation solving, and matrix operations natively in the browser.",
    features: [
      {
        icon: "🎙️",
        name: "Voice Recognition",
        desc: "Seamless Web Speech API",
        detail: "Process complex mathematical queries completely hands-free using natural language processing. The engine parses the spoken intent into symbolic math equations and instantly computes the result."
      },
      {
        icon: "📈",
        name: "Advanced Math",
        desc: "Calculus, Matrices & Graphing",
        detail: "Powered by SymPy and NumPy, the engine can dynamically plot functions, solve algebraic equations, perform matrix algebra, and execute derivatives and integrals instantly."
      },
      {
        icon: "🔄",
        name: "Omni Conversion",
        desc: "Smart Unit Converter",
        detail: "Built-in intelligent conversion engines that translate physical units and measurements directly from conversational prompts, eliminating manual formula inputs."
      },
      {
        icon: "⚡",
        name: "Progressive Web App",
        desc: "Installable Cross-Platform GUI",
        detail: "Engineered as a lightweight PWA paired with a lightweight Flask backend, allowing it to be installed on any device for native-like performance and responsive accessibility."
      }
    ],
    techStack: ["Python", "Flask", "SymPy", "JavaScript", "Web Speech API", "NumPy", "PWA"],
    github: "https://github.com/Prathmesh1222/voice-calculator-",
    color: "from-blue-600/20 via-cyan-500/15 to-teal-500/20",
    icon: "🧮",
  },
  {
    name: "Autodemo Agent (Stealth)",
    tagline: "Autonomous Video Generation Pipeline",
    description: "An unreleased proprietary AI orchestration pipeline. It utilizes a team of specialized sub-agents to autonomously transform raw web repositories into fully narrated, perfectly synchronized video demonstrations.",
    features: [
      {
        icon: "🤖",
        name: "Multi-Agent Orchestration",
        desc: "Coordinated LLM Sub-Agents",
        detail: "A master control system orchestrating specialized sub-agents for autonomous research, screenwriting, and video directing without human intervention."
      },
      {
        icon: "🎭",
        name: "Headless Automation",
        desc: "Programmatic UI Navigation",
        detail: "Programmatically navigates and records complex UI interactions in real-time based on dynamically generated scripts."
      },
      {
        icon: "🎙️",
        name: "Dynamic Synthesis",
        desc: "Voice & Subtitle Generation",
        detail: "Synchronizes generated ultra-realistic voiceovers, auto-captions, and visual cues utilizing advanced text-to-speech architectures."
      },
      {
        icon: "🎬",
        name: "Automated Assembly",
        desc: "Hands-Free Video Rendering",
        detail: "Stitches video, audio, and text utilizing programmatic infrastructure and strict duration-matching algorithms for completely hands-free rendering."
      }
    ],
    techStack: ["Python", "Playwright", "MoviePy", "TTS", "LLMs"],
    github: "#stealth",
    color: "from-rose-600/20 via-orange-500/15 to-amber-500/20",
    icon: "🎥",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

export default function ProjectsSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="text-center mb-12"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 text-violet-500 text-xs font-medium tracking-widest uppercase mb-4"
        >
          Projects
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-3">
          What I&apos;ve Built
        </h2>
        <p className="text-[var(--color-muted-2)] text-sm max-w-xl mx-auto leading-relaxed">
          A showcase of projects I&apos;ve developed, blending AI and full-stack engineering.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={itemVariant}
            whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)" }}
            className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden card-glow"
          >
            {/* Header banner */}
            <motion.div
              className={`relative w-full bg-gradient-to-br ${project.color} p-8 md:p-12 overflow-hidden`}
            >
              {/* Animated floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 15 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xl shadow-lg shadow-violet-500/20"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {project.icon}
                </motion.div>
                <div>
                  <h3 className="text-[var(--color-foreground)] text-xl font-bold">{project.name}</h3>
                  <p className="text-violet-500 text-sm font-medium">{project.tagline}</p>
                </div>
              </motion.div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xl">
                {project.description}
              </p>
              <motion.div
                className="absolute top-6 right-8 text-violet-500/20 text-6xl font-bold select-none hidden md:block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                ⚛
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Feature tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {project.features.map((feature, i) => (
                  <motion.button
                    key={feature.name}
                    onClick={() =>
                      setActiveFeature(activeFeature === i ? null : i)
                    }
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 150, damping: 15 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`group p-4 rounded-xl border transition-all duration-300 text-left ${
                      activeFeature === i
                        ? "border-violet-500/40 bg-violet-500/10"
                        : "border-[var(--color-card-border)] bg-[var(--color-card-hover)] hover:border-violet-500/20"
                    }`}
                  >
                    <motion.span
                      className="text-xl mb-2 block"
                      animate={activeFeature === i ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.span>
                    <h4 className={`text-sm font-semibold mb-1 transition-colors ${
                      activeFeature === i ? "text-violet-500" : "text-[var(--color-foreground)]"
                    }`}>
                      {feature.name}
                    </h4>
                    <p className="text-xs text-[var(--color-muted-2)] leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Expanded Feature Detail */}
              <AnimatePresence mode="wait">
                {activeFeature !== null && (
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="p-5 rounded-xl border border-violet-500/20 bg-violet-500/5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">
                          {project.features[activeFeature].icon}
                        </span>
                        <h4 className="text-base font-semibold text-violet-500">
                          {project.features[activeFeature].name}
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                        {project.features[activeFeature].detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tech stack + Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.04 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="tech-pill px-3 py-1 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-hover)] text-xs text-[var(--color-muted)] cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github === "#stealth" ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card)] text-sm text-[var(--color-muted)] transition-all duration-300 opacity-80 cursor-not-allowed"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Stealth Mode
                    </motion.div>
                  ) : (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-hover)] text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-violet-500/30 transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source Code
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
