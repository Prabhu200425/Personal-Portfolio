import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import InteractiveTerminal from "./components/InteractiveTerminal";
import { skills } from "./data/skills";
import { projects } from "./data/projects";

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Interactive Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Glassmorphic Navbar */}
      <Navbar
        onToggleTerminal={() => setTerminalOpen((prev) => !prev)}
        isTerminalOpen={terminalOpen}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onToggleTerminal={() => setTerminalOpen(true)}
          skillsCount={skills.length}
          projectsCount={projects.length}
        />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Sysadmin Footer */}
      <Footer />
    </div>
  );
}
