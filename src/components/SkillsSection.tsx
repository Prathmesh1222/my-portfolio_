"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "cplusplus",
  "python",
  "ubuntu",
  "tailwindcss",
  "fastapi",
  "framer",
  "linux",
  "openai",
];

export default function SkillsSection() {
  const [data, setData] = useState<any>();
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon as SimpleIcon, theme || "dark")
    );
  }, [data, theme]);

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 mb-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="text-center mb-12"
      >
        <h3 className="text-xs uppercase tracking-widest text-[var(--color-muted-2)] mb-3 font-medium">
          Tech Stack
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
          <motion.span
            className="text-[var(--color-foreground)]"
          >
            My{" "}
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Skills
          </motion.span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
        className="relative flex h-full w-full max-w-[32rem] mx-auto items-center justify-center overflow-hidden rounded-full border border-[var(--color-card-border)] bg-[var(--color-card)] card-glow px-10 pb-10 pt-4"
      >
        {renderedIcons ? (
          <Cloud {...cloudProps}>
            {/* The child items are array of elements */}
            {renderedIcons}
          </Cloud>
        ) : (
          <div className="h-[400px] w-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
          </div>
        )}
      </motion.div>
    </section>
  );
}
