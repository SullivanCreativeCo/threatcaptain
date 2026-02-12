import { useEffect, useRef } from "react";

interface Blip {
  r: number;
  theta: number;
  pulse: number;
  speed: number;
  size: number;
  risk: number;
}

export default function RadarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    const blips: Blip[] = Array.from({ length: 14 }, () => ({
      r: Math.random() * 0.78 + 0.12,
      theta: Math.random() * Math.PI * 2,
      pulse: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.002 + 0.0008,
      size: Math.random() * 2 + 1.5,
      risk: Math.random(),
    }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(cx, cy) * 0.88;

      ctx.clearRect(0, 0, w, h);

      // Concentric rings
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR / 4) * i, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.05 + i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Radial lines
      for (let i = 0; i < 8; i++) {
        const a = (Math.PI / 4) * i;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
        ctx.strokeStyle = "rgba(34, 211, 238, 0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Sweep cone
      const gradient = ctx.createConicGradient(angle, cx, cy);
      gradient.addColorStop(0, "rgba(34, 211, 238, 0.12)");
      gradient.addColorStop(0.07, "rgba(34, 211, 238, 0.03)");
      gradient.addColorStop(0.12, "rgba(34, 211, 238, 0)");
      gradient.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Blips
      for (const blip of blips) {
        blip.pulse += 0.025;
        blip.theta += blip.speed;
        const bx = cx + Math.cos(blip.theta) * blip.r * maxR;
        const by = cy + Math.sin(blip.theta) * blip.r * maxR;
        const sz = blip.size + Math.sin(blip.pulse) * 0.6;

        const c =
          blip.risk > 0.7
            ? "248, 113, 113"
            : blip.risk > 0.4
              ? "251, 191, 36"
              : "34, 211, 238";

        // Glow
        ctx.beginPath();
        ctx.arc(bx, by, sz * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c}, 0.07)`;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(bx, by, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c}, 0.8)`;
        ctx.fill();
      }

      // Center
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34, 211, 238, 0.5)";
      ctx.fill();

      angle += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
