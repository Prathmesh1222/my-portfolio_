"use client";

import { motion } from "framer-motion";

const exploreItems = [
  {
    title: "Guestbook",
    description: "Leave your mark and see what others have to say",
    href: "/guestbook",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-violet-400">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Achievements",
    description: "Milestones, certifications, and accomplishments",
    href: "/achievements",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-yellow-400">
        <path d="M12 15l-3.5 2 .67-3.89L6 10.11l3.94-.34L12 6l2.06 3.77L18 10.11l-3.17 3L15.5 17z" />
      </svg>
    ),
  },
  {
    title: "My Links",
    description: "Find me across the web and social platforms",
    href: "/links",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 15 },
  },
};

export default function ExploreSection() {
  return (
    <section id="other" className="w-full max-w-6xl mx-auto px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-2">
          More to Explore
        </h2>
        <p className="text-[var(--color-muted-2)] text-sm">
          Check out these additional resources and connect with me
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {exploreItems.map((item) => (
          <motion.a
            key={item.title}
            href={item.href}
            variants={cardItem}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 flex items-start gap-4 hover:border-violet-500/20 hover:bg-[var(--color-card-hover)] transition-colors duration-300 card-glow"
          >
            <motion.div
              className="flex-shrink-0 mt-1"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              {item.icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[var(--color-foreground)] font-semibold mb-1 text-base">
                {item.title}
              </h3>
              <p className="text-[var(--color-muted-2)] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            {/* Arrow with slide animation */}
            <div className="flex-shrink-0 self-center">
              <motion.span
                className="inline-block text-[#666] group-hover:text-violet-400 text-lg"
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                →
              </motion.span>
            </div>

            {/* Bottom gradient reveal on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-b-2xl"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
