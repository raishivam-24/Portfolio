import { Terminal, FileText } from "lucide-react";

export default function Navbar({ data }) {
  const resumeUrl = data.hero?.resumeUrl;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,219,233,0.1)] transition-all duration-300 ease-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-[72px]">
        <a
          href="#home"
          className="font-headline-md text-headline-md font-black tracking-tighter text-primary hover:text-primary-container transition-colors"
        >
          {data.brand.name}
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {data.nav.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={
                i === 0
                  ? "font-label-tech text-label-tech text-primary border-b-2 border-primary pb-1"
                  : "font-label-tech text-label-tech text-on-surface-variant hover:text-primary transition-colors duration-300 hover:bg-white/5 px-2 py-1 rounded"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              title="View Resume"
            >
              <FileText className="text-primary w-5 h-5" />
            </a>
          )}
          <a
            href={data.nav.ctaHref}
            className="hidden md:flex bg-primary-container text-background font-label-tech text-label-tech px-6 py-2 rounded font-bold hover:glow-effect transition-shadow"
          >
            {data.nav.ctaLabel}
          </a>
        </div>
      </div>
    </nav>
  );
}