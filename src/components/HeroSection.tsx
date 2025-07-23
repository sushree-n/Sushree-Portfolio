import { useState, useEffect } from "react";
import { ChevronDown, Code, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "Hello World! I'm Sushree ✨";
  
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-ai-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-glow opacity-10 rounded-full"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        {/* Theme Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        
        {/* Main heading with typing effect */}
        <div className="mb-8 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent font-pacifico">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
            Part coder, Part AI explorer, full-time problem solver.
          </p>
          <p className="text-lg text-muted-foreground/80">
            Bringing ideas to life with code, creativity, and a sprinkle of magic ✨
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group p-6 rounded-lg bg-card/50 border border-ai-glow/20 hover:border-ai-glow/40 transition-all duration-300 hover:shadow-glow">
            <Code className="w-8 h-8 text-ai-glow mb-4 mx-auto group-hover:animate-pulse" />
            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
            <p className="text-sm text-muted-foreground">Writing elegant, scalable, maintainable solutions</p>
          </div>
          
          <div className="group p-6 rounded-lg bg-card/50 border border-ai-secondary/20 hover:border-ai-secondary/40 transition-all duration-300 hover:shadow-card">
            <Brain className="w-8 h-8 text-ai-secondary mb-4 mx-auto group-hover:animate-pulse" />
            <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
            <p className="text-sm text-muted-foreground">Leveraging AI to enhance user experiences</p>
          </div>
          
          <div className="group p-6 rounded-lg bg-card/50 border border-ai-success/20 hover:border-ai-success/40 transition-all duration-300 hover:shadow-card">
            <Sparkles className="w-8 h-8 text-ai-success mb-4 mx-auto group-hover:animate-pulse" />
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-muted-foreground">Constantly exploring new technologies</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="playful-primary" 
            size="lg" 
            onClick={() => onScrollToSection('experience')}
            className="group"
          >
            Explore My Work
            <Sparkles className="ml-2 w-4 h-4 group-hover:animate-spin" />
          </Button>
          <Button 
            variant="playful-ghost" 
            size="lg" 
            onClick={() => onScrollToSection('contact')}
          >
            Get In Touch
          </Button>
          <Button
            variant="playful-primary"
            size="lg"
            asChild
          >
            <a href="/resume.pdf" download>
              Download My Resume
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onScrollToSection('education')}
            className="rounded-full hover:bg-ai-glow/10"
          >
            <ChevronDown className="w-6 h-6 text-ai-glow" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;