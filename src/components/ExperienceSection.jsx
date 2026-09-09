import { useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiences, education } from "../data/experience";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Background & Qualifications</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Verified internship track record and academic computer science foundation.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="inline-flex rounded-lg border border-slate-800 bg-slate-900/80 p-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all ${
              activeTab === "experience"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Briefcase size={14} />
            <span>Work Experience ({experiences.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all ${
              activeTab === "education"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <GraduationCap size={14} />
            <span>Education ({education.length})</span>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="mt-10">
        {activeTab === "experience" ? (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#0F172A]/80 p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="inline-block rounded bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 font-mono text-xs font-semibold text-cyan-400">
                      {exp.type}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="mt-1 text-sm font-medium text-slate-300">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <div className="flex items-center gap-1.5 text-cyan-400">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <div className="mt-4 space-y-2">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-slate-900 border border-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#0F172A]/80 p-6 transition-all hover:border-cyan-500/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="inline-block rounded bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-400">
                      {edu.score}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="mt-1 text-sm font-medium text-slate-300">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <div className="flex items-center gap-1.5 text-cyan-400">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {edu.detail}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

