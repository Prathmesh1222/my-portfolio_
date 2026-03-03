"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
  }>>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let hue = 270; // Start with violet
    const isDark = theme === "dark";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Spawn particles on mouse move
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 40 + Math.random() * 30,
          size: Math.random() * 4 + 2,
          hue: hue + Math.random() * 40 - 20,
        });
      }
      hue = (hue + 0.5) % 360;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life += 1;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;
        const size = p.size * (1 - progress * 0.5);

        if (alpha <= 0) return false;

        // In light mode, use higher saturation and lower lightness for visibility
        const lightness = isDark ? 65 : 50;
        const saturation = isDark ? 80 : 90;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${saturation}%, ${lightness}%, ${alpha * 0.7})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${saturation}%, ${lightness}%, ${alpha * 0.2})`;
        ctx.fill();

        return true;
      });

      // Draw cursor glow
      const glowAlpha = isDark ? 0.08 : 0.1;
      const gradient = ctx.createRadialGradient(
        mouse.current.x, mouse.current.y, 0,
        mouse.current.x, mouse.current.y, 80
      );
      gradient.addColorStop(0, `hsla(${hue}, 80%, ${isDark ? 65 : 55}%, ${glowAlpha})`);
      gradient.addColorStop(1, `hsla(${hue}, 80%, ${isDark ? 65 : 55}%, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(
        mouse.current.x - 80,
        mouse.current.y - 80,
        160,
        160
      );

      animFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
