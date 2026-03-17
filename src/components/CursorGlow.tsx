"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  shape: "circle" | "square" | "diamond";
}

const DARK_COLORS = [
  "rgba(139, 92, 246, 0.6)",   // violet
  "rgba(167, 139, 250, 0.5)",  // light violet
  "rgba(236, 72, 153, 0.5)",   // pink
  "rgba(59, 130, 246, 0.5)",   // blue
  "rgba(245, 158, 11, 0.4)",   // amber
  "rgba(16, 185, 129, 0.4)",   // emerald
  "rgba(239, 68, 68, 0.4)",    // red
  "rgba(99, 102, 241, 0.5)",   // indigo
];

const LIGHT_COLORS = [
  "rgba(139, 92, 246, 0.35)",
  "rgba(167, 139, 250, 0.30)",
  "rgba(236, 72, 153, 0.30)",
  "rgba(59, 130, 246, 0.30)",
  "rgba(245, 158, 11, 0.25)",
  "rgba(16, 185, 129, 0.25)",
  "rgba(239, 68, 68, 0.25)",
  "rgba(99, 102, 241, 0.30)",
];

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -500, y: -500 });
  const rafId = useRef<number>(0);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const shapes: Particle["shape"][] = ["circle", "square", "diamond"];

    const initParticles = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
      const colors = themeRef.current === "dark" ? DARK_COLORS : LIGHT_COLORS;
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        // Gentle drift
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Mouse repulsion — particles gently push away from cursor
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150 * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "square") {
          ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
        } else {
          // diamond
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.2);
          ctx.lineTo(p.size * 0.8, 0);
          ctx.lineTo(0, p.size * 1.2);
          ctx.lineTo(-p.size * 0.8, 0);
          ctx.closePath();
          ctx.fill();
        }

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

  // Re-init particles when theme changes
  useEffect(() => {
    const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;
    for (const p of particlesRef.current) {
      p.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
