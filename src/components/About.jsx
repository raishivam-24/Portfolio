import { Gauge, Landmark, Accessibility } from "lucide-react";

const iconMap = {
  speed: Gauge,
  architecture: Landmark,
  accessibility_new: Accessibility,
};

export default function About({ data }) {
  const a = data.about;

  return (
    <section
      id="about"
      className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
        {/* The Architect */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[400px] md:min-h-[614px]">
          <div className="md:col-span-7 flex flex-col gap-stack-md z-10">
            <div className="inline-flex items-center gap-2 text-secondary-container font-label-tech text-label-sm uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              {a.eyebrow}
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary glow-text uppercase">
              {a.headlinePart1} <span className="text-secondary">{a.headlineHighlight}</span>
              <br />
              {a.headlinePart2}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {a.description}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={a.ctaHref}
                className="bg-transparent border border-primary text-primary px-6 py-3 rounded font-label-tech text-label-tech uppercase tracking-wider hover:bg-primary/10 transition-colors inline-block"
              >
                {a.ctaLabel}
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden glass-panel">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
              style={{ backgroundImage: `url('${a.image.src}')` }}
              role="img"
              aria-label={a.image.alt}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        {/* Core Philosophy */}
        <div className="flex flex-col gap-stack-md relative z-10 mt-12">
          <h3 className="font-headline-md text-headline-md text-secondary border-l-4 border-primary pl-4 uppercase tracking-wider">
            {a.philosophy.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {a.philosophy.cards.map((card) => {
              const Icon = iconMap[card.icon] || Gauge;
              return (
                <div
                  key={card.title}
                  className="glass-panel glass-panel-interactive rounded-lg p-8 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-label-tech text-label-tech text-primary uppercase text-lg">
                    {card.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Telemetry / Timeline */}
        <div className="flex flex-col gap-stack-md relative z-10 mt-12">
          <h3 className="font-headline-md text-headline-md text-secondary border-l-4 border-primary pl-4 uppercase tracking-wider">
            {a.timeline.title}
          </h3>
          <div className="glass-panel rounded-xl p-8 md:p-12">
            <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12">
              {a.timeline.items.map((item) => (
                <div key={item.role} className="relative pl-8 md:pl-12 group">
                  <div
                    className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ring-4 ring-background transition-all ${
                      item.current
                        ? "bg-primary group-hover:ring-primary/20"
                        : "bg-white/30 group-hover:bg-primary"
                    }`}
                  />
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                    <h4 className="font-headline-md text-headline-md text-secondary">
                      {item.role}
                    </h4>
                    <span
                      className={`font-label-tech text-label-sm ${
                        item.current ? "text-primary" : "text-on-surface-variant"
                      }`}
                    >
                      {item.org}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-white/5 border border-white/10 font-label-sm text-label-sm text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Education */}
        {a.education && (
          <div className="flex flex-col gap-stack-md relative z-10 mt-12">
            <h3 className="font-headline-md text-headline-md text-secondary border-l-4 border-primary pl-4 uppercase tracking-wider">
              Education
            </h3>
            <div className="glass-panel glass-panel-interactive rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="font-headline-md text-headline-md text-secondary mb-1">
                  {a.education.degree}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {a.education.institution}
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-1">
                <span className="font-label-tech text-label-sm text-primary">
                  {a.education.duration}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {a.education.cgpa}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
