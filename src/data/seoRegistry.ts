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

  // 7. Failure Stories Archive
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

  // --- 10 LAUNCH BLOG STORIES ---

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

  // --- DEDICATED FOUNDER PROFILES (Unique URLs) ---
  '/founders/nithin-kamath': {
    path: '/founders/nithin-kamath',
    title: 'Nithin Kamath & Nikhil Kamath – Zerodha Founders Bio',
    metaDescription: 'Explore the life, career, and bootstrapping philosophy of Nithin & Nikhil Kamath, founders of Zerodha, India\'s most profitable retail brokerage.',
    mainKeyword: 'Nithin Kamath biography',
    relatedKeywords: ['Nikhil Kamath trader', 'Zerodha founders story'],
    breadcrumbName: 'Nithin & Nikhil Kamath',
  },
  '/founders/deepinder-goyal': {
    path: '/founders/deepinder-goyal',
    title: 'Deepinder Goyal – Zomato Founder & CEO Biography',
    metaDescription: 'Read how Deepinder Goyal built Zomato from Foodiebay into India\'s top food delivery and quick-commerce platform listed on the NSE.',
    mainKeyword: 'Deepinder Goyal biography',
    relatedKeywords: ['Zomato founder journey', 'Deepinder Goyal IIT Delhi'],
    breadcrumbName: 'Deepinder Goyal',
  },
  '/founders/falguni-nayar': {
    path: '/founders/falguni-nayar',
    title: 'Falguni Nayar – Nykaa Founder & CEO Biography',
    metaDescription: 'Discover how former investment banker Falguni Nayar founded Nykaa at 50, building India\'s premier omnichannel beauty and fashion empire.',
    mainKeyword: 'Falguni Nayar biography',
    relatedKeywords: ['Nykaa founder story', 'women entrepreneurs in India'],
    breadcrumbName: 'Falguni Nayar',
  },
  '/founders/aman-gupta': {
    path: '/founders/aman-gupta',
    title: 'Aman Gupta & Sameer Mehta – boAt Founders Story',
    metaDescription: 'How Aman Gupta and Sameer Mehta created the boAtheads youth lifestyle tribe, outperforming global electronics giants in Indian audio.',
    mainKeyword: 'Aman Gupta boAt biography',
    relatedKeywords: ['Sameer Mehta boAt', 'boAt founders journey'],
    breadcrumbName: 'Aman Gupta & Sameer Mehta',
  },
  '/founders/harshil-mathur': {
    path: '/founders/harshil-mathur',
    title: 'Harshil Mathur & Shashank Kumar – Razorpay Founders',
    metaDescription: 'Meet IIT Roorkee alumni Harshil Mathur and Shashank Kumar, who built Razorpay into the software backbone for digital payments across India.',
    mainKeyword: 'Harshil Mathur Razorpay',
    relatedKeywords: ['Shashank Kumar Razorpay', 'Razorpay founders background'],
    breadcrumbName: 'Harshil Mathur & Shashank Kumar',
  },
  '/founders/vidit-aatrey': {
    path: '/founders/vidit-aatrey',
    title: 'Vidit Aatrey & Sanjeev Barnwal – Meesho Founders',
    metaDescription: 'Discover how IIT Delhi batchmates Vidit Aatrey and Sanjeev Barnwal unlocked e-commerce for Bharat through zero-commission social commerce.',
    mainKeyword: 'Vidit Aatrey Meesho',
    relatedKeywords: ['Sanjeev Barnwal Meesho', 'Meesho founders biography'],
    breadcrumbName: 'Vidit Aatrey & Sanjeev Barnwal',
  },
  '/founders/sriharsha-majety': {
    path: '/founders/sriharsha-majety',
    title: 'Sriharsha Majety – Swiggy Co-Founder & CEO Biography',
    metaDescription: 'Learn how Sriharsha Majety transformed a failed shipping venture into Swiggy, India\'s leading food delivery and Instamart logistics giant.',
    mainKeyword: 'Sriharsha Majety biography',
    relatedKeywords: ['Swiggy founder story', 'Sriharsha Majety IIM Calcutta'],
    breadcrumbName: 'Sriharsha Majety',
  },
  '/founders/alakh-pandey': {
    path: '/founders/alakh-pandey',
    title: 'Alakh Pandey – Physics Wallah Founder Biography',
    metaDescription: 'Read the inspiring story of Alakh Pandey, who went from teaching on YouTube in Prayagraj to creating India\'s most profitable EdTech unicorn.',
    mainKeyword: 'Alakh Pandey biography',
    relatedKeywords: ['Physics Wallah founder story', 'Alakh Pandey Prayagraj'],
    breadcrumbName: 'Alakh Pandey',
  },
  '/founders/ritesh-agarwal': {
    path: '/founders/ritesh-agarwal',
    title: 'Ritesh Agarwal – OYO Founder & Group CEO Biography',
    metaDescription: 'How 19-year-old Thiel Fellow Ritesh Agarwal standardized budget hotel stays across India and expanded OYO into a global hospitality brand.',
    mainKeyword: 'Ritesh Agarwal biography',
    relatedKeywords: ['OYO founder story', 'Thiel Fellow Ritesh Agarwal'],
    breadcrumbName: 'Ritesh Agarwal',
  },
  '/founders/kunal-shah': {
    path: '/founders/kunal-shah',
    title: 'Kunal Shah – CRED & Freecharge Founder Biography',
    metaDescription: 'Explore serial entrepreneur Kunal Shah\'s philosophy on high-trust societies, branding moats, and financial gamification at CRED.',
    mainKeyword: 'Kunal Shah biography',
    relatedKeywords: ['CRED founder story', 'Freecharge founder Kunal Shah'],
    breadcrumbName: 'Kunal Shah',
  },

  // --- DEDICATED INDUSTRY HUBS (Unique URLs) ---
  '/industries/fintech': {
    path: '/industries/fintech',
    title: 'Indian FinTech Industry – Startups, Scale & Trends',
    metaDescription: 'Analyze India\'s booming FinTech sector featuring Zerodha, Razorpay, CRED, and PhonePe. Explore market size, UPI scale, and unit economics.',
    mainKeyword: 'Indian fintech industry',
    relatedKeywords: ['fintech startups India', 'digital payments ecosystem India'],
    breadcrumbName: 'FinTech',
  },
  '/industries/foodtech': {
    path: '/industries/foodtech',
    title: 'FoodTech & Quick Commerce in India – Market Analysis',
    metaDescription: 'Examine India\'s on-demand FoodTech and 10-minute grocery quick commerce market led by Zomato, Swiggy, Blinkit, and Instamart.',
    mainKeyword: 'Indian foodtech industry',
    relatedKeywords: ['quick commerce India market', 'food delivery startups India'],
    breadcrumbName: 'FoodTech',
  },
  '/industries/ecommerce': {
    path: '/industries/ecommerce',
    title: 'E-commerce in India – Mass Market & D2C Landscape',
    metaDescription: 'Discover how Meesho, Nykaa, and Flipkart transformed retail across Bharat through zero commissions, social commerce, and omnichannel beauty.',
    mainKeyword: 'Indian ecommerce industry',
    relatedKeywords: ['social commerce India', 'D2C retail ecosystem India'],
    breadcrumbName: 'E-commerce',
  },
  '/industries/edtech': {
    path: '/industries/edtech',
    title: 'EdTech Industry in India – Trends, Pricing & Scale',
    metaDescription: 'Explore the transformation of Indian EdTech from high-burn sales blitzes to sustainable, affordable hybrid coaching led by Physics Wallah.',
    mainKeyword: 'Indian edtech industry',
    relatedKeywords: ['affordable education India', 'edtech startups business models'],
    breadcrumbName: 'EdTech',
  },
  '/industries/consumer-tech': {
    path: '/industries/consumer-tech',
    title: 'Consumer Tech & Wearables in India – D2C Growth',
    metaDescription: 'How boAt, Noise, and domestic hardware brands captured India\'s audio and wearables market through youth lifestyle positioning and Make in India.',
    mainKeyword: 'Indian consumer tech',
    relatedKeywords: ['D2C electronics India', 'audio wearables market India'],
    breadcrumbName: 'Consumer Tech',
  },
  '/industries/hospitality': {
    path: '/industries/hospitality',
    title: 'Hospitality Technology in India – Budget Stays',
    metaDescription: 'Study the digitization of unbranded budget hotels, homestays, and holiday rentals in India led by OYO and MakeMyTrip.',
    mainKeyword: 'hospitality technology India',
    relatedKeywords: ['budget hotels ecosystem India', 'OYO business model analysis'],
    breadcrumbName: 'Hospitality',
  },
  '/industries/healthtech': {
    path: '/industries/healthtech',
    title: 'HealthTech in India – Telemedicine & Digital Pharma',
    metaDescription: 'Analysis of India\'s digital healthcare, e-pharmacy networks, and telemedicine platforms connecting patients with verified care.',
    mainKeyword: 'Indian healthtech startups',
    relatedKeywords: ['digital pharmacy India', 'telemedicine startups India'],
    breadcrumbName: 'HealthTech',
  },
  '/industries/saas': {
    path: '/industries/saas',
    title: 'Indian SaaS Ecosystem – Global Software Built Locally',
    metaDescription: 'How Zoho, Freshworks, and Postman built capital-efficient, world-class enterprise software from India powering global enterprises.',
    mainKeyword: 'Indian SaaS companies',
    relatedKeywords: ['B2B SaaS India ecosystem', 'Freshworks Zoho business model'],
    breadcrumbName: 'SaaS',
  },

  // --- DEDICATED MARKETING PLAYBOOKS (Unique URLs) ---
  '/marketing/zomato-social-voice': {
    path: '/marketing/zomato-social-voice',
    title: 'Zomato Social Media Marketing – Memetic Brand Strategy',
    metaDescription: 'Case study on how Zomato built a distinctive, witty social media persona and contextual push notifications that drive viral organic food orders.',
    mainKeyword: 'Zomato marketing strategy',
    relatedKeywords: ['Zomato push notifications', 'memetic brand voice strategy'],
    breadcrumbName: 'Zomato Social Voice',
  },
  '/marketing/boat-youth-culture': {
    path: '/marketing/boat-youth-culture',
    title: 'boAt Youth Culture Marketing – boAtheads Community',
    metaDescription: 'Discover how boAt positioned consumer audio as streetwear fashion, signing cricketers and Bollywood icons to build the boAtheads tribe.',
    mainKeyword: 'boAt marketing strategy',
    relatedKeywords: ['boAtheads community branding', 'lifestyle positioning consumer tech'],
    breadcrumbName: 'boAt Youth Culture',
  },
  '/marketing/nykaa-content-to-commerce': {
    path: '/marketing/nykaa-content-to-commerce',
    title: 'Nykaa Content-to-Commerce Strategy – Beauty Playbook',
    metaDescription: 'How Nykaa uses video masterclasses, beauty guides, and dermatologist advice to convert educational intent into high-margin cosmetics sales.',
    mainKeyword: 'Nykaa content to commerce',
    relatedKeywords: ['inbound marketing beauty', 'Nykaa customer acquisition strategy'],
    breadcrumbName: 'Nykaa Content-to-Commerce',
  },
  '/marketing/cred-entertaining-finance': {
    path: '/marketing/cred-entertaining-finance',
    title: 'CRED Entertaining Finance – Subversive Ad Playbook',
    metaDescription: 'Analyze CRED\'s viral IPL celebrity campaigns, dark mode luxury UI, and 750+ credit score exclusivity that transformed bill payments.',
    mainKeyword: 'CRED advertising strategy',
    relatedKeywords: ['Rahul Dravid CRED ad', 'subversive fintech marketing'],
    breadcrumbName: 'CRED Subversive Ads',
  },
  '/marketing/zerodha-education-moat': {
    path: '/marketing/zerodha-education-moat',
    title: 'Zerodha Varsity Inbound Moat – Zero-CAC Marketing',
    metaDescription: 'How Zerodha Varsity created a multi-million-learner financial education moat that drives high customer retention with zero advertising spend.',
    mainKeyword: 'Zerodha Varsity marketing',
    relatedKeywords: ['zero CAC marketing strategy', 'inbound educational moat'],
    breadcrumbName: 'Zerodha Varsity Moat',
  },

  // --- DEDICATED FAILURE CASE STUDIES (Unique URLs) ---
  '/failure-stories/doodhwala': {
    path: '/failure-stories/doodhwala',
    title: 'Doodhwala Postmortem – Unit Economics in Dairy Delivery',
    metaDescription: 'A factual analysis of Doodhwala: how low gross margins on daily milk delivery failed to cover refrigerated morning logistics costs.',
    mainKeyword: 'Doodhwala startup failure',
    relatedKeywords: ['milk delivery unit economics', 'hyperlocal grocery shutdown lessons'],
    breadcrumbName: 'Doodhwala',
  },
  '/failure-stories/stayzilla': {
    path: '/failure-stories/stayzilla',
    title: 'Stayzilla Postmortem – Premature Blitzscaling Traps',
    metaDescription: 'Why Stayzilla shut down: analyzing the dangers of rapid geographic expansion into low-density towns before mastering cash runway.',
    mainKeyword: 'Stayzilla startup failure',
    relatedKeywords: ['Stayzilla shutdown lessons', 'marketplace blitzscaling risks'],
    breadcrumbName: 'Stayzilla',
  },
  '/failure-stories/tinyowl': {
    path: '/failure-stories/tinyowl',
    title: 'TinyOwl Postmortem – Overhiring & Logistics Flaws',
    metaDescription: 'How TinyOwl raised millions but collapsed from overhiring, poor restaurant delivery reliability, and uncontrolled monthly payroll burn.',
    mainKeyword: 'TinyOwl failure analysis',
    relatedKeywords: ['foodtech startup failure India', 'overhiring startup postmortem'],
    breadcrumbName: 'TinyOwl',
  },
  '/failure-stories/koovs': {
    path: '/failure-stories/koovs',
    title: 'Koovs Postmortem – Fashion Deadstock & RTO Expenses',
    metaDescription: 'Why London-listed fast-fashion startup Koovs failed: inventory depreciation, high return rates (RTO), and high cross-border overhead.',
    mainKeyword: 'Koovs startup failure',
    relatedKeywords: ['fast fashion deadstock risks', 'ecommerce return rates India'],
    breadcrumbName: 'Koovs',
  },
  '/failure-stories/byjus-governance-lessons': {
    path: '/failure-stories/byjus-governance-lessons',
    title: 'Byju\'s Governance Case Study – Debt & Auditing Lessons',
    metaDescription: 'Business school analysis of Byju\'s: institutional term loan debt covenants, rapid M&A integration indigestion, and delayed financial audits.',
    mainKeyword: 'Byjus governance case study',
    relatedKeywords: ['edtech debt crisis Byjus', 'corporate governance startup lessons'],
    breadcrumbName: 'Byju\'s Governance',
  },
};
