"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const DARK_COLORS = [
  "#8b5cf6", "#a78bfa", "#ec4899", "#3b82f6",
  "#f59e0b", "#10b981", "#ef4444", "#6366f1",
];

const LIGHT_COLORS = [
  "#7c3aed", "#8b5cf6", "#db2777", "#2563eb",
  "#d97706", "#059669", "#dc2626", "#4f46e5",
];

const PARTICLE_COUNT = 14;

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -500, y: -500 });
  const smoothMouseRef = useRef({ x: -500, y: -500 });
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
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Each orbiting particle has its own angle offset, radius, speed, size
    const orbiters = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      angle: (i / PARTICLE_COUNT) * Math.PI * 2,
      radius: 18 + Math.random() * 30,
      speed: 0.008 + Math.random() * 0.015,
      size: 2 + Math.random() * 3.5,
      colorIdx: i % DARK_COLORS.length,
      opacity: 0.5 + Math.random() * 0.4,
    }));

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let time = 0;
    const draw = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor tracking
      smoothMouseRef.current.x = lerp(smoothMouseRef.current.x, mouseRef.current.x, 0.15);
      smoothMouseRef.current.y = lerp(smoothMouseRef.current.y, mouseRef.current.y, 0.15);

      const cx = smoothMouseRef.current.x;
      const cy = smoothMouseRef.current.y;

      // Skip drawing if mouse hasn't entered yet
      if (cx < -100) {
        rafId.current = requestAnimationFrame(draw);
        return;
      }

      const isDark = themeRef.current === "dark";
      const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

      // Draw each orbiting particle
      for (const orb of orbiters) {
        orb.angle += orb.speed;

        // Slight breathing radius
        const breathe = Math.sin(time * 0.02 + orb.angle) * 4;
        const r = orb.radius + breathe;

        const px = cx + Math.cos(orb.angle) * r;
        const py = cy + Math.sin(orb.angle) * r;

        // Particle glow
        ctx.save();
        ctx.globalAlpha = orb.opacity * (isDark ? 0.7 : 0.5);
        ctx.shadowBlur = 8;
        ctx.shadowColor = colors[orb.colorIdx];

        // Draw circle
        ctx.beginPath();
        ctx.arc(px, py, orb.size, 0, Math.PI * 2);
        ctx.fillStyle = colors[orb.colorIdx];
        ctx.fill();
        ctx.restore();
      }

      // Subtle center glow around cursor
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      if (isDark) {
        grad.addColorStop(0, "rgba(139, 92, 246, 0.06)");
        grad.addColorStop(1, "rgba(139, 92, 246, 0)");
      } else {
        grad.addColorStop(0, "rgba(139, 92, 246, 0.04)");
        grad.addColorStop(1, "rgba(139, 92, 246, 0)");
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.fill();

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
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
}
