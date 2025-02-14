
import React, { useState, useEffect } from "react";
import "./ChatInterface.scss";

const ChatMessage = ({ message, type }) => {
  if (!message || !type) {
    console.warn("Invalid message props:", { message, type });
    return null;
  }

  return (
    <div className={`chat-message chat-message--${type}`}>
      <div className="chat-message__bubble">{message}</div>
    </div>
  );
};

const ChatInterface = ({
  messages = [],
  onComplete,
  currentSection = "",
  nextSection = "",
}) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Validate messages array
    if (!Array.isArray(messages)) {
      console.error("Messages is not an array:", messages);
      return;
    }

    // Validate message objects
    const invalidMessages = messages.filter(
      (msg) => !msg || !msg.content || !msg.type
    );
    if (invalidMessages.length > 0) {
      console.error("Invalid messages found:", invalidMessages);
      return;
    }

    let currentIndex = 0;
    let isActive = true;

    const showNextMessage = () => {
      if (!isActive) return;

      if (currentIndex < messages.length) {
        setIsTyping(true);

        setTimeout(() => {
          if (!isActive) return;

          const newMessage = messages[currentIndex];
          if (!newMessage || !newMessage.content || !newMessage.type) {
            console.error("Invalid message at index", currentIndex, newMessage);
            currentIndex++;
            showNextMessage();
            return;
          }

          setDisplayedMessages((prev) => [...prev, newMessage]);
          setIsTyping(false);
          currentIndex++;

          if (currentIndex < messages.length) {
            setTimeout(showNextMessage, 800);
          } else {
            setTimeout(() => {
              if (!isActive) return;
              onComplete?.();
            }, 1500);
          }
        }, 1500);
      }
    };

    showNextMessage();

    return () => {
      isActive = false;
    };
  }, [messages, onComplete]);

  // Early return if no valid messages
  if (!Array.isArray(messages) || messages.length === 0) {
    console.warn("No valid messages to display");
    return null;
  }

  return (
    <div className="chat-interface">
      <div className="chat-interface__header">
        <div className="chat-interface__title">AI Business Assistant</div>
      </div>

      <div className="chat-interface__messages">
        {displayedMessages.map((msg, index) => {
          if (!msg || !msg.content || !msg.type) {
            console.error("Invalid message in displayedMessages:", msg);
            return null;
          }

          return (
            <ChatMessage key={index} message={msg.content} type={msg.type} />
          );
        })}

        {isTyping && (
          <div className="chat-interface__typing">
            <span>AI is typing</span>
            <span className="chat-interface__typing-dots">...</span>
          </div>
        )}
      </div>
    </div>
  );
=======
import React, { useState } from "react";

