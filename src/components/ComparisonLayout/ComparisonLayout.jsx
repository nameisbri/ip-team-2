import React from "react";
import "./ComparisonLayout.scss";

const ComparisonLayout = ({ title, traditional, aiDriven, children }) => (
  <div className="comparison-layout">
    <h2 className="comparison-layout__title">{title}</h2>
    <div className="comparison-layout__container">
      <div className="comparison-layout__traditional">
        <h3 className="comparison-layout__subtitle">Traditional Approach</h3>
        {traditional}
      </div>
      <div className="comparison-layout__ai-driven">
        <h3 className="comparison-layout__subtitle">AI-Driven Solution</h3>
        {aiDriven}
      </div>
    </div>
    {children}
  </div>
);

export default ComparisonLayout;
