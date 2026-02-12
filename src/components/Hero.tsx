import { motion } from "framer-motion";
import RadarCanvas from "./RadarCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Ambient blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-cyan-400 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Quantitative Cyber Risk Analysis
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white"
            >
              Navigate risk with{" "}
              <span className="text-gradient-cyan">precision</span>, not
              guesswork
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg text-slate-400 leading-relaxed"
            >
              ThreatCaptain transforms cyber risk into quantifiable financial
              metrics. Chart your course through the threat landscape with
              data-driven models that boards and executives actually understand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Request a Demo
              </a>
              <a
                href="#methodology"
                className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200"
              >
                Our Methodology
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex gap-8 sm:gap-12"
            >
              {[
                { value: "$4.2B+", label: "Risk Quantified" },
                { value: "10K+", label: "Scenarios Modeled" },
                { value: "98.6%", label: "Model Accuracy" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-500/[0.04] blur-2xl" />
            <RadarCanvas />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}
