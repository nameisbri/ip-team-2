import React, { useState, useEffect } from "react";
import ComparisonLayout from "../ComparisonLayout/ComparisonLayout";
import { getScenarioData } from "../../data/tacoBusinessData";
import "./MarketingSection.scss";

const MarketingSection = ({ targetAudience, budgetLevel, onNext }) => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [scenarioData, setScenarioData] = useState(null);
  const [tacoLogo, setTacoLogo] = useState("");
  const [tacoAd, setTacoAd] = useState("");

  useEffect(() => {
    if (targetAudience && budgetLevel) {
      const data = getScenarioData(targetAudience, budgetLevel);
      setScenarioData(data);

      // Dynamically import images based on the scenario
      const loadImages = async () => {
        try {
          const logoPath = await import(
            `../../assets/${targetAudience}-${budgetLevel}-logo.png`
          );
          const adPath = await import(
            `../../assets/${targetAudience}-${budgetLevel}-advertisement.png`
          );
          setTacoLogo(logoPath.default);
          setTacoAd(adPath.default);
        } catch (error) {
          console.error("Error loading images:", error);
          // // Fallback to default images if specific ones are not found
          // const fallbackLogo = await import(`../../assets/fallback-logo.png`);
          // const fallbackAd = await import(`../../assets/fallback-ad.png`);
          // setTacoLogo(fallbackLogo.default);
          // setTacoAd(fallbackAd.default);
        }
      };

      loadImages();
    }
  }, [targetAudience, budgetLevel]);

  const marketingElements = [
    {
      id: "branding",
      label: "Brand Identity",
      traditional: "Custom design: $2,000-5,000\nTimeline: 2-3 weeks",
      aiDriven: "AI-generated options: $200-500\nTimeline: 24-48 hours",
      examples: scenarioData
        ? [
            {
              type: "name",
              content: scenarioData.branding.name,
            },
            {
              type: "slogan",
              content: scenarioData.branding.slogan,
            },
            {
              type: "logo",
              image: tacoLogo,
              alt: "AI-generated logo concept",
            },
          ]
        : [],
    },
    {
      id: "marketing",
      label: "Marketing Campaign",
      traditional: "Agency fees: $3,000-8,000\nTimeline: 2-3 weeks",
      aiDriven: "AI content creation: $300-800\nTimeline: 2-3 days",
      examples: scenarioData
        ? [
            {
              type: "campaign",
              headline: scenarioData.branding.marketing.headline,
              description: scenarioData.branding.marketing.description,
              features: scenarioData.branding.marketing.features,
            },
          ]
        : [],
    },
    {
      id: "menu",
      label: "Menu Design",
      traditional: "Designer fees: $500-1,500\nTimeline: 1-2 weeks",
      aiDriven: "AI design tools: $50-150\nTimeline: 24 hours",
      examples: scenarioData
        ? [
            {
              type: "menu",
              pricing: scenarioData.branding.pricing,
              items: scenarioData.branding.marketing.menuItems || [
                "Classic Taco",
                "Specialty Taco",
                "Veggie Option",
              ],
            },
          ]
        : [],
    },
    {
      id: "social",
      label: "Social Media Kit",
      traditional: "Content creation: $1,000-3,000\nTimeline: 1-2 weeks",
      aiDriven: "AI-generated content: $100-300\nTimeline: 24-48 hours",
      examples: [
        {
          type: "social",
          image: tacoAd,
          content:
            targetAudience === "office-workers"
              ? "🌮 Beat the lunch rush! Order ahead and save 10% on your first order."
              : "🌮 Family Pack Special: Get 4 tacos, chips & salsa for just $25!",
        },
      ],
    },
  ];

  const toggleElement = (elementId) => {
    setSelectedElements((prev) =>
      prev.includes(elementId)
        ? prev.filter((id) => id !== elementId)
        : [...prev, elementId]
    );
  };

  const renderExamples = (examples) => {
    if (!examples) return null;

    return (
      <div className="marketing-section__examples">
        <h5 className="marketing-section__examples-title">
          AI-Generated Examples:
        </h5>
        <div className="marketing-section__examples-grid">
          {examples.map((example, index) => {
            switch (example.type) {
              case "name":
              case "slogan":
                return (
                  <div key={index} className="marketing-section__example-text">
                    <strong>
                      {example.type === "name" ? "Business Name:" : "Slogan:"}
                    </strong>
                    <p>{example.content}</p>
                  </div>
                );
              case "logo":
                return (
                  <div key={index} className="marketing-section__example-image">
                    <img src={example.image} alt={example.alt} />
                  </div>
                );
              case "campaign":
                return (
                  <div
                    key={index}
                    className="marketing-section__example-campaign"
                  >
                    <h6 className="marketing-section__campaign-headline">
                      {example.headline}
                    </h6>
                    <p className="marketing-section__campaign-description">
                      {example.description}
                    </p>
                    <div className="marketing-section__campaign-features">
                      {example.features.map((feature, i) => (
                        <div key={i} className="marketing-section__feature">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              case "menu":
                return (
                  <div key={index} className="marketing-section__example-menu">
                    <div className="marketing-section__menu-pricing">
                      Price Range: {example.pricing}
                    </div>
                    <div className="marketing-section__menu-items">
                      {example.items.map((item, i) => (
                        <div key={i} className="marketing-section__menu-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              case "social":
                return (
                  <div
                    key={index}
                    className="marketing-section__example-social"
                  >
                    <img src={example.image} alt="Social media post" />
                    <p>{example.content}</p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <ComparisonLayout
      title="Marketing & Branding Strategy"
      traditional={
        <div className="marketing-section__traditional">
          <div className="marketing-section__timeline">
            <h4 className="marketing-section__timeline-title">
              Traditional Marketing Timeline
            </h4>
            <div className="marketing-section__timeline-steps">
              <div className="marketing-section__timeline-step">
                <span className="marketing-section__timeline-step-number">
                  1
                </span>
                <span className="marketing-section__timeline-step-text">
                  Brand Development (2-3 weeks)
                </span>
              </div>
              <div className="marketing-section__timeline-step">
                <span className="marketing-section__timeline-step-number">
                  2
                </span>
                <span className="marketing-section__timeline-step-text">
                  Menu & Asset Design (1-2 weeks)
                </span>
              </div>
              <div className="marketing-section__timeline-step">
                <span className="marketing-section__timeline-step-number">
                  3
                </span>
                <span className="marketing-section__timeline-step-text">
                  Marketing Campaign Setup (2-3 weeks)
                </span>
              </div>
            </div>
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
              <div
                key={element.id}
                className="marketing-section__element-container"
              >
                <button
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
                {selectedElements.includes(element.id) &&
                  renderExamples(element.examples)}
              </div>
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
              <button
                onClick={() =>
                  onNext({
                    selectedMarketing: selectedElements,
                    marketingAssets: {
                      logo: tacoLogo,
                      advertisement: tacoAd,
                    },
                  })
                }
                className="marketing-section__next"
              >
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
