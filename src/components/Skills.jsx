import { useEffect, useRef, useState } from "react";
import { Globe, Server as ServerIcon, Cloud, RefreshCw, Bug, Rocket } from "lucide-react";

const stackIconMap = { web: Globe, dns: ServerIcon, cloud: Cloud };
const methodIconMap = { sync: RefreshCw, bug_report: Bug, rocket_launch: Rocket };
const barColors = ["bg-primary", "bg-primary-container", "bg-surface-tint", "bg-outline"];
const textColors = ["text-primary", "text-primary-container", "text-surface-tint", "text-outline"];

export default function Skills({ data }) {
  const s = data.skills;
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
        <header className="flex flex-col gap-stack-sm mb-stack-md">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
            {s.heading}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {s.subheading}
          </p>
          {s.codingStats && (
            <div className="flex flex-wrap gap-3 mt-2">
              {s.codingStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-lg px-4 py-2 flex flex-col items-center min-w-[100px]"
                >
                  <span className="font-headline-md text-headline-md text-primary">
                    {stat.value}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Technology Stack */}
          <div className="md:col-span-8 flex flex-col gap-stack-md">
            <h3 className="font-headline-md text-headline-md text-secondary border-b border-white/10 pb-2">
              {s.stackTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
              {s.stack.map((group) => {
                const Icon = stackIconMap[group.icon] || Globe;
                return (
                  <div
                    key={group.title}
                    className="glass-panel rounded-xl p-6 flex flex-col gap-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3 text-primary-container">
                      <Icon className="w-5 h-5" />
                      <h4 className="font-label-tech text-label-tech uppercase">{group.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded-md font-label-sm text-label-sm text-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Proficiency + Methodologies */}
          <aside className="md:col-span-4 flex flex-col gap-stack-lg">
            <div className="flex flex-col gap-stack-md">
              <h3 className="font-headline-md text-headline-md text-secondary border-b border-white/10 pb-2">
                {s.proficiencyTitle}
              </h3>
              <div className="glass-panel rounded-xl p-6 flex flex-col gap-6">
                {s.proficiency.map((skill, i) => (
                  <div key={skill.label} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center font-label-tech text-label-tech">
                      <span className="text-secondary">{skill.label}</span>
                      <span className={textColors[i % textColors.length]}>{skill.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className={`h-full progress-bar-fill ${barColors[i % barColors.length]}`}
                        style={{ width: visible ? `${skill.value}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-stack-md">
              <h3 className="font-headline-md text-headline-md text-secondary border-b border-white/10 pb-2">
                {s.methodologiesTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {s.methodologies.map((m) => {
                  const Icon = methodIconMap[m.icon] || RefreshCw;
                  return (
                    <div
                      key={m.title}
                      className="glass-panel p-4 rounded-lg flex items-center gap-4 hover:border-primary-container transition-colors cursor-default"
                    >
                      <Icon className="w-5 h-5 text-secondary-container" />
                      <div>
                        <h4 className="font-label-tech text-label-tech text-secondary">{m.title}</h4>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
