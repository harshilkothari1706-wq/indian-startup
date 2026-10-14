export interface MarketingCaseStudy {
  id: string;
  title: string;
  startup: string;
  startupSlug: string;
  category: string;
  targetAudience: string;
  coreMarketingConcept: string;
  heroHeadline: string;
  summary: string;
  framework: {
    name: string;
    stages: {
      step: string;
      stepNumber?: number;
      description: string;
    }[];
  };
  keyTactics: {
    title: string;
    tactic: string;
    metricOrOutcome: string;
  }[];
  studentTakeaway: string;
  academicTags: string[];
}

export const MARKETING_STORIES: MarketingCaseStudy[] = [
  {
    id: 'zomato-social-voice',
    title: 'How Zomato Built a Distinctive Social Media Voice',
    startup: 'Zomato',
    startupSlug: 'zomato',
    category: 'FoodTech',
    targetAudience: 'Urban Gen Z & Millennials, Young Working Professionals',
    coreMarketingConcept: 'Memetic Brand Persona & Contextual Hyper-Local Copywriting',
    heroHeadline: 'Why Talking Like a Hungry Best Friend Outsold Corporate Jingles',
    summary: 'Zomato ditched standard discount banner marketing to create a self-deprecating, culturally attuned brand persona that turns everyday craving triggers into organic virality and zero-cost earned media.',
    framework: {
      name: 'The Contextual Craving Flywheel',
      stages: [
        {
          step: '1. Cultural Trigger',
          stepNumber: 1,
          description: 'Identify real-time micro-events (monsoon rain, cricket wickets, Friday 6 PM tiredness, 2 AM study breaks).',
        },
        {
          step: '2. Empathy-First Copy',
          stepNumber: 2,
          description: 'Craft one-line push notifications or tweets using witty Hinglish that mirror the user\'s internal dialogue.',
        },
        {
          step: '3. Organic Social Amplification',
          stepNumber: 3,
          description: 'Users screenshot the notification and post it to Instagram/Twitter, generating millions in organic impressions.',
        },
        {
          step: '4. Immediate App Checkout',
          stepNumber: 4,
          description: 'A direct deep-link lands the user into the relevant food category with zero friction.',
        },
      ],
    },
    keyTactics: [
      {
        title: 'Contextual Push Notifications',
        tactic: 'Sending rain-specific messages like "Garam chai aur pakode? Weather is doing its part, you do yours."',
        metricOrOutcome: 'Up to 3x higher push notification open rates compared to generic "Get 20% Off" alerts.',
      },
      {
        title: 'Minimalist Outdoor Billboards',
        tactic: 'High-contrast red billboards with stark typography: "Kheer banau ya halwa?" vs "Swiggy vs Zomato banter".',
        metricOrOutcome: 'Dominated LinkedIn and Twitter feeds with user-generated brand discussions.',
      },
      {
        title: 'Radical Self-Awareness',
        tactic: 'Poking fun at common food habits (ordering biryani instead of diet salad) rather than lecturing customers.',
        metricOrOutcome: 'Built deep psychological affinity and daily active recall without paid celebrity brand ambassadors.',
      },
    ],
    studentTakeaway: 'For digital marketers: Tone of voice is an operational moat. In high-frequency consumer apps, being funny, culturally timely, and human lowers customer acquisition costs by turning notifications into conversational art.',
    academicTags: ['Brand Persona', 'Push Notification Strategy', 'Memetic Marketing', 'Earned Media', 'CAC Optimization'],
  },
  {
    id: 'boat-youth-culture',
    title: 'How boAt Used Youth Culture to Build a Brand',
    startup: 'boAt',
    startupSlug: 'boat',
    category: 'Consumer Tech',
    targetAudience: 'College Students, Gamers, Young Fitness Enthusiasts',
    coreMarketingConcept: 'Tribal Identity Marketing & The Lifestyle Sweet Spot',
    heroHeadline: 'Selling the "boAthead" Swagger in a Sea of Boring Spec Sheets',
    summary: 'While Sony and Sennheiser marketed ohms, frequency curves, and noise decibels, boAt realized young Indians wanted headphones that looked like streetwear and sounded like a live Punjabi or Bollywood club.',
    framework: {
      name: 'The Tribal Consumer Tech Triangle',
      stages: [
        {
          step: '1. Cultural Anchor',
          stepNumber: 1,
          description: 'Anchor product in youth passions: Cricket (IPL partnerships), Street Fashion, and Bass-Heavy Music.',
        },
        {
          step: '2. Impulse Price Anchor',
          stepNumber: 2,
          description: 'Price at ₹999-₹1,999—an accessible impulse purchase funded by pocket money or first internship stipends.',
        },
        {
          step: '3. Community Badge',
          stepNumber: 3,
          description: 'Label buyers "boAtheads", giving them a tangible belonging identity among peer groups on campus.',
        },
      ],
    },
    keyTactics: [
      {
        title: 'Influencer Tribe (boAtheads)',
        tactic: 'Signed energetic young cricketers (Hardik Pandya, Shreyas Iyer) and music sensations (Diljit Dosanjh, Neha Kakkar).',
        metricOrOutcome: 'Became the #1 lifestyle audio choice across Indian college campuses.',
      },
      {
        title: 'Bass-Tuned Sound Profiling',
        tactic: 'Tuned acoustics specifically for upbeat Indian percussion and vocals rather than flat studio monitor neutrality.',
        metricOrOutcome: 'Achieved over 40% volume market share in true wireless stereo (TWS) headphones.',
      },
      {
        title: 'Aggressive Marketplace SEO',
        tactic: 'Optimized Amazon and Flipkart review generation, lightning deals, and prime placement for instant conversion.',
        metricOrOutcome: 'Over 80% early revenue generated with low overhead on existing digital marketplace search channels.',
      },
    ],
    studentTakeaway: 'For marketing students: People rarely buy hardware for the silicon chips inside. In consumer goods, framing a commodity product as a visible badge of belonging unlocks immense pricing power and mass-market loyalty.',
    academicTags: ['Community Branding', 'D2C Strategy', 'Cultural Positioning', 'E-commerce SEO', 'Psychographic Segmentation'],
  },
  {
    id: 'nykaa-content-to-commerce',
    title: 'How Nykaa Turned Content Into Commerce',
    startup: 'Nykaa',
    startupSlug: 'nykaa',
    category: 'E-commerce',
    targetAudience: 'Indian Women & Men Navigating Skincare, Cosmetics & Wellness',
    coreMarketingConcept: 'Content-Driven Intent Generation & High-Trust Advisory',
    heroHeadline: 'How Video Tutorials and Shade Finders Transformed Cold Visitors into Devoted Buyers',
    summary: 'Cosmetics cannot be sold through sterile catalog grids alone. Nykaa built an educational media empire of tutorials, beauty masterclasses, and shade finders that gently guided uncertain shoppers from curiosity to cart.',
    framework: {
      name: 'The Beauty Conversion Funnel',
      stages: [
        {
          step: '1. Problem Awareness',
          stepNumber: 1,
          description: 'Shopper searches: "Best sunscreen for oily Indian skin" or "How to do winged eyeliner".',
        },
        {
          step: '2. Educational Content',
          stepNumber: 2,
          description: 'Nykaa TV or Beauty Book article explains the active ingredients and demonstrates application.',
        },
        {
          step: '3. Personalized Match',
          stepNumber: 3,
          description: 'Virtual shade finder and dermatologist reviews eliminate fear of purchasing wrong shade.',
        },
        {
          step: '4. High-Trust Transaction',
          stepNumber: 4,
          description: 'Guaranteed 100% authentic inventory shipped directly from temperature-controlled warehouses.',
        },
      ],
    },
    keyTactics: [
      {
        title: 'Nykaa Beauty Book & Nykaa TV',
        tactic: 'Created thousands of articles and videos featuring certified dermatologists and makeup artists.',
        metricOrOutcome: 'Organic search traffic exceeded tens of millions of monthly impressions at zero advertising cost.',
      },
      {
        title: 'Kay Beauty Co-Creation',
        tactic: 'Partnered with Katrina Kaif to co-create a cruelty-free, high-performance makeup line tailored to Indian skin tones.',
        metricOrOutcome: 'Rapidly became one of the highest gross margin, best-selling premium cosmetic brands on the platform.',
      },
      {
        title: 'Omnichannel Store Touchpoints',
        tactic: 'Allowed customers to sample perfumes and test makeup shades in person at Luxe stores, then reorder online.',
        metricOrOutcome: 'Omnichannel shoppers spend up to 2.5x more annually than pure online-only shoppers.',
      },
    ],
    studentTakeaway: 'For business students: In categories where fear of making the wrong choice is high (skincare, beauty, medicine), education is the ultimate sales engine. If you help customers solve their problem first, commerce follows naturally.',
    academicTags: ['Content-to-Commerce', 'Inbound Marketing', 'Customer Lifetime Value (LTV)', 'Influencer Marketing', 'Omnichannel Retailing'],
  },
  {
    id: 'cred-entertaining-finance',
    title: 'How CRED Made Financial Services Entertaining',
    startup: 'CRED',
    startupSlug: 'cred',
    category: 'FinTech',
    targetAudience: 'Affluent Credit Card Holders (Credit Score 750+), HNWIs, Tech Professionals',
    coreMarketingConcept: 'Subversive Advertising, Exclusivity Moats & Gamified Dopamine Loops',
    heroHeadline: 'Turning Mundane Bill Payments into an Aspirational Cultural Spectacle',
    summary: 'FinTech ads were historically boring, formal, and risk-obsessed. CRED upended the entire advertising playbook by hiring legendary celebrities to mock their own public personas, turning an IPL commercial break into appointment television.',
    framework: {
      name: 'The Exclusivity & Curiosity Loop',
      stages: [
        {
          step: '1. Gated Entry Moat',
          stepNumber: 1,
          description: 'Strict 750+ credit score cutoff creates psychological exclusivity and aspirational desire.',
        },
        {
          step: '2. High-Friction Entertainment',
          stepNumber: 2,
          description: 'Bizarre, hilarious commercials that spark immediate curiosity: "What does this company even do?"',
        },
        {
          step: '3. Gamified Reward Delight',
          stepNumber: 3,
          description: 'Paying a bill triggers tactile haptic spins, CRED coins, and chances to win luxury cars or vacations.',
        },
        {
          step: '4. High-Trust Monetization',
          stepNumber: 4,
          description: 'Cross-sell high-ticket lending (CRED Cash) and vehicle concierge (CRED Garage) to the pre-vetted cohort.',
        },
      ],
    },
    keyTactics: [
      {
        title: 'Subversive Celebrity Reversals',
        tactic: 'Turned gentleman cricketer Rahul Dravid into an angry road-raging goon smashing rear-view mirrors ("Indiranagar ka gunda hoon main!").',
        metricOrOutcome: 'Over 100 million organic views across social platforms with zero paid ad boosts on video clips.',
      },
      {
        title: 'Dark Mode Neomorphism',
        tactic: 'Crafted a sleek, bespoke user interface with tactile audio haptics and fluid physics gestures.',
        metricOrOutcome: 'Achieved average daily session times higher than traditional banking apps by an order of magnitude.',
      },
      {
        title: 'Targeted High-Affluence Curation',
        tactic: 'Curated direct brand drops from premium partners (Apple, Dyson, Blue Tokai, Sleepy Owl) inside the rewards store.',
        metricOrOutcome: 'Attracted India\'s highest average revenue per user (ARPU) cohort in consumer FinTech.',
      },
    ],
    studentTakeaway: 'For marketing strategists: In crowded commoditized markets, your marketing doesn\'t just have to be persuasive—it has to be culturally arresting. Don\'t explain the mechanics; create an aura of exclusivity that compels the customer to investigate.',
    academicTags: ['Subversive Advertising', 'Affluent Segment Targeting', 'Gamification Mechanics', 'Brand Recall', 'Psychological Scarcity'],
  },
  {
    id: 'zerodha-education-moat',
    title: 'How Zerodha Used Education as a Marketing Asset',
    startup: 'Zerodha',
    startupSlug: 'zerodha',
    category: 'FinTech',
    targetAudience: 'First-time Retail Investors, College Students, Professionals Curious About Capital Markets',
    coreMarketingConcept: 'Zero-CAC Inbound Marketing via Radical Public Utility',
    heroHeadline: 'How Zerodha Varsity Built an Inbound Moat That Venture Capital Could Not Buy',
    summary: 'While venture-backed competitors spent hundreds of crores on IPL cricket sponsorships and celebrity ads, Zerodha poured its energy into building Varsity: a free, comprehensive, university-grade financial education curriculum.',
    framework: {
      name: 'The Inbound Trust Architecture',
      stages: [
        {
          step: '1. Curiosity & Unbiased Knowledge',
          stepNumber: 1,
          description: 'A novice types: "How do call and put options work in India?" into Google.',
        },
        {
          step: '2. High-Utility Academic Masterclass',
          stepNumber: 2,
          description: 'Varsity delivers a clean, illustrated, ad-free module without any aggressive popups or sales forms.',
        },
        {
          step: '3. Institutional Reverence',
          stepNumber: 3,
          description: 'The reader perceives Zerodha not as an aggressive broker trying to take their money, but as an honest teacher protecting them from risk.',
        },
        {
          step: '4. Inevitable Platform Adoption',
          stepNumber: 4,
          description: 'When the student decides to place their first real trade, choosing any platform other than Zerodha feels unthinkable.',
        },
      ],
    },
    keyTactics: [
      {
        title: 'Ad-Free, Open-Access Modules',
        tactic: 'Made all 14 comprehensive Varsity modules completely free, openly accessible without requiring an email login or Zerodha trading account.',
        metricOrOutcome: 'Over 10 million active learners and an unbeatable organic Google Search SEO dominance on financial queries.',
      },
      {
        title: 'Founder Transparency & Cautionary Voice',
        tactic: 'CEO Nithin Kamath actively publishes warnings against speculative F&O trading and highlights the statistical reality of retail losses.',
        metricOrOutcome: 'Built generational credibility with regulators (SEBI) and high-value long-term equity investors.',
      },
      {
        title: 'Zero Advertising Spend Policy',
        tactic: 'Refused to spend marketing capital on celebrity endorsements, Google Ads, or cricket sponsorships.',
        metricOrOutcome: 'Maintained PAT profit margins over 55%, redirecting capital into technology reliability and low customer fees.',
      },
    ],
    studentTakeaway: 'For entrepreneurs and digital strategists: Generosity is the ultimate marketing strategy. When you give away the best educational content for free without gating it, you create a reservoir of brand goodwill that paid advertising can never destroy.',
    academicTags: ['Inbound SEO', 'Zero-CAC Strategy', 'Educational Moat', 'Radical Transparency', 'Customer Retention'],
  },
];
