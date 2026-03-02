import { ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import Scene3D from "./Scene3D";
import { useTypewriter } from "@/hooks/useTypewriter";

const phrases = [
  "I Build Beautiful Websites",
  "I Create Digital Experiences",
  "I Turn Ideas Into Reality",
  "I Am A Front End Developer",
];

const HeroSection = () => {
  const typedText = useTypewriter(phrases);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-[1]" />

      <div className="relative z-10 section-container flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-4 sm:gap-6 flex-col sm:flex-row">
          <Scene3D />
          <div className="space-y-3">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-mono">
              &lt;Welcome /&gt;
            </p>
            <h1
              className="glitch text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
              data-text="ARBISH TEHSEEN"
            >
              <span className="text-gradient">ARBISH TEHSEEN</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              Aspiring Front End Developer
            </p>
          </div>
        </div>

        <div className="h-10 mt-4">
          <p className="text-xl sm:text-2xl font-light text-foreground/80">
            <span>{typedText}</span>
            <span className="typewriter-cursor" />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#projects"
            className="btn-gradient px-8 py-3 rounded-full text-sm font-semibold text-primary-foreground tracking-wide"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-outline-glow px-8 py-3 rounded-full text-sm font-semibold text-foreground tracking-wide"
          >
            Hire Me
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
