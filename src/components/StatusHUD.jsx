import { useState, useEffect } from "react";
import { TerminalDot } from "./Icons";
import { ShieldCheck, Wifi } from "lucide-react";

export default function StatusHUD({ skillsCount, projectsCount }) {
  const [uptimeSeconds, setUptimeSeconds] = useState(148320);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${mins}m ${secs}s`;
  };

  return (
    <div className="relative rounded-xl border border-slate-800 bg-[#0F172A]/90 p-1 shadow-2xl shadow-cyan-950/20 backdrop-blur">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <TerminalDot color="bg-red-500/80" />
          <TerminalDot color="bg-amber-400/80" />
          <TerminalDot color="bg-emerald-400/80" />
          <span className="ml-2 font-mono text-xs font-medium text-slate-400">
            sysadmin@prabhu-station: ~
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          SYSTEM HEALTHY
        </div>
      </div>

      {/* System Telemetry & Status Grid */}
      <div className="p-5 font-mono text-xs space-y-4">
        {/* Quick Diagnostics Grid */}
        <div className="grid grid-cols-2 gap-2 text-slate-400">
          <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-2.5 border border-slate-800/80">
            <Wifi size={14} className="text-cyan-400 shrink-0" />
            <div>
              <div className="text-[10px] uppercase text-slate-500">Network</div>
              <div className="font-semibold text-slate-200">1 Gbps LAN / VPN</div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 p-2.5 border border-slate-800/80">
            <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
            <div>
              <div className="text-[10px] uppercase text-slate-500">Security</div>
              <div className="font-semibold text-slate-200">Enforced & Active</div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table */}
        <dl className="divide-y divide-slate-800/80 border-t border-slate-800/80 pt-1 text-sm">
          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> role
            </dt>
            <dd className="font-semibold text-slate-200">Linux Sysadmin & IT Support</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> current_org
            </dt>
            <dd className="text-cyan-400">The Netvision Technologies</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> user_base
            </dt>
            <dd className="text-cyan-400">50+ Dev & ML Workstations</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> core_os
            </dt>
            <dd className="text-cyan-400">Pop!_OS • Ubuntu • Windows</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> automation
            </dt>
            <dd className="text-cyan-400">Python + GitHub Actions CI/CD</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> sla_record
            </dt>
            <dd className="text-emerald-400 font-mono text-xs">Near-Zero Downtime</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> skills_&amp;_projects
            </dt>
            <dd className="text-cyan-400 font-mono text-xs">{skillsCount || 12} skills • {projectsCount || 4} projects</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> session_uptime
            </dt>
            <dd className="text-emerald-400 font-mono text-xs">{formatUptime(uptimeSeconds)}</dd>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <dt className="text-slate-400 flex items-center gap-2">
              <span className="text-cyan-400">$</span> availability
            </dt>
            <dd className="flex items-center gap-1.5 font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              Open to Work / Relocation
            </dd>
          </div>
        </dl>

        {/* Command hint footer */}
        <div className="rounded bg-slate-900/60 p-2.5 text-center text-[11px] text-slate-500 border border-slate-800/60">
          Tip: Click <span className="text-cyan-400 font-bold">CLI Mode</span> in the header to launch interactive terminal.
        </div>
      </div>
    </div>
  );
}
