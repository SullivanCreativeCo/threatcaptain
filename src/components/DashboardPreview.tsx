import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

function MiniBar({ label, value, color, delay }: { label: string; value: number; color: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-slate-400">{label}</span>
        <span className="text-slate-300 font-mono">${(value / 1000000).toFixed(1)}M</span>
      </div>
      <div className="h-2 rounded-full bg-navy-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${(value / 12000000) * 100}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

function RiskGauge() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const riskScore = 72;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-16 overflow-hidden">
        <svg viewBox="0 0 120 60" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M10,55 A50,50 0 0,1 110,55"
            fill="none"
            stroke="rgba(34, 211, 238, 0.1)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Value arc */}
          <motion.path
            d="M10,55 A50,50 0 0,1 110,55"
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="157"
            initial={{ strokeDashoffset: 157 }}
            animate={inView ? { strokeDashoffset: 157 - (157 * riskScore) / 100 } : { strokeDashoffset: 157 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-white font-mono"
        >
          {riskScore}
        </motion.div>
        <div className="text-xs text-slate-500">Composite Risk Score</div>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  const scenarios = [
    { label: "Ransomware (double extortion)", value: 8400000, color: "#f87171" },
    { label: "Business email compromise", value: 4200000, color: "#fbbf24" },
    { label: "Cloud misconfiguration breach", value: 6100000, color: "#fb923c" },
    { label: "Insider threat (data exfil)", value: 3200000, color: "#22d3ee" },
    { label: "Third-party supply chain", value: 5800000, color: "#a78bfa" },
  ];

  return (
    <section id="insights" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-medium text-cyan-400 tracking-wide uppercase mb-3"
          >
            Risk Intelligence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Your threat landscape,{" "}
            <span className="text-gradient-cyan">quantified</span>
          </motion.h2>
        </div>

        {/* Dashboard mock */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-strong rounded-2xl p-1 glow-cyan"
        >
          {/* Top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-green-400/60" />
            <span className="ml-3 text-xs text-slate-500 font-mono">
              threatcaptain.app/dashboard
            </span>
          </div>

          <div className="p-6 sm:p-8 grid lg:grid-cols-3 gap-8">
            {/* Loss exposure bars */}
            <div className="lg:col-span-2 space-y-5">
              <h3 className="text-sm font-medium text-slate-300 mb-4">
                Annualized Loss Exposure by Scenario
              </h3>
              {scenarios.map((s, i) => (
                <MiniBar
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  color={s.color}
                  delay={0.1 + i * 0.08}
                />
              ))}
            </div>

            {/* Right panel */}
            <div className="space-y-6">
              <RiskGauge />

              <div className="glass rounded-xl p-4 space-y-3">
                <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Key Metrics
                </h4>
                {[
                  { label: "Total ALE", value: "$27.7M" },
                  { label: "95th Percentile Loss", value: "$14.2M" },
                  { label: "Risk Reduction (YoY)", value: "-18.4%" },
                  { label: "Control Coverage", value: "84.2%" },
                ].map((m) => (
                  <div key={m.label} className="flex justify-between text-sm">
                    <span className="text-slate-500">{m.label}</span>
                    <span className="text-white font-mono text-xs">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
