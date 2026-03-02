import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "C++", level: 100, color: "hsl(190, 100%, 50%)" },
  { name: "C", level: 100, color: "hsl(200, 100%, 50%)" },
  { name: "HTML", level: 75, color: "hsl(15, 90%, 55%)" },
  { name: "CSS", level: 65, color: "hsl(210, 90%, 55%)" },
  { name: "Python", level: 50, color: "hsl(55, 80%, 50%)" },
  { name: "JavaScript", level: 40, color: "hsl(50, 90%, 55%)" },
  { name: "React", level: 10, color: "hsl(195, 100%, 50%)" },
  { name: "Git", level: 20, color: "hsl(10, 80%, 55%)" },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="glitch text-gradient" data-text="My Skills">
            My Skills
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          My current tech stack and learning progress
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group relative hexagon aspect-square flex items-center justify-center
                bg-muted/30 hover:bg-muted/50 transition-all duration-500 cursor-default
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Progress ring (SVG circle) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-[80%] h-[80%] -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="hsl(225, 15%, 18%)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke={skill.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={
                      isVisible
                        ? `${2 * Math.PI * 40 * (1 - skill.level / 100)}`
                        : `${2 * Math.PI * 40}`
                    }
                    style={{
                      transition: "stroke-dashoffset 1.5s ease-out",
                      transitionDelay: `${i * 150 + 300}ms`,
                      filter: `drop-shadow(0 0 6px ${skill.color})`,
                    }}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <p className="text-2xl font-bold text-foreground">{skill.level}%</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{skill.name}</p>
              </div>

              {/* Glow on hover */}
              <div
                className="absolute inset-0 hexagon opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 30px ${skill.color}33, 0 0 20px ${skill.color}22`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
