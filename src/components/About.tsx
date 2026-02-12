import { motion } from "framer-motion";
import { Award, Users, Globe, BookOpen } from "lucide-react";
import { useInView } from "../hooks/useInView";

const credentials = [
  {
    icon: Award,
    title: "FAIR Certified",
    description:
      "Our methodology is built on the Factor Analysis of Information Risk framework — the international standard for cyber risk quantification.",
  },
  {
    icon: Users,
    title: "Built by Practitioners",
    description:
      "Founded by CISOs and actuarial analysts who have managed risk programs for Fortune 500 enterprises and critical infrastructure.",
  },
  {
    icon: Globe,
    title: "Industry Agnostic",
    description:
      "Healthcare, financial services, energy, tech — our models are calibrated with sector-specific loss data for accurate quantification.",
  },
  {
    icon: BookOpen,
    title: "Research-Backed",
    description:
      "Every model parameter is grounded in peer-reviewed research, real breach data, and continuously validated against observed outcomes.",
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="about" className="relative py-28 bg-grid">
      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: narrative */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm font-medium text-cyan-400 tracking-wide uppercase mb-3"
            >
              About ThreatCaptain
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white leading-tight"
            >
              Charting a course through{" "}
              <span className="text-gradient-cyan">uncertain waters</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-5 text-slate-400 leading-relaxed"
            >
              Security teams have been navigating with broken compasses —
              qualitative risk ratings that don&apos;t translate to business
              decisions. ThreatCaptain provides the instruments to measure what
              matters: the probability and financial impact of the threats you
              face.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-slate-400 leading-relaxed"
            >
              We don&apos;t sell fear. We deliver clarity. When you can put a
              number on risk, you can make rational decisions about where to
              invest, what to accept, and how to communicate it to the people
              who control budgets.
            </motion.p>
          </div>

          {/* Right: credential cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                className="glass rounded-xl p-5 group hover:border-cyan-500/20 transition-all"
              >
                <c.icon
                  className="w-5 h-5 text-cyan-400 mb-3"
                  strokeWidth={1.5}
                />
                <h3 className="text-white font-semibold text-sm mb-1.5">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
