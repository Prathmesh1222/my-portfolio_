"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface Certification {
  title: string;
  org: string;
  badge: string;
  date?: string;
  credentialId?: string;
  badgeColor: string;
  icon: string;
  image: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "OCI 2025 Certified Generative AI Professional",
    org: "Oracle Cloud Infrastructure (OCI)",
    badge: "Certified Professional",
    date: "July 23, 2026",
    credentialId: "ID: 329926620OCI25GAIOCP",
    badgeColor: "from-red-600 to-amber-600",
    icon: "🔴",
    image: "/certificates/oci-genai.png",
    skills: ["OCI GenAI", "LLMs", "RAG Systems", "Fine-Tuning", "Vector DBs"],
  },
  {
    title: "Azure AI Apps and Agents Developer Associate (AI-103)",
    org: "Microsoft Certified",
    badge: "Microsoft Certified",
    date: "July 25, 2026",
    credentialId: "ID: E54B9C60A3070921",
    badgeColor: "from-blue-600 to-cyan-500",
    icon: "🔷",
    image: "/certificates/azure-ai103.png",
    skills: ["Azure AI Services", "AI Agents", "Semantic Kernel", "Azure OpenAI"],
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    org: "Google Cloud",
    badge: "Skill Badge (Smart Analytics)",
    date: "2026",
    credentialId: "GCP Smart Analytics",
    badgeColor: "from-blue-500 to-green-500",
    icon: "☁️",
    image: "/certificates/gcp-ml-data.png",
    skills: ["GCP BigQuery", "Vertex AI", "Data Pipelines", "ML APIs"],
  },
  {
    title: "Machine Learning with Python",
    org: "IBM (Coursera Verified)",
    badge: "IBM Verified",
    date: "Nov 17, 2025",
    credentialId: "ID: F1BT7A4ZJJYN",
    badgeColor: "from-blue-600 to-indigo-600",
    icon: "🤖",
    image: "/certificates/ibm-ml.png",
    skills: ["Python", "Scikit-Learn", "Regression", "Supervised Learning"],
  },
  {
    title: "Marketing Analytics",
    org: "IIT Kharagpur (NPTEL – SWAYAM)",
    badge: "Elite (72% Score)",
    date: "Jan-Apr 2026",
    credentialId: "Roll: NPTEL26MG33S1052405566",
    badgeColor: "from-amber-500 to-yellow-600",
    icon: "🏅",
    image: "/certificates/nptel-marketing.png",
    skills: ["Data Analytics", "Customer Metrics", "Predictive Modeling"],
  },
  {
    title: "Cloud Computing",
    org: "IIT Kharagpur (NPTEL – SWAYAM)",
    badge: "Elite (60% Score)",
    date: "Jan-Apr 2025",
    credentialId: "Roll: NPTEL25CS11S1050500058",
    badgeColor: "from-violet-600 to-purple-600",
    icon: "☁️",
    image: "/certificates/nptel-cloud.png",
    skills: ["Cloud Architecture", "Distributed Systems", "Virtualization"],
  },
];

const achievements = [
  {
    title: "1st Rank – Google Olympics 2.0",
    org: "Google Developer Group (GDG) VIT Bhopal",
    desc: "Secured 1st Place overall in Google Olympics 2.0, demonstrating top problem-solving speed, technical execution, and Google technology mastery.",
    tag: "1st Place Winner",
    tagColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
    icon: "🏆",
  },
  {
    title: "Hack2Skill National Hackathon",
    org: "Hack2Skill Platform",
    desc: "Finalist — Built an autonomous multi-agent AI system. Selected among top teams nationwide for innovative RAG architecture and generative UI streaming.",
    tag: "National Finalist",
    tagColor: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    icon: "🎯",
  },
  {
    title: "Stats-O-Locked Tech Leadership",
    org: "VIT Bhopal University",
    desc: "Joint Secretary position — Directing technical initiatives, leading university workshops, and overseeing flagship club symposiums for 500+ participants.",
    tag: "Joint Secretary",
    tagColor: "bg-violet-500/10 text-violet-500 border-violet-500/30",
    icon: "🏛️",
  },
];

export default function AchievementsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 lg:p-12 mt-12 mb-24 max-w-5xl mx-auto w-full">
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col mb-10 gap-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-2)] hover:text-violet-400 transition-colors mb-2 w-fit group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-foreground)] tracking-tight">
              Achievements & Certifications
            </h1>
            <p className="text-sm md:text-base text-[var(--color-muted)] mt-2">
              Industry certifications, competition wins, and leadership milestones.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Highlights / Wins Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6 flex items-center gap-2">
          <span className="text-violet-500">_</span> Key Honors & Competition Wins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 150, damping: 18 }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{item.icon}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-1">{item.title}</h3>
                <p className="text-xs text-violet-400 font-medium mb-3">{item.org}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Official Certifications Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6 flex items-center gap-2">
          <span className="text-violet-500">_</span> Industry & Cloud Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, type: "spring", stiffness: 150, damping: 18 }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 card-glow relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="text-[11px] font-semibold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--color-foreground)] mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-violet-500 font-medium mb-3">{cert.org}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 rounded-md border border-[var(--color-card-border)] bg-[var(--color-card-hover)] text-[var(--color-muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button / Snapshot Trigger */}
              <div className="pt-3 border-t border-[var(--color-card-border)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--color-muted-2)] truncate max-w-[140px]">
                  {cert.credentialId || cert.badge}
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs text-violet-400 font-medium hover:text-violet-300 transition-colors"
                >
                  <span>📷 View Snapshot</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certificate Snapshot Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--color-card-hover)] text-[var(--color-foreground)] hover:bg-violet-500 hover:text-white transition-colors flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{selectedCert.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-violet-400 font-medium">{selectedCert.org}</p>
                </div>
              </div>

              {/* Certificate Image Snapshot / Fallback Box */}
              <div className="relative w-full h-64 sm:h-80 rounded-2xl border border-[var(--color-card-border)] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner">
                {selectedCert.image && !imgError[selectedCert.title] ? (
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain p-2"
                    onError={() => setImgError((prev) => ({ ...prev, [selectedCert.title]: true }))}
                  />
                ) : (
                  /* Styled Demo Template (until you place your actual cert image in public/certificates) */
                  <div className="w-full h-full border-2 border-dashed border-violet-500/30 rounded-xl p-6 flex flex-col items-center justify-center relative bg-violet-950/20">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl mb-3 shadow-lg shadow-violet-500/30">
                      📜
                    </div>
                    <span className="text-xs uppercase tracking-widest text-violet-400 font-bold mb-1">
                      Official Certificate Snapshot
                    </span>
                    <h4 className="text-lg font-bold text-white max-w-md mb-2">
                      {selectedCert.title}
                    </h4>
                    <p className="text-xs text-gray-400 mb-4">{selectedCert.org} • {selectedCert.badge}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                      {selectedCert.credentialId || "Verified Credential"}
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 text-[10px] text-gray-400 italic bg-black/40 p-1.5 rounded">
                      💡 Drop your cert image file into: <code className="text-violet-300 font-mono">public{selectedCert.image}</code>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-between items-center text-xs text-[var(--color-muted-2)] font-mono">
                <span>{selectedCert.credentialId || "Verified Accreditation"}</span>
                <span className="text-violet-400">{selectedCert.badge}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
