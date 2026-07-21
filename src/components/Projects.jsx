import { ExternalLink, Code } from "lucide-react";

function ProjectCard({ project }) {
  const isWide = project.size === "wide";

  if (isWide) {
    return (
      <article className="glass-panel rounded-xl overflow-hidden flex flex-col scanline-hover group lg:col-span-2">
        <div className="flex flex-col md:flex-row h-full">
          <div className="h-64 md:h-auto md:w-1/2 overflow-hidden relative">
            <img
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              alt={project.alt}
              src={project.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background to-transparent opacity-80" />
            <div className="absolute top-4 left-4 flex space-x-2 md:hidden">
              <StatusBadge status={project.status} />
            </div>
          </div>
          <div className="p-stack-md md:w-1/2 flex flex-col relative z-10 -mt-12 md:mt-0 bg-background/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t md:border-t-0 md:border-l border-white/5">
            <div className="hidden md:flex justify-end mb-4">
              <StatusBadge status={project.status} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-unit text-primary group-hover:text-primary-container transition-colors">
              {project.title}
            </h3>
            <TagList tags={project.tags} />
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
              {project.description}
            </p>
            <LinkRow links={project.links} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="glass-panel rounded-xl overflow-hidden flex flex-col scanline-hover group">
      <div className="h-64 overflow-hidden relative">
        <img
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          alt={project.alt}
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
        <div className="absolute top-4 right-4 flex space-x-2">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="p-stack-md flex-grow flex flex-col relative z-10 -mt-12 bg-background/40 backdrop-blur-md border-t border-white/5">
        <h3 className="font-headline-md text-headline-md mb-unit text-primary group-hover:text-primary-container transition-colors">
          {project.title}
        </h3>
        <TagList tags={project.tags} />
        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
          {project.description}
        </p>
        <LinkRow links={project.links} />
      </div>
    </article>
  );
}

function StatusBadge({ status }) {
  const isActive = status === "Active";
  return (
    <span
      className={`font-label-sm text-label-sm bg-surface-container-high/80 px-2 py-1 rounded-sm backdrop-blur-md flex items-center gap-1 border ${
        isActive
          ? "text-secondary-fixed border-secondary-fixed/30"
          : "text-on-surface border-outline-variant/30"
      }`}
    >
      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />}
      {status}
    </span>
  );
}

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-stack-sm">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container/50 px-2 py-1 border border-outline-variant/30"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function LinkRow({ links }) {
  return (
    <div className="flex items-center gap-4 mt-auto flex-wrap">
      {links.map((link, i) => {
        const Icon = link.icon === "code" ? Code : ExternalLink;
        return (
          <a
            key={link.label}
            href={link.href}
            className={
              i === 0
                ? "font-label-tech text-label-tech flex items-center gap-2 text-on-primary bg-primary px-4 py-2 rounded transition-all"
                : "font-label-tech text-label-tech flex items-center gap-2 text-primary border border-primary/50 hover:border-primary px-4 py-2 rounded transition-all"
            }
          >
            <Icon className="w-[18px] h-[18px]" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

export default function Projects({ data }) {
  const p = data.projects;
  return (
    <section id="projects" className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto w-full">
        <header className="mb-stack-lg text-center md:text-left">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-unit text-primary">
            {p.heading}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {p.subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-gutter">
          {p.items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
