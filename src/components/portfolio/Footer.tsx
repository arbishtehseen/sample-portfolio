import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/arbishtehseen?tab=repositories", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/arbish-tehseen-07ba29381/", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:arbishtehseen20@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          {/* Social icons */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-blue transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className="text-sm">
            <span className="text-gradient font-semibold">Designed & Built by Arbish Tehseen</span>
          </p>

          <p className="text-xs text-muted-foreground">
            Made with ❤️ and lots of ☕
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-outline-glow w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
