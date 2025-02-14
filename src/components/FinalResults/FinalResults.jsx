import React, { useEffect, useState } from "react";
import {
  getScenarioData,
  calculateTotalTraditionalCosts,
} from "../../data/tacoBusinessData";
import "./FinalResults.scss";

const FinalResults = ({
  targetAudience,
  budgetLevel,
  marketingAssets,
  onRestart,
}) => {
  const [scenarioData, setScenarioData] = useState(null);
  const traditionalCosts = calculateTotalTraditionalCosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="final-results">
      <header className="final-results__header">
        <h2 className="final-results__title">
          Your AI-Powered Business Strategy
        </h2>
        {scenarioData && (
          <p className="final-results__subtitle">
            {scenarioData.branding.name}: {scenarioData.branding.slogan}
          </p>
        )}
      </header>

      <section className="final-results__comparisons">
        {recommendations.map((rec, index) => (
          <div key={index} className="final-results__comparison">
            <h3>{rec.title}</h3>
            <div className="final-results__comparison-content">
              <div className="final-results__traditional">
                <h4>Traditional Approach</h4>
                <p>{rec.traditional}</p>
              </div>
              <div className="final-results__ai">
                <h4>AI-Powered Solution</h4>
                <p>{rec.aiDriven}</p>
                <span className="final-results__improvement">
                  {rec.improvement}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="final-results__marketing">
        <h3>AI-Generated Marketing Assets</h3>
        <div className="final-results__marketing-content">
          <div className="final-results__marketing-item">
            <h4>Brand Identity</h4>
            {scenarioData && (
              <div className="final-results__branding">
                <div className="final-results__branding-visuals">
                  {marketingAssets?.logo && (
                    <div className="final-results__branding-logo">
                      <h5>Logo</h5>
                      <img src={marketingAssets.logo} alt="Business logo" />
                    </div>
                  )}
                  {marketingAssets?.advertisement && (
                    <div className="final-results__branding-ad">
                      <h5>Advertisement</h5>
                      <img
                        src={marketingAssets.advertisement}
                        alt="Business advertisement"
                      />
                    </div>
                  )}
                </div>
                <div className="final-results__branding-info">
                  <p>
                    <strong>Business Name:</strong> {scenarioData.branding.name}
                  </p>
                  <p>
                    <strong>Slogan:</strong> {scenarioData.branding.slogan}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="final-results__marketing-item">
            <h4>Marketing Campaign</h4>
            {scenarioData?.branding.marketing && (
              <div className="final-results__campaign">
                <h5>{scenarioData.branding.marketing.headline}</h5>
                <p>{scenarioData.branding.marketing.description}</p>
                <div className="final-results__features">
                  {scenarioData.branding.marketing.features.map(
                    (feature, index) => (
                      <span key={index} className="final-results__feature">
                        {feature}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="final-results__marketing-item">
            <h4>Menu Details</h4>
            {scenarioData && (
              <div className="final-results__menu">
                <p>
                  <strong>Price Range:</strong> {scenarioData.branding.pricing}
                </p>
                <div className="final-results__menu-items">
                  {scenarioData.branding.marketing.menuItems?.map(
                    (item, index) => (
                      <span key={index} className="final-results__menu-item">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="final-results__business-summary">
        <h3>Business Overview</h3>
        <div className="final-results__summary-content">
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
      </section>

      <section className="final-results__tools">
        <h3>Recommended AI Tools</h3>
        <div className="final-results__tools-content">
          <div className="final-results__tools-category">
            <h4>Business Planning & Analysis</h4>
            <div className="final-results__tools-list">
              <div className="final-results__tool">
                <div className="final-results__tool-header">
                  <span className="final-results__tool-icon">🎨</span>
                  <h5>Microsoft Designer</h5>
                </div>
                <p>Create professional branding and marketing materials</p>
                <div className="final-results__tool-usecase">
                  <span>Use Case:</span> Generate brand assets for{" "}
                  {scenarioData?.branding.name}
                </div>
              </div>
              <div className="final-results__tool">
                <div className="final-results__tool-header">
                  <span className="final-results__tool-icon">✍️</span>
                  <h5>Microsoft Copilot</h5>
                </div>
                <p>Generate marketing copy and business documentation</p>
                <div className="final-results__tool-usecase">
                  <span>Use Case:</span> Create menu descriptions and
                  promotional content
                </div>
              </div>
            </div>
          </div>

          <div className="final-results__tools-category">
            <h4>Operations & Management</h4>
            <div className="final-results__tools-list">
              <div className="final-results__tool">
                <div className="final-results__tool-header">
                  <span className="final-results__tool-icon">⚡</span>
                  <h5>Power Automate</h5>
                </div>
                <p>Streamline order processing and inventory management</p>
                <div className="final-results__tool-usecase">
                  <span>Use Case:</span> Automate order tracking and inventory
                  updates
                </div>
              </div>
              <div className="final-results__tool">
                <div className="final-results__tool-header">
                  <span className="final-results__tool-icon">📊</span>
                  <h5>Power BI</h5>
                </div>
                <p>Track sales and performance metrics</p>
                <div className="final-results__tool-usecase">
                  <span>Use Case:</span> Monitor daily target of{" "}
                  {scenarioData?.daily.sales}
                </div>
              </div>
            </div>
          </div>

          <div className="final-results__tools-category">
            <h4>Customer Engagement</h4>
            <div className="final-results__tools-list">
              <div className="final-results__tool">
                <div className="final-results__tool-header">
                  <span className="final-results__tool-icon">🎯</span>
                  <h5>Dynamics 365</h5>
                </div>
                <p>Manage customer relationships and loyalty programs</p>
                <div className="final-results__tool-usecase">
                  <span>Use Case:</span>{" "}
                  {targetAudience === "office-workers"
                    ? "Track corporate catering preferences"
                    : "Manage family loyalty programs"}
                </div>
              </div>
              <div className="final-results__tool">
                <div className="final-results__tool-header">
                  <span className="final-results__tool-icon">🤖</span>
                  <h5>Azure AI</h5>
                </div>
                <p>Optimize operations and customer experience</p>
                <div className="final-results__tool-usecase">
                  <span>Use Case:</span> Predict rush hours and optimize menu
                  recommendations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="final-results__actions">
        <button onClick={onRestart} className="final-results__restart">
          Start New Analysis
        </button>
      </div>
    </div>
  );
};

export default FinalResults;
