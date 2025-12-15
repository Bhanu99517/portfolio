import { useState, useCallback } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Home from "./Home";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} name="John Doe" />
      )}
      <div className={showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Home />
      </div>
    </>
  );
};

export default Index;
