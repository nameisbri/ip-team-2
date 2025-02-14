export const TACO_BUSINESS_SCENARIOS = {
  "office-workers": {
    name: "Office Workers",
    budgetOptions: {
      high: {
        setup: {
          range: "$25,000 - $35,000",
          description: "Premium Setup with comprehensive AI integration",
          breakEven: "8-12 months",
        },
        daily: {
          sales: "100+ meals/day",
          revenue: "$1,000/day",
          costs: "$250 - $300/day",
        },
        branding: {
          name: "Taco Tempo",
          slogan: "Fueling Office Days, One Taco at a Time!",
          pricing: "$8 - $12 per meal",
          marketing: {
            headline: "Busy Workday? We've Got Your Lunch Covered!",
            description:
              "Say goodbye to boring lunches and hello to fresh, delicious tacos made with premium ingredients – delivered straight to your office or ready for pick-up in minutes!",
            features: [
              "Fresh & Fast: Handcrafted tacos with fresh ingredients, ready in no time",
              "Office-Friendly: Perfect for quick breaks or team lunches",
              "Customizable Options: Vegan, gluten-free, and protein-packed choices",
            ],
          },
        },
      },
      low: {
        setup: {
          range: "$12,000 - $15,000",
          description: "Basic Setup with essential tools",
          breakEven: "4-6 months",
        },
        daily: {
          sales: "80+ meals/day",
          revenue: "$800/day",
          costs: "$150 - $200/day",
        },
        branding: {
          name: "Taco Sprint",
          slogan: "Fast. Fresh. Affordable.",
          pricing: "$8 - $12 per meal",
          marketing: {
            headline: "Craving a Delicious, Affordable Lunch? Look No Further!",
            description:
              "Your go-to spot for quick, tasty, and budget-friendly tacos made fresh every day! Whether you're grinding through deadlines or need a delicious mid-day pick-me-up, we've got you covered.",
            features: [
              "$8 Tacos – Big flavor without breaking the bank",
              "Speedy Service – In and out in minutes",
              "Fresh Ingredients – Quality you can taste in every bite",
            ],
          },
        },
      },
    },
  },
  "families": {
    name: "Families",
    budgetOptions: {
      high: {
        setup: {
          range: "$25,000 - $35,000",
          description: "Premium Family-Oriented Setup",
          breakEven: "9-12 months",
        },
        daily: {
          sales: "100+ meals/day",
          revenue: "$800/day",
          costs: "$200 - $250/day",
        },
        branding: {
          name: "Taco Haven",
          slogan: "Where Every Meal Feels Like Home!",
          pricing: "$6 - $10 per meal",
          marketing: {
            headline:
              "Welcome to Taco Haven – Tacos the Whole Family Will Love!",
            description:
              "Looking for a delicious, affordable meal the entire family can enjoy? At Taco Haven, we craft mouthwatering tacos using fresh, high-quality ingredients, all at family-friendly prices.",
            features: [
              "Affordable Meals: Tacos starting at just $6",
              "Fresh & Flavorful: Premium ingredients, bold flavors",
              "Family Meal Deal: Get 10% off when you order 3+ meals!",
            ],
          },
        },
      },
      low: {
        setup: {
          range: "$12,000 - $15,000",
          description: "Basic Family-Friendly Setup",
          breakEven: "5-7 months",
        },
        daily: {
          sales: "80+ meals/day",
          revenue: "$640/day",
          costs: "$150 - $250/day",
        },
        branding: {
          name: "Taco Nest",
          slogan: "Bringing Families Together, One Taco at a Time!",
          pricing: "$6 - $10 per meal",
          marketing: {
            headline: "Delicious Tacos. Family-Friendly Prices.",
            description:
              "Family-friendly tacos made with love and served with a smile.",
            features: [
              "Affordable Meals: Tacos starting at $6",
              "Fresh Ingredients: Made with love, served with a smile",
              "Family Special: Order 4 meals & get a FREE side of chips & salsa!",
            ],
            menuItems: [
              "Classic Beef Fiesta: Savory beef with melty cheese and salsa",
              "Veggie Delight: Grilled veggies, avocado crema, and fresh cilantro",
              "Chicken Chipotle Crunch: Tender chicken with smoky chipotle sauce",
            ],
          },
        },
      },
    },
  },
};

export const TRADITIONAL_SERVICES = [
  {
    service: "Market Research Analyst",
    providers: [
      { type: "Freelancer", cost: "$500-$5,000 for full research" },
      { type: "Marketing Agency", cost: "$5,000-$15,000" },
    ],
    timeConsumed: "20 hours (1-2 weeks part-time)",
  },
  {
    service: "Financial Analyst & Business Consultant",
    providers: [
      { type: "Freelancer", cost: "$50-$200/hour" },
      {
        type: "CPA/Accountant",
        cost: "$1,000-$5,000 (for a full financial forecast)",
      },
    ],
    timeConsumed: "5 - 20 hours (1-2 weeks)",
  },
  {
    service: "Marketing & Brand Development",
    providers: [
      { type: "Freelancer", cost: "$500-$5,000" },
      { type: "Design Agency", cost: "$5,000-$20,000" },
    ],
    timeConsumed: "20 hours (1-2 months, part-time work)",
  },
];

export const calculateTotalTraditionalCosts = () => {
  return {
    setupCosts: "$15,000 - $30,000",
    monthlyCosts: "$2,000 - $5,000",
    timeframe: "2-4 months",
  };
};

export const getScenarioData = (audience, budget) => {
  return TACO_BUSINESS_SCENARIOS[audience]?.budgetOptions[budget] || null;
};

export const calculateAISavings = (scenarioData) => {
  if (!scenarioData) return null;

  const traditional = calculateTotalTraditionalCosts();
  const ai = scenarioData.setup;

  return {
    timeSavings: "75%",
    costSavings: scenarioData.setup.breakEven === "4-6 months" ? "60%" : "25%",
    timeToMarket: ai.breakEven,
  };
};
