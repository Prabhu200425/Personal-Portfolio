export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "automation", label: "Automation & CI/CD" },
  { id: "security", label: "Security & VPN" },
  { id: "sysadmin", label: "Sysadmin & Infrastructure" },
];

export const projects = [
  {
    id: "password-expiry-bot",
    category: "automation",
    name: "Password Expiry Reminder Bot",
    command: "git clone https://github.com/Prabhu200425/password-expiry-bot.git",
    desc: "Automated Active Directory password expiry detector that delivers color-coded HTML email alerts to users and managers: Red (1–3 days), Orange (4–7 days), and Blue (8–14 days), eliminating missed password expirations. Deployed via a daily GitHub Actions CI/CD pipeline at 8 AM IST on free tier (zero infrastructure cost) with SQLite tracking to prevent duplicate alerts.",
    tags: ["Python", "SQLite", "Bash", "GitHub Actions", "CI/CD", "Active Directory", "smtplib"],
    metrics: "Automated Daily 8 AM • Zero Infra Cost • Color-Coded HTML Alerts",
    repoUrl: "https://github.com/Prabhu200425",
    stars: "Featured Automation"
  },
  {
    id: "openvpn-server",
    category: "security",
    name: "Enterprise OpenVPN Server & PKI",
    command: "git clone https://github.com/Prabhu200425/openvpn-server.git",
    desc: "Production-grade remote access VPN server built from scratch on Ubuntu Linux with AES-256-GCM encryption and TLSv1.3. Configured complete PKI using EasyRSA for certificate-based authentication, iptables NAT masquerading, UFW rules supporting both split and full tunneling, Wireshark packet validation, DNS leak prevention, and a VPN kill-switch.",
    tags: ["OpenVPN", "Ubuntu Linux", "iptables", "EasyRSA", "AES-256-GCM", "TLS 1.3", "UFW"],
    metrics: "AES-256-GCM • TLS 1.3 • PKI Authority • Wireshark Validated",
    repoUrl: "https://github.com/Prabhu200425",
    stars: "Featured Security"
  },
  {
    id: "active-directory-lab",
    category: "sysadmin",
    name: "Active Directory Enterprise Environment",
    desc: "Complete enterprise domain topology (lab.local) on VirtualBox running Windows Server 2019, AD DS, DNS, and a DHCP server with automatic IP scope assignment. Enforced enterprise GPOs (USB blocking, Control Panel restrictions, password complexity, corporate wallpaper), OUs for IT, HR, and Finance with department NTFS permissions, and Windows Event Viewer security audit logging.",
    tags: ["Windows Server 2019", "AD DS", "Group Policy (GPO)", "DHCP Server", "DNS", "VirtualBox"],
    metrics: "Domain Controller • Multi-OU GPO • NTFS Permissions • Audit Logging",
    repoUrl: "https://github.com/Prabhu200425",
    stars: "Enterprise Lab"
  },
  {
    id: "helpdesk-raspberry-pi",
    category: "sysadmin",
    name: "Helpdesk Ticketing System (osTicket on RPi 4)",
    desc: "Evaluated and deployed osTicket on Raspberry Pi 4 hardware with Apache and MariaDB under realistic IT support workloads, alongside AnyDesk and UltraViewer for remote access. Configured email piping, SLA timers, ticket routing, and auto-response templates, delivering a detailed evaluation benchmark report to management.",
    tags: ["Raspberry Pi 4", "osTicket", "Linux", "Apache", "MariaDB", "AnyDesk", "SLA Management"],
    metrics: "Bare-Metal RPi 4 • Email Piping • SLA Timers • Benchmarked",
    repoUrl: "https://github.com/Prabhu200425",
    stars: "Infrastructure R&D"
  },
  {
    id: "iot-intrusion-detection",
    category: "security",
    name: "IoT Device Intrusion & Anomaly Detection",
    command: "git clone https://github.com/Prabhu200425/IoT-Device-Intrusion-and-Anomaly-Detection.git",
    desc: "Python-based IoT security project for detecting network intrusions and anomalous device activity, helping identify suspicious behavior in connected environments.",
    tags: ["Python", "IoT Security", "Intrusion Detection", "Anomaly Detection", "Machine Learning"],
    metrics: "IoT Monitoring • Intrusion Detection • Anomaly Analysis",
    repoUrl: "https://github.com/Prabhu200425/IoT-Device-Intrusion-and-Anomaly-Detection",
    stars: "Cybersecurity"
  }
];
