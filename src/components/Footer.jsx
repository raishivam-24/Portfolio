export default function Footer({ data }) {
  const f = data.footer;
  return (
    <footer className="bg-surface-container-lowest w-full py-stack-md border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-stack-sm max-w-container-max mx-auto">
      <p className="font-label-sm text-label-sm text-on-tertiary-container hover:text-secondary opacity-80 hover:opacity-100 transition-opacity text-center md:text-left">
        {f.copyright}
      </p>
      <div className="flex gap-4">
        {f.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-label-tech text-label-tech text-on-tertiary-container hover:text-secondary opacity-80 hover:opacity-100 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
