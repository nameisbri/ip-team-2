import React, { useEffect, useState } from "react";
import {
  getScenarioData,
  calculateTotalTraditionalCosts,
} from "../../data/tacoBusinessData";
import "./FinalResults.scss";

const FinalResults = ({
  targetAudience,
  budgetLevel,
  selectedMarketing,
  onRestart,
}) => {
  const [scenarioData, setScenarioData] = useState(null);
  const traditionalCosts = calculateTotalTraditionalCosts();

  useEffect(() => {
    if (targetAudience && budgetLevel) {
      const data = getScenarioData(targetAudience, budgetLevel);
      setScenarioData(data);
    }
  }, [targetAudience, budgetLevel]);

  // Calculate cost effectiveness based on budget level
  const calculateEffectiveness = () => {
    if (!budgetLevel) return null;

    return {
      setupSavings: budgetLevel === "high" ? "25%" : "60%",
      timeSavings: "75%",
      operationalSavings: "70%",
    };
  };

  const effectiveness = calculateEffectiveness();

  const recommendations = [
    {
      title: "Setup Timeline",
      traditional: "2-4 months",
      aiDriven: "2-4 weeks",
      improvement: "75% faster",
    },
    {
      title: "Initial Investment",
      traditional: "$15,000 - $30,000",
      aiDriven:
        budgetLevel === "high" ? "$25,000 - $35,000" : "$12,000 - $15,000",
      improvement: budgetLevel === "high" ? "25% optimized" : "60% lower",
    },
    {
      title: "Daily Operations",
      traditional: "Manual management\n8-10 hours/day",
      aiDriven: "Automated systems\n2-3 hours/day",
      improvement: "70% more efficient",
    },
  ];

  const aiTools = [
    {
      category: "Business Planning & Analysis",
      tools: [
        {
          name: "Microsoft Designer",
          description: "Create professional branding and marketing materials",
          useCase: `Generate brand assets for ${scenarioData?.branding.name}`,
          icon: "🎨",
        },
        {
          name: "Microsoft Copilot",
          description: "Generate marketing copy and business documentation",
          useCase: "Create menu descriptions and promotional content",
          icon: "✍️",
        },
      ],
    },
    {
      category: "Operations & Management",
      tools: [
        {
          name: "Power Automate",
          description: "Streamline order processing and inventory management",
          useCase: "Automate order tracking and inventory updates",
          icon: "⚡",
        },
        {
          name: "Power BI",
          description: "Track sales and performance metrics",
          useCase: `Monitor daily target of ${scenarioData?.daily.sales}`,
          icon: "📊",
        },
      ],
    },
    {
      category: "Customer Engagement",
      tools: [
        {
          name: "Dynamics 365",
          description: "Manage customer relationships and loyalty programs",
          useCase:
            targetAudience === "office-workers"
              ? "Track corporate catering preferences"
              : "Manage family loyalty programs",
          icon: "🎯",
        },
        {
          name: "Azure AI",
          description: "Optimize operations and customer experience",
          useCase: "Predict rush hours and optimize menu recommendations",
          icon: "🤖",
        },
      ],
    },
  ];

  // Implementation timeline based on budget level
  const nextSteps = [
    {
      title: "Brand Development",
      description: `Launch ${scenarioData?.branding.name} with AI-generated branding and marketing materials`,
      timeline: "Week 1",
      tools: ["Microsoft Designer", "Microsoft Copilot"],
    },
    {
      title: "Operations Setup",
      description: "Implement automated systems for orders and inventory",
      timeline: "Week 2",
      tools: ["Power Automate", "Power BI"],
    },
    {
      title: "Marketing Launch",
      description:
        targetAudience === "office-workers"
          ? `Promote ${scenarioData?.branding.pricing} lunch specials to local offices`
          : `Launch family deals starting at ${scenarioData?.branding.pricing}`,
      timeline: "Week 3",
      tools: ["Dynamics 365", "Azure AI"],
    },
  ];

  return (
    <div className="final-results">
      <div className="final-results__header">
        <h2 className="final-results__title">
          Your AI-Powered Taco Business Strategy
        </h2>
        <p className="final-results__subtitle">
          {scenarioData?.branding.name}: {scenarioData?.branding.slogan}
        </p>
      </div>

      <div className="final-results__grid">
        {recommendations.map((rec, index) => (
          <div key={index} className="final-results__comparison">
            <h3 className="final-results__comparison-title">{rec.title}</h3>
            <div className="final-results__comparison-content">
              <div className="final-results__traditional">
                <h4>Traditional Approach</h4>
                <span>{rec.traditional}</span>
              </div>
              <div className="final-results__ai">
                <h4>AI-Powered Solution</h4>
                <span>{rec.aiDriven}</span>
                <div className="final-results__improvement">
                  {rec.improvement}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="final-results__business-summary">
        <h3>Business Overview</h3>
        <div className="final-results__summary-grid">
          <div className="final-results__summary-item">
            <span>Target Market</span>
            <strong>
              {targetAudience === "office-workers"
                ? "Office Workers"
                : "Families"}
            </strong>
          </div>
          <div className="final-results__summary-item">
            <span>Price Range</span>
            <strong>{scenarioData?.branding.pricing}</strong>
          </div>
          <div className="final-results__summary-item">
            <span>Daily Sales Target</span>
            <strong>{scenarioData?.daily.sales}</strong>
          </div>
          <div className="final-results__summary-item">
            <span>Daily Revenue Target</span>
            <strong>{scenarioData?.daily.revenue}</strong>
          </div>
        </div>
      </div>

      <div className="final-results__tools">
        <h3>Recommended AI Tools</h3>
        <div className="final-results__tools-grid">
          {aiTools.map((category, index) => (
            <div key={index} className="final-results__tools-category">
              <h4 className="final-results__tools-category-title">
                {category.category}
              </h4>
              <div className="final-results__tools-list">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="final-results__tool">
                    <div className="final-results__tool-header">
                      <span className="final-results__tool-icon">
                        {tool.icon}
                      </span>
                      <h5 className="final-results__tool-name">{tool.name}</h5>
                    </div>
                    <p className="final-results__tool-description">
                      {tool.description}
                    </p>
                    <div className="final-results__tool-usecase">
                      <span>Use Case:</span> {tool.useCase}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="final-results__actions">
        <button onClick={onRestart} className="final-results__restart">
          Start New Analysis
        </button>
      </div>
    </div>
  );
};

export default FinalResults;
