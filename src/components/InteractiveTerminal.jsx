import { useState, useRef, useEffect } from "react";
import { X, Maximize2, Minimize2, Terminal as TerminalIcon } from "lucide-react";

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to PrabhuOS v2.4 (x86_64-linux-gnu)" },
    { type: "system", text: "Type 'help' to see available commands or 'neofetch' for system specs." },
  ]);
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "input", text: input }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
  • neofetch    - Display system overview and engineer profile
  • skills      - List core IT Support & Sysadmin competencies
  • experience  - Display internship & work history
  • projects    - List enterprise lab projects
  • contact     - Print phone, email, and location
  • cat resume  - View quick resume summary
  • sudo hire   - Run expedited onboarding protocol :)
  • clear       - Wipe terminal output
  • exit        - Close terminal window`
        });
        break;

      case "neofetch":
        newHistory.push({
          type: "output",
          text: `
      /\\         prabhu@station
     /  \\        --------------
    / /\\ \\       OS: Pop!_OS / Ubuntu 24.04 / Windows 11
   / /  \\ \\      Role: Linux System Administrator & IT Support Engineer
  / / /\\ \\ \\     Current: Executive Technical Support @ The Netvision Technologies
 / / /  \\ \\ \\    Previous: Network & Hardware Eng @ Cibi International
/_/ /    \\ \\_\\   Uptime SLA: Near-Zero Downtime across 50+ Workstations
\\_\\ \\    / /_/   Shell: bash 5.2.21 / Python 3.12 / GitHub Actions
 \\ \\ \\  / / /    Certs: Cisco (Networking & Cybersecurity) • Hacktify ISO
  \\ \\ \\/ / /     Education: B.E. Computer Science (CGPA: 7.45)
   \\ \\  / /      Automation: Password Expiry Bot, CI/CD, smtplib
    \\ \\/ /       Status: [●] Actively Resolving & Optimizing Systems
     \\__/`
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `[LINUX & OS ADMINISTRATION]
  - Pop!_OS & Ubuntu workstation deployment from scratch
  - Linux CLI: apt, systemctl, chmod/chown, useradd, ps/kill
  - smartctl SSD health checks, cryptsetup/LUKS encryption, GPU drivers
  - System telemetry: top, df -h, iostat, vmstat

[SYSADMIN & NETWORKING]
  - Active Directory DS, GPO policies, OU delegation, domain joins
  - Windows Server 2019/2022 (DNS, DHCP scope management, file servers)
  - OpenVPN server with PKI (EasyRSA), AES-256-GCM, TLS 1.3, iptables NAT
  - Switch/router setup, patch panels, structured cabling, IP camera integration
  - Endpoint security: Sophos certificates & Quick Heal policy enforcement

[AUTOMATION & HELPDESK]
  - Python & Bash automation, GitHub Actions CI/CD workflows, SQLite
  - osTicket deployment on Raspberry Pi 4 (Apache/MariaDB), email piping
  - Remote support via AnyDesk, UltraViewer, RDP, SSH, XRDP`
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          text: `1. EXECUTIVE TECHNICAL SUPPORT @ THE NETVISION TECHNOLOGIES (Jan 2026 - Present)
   - L1/L2 technical support for 50+ users across hardware, software, networking.
   - Deployed Pop!_OS Linux workstations from scratch across developer & ML teams.
   - Built automated Password Expiry Reminder Bot via Python + GitHub Actions CI/CD.
   - Configured Sophos certificates, OpenVPN, Quick Heal, and osTicket on RPi 4.

2. NETWORK & HARDWARE ENGINEER @ CIBI INTERNATIONAL PVT LTD (Jul 2025 - Dec 2025)
   - Maintained office LAN infrastructure, switches, patch panels, cabling for 30+ users.
   - Diagnosed hardware failures across RAM, HDD, GPU, and motherboard.

3. PENETRATION TESTING INTERN @ HACKTIFY CYBERSECURITY (Aug 2024)
   - Vulnerability assessments, Nmap, Burp Suite (Certificate ID: pqmowkoazd).

4. UNDERGRADUATE B.E. CSE @ KSRIET (2021 - 2025)
   - CGPA: 7.45 | Computer Science and Engineering.`
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `• password-expiry-bot   : Automated daily AD password alerts via Python & GitHub Actions
• openvpn-server        : Enterprise VPN gateway with PKI, TLS 1.3 & AES-256-GCM
• active-directory-lab  : Windows Server 2019 enterprise lab with GPO & DHCP
• helpdesk-rpi4         : Bare-metal osTicket on Raspberry Pi 4 with email piping & SLAs`
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `CONTACT INFO:
  • Email     : prabhu252004@gmail.com
  • Phone     : +91 8838298172
  • Location  : Tamil Nadu, India
  • GitHub    : https://github.com/Prabhu200425
  • LinkedIn  : https://www.linkedin.com/in/prabhu-r-043559231`
        });
        break;

      case "cat resume":
        newHistory.push({
          type: "output",
          text: `Reading /home/prabhu/Prabhu-R-Resume.pdf ...
Name: Prabhu R
Degree: B.E. in Computer Science & Engineering (2021-2025)
Target Roles: IT Support Engineer, System Administrator, Network Engineer
Downloadable directly via the 'Resume' button in the top navigation!`
        });
        break;

      case "sudo hire":
      case "hire":
        newHistory.push({
          type: "output",
          text: `[AUTH] Access Granted!
Status: Excellent choice!
Please route interview invites to: prabhu252004@gmail.com or call +91 8838298172.
Looking forward to speaking with you!`
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        onClose();
        setInput("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `bash: ${cmd}: command not found. Type 'help' to see valid commands.`
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div
        className={`flex flex-col overflow-hidden rounded-xl border border-cyan-500/40 bg-[#070B14] shadow-2xl shadow-cyan-950/60 transition-all ${
          isMaximized ? "h-[94vh] w-[96vw]" : "h-[540px] w-full max-w-3xl"
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#0F172A] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="h-3 w-3 rounded-full bg-red-500/90 hover:bg-red-600 transition-colors"
              title="Close"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="h-3 w-3 rounded-full bg-amber-400/90 hover:bg-amber-500 transition-colors"
              title="Resize"
            />
            <button
              onClick={() => setHistory([])}
              className="h-3 w-3 rounded-full bg-emerald-400/90 hover:bg-emerald-500 transition-colors"
              title="Clear"
            />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-400">
              <TerminalIcon size={13} className="text-cyan-400" />
              prabhu@station: ~ (Interactive CLI)
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="rounded p-1 hover:bg-slate-800 hover:text-slate-200"
              aria-label="Toggle Fullscreen"
            >
              {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>
            <button
              onClick={onClose}
              className="rounded p-1 hover:bg-slate-800 hover:text-red-400"
              aria-label="Close Terminal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 font-mono text-xs text-slate-300 space-y-2 select-text cursor-text"
        >
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed">
              {line.type === "input" && (
                <div className="flex items-center gap-2 text-cyan-300">
                  <span className="text-emerald-400">prabhu@station:~$</span>
                  <span>{line.text}</span>
                </div>
              )}
              {line.type === "output" && (
                <pre className="font-mono text-slate-300 whitespace-pre-wrap pl-2 border-l border-slate-800 my-1">
                  {line.text}
                </pre>
              )}
              {line.type === "system" && (
                <div className="text-slate-500 italic">{line.text}</div>
              )}
              {line.type === "error" && (
                <div className="text-red-400">{line.text}</div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold shrink-0">prabhu@station:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs caret-cyan-400"
              autoFocus
              placeholder="type 'help' or 'neofetch'..."
              spellCheck={false}
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
