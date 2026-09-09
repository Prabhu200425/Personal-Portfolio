import { useState, useEffect } from "react";
import { Menu, X, FileText, Terminal } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Navbar({ onToggleTerminal, isTerminalOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumeUrl = `${import.meta.env.BASE_URL}Prabhu-R-Resume.pdf`;

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-800/80 bg-[#0B1120]/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "border-b border-transparent bg-[#0B1120]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Terminal size={16} />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
            Prabhu<span className="text-cyan-400">.R</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 ml-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            online
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Socials */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Terminal Launcher */}
          {onToggleTerminal && (
            <button
              onClick={onToggleTerminal}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border transition-all ${
                isTerminalOpen
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 font-semibold"
                  : "bg-slate-900/60 border-slate-700/80 text-cyan-400 hover:border-cyan-400 hover:bg-slate-800"
              }`}
              title="Toggle interactive terminal"
            >
              <Terminal size={13} />
              <span>CLI Mode</span>
            </button>
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-1 text-slate-400 pl-1 border-l border-slate-800">
            <a
              href="https://github.com/Prabhu200425"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/prabhu-r-043559231"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Resume Download CTA */}
          <a
            href={resumeUrl}
            download="Prabhu-R-Resume.pdf"
            className="flex items-center gap-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-cyan-500/20 hover:from-cyan-400 hover:to-teal-400 transition-all ml-1"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          {onToggleTerminal && (
            <button
              onClick={onToggleTerminal}
              className="p-1.5 text-cyan-400 rounded-md border border-slate-800 bg-slate-900"
              aria-label="Toggle terminal"
            >
              <Terminal size={16} />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#0F172A] px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex gap-3 text-slate-400">
              <a
                href="https://github.com/Prabhu200425"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-cyan-400"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/prabhu-r-043559231"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-cyan-400"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a
              href={resumeUrl}
              download="Prabhu-R-Resume.pdf"
              className="flex items-center gap-1.5 rounded-md bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950"
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
