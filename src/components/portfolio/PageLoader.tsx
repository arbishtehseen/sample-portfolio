import { useState, useEffect } from "react";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const remove = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center animate-scale-in">
        <h1 className="text-5xl font-bold text-gradient mb-2">AT</h1>
        <div className="w-24 h-0.5 mx-auto overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(190 100% 50%), hsl(265 100% 58%))",
              animation: "loader-fill 2s ease-out forwards",
            }}
          />
        </div>
        <style>{`
          @keyframes loader-fill {
            from { width: 0; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PageLoader;
