import { useState } from "react";
import { TerminalDot } from "./Icons";
import { Copy, Check, ExternalLink, Code2 } from "lucide-react";
import { projects, projectCategories } from "../data/projects";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCopyCommand = (id, command) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Infrastructure & Development</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Featured Projects & Labs
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Enterprise labs, cybersecurity research, and software builds.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {projectCategories.map((cat) => (
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

      {/* Projects Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          const isCopied = copiedId === project.id;
          return (
            <div
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-[#0F172A]/80 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Terminal Card Header */}
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <TerminalDot color="bg-red-500/80" />
                    <TerminalDot color="bg-amber-400/80" />
                    <TerminalDot color="bg-emerald-400/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-500 truncate max-w-[120px]">
                      {project.id}.sh
                    </span>
                  </div>
                  <span className="rounded bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-500/30">
                    {project.stars}
                  </span>
                </div>

                <div className="p-5">
                  {/* Clone Command with Copy Action */}
                  <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-950/80 px-3 py-2 border border-slate-800/80 font-mono text-xs">
                    <span className="truncate text-emerald-400">
                      $ {project.command}
                    </span>
                    <button
                      onClick={() => handleCopyCommand(project.id, project.command)}
                      className="shrink-0 p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                      title="Copy clone command"
                      aria-label="Copy clone command"
                    >
                      {isCopied ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-4">
                    {project.desc}
                  </p>

                  {/* Highlights Metric Pill */}
                  {project.metrics && (
                    <div className="mt-3 text-[11px] font-mono text-cyan-400 bg-cyan-950/30 px-2.5 py-1 rounded border border-cyan-800/40">
                      ⚡ {project.metrics}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-900 border border-slate-800/80 px-2 py-0.5 font-mono text-[10px] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="border-t border-slate-800/80 bg-slate-900/40 px-5 py-3 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  open-source
                </span>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View code for ${project.name}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Code2 size={14} />
                  <span>View Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
