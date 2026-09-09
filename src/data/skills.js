import {
  TerminalSquare,
  Network,
  Server,
  ShieldAlert,
  Wrench,
  Monitor,
  Lock,
  Workflow,
  MailOpen,
  Activity,
  Eye,
  Bot
} from "lucide-react";

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "linux", label: "Linux & OS" },
  { id: "sysadmin", label: "Sysadmin & AD" },
  { id: "networking", label: "Networking & Security" },
  { id: "support", label: "Helpdesk & Monitoring" },
  { id: "automation", label: "Automation & Tools" },
];

export const skills = [
  {
    icon: TerminalSquare,
    name: "Linux Administration (Pop!_OS / Ubuntu)",
    category: "linux",
    detail: "Workstation deployment from scratch, apt, systemctl, chmod/chown, useradd, ps/kill, smartctl SSD diagnostics, cryptsetup/LUKS encryption & GPU drivers",
    level: "Expert"
  },
  {
    icon: Workflow,
    name: "Active Directory & Group Policy (GPO)",
    category: "sysadmin",
    detail: "AD DS, OU hierarchy, GPOs (USB blocking, password complexity, drive mapping), domain joins, Windows Event Viewer audit logs",
    level: "Expert"
  },
  {
    icon: Lock,
    name: "OpenVPN & Enterprise Remote Access",
    category: "networking",
    detail: "Full PKI certificate authority via EasyRSA, AES-256-GCM, TLS 1.3, iptables NAT masquerading, UFW rules, DNS leak prevention & kill-switch",
    level: "Expert"
  },
  {
    icon: Network,
    name: "Network Infrastructure & Routing",
    category: "networking",
    detail: "Switches, patch panels, structured cabling, static/DHCP IP schemes, DNS, LAN, WiFi, router configuration, nslookup, Wireshark inspection",
    level: "Advanced"
  },
  {
    icon: ShieldAlert,
    name: "Endpoint Security & Antivirus",
    category: "networking",
    detail: "Sophos install & policy management, Quick Heal endpoint policies, SSL/TLS, compliance for remote users, penetration testing basics",
    level: "Advanced"
  },
  {
    icon: Bot,
    name: "Automation & CI/CD",
    category: "automation",
    detail: "Python, Bash scripting, GitHub Actions CI/CD pipelines, automated email bots (smtplib), SQLite tracking, SonarQube quality scans",
    level: "Advanced"
  },
  {
    icon: Server,
    name: "Windows Server 2019 / 2022",
    category: "sysadmin",
    detail: "DHCP server scopes, DNS management, file server provisioning, Samba, NTFS permissions, ITIL practices, and SLA management",
    level: "Advanced"
  },
  {
    icon: Activity,
    name: "System Monitoring & Diagnostics",
    category: "support",
    detail: "Real-time metrics with top, df -h, iostat, vmstat, smartctl disk health checks, Windows Event Viewer, troubleshooting Linux boot failures",
    level: "Expert"
  },
  {
    icon: Monitor,
    name: "Helpdesk & Remote Support",
    category: "support",
    detail: "osTicket implementation on Raspberry Pi 4 (Apache/MariaDB), email piping, SLA timers, ticket routing, AnyDesk, UltraViewer, RDP, SSH, XRDP",
    level: "Expert"
  },
  {
    icon: Wrench,
    name: "Hardware Diagnostics & Deployment",
    category: "support",
    detail: "Desktop/Laptop, RAM/SSD/HDD triage, GPU, motherboard replacement, printers, Mac Mini, Raspberry Pi 4, bootable USB media creation",
    level: "Expert"
  },
  {
    icon: MailOpen,
    name: "Corporate Email & Data Migration",
    category: "support",
    detail: "Outlook configuration, IMAP/POP setup, OST-to-PST data migrations, data-safe OS reinstallations, scheduled backup routines",
    level: "Proficient"
  },
  {
    icon: Eye,
    name: "IP Camera & Device Integration",
    category: "networking",
    detail: "Network configuration for 10+ IP cameras, address assignment, discovery via nslookup, subnet isolation, and ongoing connectivity monitoring",
    level: "Proficient"
  }
];
