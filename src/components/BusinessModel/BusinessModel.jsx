import React, { useState } from "react";
import ComparisonLayout from "../ComparisonLayout/ComparisonLayout";
import { TRADITIONAL_SERVICES } from "../../data/tacoBusinessData";
import "./BusinessModel.scss";

const BusinessModel = ({ onNext }) => {
  const [targetAudience, setTargetAudience] = useState(null);

  const audienceTypes = [
    { id: "office-workers", label: "Office Workers" },
    { id: "families", label: "Families" },
  ];

  return (
    <ComparisonLayout
      title="Taco Business Model"
      traditional={
        <div className="business-model__traditional">
          <h4 className="business-model__section-title">
            Traditional Setup Requirements
          </h4>
          {TRADITIONAL_SERVICES.map((service, index) => (
            <div key={index} className="business-model__service">
              <h5 className="business-model__service-title">
                {service.service}
              </h5>
              <div className="business-model__service-providers">
                {service.providers.map((provider, pIndex) => (
                  <div key={pIndex} className="business-model__provider">
                    <span className="business-model__provider-type">
                      {provider.type}:
                    </span>
                    <span className="business-model__provider-cost">
                      {provider.cost}
                    </span>
                  </div>
                ))}
              </div>
              <div className="business-model__service-time">
                Time Required: {service.timeConsumed}
              </div>
            </div>
          ))}
        </div>
      }
      aiDriven={
        <div className="business-model__ai-driven">
          <div className="business-model__selection">
            <h4 className="business-model__selection-title">
              Select Target Audience
            </h4>
            <div className="business-model__buttons">
              {audienceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setTargetAudience(type.id)}
                  className={`business-model__button ${
                    targetAudience === type.id
                      ? "business-model__button--active"
                      : ""
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {targetAudience && (
            <button
              onClick={() => onNext({ targetAudience })}
              className="business-model__next"
            >
              Continue to ROI Analysis
            </button>
          )}
        </div>
      }
    />
  );
};

export default BusinessModel;
