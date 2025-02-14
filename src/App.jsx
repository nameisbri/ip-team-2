import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import IntroSection from "./components/IntroSection/IntroSection";
import BusinessModel from "./components/BusinessModel/BusinessModel";
import RoiSection from "./components/RoiSection/RoiSection";
import MarketingSection from "./components/MarketingSection/MarketingSection";
import Finalresults from "./components/finalresults/Finalresults/Finalresults";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import "./App.scss";

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
    {
      type: "ai",
      content: "Excellent! Those cost savings look promising.",
    },
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

  // Business data state
  const [businessData, setBusinessData] = useState({
    targetAudience: null,
    budgetLevel: null,
    selectedMarketing: [],
  });

  // Handle section transitions
  const handleSectionComplete = (nextSection) => {
    const chatKey = `${currentSection}-to-${nextSection}`;

    if (CHAT_SEQUENCES[chatKey]) {
      setCurrentChat(chatKey);
      setIsInChat(true);
    } else {
      setCurrentSection(nextSection);
    }
  };

  // Handle chat completion
  const handleChatComplete = () => {
    if (currentChat) {
      const nextSection = currentChat.split("-to-")[1];
      setIsInChat(false);
      setCurrentSection(nextSection);
      setCurrentChat(null);
    }
  };

  // Update business data
  const handleDataUpdate = (sectionData, nextSection) => {
    setBusinessData((prev) => ({ ...prev, ...sectionData }));
    handleSectionComplete(nextSection);
  };

  // Reset application
  const handleReset = () => {
    setBusinessData({
      targetAudience: null,
      budgetLevel: null,
      selectedMarketing: [],
    });
    setCurrentSection("intro");
    setIsInChat(false);
    setCurrentChat(null);
  };

  // Render current section
  const renderSection = () => {
    if (isInChat && currentChat && CHAT_SEQUENCES[currentChat]) {
      return (
        <ChatInterface
          messages={CHAT_SEQUENCES[currentChat]}
          onComplete={handleChatComplete}
          currentSection={currentSection}
          nextSection={currentChat.split("-to-")[1]}
        />
      );
    }

    switch (currentSection) {
      case "intro":
        return (
          <IntroSection onStart={() => handleSectionComplete("business")} />
        );

      case "business":
        return (
          <BusinessModel onNext={(data) => handleDataUpdate(data, "roi")} />
        );

      case "roi":
        return (
          <RoiSection
            targetAudience={businessData.targetAudience}
            onNext={(data) => handleDataUpdate(data, "marketing")}
          />
        );

      case "marketing":
        return (
          <MarketingSection
            targetAudience={businessData.targetAudience}
            budgetLevel={businessData.budgetLevel}
            onNext={(data) => handleDataUpdate(data, "final")}
          />
        );

      case "final":
        return <FinalResults {...businessData} onRestart={handleReset} />;

      default:
        return (
          <IntroSection onStart={() => handleSectionComplete("business")} />
        );
    }
  };

  return <AppLayout>{renderSection()}</AppLayout>;
};

export default App;
