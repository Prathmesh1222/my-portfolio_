"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -500, y: -500 });
  const smoothMouse = useRef({ x: -500, y: -500 });
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
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      // Smooth interpolation for buttery movement
      smoothMouse.current.x = lerp(smoothMouse.current.x, mouse.current.x, 0.12);
      smoothMouse.current.y = lerp(smoothMouse.current.y, mouse.current.y, 0.12);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x, y } = smoothMouse.current;
      const isDark = themeRef.current === "dark";

      // Large ambient glow
      const outerRadius = 350;
      const outerGrad = ctx.createRadialGradient(x, y, 0, x, y, outerRadius);
      if (isDark) {
        outerGrad.addColorStop(0, "rgba(139, 92, 246, 0.06)");
        outerGrad.addColorStop(0.4, "rgba(139, 92, 246, 0.03)");
        outerGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
      } else {
        outerGrad.addColorStop(0, "rgba(139, 92, 246, 0.045)");
        outerGrad.addColorStop(0.4, "rgba(139, 92, 246, 0.02)");
        outerGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
      }
      ctx.fillStyle = outerGrad;
      ctx.fillRect(x - outerRadius, y - outerRadius, outerRadius * 2, outerRadius * 2);

      // Inner bright core
      const innerRadius = 150;
      const innerGrad = ctx.createRadialGradient(x, y, 0, x, y, innerRadius);
      if (isDark) {
        innerGrad.addColorStop(0, "rgba(167, 139, 250, 0.10)");
        innerGrad.addColorStop(0.5, "rgba(139, 92, 246, 0.04)");
        innerGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
      } else {
        innerGrad.addColorStop(0, "rgba(124, 58, 237, 0.07)");
        innerGrad.addColorStop(0.5, "rgba(139, 92, 246, 0.025)");
        innerGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
      }
      ctx.fillStyle = innerGrad;
      ctx.fillRect(x - innerRadius, y - innerRadius, innerRadius * 2, innerRadius * 2);

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
