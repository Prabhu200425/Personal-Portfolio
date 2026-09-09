import { ArrowUp, Terminal } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070B14] py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Terminal size={14} />
          </div>
          <div>
            <span className="font-display text-sm font-bold text-slate-200">
              Prabhu<span className="text-cyan-400">.R</span>
            </span>
            <span className="ml-2 font-mono text-xs text-slate-500">
              © {new Date().getFullYear()} • Coimbatore, India
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
          <span>React 19</span>
          <span>•</span>
          <span>Tailwind v4</span>
          <span>•</span>
          <span>Vite 8</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Prabhu200425"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded p-1.5 hover:text-cyan-400 transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/prabhu-r-043559231"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded p-1.5 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <button
            onClick={scrollToTop}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

