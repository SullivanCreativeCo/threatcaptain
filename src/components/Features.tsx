import { motion } from "framer-motion";
import {
  BarChart3,
  Shield,
  TrendingUp,
  Target,
  PieChart,
  Layers,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const features = [
  {
    icon: BarChart3,
    title: "Financial Risk Quantification",
    description:
      "Translate threat scenarios into dollar-value impact estimates using Monte Carlo simulations and loss exceedance curves.",
  },
  {
    icon: Target,
    title: "Threat Scenario Modeling",
    description:
      "Model specific attack vectors against your environment with probabilistic outcomes based on real-world breach data.",
  },
  {
    icon: TrendingUp,
    title: "Risk Trend Analysis",
    description:
      "Track how your risk posture evolves over time with continuous reassessment and dynamic scoring algorithms.",
  },
  {
    icon: Shield,
    title: "Control Effectiveness Scoring",
    description:
      "Measure the quantitative impact of each security control on your overall risk reduction portfolio.",
  },
  {
    icon: PieChart,
    title: "Executive Reporting",
    description:
      "Auto-generate board-ready reports that frame cyber risk in financial terms stakeholders understand.",
  },
  {
    icon: Layers,
    title: "Multi-Framework Alignment",
    description:
      "Map quantitative outputs to NIST CSF, ISO 27001, FAIR, and CIS — bridging compliance with real risk insight.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Features() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="platform" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-medium text-cyan-400 tracking-wide uppercase mb-3"
          >
            The Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Risk analysis that speaks in{" "}
            <span className="text-gradient-cyan">dollars, not adjectives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-slate-400 leading-relaxed"
          >
            Move beyond heat maps and color-coded matrices. ThreatCaptain
            delivers probabilistic risk models that quantify exposure in terms
            your CFO and board already operate in.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group glass rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 transition-colors">
                <f.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
