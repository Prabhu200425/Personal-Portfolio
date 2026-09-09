import { useState } from "react";
import { skills, skillCategories } from "../data/skills";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  const getLevelBadge = (level) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Advanced":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "Proficient":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      default:
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
    }
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Core Competencies
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Hands-on technical proficiency across support engineering, systems administration, and security.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-3.5 py-1.5 transition-all ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map(({ icon: Icon, name, detail, level }) => (
          <div
            key={name}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0F172A]/70 p-5 transition-all duration-200 hover:border-cyan-500/40 hover:bg-[#0F172A] hover:shadow-lg hover:shadow-cyan-950/20"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                  <Icon size={20} />
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${getLevelBadge(
                    level
                  )}`}
                >
                  {level}
                </span>
              </div>

              <h3 className="mt-4 font-display text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {detail}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>status</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                operational
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

