"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  speed: number;
  angle: number;
  drift: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

const DARK_PALETTE = [
  "#8b5cf6", "#a78bfa", "#c084fc",  // violets
  "#818cf8", "#6366f1", "#4f46e5",  // indigos
  "#ec4899", "#f472b6", "#fb7185",  // pinks
  "#3b82f6", "#60a5fa", "#2563eb",  // blues
  "#f59e0b", "#fbbf24",             // ambers
  "#10b981", "#34d399",             // greens
];

const LIGHT_PALETTE = [
  "#7c3aed", "#8b5cf6", "#a78bfa",
  "#6366f1", "#4f46e5", "#4338ca",
  "#db2777", "#ec4899", "#f472b6",
  "#2563eb", "#3b82f6", "#60a5fa",
  "#d97706", "#f59e0b",
  "#059669", "#10b981",
];

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafId = useRef<number>(0);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    themeRef.current = theme;
    // Update colors when theme changes
    const palette = theme === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
    for (const p of particlesRef.current) {
      p.color = palette[Math.floor(Math.random() * palette.length)];
    }
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const createParticles = () => {
      const count = Math.min(Math.floor((w * h) / 4000), 300);
      const palette = themeRef.current === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
      const cx = w / 2;
      const cy = h / 2;

      particlesRef.current = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * Math.max(w, h) * 0.6;
        return {
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          originX: cx,
          originY: cy,
          size: Math.random() * 3.5 + 1,
          color: palette[Math.floor(Math.random() * palette.length)],
          speed: 0.15 + Math.random() * 0.4,
          angle,
          drift: Math.random() * 0.003 + 0.001,
          opacity: Math.random() * 0.5 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        };
      });
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      createParticles();
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const isDark = themeRef.current === "dark";
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cx = w / 2;
      const cy = h / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      for (const p of particlesRef.current) {
        // Slowly drift outward from center (antigravity)
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 0) {
          p.x += (dx / dist) * p.speed * 0.3;
          p.y += (dy / dist) * p.speed * 0.3;
        }

        // Gentle orbital drift
        p.angle += p.drift;
        p.x += Math.cos(p.angle) * 0.2;
        p.y += Math.sin(p.angle) * 0.2;

        // Mouse interaction — particles scatter away from cursor
        const mdx = p.x - mx;
        const mdy = p.y - my;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120 && mDist > 0) {
          const force = (120 - mDist) / 120 * 2;
          p.x += (mdx / mDist) * force;
          p.y += (mdy / mDist) * force;
        }

        // Reset particle when it drifts too far off screen
        if (p.x < -50 || p.x > w + 50 || p.y < -50 || p.y > h + 50) {
          const resetAngle = Math.random() * Math.PI * 2;
          const resetDist = Math.random() * 80;
          p.x = cx + Math.cos(resetAngle) * resetDist;
          p.y = cy + Math.sin(resetAngle) * resetDist;
        }

        // Pulse for size breathing
        p.pulse += p.pulseSpeed;
        const sizeMultiplier = 1 + Math.sin(p.pulse) * 0.3;

        // Fade based on distance from center
        const distRatio = Math.min(dist / maxDist, 1);
        const fadeOpacity = p.opacity * (1 - distRatio * 0.6);

        // Draw the particle
        ctx.save();
        ctx.globalAlpha = fadeOpacity * (isDark ? 1 : 0.65);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = isDark ? 6 : 3;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * sizeMultiplier, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafId.current = requestAnimationFrame(draw);
    };

    rafId.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
