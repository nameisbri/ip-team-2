const CHAT_SEQUENCES = {
  "intro-to-business": [
    {
      type: "ai",
      content:
        "Hi! I'm your AI Business Assistant. I'll help you explore how AI can transform your business strategy.",
    },
    {
      type: "ai",
      content:
        "First, let's understand your business model and target audience.",
    },
  ],
  "business-to-roi": [
    {
      type: "ai",
      content:
        "Great choice! Now let's analyze the potential return on investment.",
    },
    {
      type: "ai",
      content:
        "I'll help you compare traditional costs with AI-powered solutions.",
    },
  ],
  "roi-to-marketing": [
    {
      type: "ai",
      content: "Excellent! Those cost savings look promising.",
    },
    {
      type: "ai",
      content:
        "Let's explore how AI can enhance your marketing and customer acquisition strategy.",
    },
  ],
  "marketing-to-final": [
    {
      type: "ai",
      content:
        "Perfect! I've gathered all the information about your business strategy.",
    },
    {
      type: "ai",
      content:
        "Let me prepare a comprehensive comparison of traditional vs AI-powered approaches.",
    },
  ],
};

Object.entries(CHAT_SEQUENCES).forEach(([key, messages]) => {
  if (!Array.isArray(messages)) {
    console.error(`Invalid chat sequence for key ${key}:`, messages);
  }

  messages.forEach((msg, index) => {
    if (!msg || !msg.type || !msg.content) {
      console.error(
        `Invalid message in sequence ${key} at index ${index}:`,
        msg
      );
    }
  });
});

export default CHAT_SEQUENCES;
