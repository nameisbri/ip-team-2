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
};

export default ChatInterface;
