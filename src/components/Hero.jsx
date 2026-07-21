import { Code, MessageCircle, Server, GraduationCap } from "lucide-react";

export default function Hero({ data }) {
  const h = data.hero;

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col justify-center relative"
    >
      <div
        className="absolute inset-0 z-[-1] opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #00f0ff 0%, transparent 50%)",
          mixBlendMode: "screen",
          filter: "blur(100px)",
        }}
      />

      <pre className="absolute right-0 top-1/4 opacity-10 font-label-tech text-[10px] text-primary whitespace-pre overflow-hidden h-96 w-96 pointer-events-none rotate-[15deg] hidden lg:block">
        {h.codeSnippet}
      </pre>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center z-10">
        <div className="col-span-1 md:col-span-7 flex flex-col gap-stack-lg">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full font-label-sm text-label-sm text-secondary-fixed">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                {h.status}
              </div>
              {h.education && (
                <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full font-label-sm text-label-sm text-primary">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {h.education}
                </div>
              )}
            </div>
            <h1 className="font-headline-xl text-headline-xl md:text-[80px] text-[48px] text-primary-fixed drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              {h.headlineLine1} <br />
              <span className="text-secondary">{h.headlineLine2}</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              {h.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={h.primaryCta.href}
              className="bg-primary-container text-background px-6 py-3 font-label-tech text-label-tech rounded flex items-center gap-2 glow-effect transition-all duration-300 font-bold"
            >
              <Code className="w-5 h-5" />
              {h.primaryCta.label}
            </a>
            <a
              href={h.secondaryCta.href}
              className="border border-primary-container/30 text-primary-container bg-surface/50 px-6 py-3 font-label-tech text-label-tech rounded flex items-center gap-2 hover:bg-primary-container/10 transition-all duration-300 backdrop-blur-md"
            >
              <MessageCircle className="w-5 h-5" />
              {h.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Terminal / HUD graphic */}
        <div className="col-span-1 md:col-span-5 relative mt-12 md:mt-0">
          <div className="glass-card p-1 rounded-xl shadow-[0_0_30px_rgba(0,219,233,0.15)] relative overflow-hidden h-[400px]">
            <div className="border-b border-white/10 p-3 flex justify-between items-center bg-surface-container-highest/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error-container" />
                <div className="w-3 h-3 rounded-full bg-surface-container" />
                <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">
                {h.terminal.title}
              </div>
            </div>

            <div className="p-4 font-label-tech text-label-tech text-primary/80 h-full flex flex-col gap-2 relative">
              <div className="flex items-center gap-2">
                <span className="text-secondary-fixed">root@synapse:~$</span>
                <span className="typing-effect overflow-hidden whitespace-nowrap border-r-2 border-primary pr-1">
                  {h.terminal.command}
                </span>
              </div>

              {h.terminal.lines.map((line, i) => (
                <div
                  key={line}
                  className="text-on-surface-variant mt-2 fade-in-delay"
                  style={{ animationDelay: `${1 + i * 0.5}s` }}
                >
                  {line}
                </div>
              ))}

              <div
                className="text-primary mt-4 fade-in-delay"
                style={{ animationDelay: "2.5s" }}
              >
                {h.terminal.readyMessage}
              </div>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary-container/5 to-transparent h-10 w-full animate-scanlineAnim" />
            </div>
          </div>

          <div
            className="absolute -top-6 -right-6 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(0,219,233,0.2)]"
            style={{ animationDuration: "4s" }}
          >
            <Server className="text-primary-container w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
