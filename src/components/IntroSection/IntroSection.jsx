import React from "react";
import "./IntroSection.scss";

const IntroSection = ({ onStart }) => (
  <section className="intro-section">
    <div className="intro-section__content">
      <h2 className="intro-section__heading">Welcome</h2>
      <p className="intro-section__description">
        Save time. Cut Costs. Grow Faster.
      </p>
      <button onClick={onStart} className="intro-section__start-button">
        Get Started Today
      </button>
    </div>
  </section>
);

export default IntroSection;
