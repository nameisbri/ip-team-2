import React, { useState } from "react";
import ComparisonLayout from "../ComparisonLayout/ComparisonLayout";
import "./ROISection.scss";

const ROISection = ({ onNext }) => {
  const [budgetLevel, setBudgetLevel] = useState(null);

  const budgetOptions = [
    {
      id: "high",
      label: "Higher Budget",
      range: "$10,000 - $50,000",
      description: "Full-service solution with comprehensive AI integration",
    },
    {
      id: "low",
      label: "Lower Budget",
      range: "$1,000 - $10,000",
      description: "Essential AI tools and basic automation",
    },
  ];

  const calculateTraditionalCosts = () => ({
    setup: "$15,000 - $30,000",
    monthly: "$2,000 - $5,000",
    timeframe: "3-6 months",
    roi: "12-18 months",
  });

  const calculateAICosts = (budget) => {
    if (budget === "high") {
      return {
        setup: "$8,000 - $15,000",
        monthly: "$1,000 - $2,500",
        timeframe: "1-2 months",
        roi: "6-9 months",
      };
    }
    return {
      setup: "$2,000 - $5,000",
      monthly: "$500 - $1,000",
      timeframe: "2-4 weeks",
      roi: "3-6 months",
    };
  };

  const traditionalCosts = calculateTraditionalCosts();
  const aiCosts = budgetLevel ? calculateAICosts(budgetLevel) : null;

  const CostComparison = ({ label, traditional, ai }) => (
    <div className="roi-section__cost-row">
      <span className="roi-section__cost-label">{label}</span>
      <span className="roi-section__cost-traditional">{traditional}</span>
      <span className="roi-section__cost-ai">{ai || "—"}</span>
    </div>
  );

  return (
    <ComparisonLayout
      title="Return on Investment Analysis"
      traditional={
        <div className="roi-section__traditional">
          <h4 className="roi-section__subtitle">Traditional Business Costs</h4>
          <div className="roi-section__costs">
            <CostComparison
              label="Setup Costs"
              traditional={traditionalCosts.setup}
              ai={aiCosts?.setup}
            />
            <CostComparison
              label="Monthly Costs"
              traditional={traditionalCosts.monthly}
              ai={aiCosts?.monthly}
            />
            <CostComparison
              label="Implementation Time"
              traditional={traditionalCosts.timeframe}
              ai={aiCosts?.timeframe}
            />
            <CostComparison
              label="Expected ROI Timeline"
              traditional={traditionalCosts.roi}
              ai={aiCosts?.roi}
            />
          </div>
        </div>
      }
      aiDriven={
        <div className="roi-section__ai-driven">
          <h4 className="roi-section__subtitle">Select Your Budget Range</h4>
          <div className="roi-section__budget-options">
            {budgetOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setBudgetLevel(option.id)}
                className={`roi-section__budget-button ${
                  budgetLevel === option.id
                    ? "roi-section__budget-button--active"
                    : ""
                }`}
              >
                <span className="roi-section__budget-label">
                  {option.label}
                </span>
                <span className="roi-section__budget-range">
                  {option.range}
                </span>
                <span className="roi-section__budget-description">
                  {option.description}
                </span>
              </button>
            ))}
          </div>

          {budgetLevel && (
            <button onClick={onNext} className="roi-section__next">
              Continue to Marketing Strategy
            </button>
          )}
        </div>
      }
    />
  );
};

export default ROISection;
