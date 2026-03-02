import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { year: "2026", title: "Started Learning HTML", description: "Began the web development journey with HTML fundamentals." },
  { year: "2026", title: "Built First Webpage", description: "Created my first complete webpage from scratch." },
  { year: "2026", title: "Currently Mastering CSS", description: "Diving deep into layouts, animations, and responsive design." },
  { year: "2026", title: "Next: JavaScript", description: "Ready to add interactivity and dynamic functionality." },
];

const JourneySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="journey" className="py-24 relative">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="text-gradient">My Journey</span>
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-border">
            <div
              className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-[2s] ease-out"
              style={{ height: isVisible ? "100%" : "0%" }}
            />
          </div>

          {milestones.map((m, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-6 mb-12 transition-all duration-700
                ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 300 + 500}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary neon-glow-blue z-10" />

              {/* Content */}
              <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                <span className="text-xs font-mono text-primary">{m.year}</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
