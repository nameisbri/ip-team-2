// MarketingSection/MarketingSection.jsx
import React, { useState } from "react";
import ComparisonLayout from "../ComparisonLayout/ComparisonLayout";
import "./MarketingSection.scss";

const MarketingSection = ({ onNext }) => {
  const [selectedElements, setSelectedElements] = useState([]);

  const marketingElements = [
    {
      id: "logo",
      label: "Brand Logo",
      traditional: "Custom design: $500-2000\nTimeline: 1-2 weeks",
      aiDriven: "AI-generated options: $50-200\nTimeline: 24-48 hours",
    },
    {
      id: "businessName",
      label: "Business Name",
      traditional: "Brainstorming sessions\nMarket research\nTimeline: 1 week",
      aiDriven:
        "AI-powered name generation\nInstant market analysis\nTimeline: 1-2 hours",
    },
    {
      id: "slogan",
      label: "Slogan & Tagline",
      traditional: "Copywriter fees: $200-500\nRevisions: 3-5 days",
      aiDriven:
        "AI copywriting tools\nUnlimited variations\nTimeline: 1-3 hours",
    },
  ];

  const toggleElement = (elementId) => {
    setSelectedElements((prev) =>
      prev.includes(elementId)
        ? prev.filter((id) => id !== elementId)
        : [...prev, elementId]
    );
  };

  const renderTraditionalTimeline = () => (
    <div className="marketing-section__timeline">
      <h4 className="marketing-section__timeline-title">
        Traditional Marketing Timeline
      </h4>
      <div className="marketing-section__timeline-steps">
        <div className="marketing-section__timeline-step">
          <span className="marketing-section__timeline-step-number">1</span>
          <span className="marketing-section__timeline-step-text">
            Market Research (2-3 weeks)
          </span>
        </div>
        <div className="marketing-section__timeline-step">
          <span className="marketing-section__timeline-step-number">2</span>
          <span className="marketing-section__timeline-step-text">
            Brand Development (1-2 weeks)
          </span>
        </div>
        <div className="marketing-section__timeline-step">
          <span className="marketing-section__timeline-step-number">3</span>
          <span className="marketing-section__timeline-step-text">
            Asset Creation (2-3 weeks)
          </span>
        </div>
        <div className="marketing-section__timeline-step">
          <span className="marketing-section__timeline-step-number">4</span>
          <span className="marketing-section__timeline-step-text">
            Implementation (1-2 weeks)
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <ComparisonLayout
      title="Marketing & Customer Acquisition Strategy"
      traditional={
        <div className="marketing-section__traditional">
          {renderTraditionalTimeline()}
          <div className="marketing-section__cost-note">
            Average total cost: $5,000 - $10,000
          </div>
        </div>
      }
      aiDriven={
        <div className="marketing-section__ai-driven">
          <h4 className="marketing-section__subtitle">
            Select Marketing Elements to Generate
          </h4>
          <div className="marketing-section__elements">
            {marketingElements.map((element) => (
              <button
                key={element.id}
                onClick={() => toggleElement(element.id)}
                className={`marketing-section__element ${
                  selectedElements.includes(element.id)
                    ? "marketing-section__element--selected"
                    : ""
                }`}
              >
                <div className="marketing-section__element-header">
                  <span className="marketing-section__element-label">
                    {element.label}
                  </span>
                  <span className="marketing-section__element-status">
                    {selectedElements.includes(element.id) ? "✓" : "+"}
                  </span>
                </div>
                <div className="marketing-section__element-comparison">
                  <div className="marketing-section__element-traditional">
                    <small>Traditional:</small>
                    {element.traditional.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <div className="marketing-section__element-ai">
                    <small>AI-Driven:</small>
                    {element.aiDriven.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {selectedElements.length > 0 && (
            <div className="marketing-section__summary">
              <div className="marketing-section__summary-savings">
                <span>Estimated Time Saved:</span>
                <strong>70-80%</strong>
              </div>
              <div className="marketing-section__summary-savings">
                <span>Estimated Cost Saved:</span>
                <strong>60-75%</strong>
              </div>
              <button onClick={onNext} className="marketing-section__next">
                Continue to Final Results
              </button>
            </div>
          )}
        </div>
      }
    />
  );
};

export default MarketingSection;
