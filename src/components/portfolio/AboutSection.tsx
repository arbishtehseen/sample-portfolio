import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Rocket, Code2 } from "lucide-react";

const techIcons = ["HTML", "CSS", "JS", "C", "C++", "PY"];

const funFacts = [
  { icon: <Code2 size={20} />, text: "Currently Learning Web Dev" },
  { icon: <MapPin size={20} />, text: "Based in Karachi 🇵🇰" },
  { icon: <Rocket size={20} />, text: "Future Full Stack Developer" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Photo side */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full animate-spin-slow opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, hsl(190 100% 50%), hsl(265 100% 58%), hsl(190 100% 50%))",
                  filter: "blur(8px)",
                }}
              />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
                <span className="text-5xl font-bold text-gradient">AT</span>
              </div>

              {/* Orbiting tech icons */}
              {techIcons.map((icon, i) => {
                const angle = (i / techIcons.length) * Math.PI * 2;
                const r = 160;
                return (
                  <div
                    key={icon}
                    className="absolute w-10 h-10 rounded-lg glass flex items-center justify-center text-xs font-mono text-primary font-bold animate-float"
                    style={{
                      top: `calc(50% + ${Math.sin(angle) * r}px - 20px)`,
                      left: `calc(50% + ${Math.cos(angle) * r}px - 20px)`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hey! I'm <span className="text-primary font-semibold">Arbish Tehseen</span>, 
              a passionate aspiring frontend developer from Karachi, Pakistan. I'm on a mission to 
              master web development and build stunning digital experiences. Every day, I push 
              myself to learn something new and grow my skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have a strong foundation in C and C++ programming, and I'm now diving 
              deep into the world of web development with HTML, CSS, and JavaScript. 
              My goal is to become a full-stack developer who creates impactful applications.
            </p>

            {/* Fun facts */}
            <div className="grid gap-3 pt-4">
              {funFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 glass rounded-lg px-4 py-3 transition-all duration-300 hover:neon-glow-blue"
                >
                  <span className="text-primary">{fact.icon}</span>
                  <span className="text-sm text-foreground">{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
