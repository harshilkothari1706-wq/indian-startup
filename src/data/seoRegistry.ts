export interface PageSEO {
  path: string;
  title: string; // 50-60 chars optimal
  metaDescription: string; // 140-158 chars optimal
  mainKeyword: string;
  relatedKeywords: [string, string];
  breadcrumbName: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const SEO_REGISTRY: Record<string, PageSEO> = {
  // 1. Home Page
  '/': {
    path: '/',
    title: 'Indian Startup Stories – Founders, Journeys & Models',
    metaDescription: 'Discover verified stories of India\'s boldest startup founders, business models, and marketing playbooks. Read researched startup case studies today.',
    mainKeyword: 'Indian startup stories',
    relatedKeywords: ['Indian entrepreneurs journey', 'startup business models India'],
    breadcrumbName: 'Home',
    faqs: [
      {
        question: 'What is Indian Startup Stories?',
        answer: 'Indian Startup Stories is an independent editorial platform that documents how Indian tech startups began, their business models, marketing flywheels, and practical lessons for students and entrepreneurs.',
      },
      {
        question: 'Which Indian startups are covered on this platform?',
        answer: 'The platform covers 10 landmark Indian startups including Zerodha, Zomato, Nykaa, boAt, Razorpay, Meesho, Swiggy, Physics Wallah, OYO, and CRED with verified regulatory and financial data.',
      },
    ],
  },

  // 2. Startup Stories Archive
  '/startup-stories': {
    path: '/startup-stories',
    title: 'Startup Stories India – 10 Verified Case Studies',
    metaDescription: 'Explore in-depth case studies of India\'s top startups. Analyze the founders, problems solved, monetization models, and growth strategies now.',
    mainKeyword: 'startup case studies India',
    relatedKeywords: ['Indian startup success stories', 'startup analysis India'],
    breadcrumbName: 'Startup Stories',
  },

  // 3. Founders Directory
  '/founders': {
    path: '/founders',
    title: 'Indian Startup Founders – Biographies & Insights',
    metaDescription: 'Meet the visionary founders behind India\'s unicorn ecosystem. Explore their educational backgrounds, philosophies, and career breakthroughs.',
    mainKeyword: 'Indian startup founders',
    relatedKeywords: ['entrepreneurs in India', 'tech founders biographies India'],
    breadcrumbName: 'Founders',
  },

  // 4. Industries Hub
  '/industries': {
    path: '/industries',
    title: 'Startup Industries in India – FinTech to FoodTech',
    metaDescription: 'Explore 8 booming startup sectors in India including FinTech, FoodTech, D2C, and EdTech. Discover market size, top players, and growth drivers.',
    mainKeyword: 'startup sectors India',
    relatedKeywords: ['Indian fintech startups', 'food tech ecosystem India'],
    breadcrumbName: 'Industries',
  },

  // 5. Marketing Playbooks
  '/marketing': {
    path: '/marketing',
    title: 'Startup Marketing Strategies – Indian Growth Cases',
    metaDescription: 'Study real startup marketing strategies from Zomato, boAt, Nykaa, and CRED. Master viral flywheels, community branding, and zero-CAC growth.',
    mainKeyword: 'startup marketing strategies',
    relatedKeywords: ['digital business case studies', 'brand building in India'],
    breadcrumbName: 'Marketing',
  },

  // 6. Funding Tracker
  '/funding': {
    path: '/funding',
    title: 'Startup Funding Tracker India – Verified MCA Data',
    metaDescription: 'Track verified startup funding rounds, institutional backers, and capitalization stages across India. Sourced from audited statutory MCA and SEBI filings.',
    mainKeyword: 'startup funding India',
    relatedKeywords: ['venture capital India tracker', 'bootstrapped vs funded startups'],
    breadcrumbName: 'Funding',
  },

  // 7. Failure Stories
  '/failure-stories': {
    path: '/failure-stories',
    title: 'Startup Failure Lessons – Unit Economics Postmortems',
    metaDescription: 'Analyze why startups fail in India. Learn essential lessons on unit economics, hyper-scaling traps, and corporate governance from real postmortems.',
    mainKeyword: 'startup failures India',
    relatedKeywords: ['why startups fail lessons', 'unit economics startup postmortem'],
    breadcrumbName: 'Failure Stories',
  },

  // 8. About & Editorial Policy
  '/about': {
    path: '/about',
    title: 'About Us & Editorial Standards – Verification Policy',
    metaDescription: 'Learn about Indian Startup Stories manifesto, editorial verification standards, and academic mission for business students and aspiring founders.',
    mainKeyword: 'Indian startup editorial standards',
    relatedKeywords: ['startup research methodology', 'verified business journalism India'],
    breadcrumbName: 'About',
  },

  // --- 10 Launch Blog Pages (Unique URLs) ---

  // Blog 01: Zerodha
  '/startup-stories/zerodha': {
    path: '/startup-stories/zerodha',
    title: 'Zerodha Startup Story – How It Changed Stock Broking',
    metaDescription: 'Discover how Nithin and Nikhil Kamath bootstrapped Zerodha into India\'s top brokerage. Explore its zero-ad marketing, Kite platform, and business model.',
    mainKeyword: 'Zerodha startup story',
    relatedKeywords: ['Nithin Kamath business model', 'discount broking India Zerodha'],
    breadcrumbName: 'Zerodha',
    faqs: [
      {
        question: 'How did Zerodha start and who are its founders?',
        answer: 'Zerodha was founded on August 15, 2010, in Bengaluru by brothers Nithin Kamath and Nikhil Kamath. Nithin spent over a decade as a retail trader before launching Zerodha to eliminate high brokerage fees and complex legacy trading software.',
      },
      {
        question: 'What is Zerodha\'s business model and how does it make money?',
        answer: 'Zerodha operates as a discount broker offering zero brokerage on long-term equity delivery investments and a flat fee of ₹20 per executed intraday or derivatives (F&O) trade, relying on massive transaction volume rather than percentage commissions.',
      },
      {
        question: 'How did Zerodha acquire millions of users without paid advertising?',
        answer: 'Zerodha built Zerodha Varsity, an open-access financial education repository with 14 comprehensive modules. By educating retail investors for free with zero sales pitches, it built organic search traffic, trust, and zero-CAC word-of-mouth adoption.',
      },
    ],
  },

  // Blog 02: Zomato
  '/startup-stories/zomato': {
    path: '/startup-stories/zomato',
    title: 'Zomato Startup Story – Menu Scanning to Food-Tech',
    metaDescription: 'Learn how Deepinder Goyal built Zomato from Foodiebay into a publicly listed food-tech and quick-commerce giant. Read the full business breakdown.',
    mainKeyword: 'Zomato startup story',
    relatedKeywords: ['Deepinder Goyal business model', 'food delivery ecosystem India'],
    breadcrumbName: 'Zomato',
    faqs: [
      {
        question: 'How did Zomato start originally as Foodiebay?',
        answer: 'In 2008, Bain consultants Deepinder Goyal and Pankaj Chaddah scanned paper takeout menus and uploaded them to an office intranet called Foodiebay. As public traffic surged, they rebranded to Zomato in 2010 to build a national restaurant directory.',
      },
      {
        question: 'What made Zomato\'s marketing strategy so recognizable across India?',
        answer: 'Zomato adopted an informal, self-deprecating brand voice that mirrors Indian food cravings and Bollywood pop culture. Contextual push notifications triggered by rain or cricket matches transformed routine app alerts into viral social media moments.',
      },
    ],
  },

  // Blog 03: Nykaa
  '/startup-stories/nykaa': {
    path: '/startup-stories/nykaa',
    title: 'Nykaa Startup Story – Falguni Nayar Beauty Empire',
    metaDescription: 'Discover how Falguni Nayar launched Nykaa at age 50 and built an omnichannel beauty and fashion powerhouse using content-to-commerce and authentic sourcing.',
    mainKeyword: 'Nykaa startup story',
    relatedKeywords: ['Falguni Nayar omnichannel model', 'beauty ecommerce India Nykaa'],
    breadcrumbName: 'Nykaa',
    faqs: [
      {
        question: 'Why did Falguni Nayar choose an inventory-led model for Nykaa?',
        answer: 'Unlike open marketplaces where third-party counterfeit cosmetics were rampant, Nykaa bought inventory directly from authorized global brands, providing 100% genuine guarantees that earned customer trust.',
      },
      {
        question: 'How does Nykaa turn educational content into e-commerce sales?',
        answer: 'Through Nykaa TV and the Beauty Book, dermatologists and makeup artists demonstrate skincare regimens and shade matching. Direct product links below tutorials enable viewers to purchase recommended items with a single click.',
      },
    ],
  },

  // Blog 04: boAt
  '/startup-stories/boat': {
    path: '/startup-stories/boat',
    title: 'boAt Startup Story – Aman Gupta D2C Audio Brand',
    metaDescription: 'See how Aman Gupta and Sameer Mehta outpaced global giants to make boAt India\'s #1 audio wearables brand through youth culture and bass tuning.',
    mainKeyword: 'boAt startup story',
    relatedKeywords: ['Aman Gupta marketing strategy', 'D2C audio wearables India boAt'],
    breadcrumbName: 'boAt',
    faqs: [
      {
        question: 'What was boAt\'s first successful product before headphones?',
        answer: 'boAt\'s breakthrough product was an indestructible, tangle-free nylon-braided Lightning charging cable engineered to survive rough Indian conditions and pet bites, becoming an Amazon best-seller.',
      },
      {
        question: 'How did boAt position consumer tech as a fashion accessory?',
        answer: 'Instead of advertising technical decibels or Bluetooth codecs, boAt partnered with Bollywood youth icons and IPL cricketers, coining the "boAthead" identity and tuning sound with heavy bass suited for Indian music.',
      },
    ],
  },

  // Blog 05: Razorpay
  '/startup-stories/razorpay': {
    path: '/startup-stories/razorpay',
    title: 'Razorpay Startup Story – Digital Payments Backbone',
    metaDescription: 'Read how Harshil Mathur and Shashank Kumar founded Razorpay to eliminate payment gateway friction for developers across India\'s digital economy.',
    mainKeyword: 'Razorpay startup story',
    relatedKeywords: ['Harshil Mathur payment gateway', 'fintech infrastructure India Razorpay'],
    breadcrumbName: 'Razorpay',
    faqs: [
      {
        question: 'What pain point led to the creation of Razorpay in 2014?',
        answer: 'Setting up a payment gateway in India required 30-45 days of physical bank visits, security deposits, and clunky documentation. Razorpay built a developer-first API that could be integrated in 30 minutes with instant digital KYC.',
      },
    ],
  },

  // Blog 06: Meesho
  '/startup-stories/meesho': {
    path: '/startup-stories/meesho',
    title: 'Meesho Startup Story – Social Commerce for Bharat',
    metaDescription: 'How Vidit Aatrey and Sanjeev Barnwal unlocked e-commerce for Bharat by turning homemakers into entrepreneurs with zero seller commission.',
    mainKeyword: 'Meesho startup story',
    relatedKeywords: ['Vidit Aatrey social commerce', 'zero commission marketplace Meesho'],
    breadcrumbName: 'Meesho',
    faqs: [
      {
        question: 'How does Meesho\'s zero-commission seller model work?',
        answer: 'Meesho eliminated traditional marketplace seller commissions, allowing small textile and home goods manufacturers to offer rock-bottom pricing. Meesho monetizes through seller advertising and logistics fulfillment margins.',
      },
    ],
  },

  // Blog 07: Swiggy
  '/startup-stories/swiggy': {
    path: '/startup-stories/swiggy',
    title: 'Swiggy Startup Story – Hyperlocal Delivery Machine',
    metaDescription: 'Explore how Sriharsha Majety cracked food delivery and pioneered 10-minute grocery delivery with Instamart through dedicated delivery logistics.',
    mainKeyword: 'Swiggy startup story',
    relatedKeywords: ['Sriharsha Majety business model', 'Instamart quick commerce Swiggy'],
    breadcrumbName: 'Swiggy',
    faqs: [
      {
        question: 'Why did Swiggy own its delivery fleet from day one?',
        answer: 'Early food aggregators relied on restaurants\' own staff, resulting in delayed and cold food. Swiggy hired dedicated delivery executives with thermal bags, ensuring predictable sub-30-minute delivery.',
      },
    ],
  },

  // Blog 08: Physics Wallah
  '/startup-stories/physics-wallah': {
    path: '/startup-stories/physics-wallah',
    title: 'Physics Wallah Story – Affordable EdTech Unicorn',
    metaDescription: 'Read how teacher Alakh Pandey built India\'s most profitable EdTech unicorn by offering ₹3,500 coaching batches and prioritizing student welfare.',
    mainKeyword: 'Physics Wallah startup story',
    relatedKeywords: ['Alakh Pandey business model', 'profitable edtech unicorn India'],
    breadcrumbName: 'Physics Wallah',
    faqs: [
      {
        question: 'How did Physics Wallah achieve profitability when other EdTechs burned cash?',
        answer: 'Physics Wallah acquired over 90% of its students organically through Alakh Pandey\'s free YouTube channel, eliminating expensive celebrity marketing, and priced full-year batches at ₹3,500—roughly 90% cheaper than competitors.',
      },
    ],
  },

  // Blog 09: OYO
  '/startup-stories/oyo': {
    path: '/startup-stories/oyo',
    title: 'OYO Startup Story – Ritesh Agarwal Hospitality Tech',
    metaDescription: 'Follow Ritesh Agarwal\'s journey from a 19-year-old Thiel Fellow to standardizing India\'s budget hotels and navigating partner economics.',
    mainKeyword: 'OYO startup story',
    relatedKeywords: ['Ritesh Agarwal business model', 'budget hospitality technology OYO'],
    breadcrumbName: 'OYO',
    faqs: [
      {
        question: 'What was the core problem OYO solved in Indian budget hotels?',
        answer: 'Budget lodging was fragmented with unpredictable hygiene, stained linens, and erratic pricing. OYO audited 30 standard touchpoints (clean sheets, AC, free Wi-Fi) under a single recognizable red brand.',
      },
    ],
  },

  // Blog 10: CRED
  '/startup-stories/cred': {
    path: '/startup-stories/cred',
    title: 'CRED Startup Story – Kunal Shah High-Trust Model',
    metaDescription: 'Discover how Kunal Shah turned credit card bill payments into an aspirational luxury brand through dark-mode UI and subversive advertising.',
    mainKeyword: 'CRED startup story',
    relatedKeywords: ['Kunal Shah marketing strategy', 'fintech rewards model CRED'],
    breadcrumbName: 'CRED',
    faqs: [
      {
        question: 'Why did CRED restrict membership to users with a 750+ credit score?',
        answer: 'Kunal Shah identified that the top creditworthy cohort controls a disproportionate share of consumer spending in India. Curating an affluent, high-trust club attracted premium D2C brands and opened high-margin lending opportunities.',
      },
    ],
  },
};
