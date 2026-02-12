import { motion } from "framer-motion";
import { Crosshair, Calculator, LineChart, FileText } from "lucide-react";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    num: "01",
    icon: Crosshair,
    title: "Threat Identification",
    description:
      "We catalog threat scenarios relevant to your industry, assets, and attack surface using curated threat intelligence feeds and MITRE ATT&CK mappings.",
  },
  {
    num: "02",
    icon: Calculator,
    title: "Probabilistic Modeling",
    description:
      "Each scenario is modeled with probability distributions derived from breach frequency data, vulnerability telemetry, and control-state analysis.",
  },
  {
    num: "03",
    icon: LineChart,
    title: "Loss Quantification",
    description:
      "Monte Carlo simulations produce loss exceedance curves that express risk as annualized financial exposure — not vague severity labels.",
  },
  {
    num: "04",
    icon: FileText,
    title: "Actionable Reporting",
    description:
      "Results are distilled into decision-grade dashboards that map risk reduction to investment, enabling ROI-driven security strategy.",
  },
];

export default function Methodology() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="methodology" className="relative py-28 bg-grid">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/[0.03] blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-medium text-cyan-400 tracking-wide uppercase mb-3"
          >
            Methodology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            From threat intel to{" "}
            <span className="text-gradient-cyan">financial clarity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-slate-400 leading-relaxed"
          >
            A rigorous four-phase process grounded in FAIR methodology and
            actuarial science, adapted for real-time cyber risk analysis.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
              className="relative glass rounded-xl p-6 group hover:border-cyan-500/20 transition-all"
            >
              {/* Connector line (hidden on last card) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t border-dashed border-cyan-500/15" />
              )}

              <span className="text-xs font-mono text-cyan-500/40 mb-4 block">
                {step.num}
              </span>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 transition-colors">
                <step.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
