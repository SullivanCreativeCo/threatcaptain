import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function CTA() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.04] blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          Ready to quantify your{" "}
          <span className="text-gradient-cyan">cyber risk</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-5 text-slate-400 leading-relaxed max-w-xl mx-auto"
        >
          Schedule a walkthrough with our team. We&apos;ll show you how
          ThreatCaptain models your specific threat landscape and translates it
          into financial terms your leadership team can act on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:demo@threatcaptain.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:info@threatcaptain.com"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200"
          >
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
