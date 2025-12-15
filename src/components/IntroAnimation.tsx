import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

interface IntroAnimationProps {
  onComplete: () => void;
  name: string;
}

const IntroAnimation = ({ onComplete, name }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"logo" | "name" | "fade">("logo");

  useEffect(() => {
    const logoTimer = setTimeout(() => setPhase("name"), 1200);
    const nameTimer = setTimeout(() => setPhase("fade"), 3000);
    const completeTimer = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(nameTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      {/* Logo */}
      <div
        className={`relative transition-all duration-700 ${
          phase === "logo" 
            ? "scale-100 opacity-100" 
            : "scale-75 opacity-100 -translate-y-8"
        }`}
      >
        <div className="relative">
          <Code2 
            className={`w-20 h-20 text-primary ${phase === "logo" ? "animate-pulse-glow" : ""}`}
            strokeWidth={1.5}
          />
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
        </div>
      </div>

      {/* Name with signature animation */}
      <div
        className={`mt-8 overflow-hidden transition-all duration-500 ${
          phase === "name" || phase === "fade" 
            ? "opacity-100 max-h-32" 
            : "opacity-0 max-h-0"
        }`}
      >
        <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-gradient inline-block animate-typewriter">
            {name}
          </span>
          <span className="text-muted-foreground"> /&gt;</span>
        </h1>
        <p className="text-center text-muted-foreground mt-4 font-mono text-sm animate-fade-up stagger-2 opacity-0">
          Software Developer
        </p>
      </div>

      {/* Terminal cursor blinking dots */}
      <div className={`absolute bottom-20 flex gap-2 transition-opacity duration-500 ${phase === "logo" ? "opacity-100" : "opacity-0"}`}>
        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
};

export default IntroAnimation;