const ChatInterface = () => {
    const [step, setStep] = useState(0);
    const [approach, setApproach] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [productType, setProductType] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [audience, setAudience] = useState("");
    const [budget, setBudget] = useState("");
    const [aiMarketing, setAiMarketing] = useState("");
    const [showTransition, setShowTransition] = useState(false);

    // Function to move to the next step
    const nextStep = (value) => {
        if (step === 0) {
            setApproach(value);
            if (value === "traditional") return; // Stop here for Traditional Business
            setStep(1); // Move to step 1 for AI
            return;
        }
        if (step === 1) {
            setBusinessType(value);
            setStep(2); // Move to step 2
            return;
        }
        if (step === 2) {
            if (businessType === "product") {
                setProductType(value);
            } else {
                setServiceType(value);
            }
            setStep(3); // Move to step 3
            return;
        }
        if (step === 3) {
            setAudience(value);
            setShowTransition(true); // Transition message
            setStep(4); // Move to step 4
            return;
        }
        if (step === 4) {
            setBudget(value);
            setStep(5); // Move to step 5
            return;
        }
        if (step === 5) {
            setAiMarketing(value);
            setStep(6); // Move to step 6
            return;
        }
        if (step === 6) {
            setStep(7); // Move to step 7 (summary)
        }
    };

    // Function to restart the process
    const restart = () => {
        setStep(0);
        setApproach("");
        setBusinessType("");
        setProductType("");
        setServiceType("");
        setAudience("");
        setBudget("");
        setAiMarketing("");
        setShowTransition(false);
    };

    return (
        <div className="container">
            {/* Step 0 - Select Business Approach */}
            {step === 0 && (
                <>
                    <h2>Select Business Approach</h2>
                    <button onClick={() => nextStep("traditional")}>Traditional</button>
                    <button onClick={() => nextStep("ai")}>AI</button>
                </>
            )}

            {/* Step 1 - Traditional Business Model */}
            {approach === "traditional"  && (
                <div className="traditional">
                    <h2>Traditional Business Model</h2>
                    <p>Time-Consuming and Costly</p>
                    <ul>
                        <li><strong>Market Research Analyst</strong>
                            <ul>
                                <li>Freelancer: $500 - $5,000</li>
                                <li>Marketing Agency: $5,000 - $15,000</li>
                                <li>Time: 20+ hours (1-4 weeks, part-time)</li>
                            </ul>
                        </li>
                        <li><strong>Financial Analyst, Business Consultant & CPA</strong>
                            <ul>
                                <li>Freelancer: $50 - $200/hour</li>
                                <li>CPA/Accountant: $100 - $5,000 (full financial forecast)</li>
                                <li>Time: ~20 hours (1-2 weeks)</li>
                            </ul>
                        </li>
                        <li><strong>Marketing Consultant or Digital Marketing Agency</strong>
                            <ul>
                                <li>Freelancer: $500 - $5,000</li>
                                <li>Agency: $5,000 - $20,000</li>
                                <li>Time: 20 hours (1-2 months, part-time)</li>
                            </ul>
                        </li>
                    </ul>
                    <button onClick={restart}>Restart</button>
                </div>
            )}

            {/* AI Business Model Steps */}
            {approach === "ai" && step > 0 && (
                <div className="ai">
                    <h2>AI-Powered Business Model</h2>
                    <p>Faster and Cost-Effective</p>
                    <div id="question-section">
                        {/* Step 1: Business Type Selection */}
                        {step === 1 && (
                            <>
                                <h3>Q1: What type of business are you creating?</h3>
                                <button onClick={() => nextStep("product")}>Product</button>
                                <button onClick={() => nextStep("service")}>Service</button>
                            </>
                        )}

                        {/* Step 2: Product or Service Type */}
                        {step === 2 && businessType === "product" && (
                            <>
                                <h3>Q2: What type of product are you selling?</h3>
                                <button onClick={() => nextStep("food")}>Food/Such as Tacos</button>
                                <button onClick={() => nextStep("gadgets")}>Gadgets</button>
                            </>
                        )}
                        {step === 2 && businessType === "service" && (
                            <>
                                <h3>Q2: What type of service are you providing?</h3>
                                <button onClick={() => nextStep("cleaning")}>Cleaning</button>
                                <button onClick={() => nextStep("consulting")}>Consulting/Such as Cat Sitting</button>
                            </>
                        )}

                        {/* Step 3: Audience Selection */}
                        {step === 3 && (
                            <>
                                <h3>Q3: Who is your target audience?</h3>
                                <button onClick={() => nextStep("families")}>Families</button>
                                <button onClick={() => nextStep("office professionals")}>Office Professionals</button>
                            </>
                        )}

                        {/* Transition message */}
                        {showTransition && (
                            <div className="transition-message">
                                Thank you for your input, we are now ready to calculate your return on investment.
                            </div>
                        )}

                        {/* Step 4: Budget Selection */}
                        {step === 4 && (
                            <>
                                <h3>Q4: What is your estimated budget?</h3>
                                <button onClick={() => nextStep("higher")}>Higher Budget</button>
                                <button onClick={() => nextStep("lower")}>Lower Budget</button>
                            </>
                        )}

                        {/* Step 5: AI Marketing Assets */}
                        {step === 5 && (
                            <>
                                <h3>Q5: Would you like AI-generated marketing assets?</h3>
                                <button onClick={() => nextStep("yes")}>Yes</button>
                                <button onClick={() => nextStep("no")}>No</button>
                            </>
                        )}

                        {/* Step 6: Summary */}
                        {step === 6 && (
                            <div className="summary">
                                <h3>Business Summary</h3>
                                <p><strong>Approach:</strong> {approach.toUpperCase()}</p>
                                <p><strong>Business Type:</strong> {businessType}</p>
                                {productType && <p><strong>Product Type:</strong> {productType}</p>}
                                {serviceType && <p><strong>Service Type:</strong> {serviceType}</p>}
                                <p><strong>Target Audience:</strong> {audience}</p>
                                <p><strong>Budget:</strong> {budget}</p>
                                <p><strong>AI Marketing Assets:</strong> {aiMarketing}</p>
                                <button onClick={restart}>Restart</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatInterface;
