import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            <span className="text-sm font-semibold text-white">
              Threat<span className="text-cyan-400">Captain</span>
            </span>
          </div>

          <div className="flex gap-6">
            {["Platform", "Methodology", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} ThreatCaptain. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
