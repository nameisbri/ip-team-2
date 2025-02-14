import React, { useState, useEffect } from "react";
import ComparisonLayout from "../ComparisonLayout/ComparisonLayout";
import {
  calculateTotalTraditionalCosts,
  getScenarioData,
} from "../../data/tacoBusinessData";
import "./RoiSection.scss";

const RoiSection = ({ targetAudience, onNext }) => {
  const [budgetLevel, setBudgetLevel] = useState(null);
  const [scenarioData, setScenarioData] = useState(null);

  // Get data for both budget levels up front
  const highBudgetData = targetAudience
    ? getScenarioData(targetAudience, "high")
    : null;
  const lowBudgetData = targetAudience
    ? getScenarioData(targetAudience, "low")
    : null;

  const budgetOptions = [
    {
      id: "high",
      label: "Premium Setup",
      description: "Full-service solution with comprehensive AI integration",
      range: highBudgetData?.setup.range,
      metrics: highBudgetData?.daily,
    },
    {
      id: "low",
      label: "Basic Setup",
      description: "Essential tools and basic automation",
      range: lowBudgetData?.setup.range,
      metrics: lowBudgetData?.daily,
    },
  ];

  const traditionalCosts = calculateTotalTraditionalCosts();

  useEffect(() => {
    if (targetAudience && budgetLevel) {
      const data = getScenarioData(targetAudience, budgetLevel);
      setScenarioData(data);
    }
  }, [targetAudience, budgetLevel]);

  const handleBudgetSelect = (budget) => {
    setBudgetLevel(budget);
    const newData = getScenarioData(targetAudience, budget);
    setScenarioData(newData);
  };

  const formatMetric = (metric) => {
    if (!metric) return null;
    return metric;
  };

  const getMetricsForBudget = (budget) => {
    const data = budget === "high" ? highBudgetData : lowBudgetData;
    return data?.daily || null;
  };

  return (
    <ComparisonLayout
      title="Cost Analysis"
      traditional={
        <div className="roi-section__traditional">
          <h4 className="roi-section__subtitle">
            Traditional Taco Business Setup
          </h4>
          <div className="roi-section__costs">
            <div className="roi-section__cost-item">
              <h5>Initial Investment</h5>
              <div className="roi-section__cost-value">
                {traditionalCosts.setupCosts}
              </div>
              <ul className="roi-section__cost-breakdown">
                <li>Location setup and equipment</li>
                <li>Initial inventory</li>
                <li>Legal and licensing fees</li>
                <li>Staff training</li>
              </ul>
            </div>
            <div className="roi-section__cost-item">
              <h5>Operational Costs</h5>
              <div className="roi-section__cost-value">
                {traditionalCosts.monthlyCosts}
                <span className="roi-section__cost-period">/month</span>
              </div>
              <ul className="roi-section__cost-breakdown">
                <li>Rent and utilities</li>
                <li>Staff salaries</li>
                <li>Inventory restocking</li>
                <li>Marketing expenses</li>
              </ul>
            </div>
            <div className="roi-section__timeline">
              <h5>Typical Timeline</h5>
              <p className="roi-section__timeline-value">
                {traditionalCosts.timeframe}
              </p>
              <ul className="roi-section__timeline-breakdown">
                <li>Business planning: 2-4 weeks</li>
                <li>Location setup: 4-8 weeks</li>
                <li>Staff hiring & training: 2-4 weeks</li>
                <li>Marketing preparation: 2-4 weeks</li>
              </ul>
            </div>
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
                onClick={() => handleBudgetSelect(option.id)}
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

          {budgetLevel && scenarioData && (
            <div className="roi-section__details">
              <div className="roi-section__metrics">
                <div className="roi-section__metric">
                  <span>Daily Sales Target:</span>
                  <strong>{formatMetric(scenarioData.daily.sales)}</strong>
                </div>
                <div className="roi-section__metric">
                  <span>Daily Revenue Target:</span>
                  <strong>{formatMetric(scenarioData.daily.revenue)}</strong>
                </div>
                <div className="roi-section__metric">
                  <span>Operating Costs:</span>
                  <strong>{formatMetric(scenarioData.daily.costs)}</strong>
                </div>
                <div className="roi-section__metric">
                  <span>Break-even Timeline:</span>
                  <strong>{formatMetric(scenarioData.setup.breakEven)}</strong>
                </div>
              </div>

              <button
                onClick={() => onNext({ budgetLevel })}
                className="roi-section__next"
              >
                Continue to Marketing Strategy
              </button>
            </div>
          )}
        </div>
      }
    />
  );
};

export default RoiSection;
