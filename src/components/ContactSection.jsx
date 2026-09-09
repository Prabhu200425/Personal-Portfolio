import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  CheckCircle2,
  MessageSquare,
  AlertCircle,
  Loader2
} from "lucide-react";
import { Github, Linkedin } from "./Icons";

// Web3Forms Access Key for direct delivery to prabhu252004@gmail.com
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "cacdccda-4037-429b-99dd-a71f03759235";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const contactEmail = "prabhu252004@gmail.com";
  const contactPhone = "+91 8838298172";

  const handleCopy = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // If access key is configured, send directly to inbox via Web3Forms API
    if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
            message: formData.message,
            from_name: "Prabhu R Portfolio Form",
          }),
        });

        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error(data.message || "Failed to send message. Please try emailing directly.");
        }
      } catch (err) {
        setErrorMessage(err.message || "Network error. Opening your email client instead...");
        // Fallback to mailto link
        setTimeout(() => {
          fallbackMailto();
        }, 1500);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Default / fallback: Direct mailto link opens visitor's default email client
      fallbackMailto();
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const fallbackMailto = () => {
    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 border-t border-slate-800/80">
      <div>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Get In Touch</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Contact & Availability
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Open to full-time Linux System Administrator, IT Support, and Network Specialist roles.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-[#0F172A]/80 p-6 space-y-4">
            <h3 className="font-display text-base font-bold text-slate-100 flex items-center gap-2">
              <MessageSquare size={18} className="text-cyan-400" />
              Direct Communication
            </h3>

            {/* Email Card */}
            <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-900/80 p-3.5 border border-slate-800/80">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail size={16} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-slate-500">Email Address</div>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-xs font-mono font-medium text-slate-200 hover:text-cyan-400 truncate block"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("email", contactEmail)}
                className="shrink-0 rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedField === "email" ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-900/80 p-3.5 border border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500">Phone / WhatsApp</div>
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="text-xs font-mono font-medium text-slate-200 hover:text-cyan-400"
                  >
                    {contactPhone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("phone", contactPhone)}
                className="shrink-0 rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
              >
                {copiedField === "phone" ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-3 rounded-lg bg-slate-900/80 p-3.5 border border-slate-800/80">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500">Location</div>
                <div className="text-xs font-medium text-slate-200">
                  Tamil Nadu, India (Open to On-site, Hybrid & Relocation)
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/Prabhu200425"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 py-2.5 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prabhu-r-043559231"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 py-2.5 text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-slate-800 bg-[#0F172A]/80 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-100">
                  Dispatch a Message
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Direct message delivery straight to <span className="text-cyan-400 font-mono">prabhu252004@gmail.com</span>.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Inbox
              </span>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <CheckCircle2 size={36} className="mx-auto text-emerald-400" />
                <h4 className="mt-3 font-display text-base font-bold text-slate-100">
                  Message Dispatched!
                </h4>
                <p className="mt-1 text-xs text-slate-300">
                  Thank you for reaching out. Your message has been sent to Prabhu R.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 rounded-md bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-400">
                    <AlertCircle size={15} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-slate-400 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full rounded-lg border border-slate-700/80 bg-slate-900/90 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-slate-400 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full rounded-lg border border-slate-700/80 bg-slate-900/90 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-mono text-xs text-slate-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Linux Sysadmin Opportunity / Interview Request"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/90 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-slate-400 mb-1.5">
                    Message Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe role requirements, team details, or interview availability..."
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/90 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-2.5 font-display text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:shadow-cyan-500/40 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={fallbackMailto}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors underline underline-offset-4"
                  >
                    Open in default mail client &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
