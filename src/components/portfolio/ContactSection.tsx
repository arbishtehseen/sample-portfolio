import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      formRef.current?.reset();
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Subtle animated bg */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(265 100% 58% / 0.15), transparent 60%), radial-gradient(ellipse at 70% 50%, hsl(190 100% 50% / 0.1), transparent 60%)",
        }}
      />

      <div ref={ref} className="section-container relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <div
          className={`max-w-lg mx-auto glass rounded-2xl p-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative group">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-muted/30 border border-border rounded-lg pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-muted/30 border border-border rounded-lg pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <MessageSquare size={16} className="absolute left-4 top-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                className="w-full bg-muted/30 border border-border rounded-lg pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full btn-gradient rounded-lg py-3 text-sm font-semibold text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {sent ? (
                "Message Sent! ✨"
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>

          {/* Direct email */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            Or email me directly at{" "}
            <a href="mailto:arbishtehseen20@gmail.com" className="text-primary hover:underline">
              arbishtehseen20@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
