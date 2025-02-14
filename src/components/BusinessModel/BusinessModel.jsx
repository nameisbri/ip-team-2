import React, { useState } from "react";
import ComparisonLayout from "../ComparisonLayout/ComparisonLayout";
import "./BusinessModel.scss";

const BusinessModel = ({ onNext }) => {
  const [businessType, setBusinessType] = useState(null);
  const [specificBusiness, setSpecificBusiness] = useState(null);

  const businessTypes = [
    { id: "product", label: "Product-based Business" },
    { id: "service", label: "Service-based Business" },
  ];

  const specificBusinesses = {
    product: [
      { id: "tacos", label: "Taco Business" },
      { id: "retail", label: "Retail Store" },
    ],
    service: [
      { id: "catSitting", label: "Cat Sitting" },
      { id: "consulting", label: "Consulting" },
    ],
  };

  return (
    <ComparisonLayout
      title="Basic Business Model"
      traditional={
        <div className="business-model__traditional">
          <p>Fixed costs and timeframes</p>
          <ul className="business-model__list">
            <li>Standard setup time: 3-6 months</li>
            <li>Initial investment: $10,000-$50,000</li>
          </ul>
        </div>
      }
      aiDriven={
        <div className="business-model__ai-driven">
          <div className="business-model__selection">
            <h4 className="business-model__selection-title">
              Select Business Type
            </h4>
            <div className="business-model__buttons">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setBusinessType(type.id)}
                  className={`business-model__button ${
                    businessType === type.id
                      ? "business-model__button--active"
                      : ""
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {businessType && (
              <>
                <h4 className="business-model__selection-title">
                  Select Specific Business
                </h4>
                <div className="business-model__buttons">
                  {specificBusinesses[businessType].map((business) => (
                    <button
                      key={business.id}
                      onClick={() => setSpecificBusiness(business.id)}
                      className={`business-model__button ${
                        specificBusiness === business.id
                          ? "business-model__button--active"
                          : ""
                      }`}
                    >
                      {business.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {businessType && specificBusiness && (
            <button onClick={onNext} className="business-model__next">
              Continue to ROI Analysis
            </button>
          )}
        </div>
      }
    />
  );
};

export default BusinessModel;
