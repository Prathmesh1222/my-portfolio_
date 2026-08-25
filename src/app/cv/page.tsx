"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 lg:p-12 mt-12 mb-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col mb-12 gap-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-2)] hover:text-violet-400 transition-colors mb-4 w-fit group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-2 tracking-tight">
              Prathmesh Jadhav
            </h1>
            <p className="text-xl text-violet-500 font-medium mb-4">
              Full-Stack Developer & AI Architect
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
              <a href="mailto:prathmeshjadhav3651@gmail.com" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                <span>✉</span> prathmeshjadhav3651@gmail.com
              </a>
              <a href="https://github.com/Prathmesh1222" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                <span></span> github.com/Prathmesh1222
              </a>
            </div>
          </div>
          <motion.a
            href="/PrathmeshJadhav_resume-1.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2 whitespace-nowrap"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </motion.a>
        </div>
      </motion.div>

      <div className="flex flex-col gap-12">
        {/* Profile */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold border-b border-[var(--color-card-border)] pb-2 mb-6 text-[var(--color-foreground)] flex items-center gap-2">
            <span className="text-violet-500">_</span> Profile
          </h2>
          <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow relative overflow-hidden">
            <motion.div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-purple-500" />
            <p className="text-[var(--color-muted)] leading-relaxed md:text-lg">
              Passionate software engineer building high-performance, intelligent applications bridging the gap between cutting-edge AI orchestration and sleek, modern web interfaces. Proven track record in developing complex full-stack systems, natural language engines, and competitive programming.
            </p>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold border-b border-[var(--color-card-border)] pb-2 mb-6 text-[var(--color-foreground)] flex items-center gap-2">
            <span className="text-violet-500">_</span> Education
          </h2>
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-colors card-glow relative overflow-hidden group">
              <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold text-[var(--color-foreground)]">B.Tech Computer Science and Engineering</h3>
                <span className="text-sm font-mono text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">2024 - 2028</span>
              </div>
              <p className="text-[var(--color-foreground)] font-medium mb-2">Vellore Institute of Technology, Bhopal</p>
              <ul className="list-disc list-inside text-sm text-[var(--color-muted)] space-y-1">
                <li>Core Coursework: Data Structures, Algorithms, Operating Systems, Database Management.</li>
                <li>Focused heavily on Full-Stack robust systems and AI pipelines.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Leadership & Campus Roles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold border-b border-[var(--color-card-border)] pb-2 mb-6 text-[var(--color-foreground)] flex items-center gap-2">
            <span className="text-violet-500">_</span> Leadership & Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow">
              <h3 className="font-bold text-[var(--color-foreground)] text-lg mb-1">Joint Secretary</h3>
              <p className="text-sm font-medium text-violet-400 mb-2">Stats-O-Locked Club</p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Directing technical strategies, leading workshop developments, and overseeing flagship club initiatives.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow">
              <h3 className="font-bold text-[var(--color-foreground)] text-lg mb-1">Resource Team Core</h3>
              <p className="text-sm font-medium text-violet-400 mb-2">Insight Club</p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Managing resource allocations, team logistics, and technical execution for domain events.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Certifications & Honors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold border-b border-[var(--color-card-border)] pb-2 mb-6 text-[var(--color-foreground)] flex items-center gap-2">
            <span className="text-violet-500">_</span> Certifications & Honors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow">
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 mb-2 inline-block">1st Rank</span>
              <h3 className="font-bold text-[var(--color-foreground)] text-base mb-1">Google Olympics 2.0</h3>
              <p className="text-xs text-violet-400 mb-2">GDG VIT Bhopal</p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">1st Rank overall in technical problem-solving competition.</p>
            </div>
            <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow">
              <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20 mb-2 inline-block">Oracle Certified</span>
              <h3 className="font-bold text-[var(--color-foreground)] text-base mb-1">OCI 2025 Generative AI Professional</h3>
              <p className="text-xs text-violet-400 mb-2">Oracle Cloud Infrastructure</p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">Certified in LLM deployment, fine-tuning, and RAG architectures.</p>
            </div>
            <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow">
              <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 mb-2 inline-block">Microsoft Certified</span>
              <h3 className="font-bold text-[var(--color-foreground)] text-base mb-1">Azure AI Apps & Agents Developer (AI-103)</h3>
              <p className="text-xs text-violet-400 mb-2">Microsoft</p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">Specialized in Azure OpenAI & Agentic SDK development.</p>
            </div>
            <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow">
              <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 mb-2 inline-block">NPTEL Elite</span>
              <h3 className="font-bold text-[var(--color-foreground)] text-base mb-1">Cloud Computing & Marketing Analytics</h3>
              <p className="text-xs text-violet-400 mb-2">IIT Kharagpur</p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">Elite certifications in cloud systems and data analytics.</p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold border-b border-[var(--color-card-border)] pb-2 mb-6 text-[var(--color-foreground)] flex items-center gap-2">
            <span className="text-violet-500">_</span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { category: "Programming", tools: "Python, Java, C++, SQL, JavaScript" },
              { category: "AI / ML", tools: "GenAI, Agentic AI, RAG, GraphRAG, LangChain, LangGraph, FAISS, LLMs, NLP" },
              { category: "Frontend", tools: "React.js, HTML, CSS, Vite" },
              { category: "Backend", tools: "Flask, FastAPI, REST APIs" },
              { category: "Automation", tools: "n8n, MCP, Gmail API, Airtable" },
              { category: "Tools", tools: "Git, GitHub, Docker, Linux, GCP, Vercel" }
            ].map((skill, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow">
                <h3 className="font-bold text-violet-400 mb-2">{skill.category}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{skill.tools}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold border-b border-[var(--color-card-border)] pb-2 mb-6 text-[var(--color-foreground)] flex items-center gap-2">
            <span className="text-violet-500">_</span> Featured Projects
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                name: "Enterprise IT Copilot",
                role: "Agentic RAG & Generative UI",
                desc: "Engineered a multi-agent AI system with LangChain, FAISS, and Llama 3.1 to resolve IT support bottlenecks, featuring hybrid search, cross-encoder reranking, and dynamic generative UI for ticket escalation."
              },
              {
                name: "Cyphraxi",
                role: "AI-Powered Study Engine",
                desc: "Developed a Retrieval-Augmented Generation (RAG) platform mapping raw lectures to instantaneous, deeply grounded theory answers utilizing vector-search and LLM integration."
              },
              {
                name: "Voice Calculator",
                role: "Natural Language Math Engine",
                desc: "Engineered a native browser PWA interpreting spoken intent to solve complex mathematical derivatives, plots, matrix algebras, and unit conversions seamlessly through Python backends (SymPy/Flask)."
              }
            ].map((project, idx) => (
               <div key={idx} className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-colors card-glow relative overflow-hidden group">
               <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                 <h3 className="text-xl font-bold text-[var(--color-foreground)]">{project.name}</h3>
                 <span className="text-sm font-medium text-violet-400 mt-1 md:mt-0">{project.role}</span>
               </div>
               <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                 {project.desc}
               </p>
             </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
