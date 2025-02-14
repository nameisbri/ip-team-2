import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import IntroSection from "./components/IntroSection/IntroSection";
import BusinessModel from "./components/BusinessModel/BusinessModel";
import RoiSection from "./components/RoiSection/RoiSection";
import MarketingSection from "./components/MarketingSection/MarketingSection";
import Finalresults from "./pages/Finalresults/Finalresults";
import ChatInterface from "./components/ChatInterface/ChatInterface";

const CHAT_SEQUENCES = {
  "intro-to-business": [
    {
      type: "ai",
      content:
        "Hi! I'm your AI Business Assistant. I'll help you explore how AI can transform your business strategy.",
    },
    {
      type: "ai",
      content:
        "First, let's understand your business model and target audience.",
    },
  ],
  "business-to-roi": [
    {
      type: "ai",
      content:
        "Great choice! Now let's analyze the potential return on investment.",
    },
    {
      type: "ai",
      content:
        "I'll help you compare traditional costs with AI-powered solutions.",
    },
  ],
  "roi-to-marketing": [
    { type: "ai", content: "Excellent! Those cost savings look promising." },
    {
      type: "ai",
      content:
        "Let's explore how AI can enhance your marketing and customer acquisition strategy.",
    },
  ],
  "marketing-to-final": [
    {
      type: "ai",
      content:
        "Perfect! I've gathered all the information about your business strategy.",
    },
    {
      type: "ai",
      content:
        "Let me prepare a comprehensive comparison of traditional vs AI-powered approaches.",
    },
  ],
};

const App = () => {
  const [currentSection, setCurrentSection] = useState("intro");
  const [isInChat, setIsInChat] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);

  const handleSectionComplete = (nextSection) => {
    const chatKey = `${currentSection}-to-${nextSection}`;
    setCurrentChat(chatKey);
    setIsInChat(true);
  };

  const handleChatComplete = () => {
    setIsInChat(false);
    setCurrentSection(currentChat.split("-to-")[1]);
  };

  const renderSection = () => {
    if (isInChat && currentChat) {
      const [current, next] = currentChat.split("-to-");
      return (
        <ChatInterface
          messages={CHAT_SEQUENCES[currentChat]}
          onComplete={handleChatComplete}
          currentSection={current}
          nextSection={next}
        />
      );
    }

    switch (currentSection) {
      case "intro":
        return (
          <IntroSection onStart={() => handleSectionComplete("business")} />
        );
      case "business":
        return <BusinessModel onNext={() => handleSectionComplete("roi")} />;
      case "roi":
        return <RoiSection onNext={() => handleSectionComplete("marketing")} />;
      case "marketing":
        return (
          <MarketingSection onNext={() => handleSectionComplete("final")} />
        );
      default:
        return (
          <IntroSection onStart={() => handleSectionComplete("business")} />
        );
    }
  };

  return <AppLayout>{renderSection()}</AppLayout>;
};

export default App;
