export interface FailureCaseStudy {
  id: string;
  startup: string;
  industry: string;
  founded: number;
  shutDownOrPivotedYear: number;
  totalFundingRaisedEstimate: string;
  coreThesis: string;
  whatHappened: string[];
  rootCauses: {
    title: string;
    description: string;
  }[];
  criticalMistakeCategory: 'Unit Economics' | 'Scaling Too Fast' | 'Governance & Auditing' | 'Regulatory & Capital Intensity' | 'Product-Market Fit';
  lessonsForStudents: {
    rule: string;
    explanation: string;
  }[];
  editorialToneNote: string;
}

export const FAILURE_STORIES: FailureCaseStudy[] = [
  {
    id: 'doodhwala',
    startup: 'Doodhwala',
    industry: 'Hyperlocal Dairy & Grocery',
    founded: 2015,
    shutDownOrPivotedYear: 2019,
    totalFundingRaisedEstimate: '~$14 Million',
    coreThesis: 'Daily early-morning doorstep milk delivery as an anchor habit to cross-sell bread, eggs, and groceries before 7 AM.',
    whatHappened: [
      'Doodhwala achieved strong initial customer retention in Bengaluru and Pune because fresh milk is an essential daily Indian ritual.',
      'However, fresh milk is a heavily price-regulated, perishable commodity with paper-thin gross margins of 5% to 8%.',
      'The company had to subsidize last-mile logistics (paying delivery riders ₹20-₹30 per drop) while earning only ₹3-₹5 margin on a 500ml pouch of milk.',
      'When additional venture funding rounds fell through during the 2019 liquidity crunch, cash reserves depleted rapidly and the company was forced to halt operations.',
    ],
    rootCauses: [
      {
        title: 'Negative Contribution Margin per Order',
        description: 'Milk delivery margins could never cover the real cost of early-morning refrigerated logistics and rider payouts.',
      },
      {
        title: 'Failure of Grocery Cross-Selling',
        description: 'Customers happily used the app for cheap milk but continued buying their high-margin vegetables and packaged foods from neighborhood kirana stores.',
      },
      {
        title: 'Perishability and Leakage Waste',
        description: 'Unsold milk expired within 24 hours, leading to severe spoilage inventory write-offs.',
      },
    ],
    criticalMistakeCategory: 'Unit Economics',
    lessonsForStudents: [
      {
        rule: 'High frequency does not equal high profitability',
        explanation: 'Just because a customer opens your app every morning does not mean you have a viable business if every transaction loses ₹15.',
      },
      {
        rule: 'Beware of low-margin anchor hooks',
        explanation: 'Hoping that a loss-making hook will magically convert into high-margin grocery basket shopping rarely succeeds without extreme capital moats.',
      },
      {
        rule: 'Cold-chain logistics is brutally unforgiving',
        explanation: 'Perishable products require refrigerated supply lines that multiply fixed operational expenses.',
      },
    ],
    editorialToneNote: 'Doodhwala pioneered early-morning doorstep subscription tech that later inspired successful iterations in BB Daily and Country Delight, which adjusted margins and vertically integrated farms.',
  },
  {
    id: 'stayzilla',
    startup: 'Stayzilla',
    industry: 'Hospitality & Homestays',
    founded: 2005,
    shutDownOrPivotedYear: 2017,
    totalFundingRaisedEstimate: '~$34 Million',
    coreThesis: 'Organizing homestays and alternate accommodations across non-metro Indian tourist destinations.',
    whatHappened: [
      'Founded by Yogendra Vasupal, Rupal Yogendra, and Sachit Singhi, Stayzilla operated for years as Inasra before pivoting to "Stayzilla" to capitalize on India\'s travel boom.',
      'As well-funded aggregators (MakeMyTrip, Goibibo, OYO) entered the budget market, Stayzilla engaged in heavy consumer discounts and expensive television advertising campaigns.',
      'The company scaled its headcount and marketing footprint across hundreds of tier 2 and tier 3 towns where property supply was scattered and transaction frequency was low.',
      'By early 2017, monthly cash burn outstripped operational cash flows, and with capital drying up, the founders had to shut down the marketplace in a painful, public lesson in startup cash management.',
    ],
    rootCauses: [
      {
        title: 'Premature Blitzscaling into Low-Density Markets',
        description: 'Expanding to 1,000+ towns without dominating any single region created massive operational overhead without local network density.',
      },
      {
        title: 'Discount Wars Against Deep-Pocketed Rivals',
        description: 'Subsidizing hotel rooms to compete with Naspers-backed MakeMyTrip drained capital reserves prematurely.',
      },
      {
        title: 'Vendor and Credit Risk Exposure',
        description: 'Loose offline vendor billing cycles led to crippling disputes and vendor payment bottlenecks during the shutdown.',
      },
    ],
    criticalMistakeCategory: 'Scaling Too Fast',
    lessonsForStudents: [
      {
        rule: 'Local density beats geographic vanity',
        explanation: 'It is vastly better to be #1 and profitable in 3 cities than to have scattered, loss-making listings across 1,000 remote towns.',
      },
      {
        rule: 'Capital efficiency is an offensive weapon',
        explanation: 'If your business model requires educating suppliers and homestay owners manually, you cannot scale at the speed of pure software.',
      },
      {
        rule: 'Preserve cash runway before the storm',
        explanation: 'Never assume the next venture capital round is guaranteed until money is cleared into the bank account.',
      },
    ],
    editorialToneNote: 'Stayzilla was a visionary pioneer of the Indian homestay economy years before Airbnb gained mainstream recognition in the country. Its story is studied with deep empathy and respect across Indian business schools.',
  },
  {
    id: 'tinyowl',
    startup: 'TinyOwl',
    industry: 'FoodTech Ordering',
    founded: 2014,
    shutDownOrPivotedYear: 2016,
    totalFundingRaisedEstimate: '~$27 Million',
    coreThesis: 'Mobile-first food ordering app allowing smartphone users in Mumbai and Pune to discover and order from neighborhood kitchens.',
    whatHappened: [
      'Founded by five IIT Bombay graduates, TinyOwl received rapid funding from marquee Silicon Valley venture funds (Sequoia Capital, Matrix Partners).',
      'Flush with early venture capital, the company expanded simultaneously to Mumbai, Delhi, Bengaluru, Pune, and Hyderabad within months.',
      'Headcount exploded to over 1,000 employees with high sales salaries and extensive field operations teams.',
      'However, their technology could not ensure reliable delivery times because they relied on restaurants\' own delivery staff. Customer dissatisfaction skyrocketed and cancellation rates reached unsustainable levels.',
      'Faced with unsustainable cash burn, the founders had to execute sudden mass layoffs, leading to severe public employee standoffs and an eventual fire-sale acquisition by Roadrunnr (Runnr).',
    ],
    rootCauses: [
      {
        title: 'Overhiring Ahead of Product-Market Fit',
        description: 'Growing from a close-knit founding team to 1,000+ staff before solving basic order delivery reliability created crushing monthly payroll burn.',
      },
      {
        title: 'Aggressive Multi-City Expansion',
        description: 'Expanding into 6 competitive metros at once diluted management attention and allowed Swiggy and Zomato to capture customer loyalty.',
      },
      {
        title: 'Neglecting the Physical Logistics Link',
        description: 'Relying on restaurant delivery boys left TinyOwl powerless to stop late deliveries and spilled food.',
      },
    ],
    criticalMistakeCategory: 'Scaling Too Fast',
    lessonsForStudents: [
      {
        rule: 'Fix customer retention before adding fuel to acquisition',
        explanation: 'Pouring money into ad marketing while customer orders are failing is like filling a bucket with a giant hole in the bottom.',
      },
      {
        rule: 'Headcount is a liability, not a badge of honor',
        explanation: 'Startup prestige is often measured by office size and team count, but lean, high-output teams survive while bloated startups collapse.',
      },
      {
        rule: 'Founders must manage crisis communications with empathy',
        explanation: 'When restructuring is necessary, transparent, dignified communication with employees and partners is non-negotiable.',
      },
    ],
    editorialToneNote: 'TinyOwl had some of the cleanest mobile UI designs of its generation. Its co-founders went on to build valuable subsequent technology ventures, carrying forward the expensive lessons of early hyper-scaling.',
  },
  {
    id: 'koovs',
    startup: 'Koovs',
    industry: 'Fast Fashion E-commerce',
    founded: 2012,
    shutDownOrPivotedYear: 2019,
    totalFundingRaisedEstimate: '~$60 Million (AIM London Listed)',
    coreThesis: 'Affordable, London-curated western high-street fashion for young, aspirational Indian urbanites.',
    whatHappened: [
      'Koovs positioned itself as India\'s ASOS, designing contemporary runway fashion in London and shipping it to fashion-forward Indian youths.',
      'While the brand built a passionate following among college students and fashion influencers, fast fashion carries immense inventory risk.',
      'Unsold seasonal collections had to be heavily discounted at 60-70% off to clear warehouse space, wiping out operating margins.',
      'Listed on London\'s Alternative Investment Market (AIM), Koovs had high public compliance costs and struggled to secure timely equity infusions during broader macroeconomic slowdowns, eventually entering administration in 2019.',
    ],
    rootCauses: [
      {
        title: 'Heavy Inventory Holding & Deadstock Depreciation',
        description: 'Fast-moving fashion trends left warehouses filled with unsold garments that lost value every passing month.',
      },
      {
        title: 'High Product Return Rates (RTO)',
        description: 'Apparel e-commerce in India experiences 30-40% return rates due to sizing mismatches, doubling courier expenses.',
      },
      {
        title: 'High Cross-Border Design and Shipping Overhead',
        description: 'Maintaining design studios in the UK while selling to price-sensitive Indian consumers created structural margin stress.',
      },
    ],
    criticalMistakeCategory: 'Unit Economics',
    lessonsForStudents: [
      {
        rule: 'Working capital is the silent killer of fashion',
        explanation: 'Inventory sitting in a warehouse is tied-up cash that cannot be deployed for payroll or product innovation.',
      },
      {
        rule: 'Reverse logistics will eat your gross margins',
        explanation: 'If 3 out of 10 customers return a dress, your logistics cost doubles while your net revenue drops to zero.',
      },
      {
        rule: 'Public market listing too early can be fatal',
        explanation: 'Listing on small-cap foreign public exchanges exposes an early-stage startup to public quarterly scrutiny without the benefit of deep domestic institutional capital.',
      },
    ],
    editorialToneNote: 'Koovs introduced an entire generation of Indian college students to contemporary western street fashion, proving that young Indians possessed high appetite for global runway designs.',
  },
  {
    id: 'byjus-governance-lessons',
    startup: 'Byju\'s (Case Study in Debt & Capital Allocation)',
    industry: 'EdTech & Digital Learning',
    founded: 2011,
    shutDownOrPivotedYear: 2024,
    totalFundingRaisedEstimate: '$5+ Billion (Peak Private Valuation $22 Billion)',
    coreThesis: 'High-production visual animations teaching K-12 mathematics and science, sold via offline parent counseling.',
    whatHappened: [
      'Byju\'s experienced unprecedented hyper-growth during the 2020-2021 COVID pandemic when schools closed nationwide and venture capital was abundant at zero interest rates.',
      'The company embarked on a $2.5+ billion global acquisition spree, buying Aakash Educational Services ($950M), Great Learning ($600M), WhiteHat Jr ($300M), and US-based Epic ($500M), funded in part by a $1.2 billion Term Loan B (TLB).',
      'When offline schools reopened in 2022, digital course demand dropped sharply just as global interest rates rose.',
      'Delays in filing statutory audited financial statements, disputes with US lenders over debt covenants, and resignations of statutory auditors and board representatives triggered a catastrophic corporate governance and liquidity crisis.',
    ],
    rootCauses: [
      {
        title: 'Over-Leveraged Debt in a High-Risk Tech Venture',
        description: 'Taking a $1.2 billion floating-rate institutional term loan left the company vulnerable to interest rate spikes and aggressive debt acceleration.',
      },
      {
        title: 'Aggressive Debt-Funded M&A Indigestion',
        description: 'Acquiring a dozen diverse education companies across different continents in under 18 months made post-merger integration impossible.',
      },
      {
        title: 'Predatory Sales Practices & Loss of Consumer Trust',
        description: 'Aggressive sales targets pushed sales representatives into misrepresenting financing loans to vulnerable parents, destroying the brand\'s social license.',
      },
      {
        title: 'Delayed Financial Audits & Governance Oversight',
        description: 'Failing to file audited financial statements on time shook investor confidence and triggered covenant defaults.',
      },
    ],
    criticalMistakeCategory: 'Governance & Auditing',
    lessonsForStudents: [
      {
        rule: 'Never confuse emergency tailwinds with permanent structural shifts',
        explanation: 'The pandemic forced children home temporarily; assuming that peak lockdown demand would continue indefinitely was a catastrophic forecasting mistake.',
      },
      {
        rule: 'Debt is radioactive for cash-burning startups',
        explanation: 'Equity investors can write down their shares to zero; debt lenders can seize company assets, file for insolvency, and replace the board.',
      },
      {
        rule: 'Corporate governance is not a bureaucratic formality',
        explanation: 'Timely financial audits, independent board members, and ethical consumer sales practices are what distinguish a durable institution from a house of cards.',
      },
      {
        rule: 'Trust in education cannot be bought with stadium sponsorships',
        explanation: 'No amount of FIFA World Cup or cricket team jersey branding can save an educational brand if parents feel deceived by the sales process.',
      },
    ],
    editorialToneNote: 'Byju\'s created groundbreaking visual pedagogical models for Indian school education that inspired educators worldwide. Its rise and crisis represent the defining business school cautionary study of modern tech finance.',
  },
];
