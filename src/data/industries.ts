export interface Industry {
  id: string;
  name: string;
  emoji: string;
  startups: string[];
  keyStorySlugs: string[];
  marketSizeEstimate: string;
  growthDrivers: string[];
  description: string;
  primaryChallenge: string;
  bannerGradient: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'fintech',
    name: 'FinTech',
    emoji: '💰',
    startups: ['Zerodha', 'Razorpay', 'CRED', 'PhonePe', 'Groww'],
    keyStorySlugs: ['zerodha', 'razorpay', 'cred'],
    marketSizeEstimate: '$150 Billion+ Projected Ecosystem by 2026',
    growthDrivers: ['UPI transaction scale (14B+ monthly payments)', 'Financial inclusion & smartphone penetration', 'SEBI & RBI digital regulatory frameworks'],
    description: 'Transforming how India invests, makes digital payments, accesses credit, and manages personal and enterprise balance sheets.',
    primaryChallenge: 'Navigating evolving central bank regulations and zero-MDR fee pressures on standard retail transactions.',
    bannerGradient: 'from-[#0B1F3A] to-[#1E3A8A]',
  },
  {
    id: 'foodtech',
    name: 'FoodTech',
    emoji: '🍔',
    startups: ['Zomato', 'Swiggy', 'Blinkit', 'Zepto'],
    keyStorySlugs: ['zomato', 'swiggy'],
    marketSizeEstimate: '$12 Billion+ Online Food Delivery & Quick-Commerce',
    growthDrivers: ['Rapid urbanization and nuclear households', 'Under-15 minute grocery fulfillment networks', 'High dining-out and food discovery propensity'],
    description: 'Hyperlocal digital infrastructure connecting millions of diners to kitchens and neighborhood dark stores with sub-30 minute delivery.',
    primaryChallenge: 'Balancing rider social security with platform delivery fee economics and peak-hour kitchen bottlenecks.',
    bannerGradient: 'from-[#E23744] to-[#991B1B]',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    emoji: '🛒',
    startups: ['Meesho', 'Nykaa', 'Flipkart', 'Myntra'],
    keyStorySlugs: ['meesho', 'nykaa'],
    marketSizeEstimate: '$130 Billion+ Retail Gross Merchandise Value',
    growthDrivers: ['Demographic shift to Tier 2 and Tier 3 digital buyers', 'Direct-to-consumer (D2C) brand proliferation', 'Vernacular UI and Cash-on-Delivery logistics'],
    description: 'Bridging retail divides between modern shopping malls and India\'s deep interior towns through social selling and vertical platforms.',
    primaryChallenge: 'High Return-to-Origin (RTO) expenses and heavy price wars across commoditized unbranded categories.',
    bannerGradient: 'from-[#7E22CE] to-[#581C87]',
  },
  {
    id: 'edtech',
    name: 'EdTech',
    emoji: '🎓',
    startups: ['Physics Wallah', 'Unacademy', 'Eruditus', 'Adda247'],
    keyStorySlugs: ['physics-wallah'],
    marketSizeEstimate: '$10 Billion+ Test-Prep and Upskilling Market',
    growthDrivers: ['Aspirational parents seeking high-yield competitive exam coaching', 'Affordable smartphone data', 'Hybrid online-plus-offline classroom models'],
    description: 'Democratizing quality teaching and competitive exam coaching across tier 2, 3, and rural Indian districts.',
    primaryChallenge: 'Rebuilding credibility after high-burn sales blitzes, shifting to disciplined offline-hybrid unit economics.',
    bannerGradient: 'from-[#1E40AF] to-[#172554]',
  },
  {
    id: 'consumer-tech',
    name: 'Consumer Tech',
    emoji: '🎧',
    startups: ['boAt', 'Noise', 'Fire-Boltt', 'Boult Audio'],
    keyStorySlugs: ['boat'],
    marketSizeEstimate: '$5 Billion+ Personal Audio & Smart Wearables',
    growthDrivers: ['Youth demographic desiring lifestyle statement electronics', 'Government electronics manufacturing PLI incentives', 'Rapid smartphone audio replacement cycles'],
    description: 'Designing affordable, lifestyle-driven personal audio, wearables, and smart accessories tailored to Indian tastes.',
    primaryChallenge: 'Deepening domestic component fabrication and R&D to avoid commoditization from foreign white-label supply chains.',
    bannerGradient: 'from-[#DC2626] to-[#7F1D1D]',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    emoji: '🏨',
    startups: ['OYO', 'MakeMyTrip', 'Treebo', 'FabHotels'],
    keyStorySlugs: ['oyo'],
    marketSizeEstimate: '$32 Billion+ Travel & Budget Stays Sector',
    growthDrivers: ['Booming domestic leisure and religious pilgrimage tourism', 'Business travel across emerging industrial towns', 'Digital booking comfort'],
    description: 'Organizing unbranded budget hotels, homestays, and holiday rentals into standardized, tech-enabled hospitality networks.',
    primaryChallenge: 'Maintaining strict hygiene and customer satisfaction consistency across independent third-party property owners.',
    bannerGradient: 'from-[#B91C1C] to-[#7F1D1D]',
  },
  {
    id: 'healthtech',
    name: 'HealthTech',
    emoji: '🏥',
    startups: ['PharmEasy', 'Practo', 'Tata 1mg', 'MediBuddy'],
    keyStorySlugs: [],
    marketSizeEstimate: '$21 Billion+ Digital Health and Telemedicine',
    growthDrivers: ['Ayushman Bharat Digital Mission (ABDM) integration', 'Preventative diagnostic screenings', 'Doorstep medicine convenience'],
    description: 'Connecting patients with verified doctors, automated e-pharmacy deliveries, and transparent pathology laboratory services.',
    primaryChallenge: 'Stringent medicine pricing caps, cold-chain regulatory compliance, and high burn on prescription fulfillment.',
    bannerGradient: 'from-[#059669] to-[#047857]',
  },
  {
    id: 'saas',
    name: 'SaaS',
    emoji: '💻',
    startups: ['Freshworks', 'Zoho', 'Postman', 'Icertis', 'BrowserStack'],
    keyStorySlugs: [],
    marketSizeEstimate: '$35 Billion+ Indian SaaS Annual Recurring Revenue by 2026',
    growthDrivers: ['World-class Indian product engineering talent', 'Capital-efficient cloud development', 'Global enterprise software market adoption'],
    description: 'Building world-class cloud software from Chennai, Bengaluru, and Pune that powers global Fortune 500 enterprises.',
    primaryChallenge: 'Moving upmarket to enterprise annual contracts against legacy American tech titans while maintaining cost advantages.',
    bannerGradient: 'from-[#0284C7] to-[#0369A1]',
  },
];
