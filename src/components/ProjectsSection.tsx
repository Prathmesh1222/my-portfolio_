"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "it-copilot",
    name: "Enterprise IT Copilot",
    category: "AI & Agentic Systems",
    tagline: "Agentic RAG & Generative UI",
    description: "An advanced, multi-agent AI system designed to resolve IT support bottlenecks by unifying scattered documentation, historical ticket databases, and dynamic issue escalation into a single conversational interface.",
    features: [
      {
        icon: "🧠",
        name: "Self-Reflective Agent",
        desc: "LangChain ReAct Orchestrator",
        detail: "Powered by Llama 3.1, the agent intercepts queries, categorizes issues, and evaluates context before resolution, strictly avoiding hallucination by enforcing citation and utilizing an escalation tool.",
      },
      {
        icon: "🔍",
        name: "Hybrid Search & Rerank",
        desc: "BM25 + Semantic Search",
        detail: "Implements FAISS for vector search and BM25 for keyword search, merged via an Ensemble Retriever. A HuggingFace Cross-Encoder reranks results to mathematically guarantee high precision.",
      },
      {
        icon: "✨",
        name: "Generative UI",
        desc: "Interactive Component Streaming",
        detail: "When issues require escalation, the backend streams a JSON payload to the frontend which dynamically renders a native, interactive ticket submission form directly inside the chat interface.",
      },
      {
        icon: "📊",
        name: "Integrated Analytics",
        desc: "Real-time Dashboard",
        detail: "A native HTML/JS dashboard utilizing Chart.js to visualize historical ticket data like volume, types, and priorities directly fetched from the backend SQLite database.",
      },
    ],
    techStack: ["Python", "Flask", "LangChain", "FAISS", "Llama 3.1", "Vanilla JS", "SQLite"],
    github: "https://github.com/Prathmesh1222/enterprise-it-copilot",
    color: "from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border-emerald-500/30",
    icon: "💼",
  },
  {
    id: "cyphraxi",
    name: "Cyphraxi",
    category: "AI & Agentic Systems",
    tagline: "AI-Powered Study Engine",
    description:
      "An intelligent RAG study engine that transforms your raw lectures into AI-powered theory answers, mind maps, quizzes, and flashcards — all grounded in your actual documents.",
    features: [
      {
        icon: "📖",
        name: "Theory",
        desc: "Streamed AI answers grounded in documents",
        detail:
          "Cyphraxi uses a Retrieval-Augmented Generation pipeline to search through your uploaded documents and stream back precise, well-structured theory answers with zero hallucination.",
      },
      {
        icon: "🗺️",
        name: "Mind Map",
        desc: "Auto-generated concept maps from notes",
        detail:
          "Automatically extracts key concepts, relationships, and hierarchies from study material and renders them as interactive mind maps for faster revision.",
      },
      {
        icon: "📝",
        name: "Quiz",
        desc: "Dynamic quiz generation for assessment",
        detail:
          "Generates customizable quizzes from your documents — MCQs, short answers, and true/false questions with instant feedback.",
      },
      {
        icon: "🃏",
        name: "Flashcards",
        desc: "Spaced repetition cards from material",
        detail:
          "Creates smart flashcards using spaced repetition algorithms to maximize long-term retention of definitions and key concepts.",
      },
    ],
    techStack: ["Python", "FastAPI", "FAISS", "Gemini API", "RAG", "SSE Streaming", "JavaScript"],
    github: "https://github.com/Prathmesh1222/study.ai",
    color: "from-violet-500/10 via-purple-500/10 to-indigo-500/10 border-violet-500/30",
    icon: "🧠",
  },
  {
    id: "voice-calc",
    name: "Voice Calculator",
    category: "Full-Stack & Systems",
    tagline: "Natural Language Math Engine",
    description: "A next-generation voice-powered calculator that understands natural language. Speak or type commands to perform arithmetic, calculus, graphing, unit conversions, and equation solving.",
    features: [
      {
        icon: "🎙️",
        name: "Voice Recognition",
        desc: "Seamless Web Speech API",
        detail: "Process complex mathematical queries hands-free using natural language processing. Parses spoken intent into symbolic equations.",
      },
      {
        icon: "📈",
        name: "Advanced Math",
        desc: "Calculus, Matrices & Graphing",
        detail: "Powered by SymPy and NumPy to dynamically plot functions, solve algebraic equations, perform matrix algebra, and execute calculus.",
      },
      {
        icon: "🔄",
        name: "Omni Conversion",
        desc: "Smart Unit Converter",
        detail: "Intelligent conversion engines that translate physical units directly from conversational prompts without manual formulas.",
      },
      {
        icon: "⚡",
        name: "Progressive Web App",
        desc: "Installable Cross-Platform GUI",
        detail: "Engineered as an installable PWA paired with a lightweight Flask backend for native-like offline performance.",
      },
    ],
    techStack: ["Python", "Flask", "SymPy", "JavaScript", "Web Speech API", "NumPy", "PWA"],
    github: "https://github.com/Prathmesh1222/voice-calculator-",
    color: "from-blue-500/10 via-cyan-500/10 to-sky-500/10 border-blue-500/30",
    icon: "🧮",
  },
];

