import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "../data/certifications";

export default function CertificationsSection() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 border-t border-slate-800/80">
      <div>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Professional Accreditations</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Certifications & Training
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Industry courses and verified certifications completed alongside degree studies.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0F172A]/80 p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Award size={20} />
                </div>
                <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${cert.badgeColor}`}>
                  {cert.category}
                </span>
              </div>

              <h3 className="mt-4 font-display text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>

              <div className="mt-1 text-xs font-mono font-medium text-cyan-400">
                {cert.issuer}
              </div>

              {cert.credentialId && (
                <div className="mt-1 font-mono text-[11px] text-slate-400">
                  ID: <span className="text-slate-300 font-semibold">{cert.credentialId}</span>
                </div>
              )}

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                {cert.desc}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 size={13} />
                Verified
              </span>
              <span>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
