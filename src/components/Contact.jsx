import { useState } from "react";
import { Mail, MapPin, Phone, Network, Send, Code, Share2 } from "lucide-react";
import LocationMap from "./LocationMap";

// Builds a Gmail web-compose link (opens Gmail in browser, prefilled to this address)
const gmailComposeHref = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

// Builds a WhatsApp chat link from a phone number (strips non-digits, assumes country code included)
const whatsappHref = (phone) => `https://wa.me/${phone.replace(/\D/g, "")}`;

export default function Contact({ data }) {
  const c = data.contact;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    // Wire this up to your backend / email service / form handler.
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    console.log("Transmit payload:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-gutter">
        {/* Left: Contact Info */}
        <div className="w-full md:w-5/12 flex flex-col gap-stack-md">
          <div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-2">
              {c.heading}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{c.subheading}</p>
          </div>

          <div className="glass-panel p-stack-md rounded-xl flex flex-col gap-stack-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start gap-stack-sm relative z-10">
              <Mail className="text-primary mt-1 w-5 h-5" />
              <div>
                <div className="font-label-tech text-label-tech text-on-surface-variant mb-1">
                  SECURE_CHANNEL://EMAIL
                </div>
                <a
                  href={gmailComposeHref(c.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-lg text-body-lg text-secondary hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary"
                >
                  {c.email}
                </a>
              </div>
            </div>
            {c.phone && (
              <>
                <div className="h-px bg-white/10 w-full my-2" />
                <div className="flex items-start gap-stack-sm relative z-10">
                  <Phone className="text-primary mt-1 w-5 h-5" />
                  <div>
                    <div className="font-label-tech text-label-tech text-on-surface-variant mb-1">
                      PHONE
                    </div>
                    <a
                      href={whatsappHref(c.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body-lg text-body-lg text-secondary hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary"
                    >
                      {c.phone}
                    </a>
                  </div>
                </div>
              </>
            )}
            <div className="h-px bg-white/10 w-full my-2" />
            <div className="flex items-start gap-stack-sm relative z-10">
              <MapPin className="text-primary mt-1 w-5 h-5" />
              <div>
                <div className="font-label-tech text-label-tech text-on-surface-variant mb-1">
                  NODE://LOCATION
                </div>
                <div className="font-body-lg text-body-lg text-secondary">{c.location}</div>
              </div>
            </div>
            <div className="h-px bg-white/10 w-full my-2" />
            <div className="flex items-start gap-stack-sm relative z-10">
              <Network className="text-primary mt-1 w-5 h-5" />
              <div>
                <div className="font-label-tech text-label-tech text-on-surface-variant mb-1">
                  EXT_LINKS://SOCIAL
                </div>
                <div className="flex gap-4 mt-2">
                  {c.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.label}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        <Icon size={22} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl h-48 overflow-hidden relative">
            <LocationMap
              query={c.mapQuery || c.location}
              className="w-full h-full"
              label={`Map of ${c.location}`}
            />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-7/12 glass-panel p-stack-md md:p-stack-lg rounded-xl relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-xl pointer-events-none" />

          <div className="flex flex-col gap-stack-md relative z-10">
            <div className="flex flex-col md:flex-row gap-stack-md">
              <div className="w-full">
                <label className="font-label-tech text-label-tech text-primary block mb-2">
                  {c.form.nameLabel}
                </label>
                <input
                  className="w-full bg-surface-dim border-0 border-b border-white/20 text-secondary font-body-md text-body-md py-3 px-0 focus:ring-0 focus:border-primary transition-colors glow-focus"
                  placeholder={c.form.namePlaceholder}
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div className="w-full">
                <label className="font-label-tech text-label-tech text-primary block mb-2">
                  {c.form.emailLabel}
                </label>
                <input
                  className="w-full bg-surface-dim border-0 border-b border-white/20 text-secondary font-body-md text-body-md py-3 px-0 focus:ring-0 focus:border-primary transition-colors glow-focus"
                  placeholder={c.form.emailPlaceholder}
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </div>
            </div>

            <div>
              <label className="font-label-tech text-label-tech text-primary block mb-2">
                {c.form.subjectLabel}
              </label>
              <input
                className="w-full bg-surface-dim border-0 border-b border-white/20 text-secondary font-body-md text-body-md py-3 px-0 focus:ring-0 focus:border-primary transition-colors glow-focus"
                placeholder={c.form.subjectPlaceholder}
                type="text"
                value={form.subject}
                onChange={handleChange("subject")}
              />
            </div>

            <div>
              <label className="font-label-tech text-label-tech text-primary block mb-2">
                {c.form.messageLabel}
              </label>
              <textarea
                className="w-full bg-surface-dim border-0 border-b border-white/20 text-secondary font-body-md text-body-md py-3 px-0 focus:ring-0 focus:border-primary transition-colors glow-focus resize-none"
                placeholder={c.form.messagePlaceholder}
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
              />
            </div>

            <div className="pt-4 flex justify-end items-center gap-4">
              {submitted && (
                <span className="font-label-sm text-label-sm text-secondary-fixed">
                  Transmission sent.
                </span>
              )}
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-primary text-on-primary font-label-tech text-label-tech py-3 px-8 rounded flex items-center gap-2 hover:shadow-[0_0_15px_rgba(219,252,255,0.5)] transition-all duration-300 active:scale-95 group"
              >
                <span>{c.form.submitLabel}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}