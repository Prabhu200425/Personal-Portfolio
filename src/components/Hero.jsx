import { ArrowRight, Download, Terminal, CheckCircle2 } from "lucide-react";
import StatusHUD from "./StatusHUD";

export default function Hero({ onToggleTerminal, skillsCount, projectsCount }) {
  const resumeUrl = `${import.meta.env.BASE_URL}Prabhu-R-Resume.pdf`;

  const highlights = [
    "L1/L2 Support (50+ users, near-zero downtime)",
    "Pop!_OS Linux deployments from scratch",
    "OpenVPN (AES-256-GCM / PKI) & AD DS Lab",
    "Python & GitHub Actions CI/CD Automation",
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* High-tech background glow mesh */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/15 to-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-80 w-80 rounded-full bg-cyan-600/10 blur-[100px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-7">
          {/* Terminal prompt pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 font-mono text-xs text-cyan-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>sysadmin@netvision:~$ systemctl status admin-engineer</span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Prabhu <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">R</span>
          </h1>

          <p className="mt-3 font-display text-lg font-semibold text-slate-300 sm:text-xl">
            Linux System Administrator & IT Support Engineer
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Driven IT professional delivering L1/L2 technical support, Linux system administration, and network infrastructure management across developer and ML teams. Proven track record deploying <span className="text-slate-200 font-medium">Pop!_OS workstations</span>, building enterprise <span className="text-slate-200 font-medium">OpenVPN & Active Directory</span> environments, and automating operations with <span className="text-slate-200 font-medium">Python & GitHub Actions CI/CD</span>.
          </p>

          {/* Quick highlight bullets */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 font-mono">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-500/40"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={resumeUrl}
              download="Prabhu-R-Resume.pdf"
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onToggleTerminal}
              className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm font-mono text-slate-400 transition hover:border-slate-700 hover:text-cyan-300"
              title="Launch interactive terminal"
            >
              <Terminal size={16} className="text-cyan-400" />
              <span className="hidden sm:inline">Launch CLI</span>
            </button>
          </div>
        </div>

        {/* Right Column: High-Tech Telemetry HUD */}
        <div className="lg:col-span-5">
          <StatusHUD skillsCount={skillsCount} projectsCount={projectsCount} />
        </div>
      </div>
    </section>
  );
}