const categories = ["All Projects", "AI & Agentic Systems", "Full-Stack & Systems"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeFeatures, setActiveFeatures] = useState<Record<string, number | null>>({});

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const toggleFeature = (projectId: string, featureIndex: number) => {
    setActiveFeatures((prev) => ({
      ...prev,
      [projectId]: prev[projectId] === featureIndex ? null : featureIndex,
    }));
  };

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 mb-24">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 text-indigo-500 bg-indigo-500/10 text-xs font-bold tracking-widest uppercase mb-3">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-3">
          Software & AI Showcase
        </h2>
        <p className="text-[var(--color-muted)] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Production systems blending Agentic AI, RAG architectures, and responsive full-stack engineering.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                  : "bg-[var(--color-card-solid)] text-[var(--color-muted)] border border-[var(--color-card-border)] hover:border-indigo-500/40 hover:text-[var(--color-foreground)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects List */}
      <motion.div layout className="space-y-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden card-glow shadow-xl"
            >
              {/* Banner Header */}
              <div className={`relative w-full bg-gradient-to-br ${project.color} p-6 md:p-10 border-b border-[var(--color-card-border)]`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/25">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-[var(--color-foreground)] text-2xl font-bold tracking-tight">
                        {project.name}
                      </h3>
                      <p className="text-indigo-500 text-xs md:text-sm font-semibold">{project.tagline}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20 w-fit">
                    {project.category}
                  </span>
                </div>
                <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8">
                {/* Feature Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  {project.features.map((feature, i) => {
                    const isSelected = activeFeatures[project.id] === i;
                    return (
                      <button
                        key={feature.name}
                        onClick={() => toggleFeature(project.id, i)}
                        className={`p-4 rounded-2xl border transition-all duration-200 text-left ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-500/10 shadow-md"
                            : "border-[var(--color-card-border)] bg-[var(--color-card-hover)] hover:border-indigo-500/40"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base">{feature.icon}</span>
                          <h4 className={`text-xs font-bold transition-colors ${isSelected ? "text-indigo-500" : "text-[var(--color-foreground)]"}`}>
                            {feature.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[var(--color-muted-2)] leading-snug line-clamp-2">
                          {feature.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Expanded Feature Details */}
                <AnimatePresence mode="wait">
                  {activeFeatures[project.id] !== undefined && activeFeatures[project.id] !== null && (
                    <motion.div
                      key={activeFeatures[project.id]}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="overflow-hidden mb-6"
                    >
                      <div className="p-5 rounded-2xl border border-indigo-500/30 bg-indigo-500/5">
                        <h4 className="text-sm font-bold text-indigo-500 mb-1 flex items-center gap-2">
                          <span>{project.features[activeFeatures[project.id]!].icon}</span>
                          {project.features[activeFeatures[project.id]!].name} Breakdown
                        </h4>
                        <p className="text-xs md:text-sm text-[var(--color-muted)] leading-relaxed">
                          {project.features[activeFeatures[project.id]!].detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Stack & Links */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[var(--color-card-border)]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill px-3 py-1 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-hover)] text-xs font-medium text-[var(--color-foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all duration-200 shadow-md shadow-indigo-500/20 hover:scale-105"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
