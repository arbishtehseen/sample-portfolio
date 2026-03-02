import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, RotateCcw } from "lucide-react";

const projects = [
  {
    title: "Login Page UI",
    description: "A modern glassmorphism login page with animated inputs, gradient buttons, and responsive design.",
    tags: ["HTML", "CSS", "UI/UX"],
    liveUrl: "#",
    githubUrl: "https://github.com/arbishtehseen",
    color: "hsl(190, 100%, 50%)",
  },
  {
    title: "Personal Profile Page",
    description: "A stylish personal profile card with hover effects, social links, and clean layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/arbishtehseen",
    color: "hsl(265, 100%, 58%)",
  },
  {
    title: "Coming Soon...",
    description: "Exciting new projects in development. Stay tuned for more creative and innovative work!",
    tags: ["React", "Next.js", "Future"],
    liveUrl: "#",
    githubUrl: "https://github.com/arbishtehseen",
    color: "hsl(340, 80%, 55%)",
  },
];

const ProjectCard = ({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative h-80 perspective-1000 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 cursor-pointer`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="h-32 rounded-xl mb-4 flex items-center justify-center"
            style={{ background: `${project.color}15` }}
          >
            <span className="text-4xl font-bold" style={{ color: project.color }}>
              {project.title.charAt(0)}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Click to flip →</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              className="btn-gradient flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-outline-glow flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground"
            >
              <Github size={14} /> GitHub
            </a>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">My Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          Click any card to flip and see details
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
