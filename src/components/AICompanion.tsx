import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AICompanionProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const AICompanion = ({ onNavigate, currentSection }: AICompanionProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [sectionHistory, setSectionHistory] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(true);

  const messages = [
    {
      text: "Hi, I'm Sushi! Sushree's personal AI assistant, here to help guide you through her journey.",
      options: ["About Me", "Tell me about their background"]
    },
    {
      text: `When I'm not decoding the world with AI or binging tech articles, you'll likely find me whisking up something delicious in the kitchen, getting lost in a novel, or singing to my plants for moral support.\n\nI dabble in just about everything - painting, photography, gardening, learning instruments, and of course, the sacred rituals of watching movies and late-night series marathons.\n\nAs an ENFJ, I thrive on good conversations and love turning strangers into friends. I also have a serious case of wanderlust and love exploring the world, one city (and snack) at a time.`,
      options: ["Back"]
    },
    {
      text: "Great! What would you like to explore first?",
      options: ["Education", "Experience", "Achievements", "Contact", "Back"]
    }
  ];

  const navigationOptions = [
    { label: "Education", section: "education", description: "Academic background and learning journey" },
    { label: "Experience", section: "experience", description: "Professional work and projects" },
    { label: "Achievements", section: "achievements", description: "Awards, certifications, and milestones" },
    { label: "Contact", section: "contact", description: "Get in touch for opportunities" }
  ];

  const sectionMessages: Record<string, string> = {
    education: "This is Sushree's academic journey.",
    experience: "Explore Sushree's work experience in tech and AI.",
    projects: "Here are some cool things Sushree likes to work on in her free time!",
    achievements: "These are Sushree's awards, certifications, and milestones.",
    contact: "Let's connect",
  };

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 1200);
    return () => clearTimeout(timer);
  }, [currentMessage, currentSection]);

  useEffect(() => {
    // Track section history for back navigation
    if (sectionHistory[sectionHistory.length - 1] !== currentSection && currentSection !== 'hero') {
      setSectionHistory((prev) => [...prev, currentSection]);
    }
    // eslint-disable-next-line
  }, [currentSection]);

  useEffect(() => {
    console.log('AICompanion: currentSection', currentSection, 'currentMessage', currentMessage, 'collapsed', collapsed);
    if (!collapsed && currentMessage !== 1 && currentMessage !== 2) {
      setCurrentMessage(-1); // Always show dynamic section message
    }
    // eslint-disable-next-line
  }, [currentSection]);

  let displayMessage: string | undefined;
  let displayOptions: string[] = [];
  let showNavOptions = false;
  if (currentMessage === 0) {
    displayMessage = messages[0].text;
    displayOptions = messages[0].options || [];
    showNavOptions = false;
  } else if (currentMessage === 1) {
    displayMessage = messages[1].text;
    displayOptions = messages[1].options || [];
    showNavOptions = false;
  } else if (currentMessage === 2) {
    displayMessage = messages[2].text;
    displayOptions = messages[2].options || [];
    showNavOptions = false;
  } else if (currentMessage === -1 && sectionMessages[currentSection]) {
    displayMessage = sectionMessages[currentSection];
    displayOptions = [];
    showNavOptions = true;
  }

  const handleOptionClick = (option: string) => {
    if (currentMessage === 0 && option === "About Me") {
      setCurrentMessage(1);
    } else if (currentMessage === 1 && option === "Back") {
      setCurrentMessage(0);
    } else if (currentMessage === 0 && option === "Tell me about their background") {
      setCurrentMessage(2); // Open navigation menu
    } else if (currentMessage === 2 && option === "Back") {
      setCurrentMessage(0);
    } else {
      const section = navigationOptions.find(nav => nav.label === option);
      if (section) {
        onNavigate(section.section);
      }
    }
  };

  if (collapsed) {
    // Show static message on hero, dynamic message otherwise
    let collapsedMessage = currentSection === 'hero'
      ? "Hi, I'm here to help!"
      : sectionMessages[currentSection] || messages[0].text;
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <div className="flex items-center mb-2">
          <div className="bg-gradient-card px-3 py-2 rounded-2xl shadow-glow text-sm text-ai-glow animate-fade-in">
            {collapsedMessage}
          </div>
        </div>
        <button
          className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow hover:scale-105 transition-transform"
          onClick={() => { setCollapsed(false); setCurrentMessage(0); }}
          aria-label="Expand Sushi Chatbot"
        >
          <span className="text-2xl">🍣</span>
        </button>
      </div>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 min-h-[340px] p-6 bg-gradient-card border-ai-glow/30 shadow-glow z-50">
      <button
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
        onClick={() => setCollapsed(true)}
        aria-label="Collapse Sushi Chatbot"
      >
        <X className="w-5 h-5 text-muted-foreground" />
      </button>
      <div className="flex items-start gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center animate-glow-pulse">
            <span className="text-lg">🍣</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-ai-success animate-pulse"></div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-ai-glow">Sushi</span>
            <MessageCircle className="w-4 h-4 text-ai-glow" />
          </div>
          <div className="space-y-3">
            <div className="text-sm text-foreground/90 leading-relaxed min-h-[48px]">
              {isTyping ? (
                <div className="flex items-center gap-1">
                  <span>Thinking</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-ai-glow rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-ai-glow rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-ai-glow rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              ) : (
                displayMessage
              )}
            </div>
            {((displayOptions && !isTyping && displayOptions.length > 0) || (showNavOptions && currentMessage !== 1 && currentMessage !== 2 && currentMessage !== -1)) && (
              <div className="space-y-2">
                {currentMessage === 1 || currentMessage === 2 || currentMessage === -1 ? null : showNavOptions ? (
                  navigationOptions.map((option) => (
                    <Button
                      key={option.section}
                      variant="playful-ghost"
                      size="sm"
                      className="w-full justify-start h-auto p-2 flex-col items-start whitespace-normal break-words"
                      onClick={() => handleOptionClick(option.label)}
                    >
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">{option.description}</span>
                    </Button>
                  ))
                ) : (
                  displayOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="playful-ghost"
                      size="sm"
                      className="w-full justify-start whitespace-normal break-words"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </Button>
                  ))
                )}
              </div>
            )}
            {currentMessage === 2 && !isTyping && (
              <>
                <div className="space-y-2">
                  {navigationOptions.map((option) => (
                    <Button
                      key={option.section}
                      variant="playful-ghost"
                      size="sm"
                      className="w-full justify-start h-auto p-2 flex-col items-start whitespace-normal break-words"
                      onClick={() => handleOptionClick(option.label)}
                    >
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">{option.description}</span>
                    </Button>
                  ))}
                </div>
                <div className="pt-2 flex justify-end">
                  <Button variant="outline" size="sm" onClick={() => setCurrentMessage(0)}>
                    ← Back
                  </Button>
                </div>
              </>
            )}
            {currentMessage === -1 && !isTyping && (
              <>
                <div className="space-y-2">
                  {navigationOptions.map((option) => (
                    <Button
                      key={option.section}
                      variant="playful-ghost"
                      size="sm"
                      className="w-full justify-start h-auto p-2 flex-col items-start whitespace-normal break-words"
                      onClick={() => handleOptionClick(option.label)}
                    >
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">{option.description}</span>
                    </Button>
                  ))}
                </div>
                <div className="pt-2 flex justify-end">
                  <Button variant="outline" size="sm" onClick={() => setCurrentMessage(0)}>
                    ← Back
                  </Button>
                </div>
              </>
            )}
            {currentMessage === 1 && !isTyping && (
              <div className="pt-2 flex justify-end">
                <Button variant="outline" size="sm" onClick={() => setCurrentMessage(0)}>
                  ← Back
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AICompanion;