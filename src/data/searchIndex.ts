import {
  BLOG_ARTICLES,
  CARE_BEYOND_CONTENT,
  HEALTH_DISCLAIMER_SECTIONS,
  HOME_CONTENT,
  SCIENTIFIC_CONTENT,
  SHORT_VIDEOS,
  STORY_CONTENT,
} from './p3jContent';

export type SearchArea =
  | 'About P3J'
  | 'Joining the community'
  | 'Sessions and events'
  | 'Healthy practices'
  | 'Learning about ageing'
  | 'Community initiatives'
  | 'Help and contact';

export interface SearchDocument {
  id: string;
  title: string;
  area: SearchArea;
  pageLabel: string;
  path: string;
  summary: string;
  content: string;
  keywords: string[];
  action?: 'booking' | 'whatsapp';
}

export interface SearchResult extends SearchDocument {
  score: number;
  matchedViaSynonym: boolean;
}

export interface SearchAreaGuide {
  area: SearchArea;
  examples: string[];
}

export const SEARCH_AREA_GUIDES: SearchAreaGuide[] = [
  {
    area: 'About P3J',
    examples: ['Our story', 'founder', 'purpose', 'Add Life Circle'],
  },
  {
    area: 'Joining the community',
    examples: ['How to join', 'introductory session', 'membership'],
  },
  {
    area: 'Sessions and events',
    examples: ['Upcoming sessions', 'timings', 'online meetings'],
  },
  {
    area: 'Healthy practices',
    examples: ['Gentle movement', 'breathing', 'relaxation', 'hand and foot self-massage'],
  },
  {
    area: 'Learning about ageing',
    examples: ['Healthy ageing', 'staying active', 'connection', 'ageing at home'],
  },
  {
    area: 'Community initiatives',
    examples: ['Volunteering', 'green spaces', 'neighbourhood projects'],
  },
  {
    area: 'Help and contact',
    examples: ['Contact', 'joining an online session', 'frequently asked questions'],
  },
];

// Bi-directional synonym groups so different everyday words match the same content
const SYNONYM_GROUPS: string[][] = [
  [
    'calm',
    'relax',
    'relaxation',
    'meditation',
    'meditate',
    'unwind',
    'peace',
    'peaceful',
    'grounding',
    'mindful',
    'quiet',
    'stress',
    'stillness',
    'soothe',
    'soothing',
  ],
  [
    'join',
    'joining',
    'membership',
    'member',
    'members',
    'register',
    'registration',
    'signup',
    'enroll',
    'begin',
    'start',
    'intro',
    'introductory',
    'trial',
    'book',
    'booking',
    'free',
    'onboarding',
    'participate',
    'welcome',
  ],
  [
    'movement',
    'exercise',
    'exercises',
    'mobility',
    'yoga',
    'stretch',
    'stretching',
    'strength',
    'active',
    'fitness',
    'locomotion',
    'chair',
    'gentle',
    'walking',
  ],
  [
    'breathing',
    'breath',
    'breathwork',
    'pranayama',
    'pranayam',
    'paced',
    'inhale',
    'exhale',
    'lungs',
  ],
  [
    'massage',
    'self-massage',
    'selfmassage',
    'hand',
    'hands',
    'foot',
    'feet',
    'wrist',
    'wrists',
    'ankle',
    'ankles',
    'therapy',
    'massage therapy',
  ],
  [
    'ageing',
    'aging',
    'longevity',
    'senior',
    'seniors',
    'elder',
    'elders',
    'older',
    '55+',
    'women',
    'golden',
    'healthspan',
    'lifespan',
    'independence',
    'independent',
    'home',
  ],
  [
    'session',
    'sessions',
    'class',
    'classes',
    'meeting',
    'meetings',
    'event',
    'events',
    'schedule',
    'timing',
    'timings',
    'time',
    'times',
    'monday',
    'wednesday',
    'friday',
    'weekly',
    'upcoming',
    'online',
    'google',
    'meet',
    'live',
    'gathering',
    'gatherings',
  ],
  [
    'volunteer',
    'volunteering',
    'sponsor',
    'sponsorship',
    'bench',
    'benches',
    'rest',
    'green',
    'park',
    'parks',
    'garden',
    'gardening',
    'horticulture',
    'plants',
    'neighbourhood',
    'neighborhood',
    'civic',
    'project',
    'projects',
    'initiative',
    'initiatives',
    'care',
    'community',
  ],
  [
    'story',
    'about',
    'founder',
    'sreedevi',
    'rajendraprasad',
    'kalyani',
    'purpose',
    'mission',
    'philosophy',
    'parasparopagraho',
    'jivanam',
    'circle',
    'team',
    'salf',
    'foundation',
    'pavilion',
    'legacy',
  ],
  [
    'faq',
    'faqs',
    'question',
    'questions',
    'frequently',
    'asked',
    'help',
    'contact',
    'whatsapp',
    'email',
    'phone',
    'call',
    'support',
    'reach',
    'disclaimer',
    'medical',
    'safety',
    'doctor',
    'advice',
  ],
  [
    'research',
    'science',
    'scientific',
    'whitepaper',
    'white',
    'paper',
    'pdf',
    'presentation',
    'deck',
    'slides',
    'ppt',
    'icope',
    'who',
    'intrinsic',
    'capacity',
    'biome',
    'vitalise',
    'vitalize',
    'vitality',
    'circadian',
    'clock',
    'anchors',
    'sleep',
    'food',
    'foods',
    'nutrition',
    'diet',
    'eating',
    'hydration',
    'water',
    'brain',
    'memory',
    'cognitive',
    'cognition',
    'arogyam',
    'adhyayanam',
    'anandam',
    'sensory',
    'psychological',
  ],
  [
    'blog',
    'blogs',
    'essay',
    'essays',
    'article',
    'articles',
    'read',
    'reading',
    'video',
    'videos',
    'short',
    'shorts',
    'youtube',
    'watch',
    'bhajan',
    'bhajans',
    'singing',
    'music',
    'stories',
    'storytelling',
    'traditions',
    'culture',
    'cultural',
  ],
  [
    'testimonial',
    'testimonials',
    'review',
    'reviews',
    'feedback',
    'experience',
    'experiences',
    'voices',
    'gratitude',
    'connection',
    'companionship',
    'friends',
    'belonging',
  ],
];

const SYNONYM_MAP: Map<string, Set<string>> = new Map();
for (const group of SYNONYM_GROUPS) {
  for (const term of group) {
    const normalized = term.toLowerCase();
    const existing = SYNONYM_MAP.get(normalized) ?? new Set<string>();
    for (const related of group) {
      if (related.toLowerCase() !== normalized) {
        existing.add(related.toLowerCase());
      }
    }
    SYNONYM_MAP.set(normalized, existing);
  }
}

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'at',
  'be',
  'by',
  'do',
  'for',
  'from',
  'i',
  'in',
  'is',
  'it',
  'me',
  'my',
  'of',
  'on',
  'or',
  'the',
  'to',
  'we',
  'with',
]);

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’'“”"().,;:!?–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(value: string): string[] {
  const cleaned = normalizeText(value);
  if (!cleaned) return [];
  const rawTokens = cleaned.split(' ').filter(Boolean);
  const meaningful = rawTokens.filter((t) => !STOP_WORDS.has(t) || rawTokens.length <= 2);
  return meaningful.length > 0 ? meaningful : rawTokens;
}

function buildSearchIndex(): SearchDocument[] {
  const docs: SearchDocument[] = [
    // ABOUT P3J
    {
      id: 'about-home-circle',
      title: 'P3J Add Life Circle — Live Better. Age at Home.',
      area: 'About P3J',
      pageLabel: 'Home',
      path: '/',
      summary: HOME_CONTENT.heroSupportHeadline,
      content: `${HOME_CONTENT.heroIntro} ${HOME_CONTENT.heroRegistration} Parasparopagraho Jivanam mutual support living beings.`,
      keywords: [
        'Add Life Circle',
        'P3J',
        'purpose',
        'women 55+',
        'online community',
        'ageing at home',
        'Parasparopagraho Jivanam',
        'SALF',
        'Sree Annapoorneshwari Leela Foundation',
      ],
    },
    {
      id: 'about-is-this-for-me',
      title: 'Welcome to the Circle — Is This For Me?',
      area: 'About P3J',
      pageLabel: 'Home',
      path: '/#welcome',
      summary: HOME_CONTENT.isThisForMe.lead,
      content: `${HOME_CONTENT.isThisForMe.paragraphs.join(' ')} ${HOME_CONTENT.isThisForMe.highlights.join(' ')}`,
      keywords: [
        'Add Life Circle',
        'who can join',
        'women over 55',
        'beginners',
        'no yoga experience needed',
        'companionship',
        'connection',
        'purpose',
      ],
    },
    {
      id: 'about-our-story',
      title: 'Our Story — A Golden Pavilion for Golden Agers',
      area: 'About P3J',
      pageLabel: 'Our Story',
      path: '/our-story',
      summary: STORY_CONTENT.storyLead,
      content: `${STORY_CONTENT.livingPrincipleTitle} ${STORY_CONTENT.livingPrincipleMeaning} ${STORY_CONTENT.supportingLine} ${STORY_CONTENT.storyParagraphs.join(' ')} ${STORY_CONTENT.registrationNote} ${STORY_CONTENT.timeline.map((t) => `${t.title} ${t.subtitle} ${t.description}`).join(' ')}`,
      keywords: [
        'Our story',
        'founder',
        'purpose',
        'Add Life Circle',
        'Golden Pavilion',
        'Parasparopagraho Jivanam',
        'Sreedevi Rajendraprasad',
        'Kalyani Sai Reju',
        'roots',
        'legacy',
      ],
    },
    {
      id: 'about-founder-note',
      title: 'Founder’s Note — Sreedevi Rajendraprasad',
      area: 'About P3J',
      pageLabel: 'Our Story · Founder',
      path: '/our-story/founder',
      summary: 'Read the personal story and vision behind P3J Add Life Circle from Founder Sreedevi Rajendraprasad.',
      content:
        'Founder Sreedevi Rajendraprasad shares her journey, her mother’s women’s yoga centre, the inspiration behind Add Life Circle, ICOPE, and mutual support for women 55+.',
      keywords: [
        'founder',
        'Sreedevi Rajendraprasad',
        'Our story',
        'purpose',
        'vision',
        'Add Life Circle',
        'biography',
      ],
    },
    {
      id: 'about-testimonials',
      title: 'Member Testimonials — Voices from Our Circle',
      area: 'About P3J',
      pageLabel: 'Home',
      path: '/#testimonials',
      summary: 'Reflections shared by Founding Members and women aged 55+ across India about their P3J journey.',
      content: HOME_CONTENT.testimonials
        .map((t) => `${t.name} ${t.role} ${t.location} ${t.paragraphs.join(' ')}`)
        .join(' '),
      keywords: [
        'testimonials',
        'reviews',
        'member stories',
        'experiences',
        'connection',
        'gratitude journaling',
        'Vitalise Your Biome',
        'Add Life Circle',
      ],
    },

    // JOINING THE COMMUNITY
    {
      id: 'join-how-to-begin',
      title: 'How Do I Begin? — Joining the Community',
      area: 'Joining the community',
      pageLabel: 'Home',
      path: '/#begin',
      summary: 'Four straightforward steps to book a free introductory session and join P3J from home via Google Meet and WhatsApp.',
      content: HOME_CONTENT.onboardingSteps
        .map((s) => `${s.title} ${s.description}`)
        .join(' '),
      keywords: [
        'How to join',
        'introductory session',
        'membership',
        'book free intro session',
        'onboarding',
        'sign up',
        'register',
        'Google Meet link',
        'WhatsApp confirmation',
      ],
    },
    {
      id: 'join-book-intro-action',
      title: 'Book a Free Introductory Session',
      area: 'Joining the community',
      pageLabel: 'Quick Action',
      path: '/#begin',
      summary: 'Reserve a free 50-minute online introductory gathering on Monday, Wednesday, or Friday at 10:00 AM IST.',
      content: 'Open the booking form to choose your preferred morning session date and receive your Google Meet link on WhatsApp.',
      keywords: [
        'introductory session',
        'How to join',
        'membership',
        'free trial',
        'register',
        'book now',
        'upcoming sessions',
      ],
      action: 'booking',
    },

    // SESSIONS AND EVENTS
    {
      id: 'sessions-weekly-schedule',
      title: 'Weekly Schedule & Session Timings',
      area: 'Sessions and events',
      pageLabel: 'Home',
      path: '/#schedule',
      summary: 'Live online gatherings every Monday, Wednesday, and Friday at 10:00 AM IST (50 minutes, in English via Google Meet).',
      content: HOME_CONTENT.weeklySchedule
        .map((d) => `${d.day} ${d.time} ${d.duration} ${d.language} ${d.flow.join(' ')} ${d.focusNote}`)
        .join(' '),
      keywords: [
        'Upcoming sessions',
        'timings',
        'online meetings',
        'Monday 10:00 AM IST',
        'Wednesday 10:00 AM IST',
        'Friday 10:00 AM IST',
        'schedule',
        'Google Meet',
        '50 minutes',
        'weekly calendar',
      ],
    },
    {
      id: 'sessions-what-happens',
      title: 'What Happens in a 50-Minute Session?',
      area: 'Sessions and events',
      pageLabel: 'Home',
      path: '/#sessions',
      summary: 'Explore the calm, predictable flow of each Add Life Circle gathering—guided relaxation, research insights, breathing, self-massage, and brain games.',
      content: HOME_CONTENT.sessionActivities
        .map((a) => `${a.title} ${a.duration} ${a.description}`)
        .join(' '),
      keywords: [
        'Upcoming sessions',
        'timings',
        'online meetings',
        'session format',
        '50-minute circle',
        'brain games',
        'lively interaction',
      ],
    },

    // HEALTHY PRACTICES (generated from each activity + dedicated highlights)
    ...HOME_CONTENT.sessionActivities.map<SearchDocument>((activity) => ({
      id: `practice-${activity.id}`,
      title: activity.title,
      area: 'Healthy practices',
      pageLabel: 'Home · Session Practice',
      path: '/#sessions',
      summary: activity.description,
      content: `${activity.title} (${activity.duration}): ${activity.description} Practised comfortably seated on a chair or mat at home.`,
      keywords: [
        'Healthy practices',
        activity.title,
        activity.id === 'relaxation-movement' ? 'calm relaxation meditation gentle movement chair yoga' : '',
        activity.id === 'paced-breathing' ? 'breathing pranayama breathwork calm focus' : '',
        activity.id === 'self-massage' ? 'hand and foot self-massage wrist ankle self care' : '',
        activity.id === 'research-insights' ? 'healthy ageing nutrition sleep vitality biome' : '',
        activity.id === 'lively-interaction' ? 'brain games memory cognitive play connection' : '',
      ].filter(Boolean),
    })),

    // LEARNING ABOUT AGEING
    {
      id: 'learning-white-paper-abstract',
      title: 'White Paper Part 1 Abstract — Lifespan–Healthspan Gap & Daily Clock',
      area: 'Learning about ageing',
      pageLabel: 'Home',
      path: '/#white-paper-abstract',
      summary: 'Explore the 9.2-year lifespan–healthspan gap, WHO intrinsic capacity reserves, and the Four Daily Anchors of circadian rhythm alignment.',
      content:
        'Over the past century global average life expectancy rose from 47 to 73.2 years while healthy life expectancy reaches 64.0 years. WHO healthy ageing framework, intrinsic capacity, Your Health Savings Account, The Daily Clock, Four Daily Anchors morning sunlight eating window daily movement evening lights.',
      keywords: [
        'Healthy ageing',
        'staying active',
        'ageing at home',
        'white paper',
        'lifespan healthspan gap',
        'circadian rhythm',
        'Four Daily Anchors',
        'intrinsic capacity',
      ],
    },
    {
      id: 'learning-white-paper-download',
      title: 'P3J 15-Page White Paper — Vitality & Everyday Strength for Women 55+',
      area: 'Learning about ageing',
      pageLabel: 'Home · White Paper',
      path: '/#white-paper',
      summary: 'Read Page 1 of the 15-page research review and request the complete white paper with infographics.',
      content: `${SCIENTIFIC_CONTENT.whitePaper.intro} ${SCIENTIFIC_CONTENT.whitePaper.pageOne.paragraphs.join(' ')} ${SCIENTIFIC_CONTENT.whitePaper.collectionOverview.map((s) => s.topic).join(' ')}`,
      keywords: [
        'white paper',
        'Healthy ageing',
        'ageing at home',
        'download PDF',
        'Foundations of Healthy Ageing',
        'research review',
        'WHO ICOPE',
      ],
    },
    {
      id: 'learning-scientific-approach',
      title: 'Scientific Approach — WHO Intrinsic Capacity & Three Guiding Dimensions',
      area: 'Learning about ageing',
      pageLabel: 'Scientific Approach',
      path: '/scientific-approach',
      summary: SCIENTIFIC_CONTENT.pageSubtitle,
      content: `${SCIENTIFIC_CONTENT.expert.name} ${SCIENTIFIC_CONTENT.expert.credential} ${SCIENTIFIC_CONTENT.expert.bio.join(' ')} ${SCIENTIFIC_CONTENT.whitePaper.intro} The 5 Intrinsic Capacity Domains: Locomotion, Vitality, Cognition, Sensory Function, Psychological Well-Being. ${SCIENTIFIC_CONTENT.threePillars.map((p) => `${p.title} ${p.meaning} ${p.capacityTitle ?? ''} ${p.capacityDescription ?? ''}`).join(' ')} Research Materials Archive PDF presentation deck.`,
      keywords: [
        'Healthy ageing',
        'staying active',
        'connection',
        'ageing at home',
        'WHO ICOPE',
        '5 Intrinsic Capacity Domains',
        'Kalyani Sai Reju',
        'Vitalize Your Biome',
        'Arogyam',
        'Adhyayanam',
        'Anandam',
        'Presentation Deck PDF',
        'White Paper PDF',
      ],
    },
    {
      id: 'learning-community-library',
      title: 'Community Blogs & Short Video Library',
      area: 'Learning about ageing',
      pageLabel: 'Community Blogs & Videos',
      path: '/community',
      summary: 'Short everyday practice videos (under 3 mins) and thoughtful long-form essays on healthy ageing at home and caring neighbourhoods.',
      content: `${SHORT_VIDEOS.map((v) => `${v.title} ${v.category} ${v.summary}`).join(' ')} ${BLOG_ARTICLES.map((b) => `${b.title} ${b.excerpt}`).join(' ')}`,
      keywords: [
        'Healthy ageing',
        'staying active',
        'connection',
        'ageing at home',
        'YouTube Shorts',
        'videos',
        'essays',
        'blogs',
        'foods',
        'sleep',
        'meditation',
        'hand mobility',
      ],
    },
    ...BLOG_ARTICLES.map<SearchDocument>((article) => ({
      id: `blog-${article.slug}`,
      title: article.title,
      area: 'Learning about ageing',
      pageLabel: `Community Essay · ${article.readTime}`,
      path: `/community/blog/${article.slug}`,
      summary: article.excerpt,
      content: `${article.category} ${article.excerpt} ${article.paragraphs.join(' ')}`,
      keywords: [
        'Healthy ageing',
        'connection',
        'staying active',
        article.category,
        article.title,
        'essay',
        'blog',
      ],
    })),
    ...SHORT_VIDEOS.map<SearchDocument>((video) => ({
      id: `video-${video.id}`,
      title: `${video.title} (Short Video)`,
      area: 'Healthy practices',
      pageLabel: `Community Videos · ${video.duration}`,
      path: '/community',
      summary: video.summary,
      content: `${video.category} ${video.summary} ${video.highlights.join(' ')}`,
      keywords: [
        'Healthy practices',
        'short video',
        'YouTube Short',
        video.category,
        video.title,
        ...video.highlights,
      ],
    })),

    // COMMUNITY INITIATIVES
    {
      id: 'initiatives-care-beyond-circle',
      title: 'Care Beyond Circle — Neighbourhood Projects & Green Spaces',
      area: 'Community initiatives',
      pageLabel: 'Care Beyond Circle',
      path: '/care-beyond-circle',
      summary: CARE_BEYOND_CONTENT.intro,
      content: `${CARE_BEYOND_CONTENT.philosophyNote} ${CARE_BEYOND_CONTENT.neighbourhoodCards.map((c) => `${c.title} ${c.tagline} ${c.description}`).join(' ')} ${CARE_BEYOND_CONTENT.extendedInitiatives.map((c) => `${c.title} ${c.description}`).join(' ')} ${CARE_BEYOND_CONTENT.benchSection.headline} ${CARE_BEYOND_CONTENT.greenSpacesSection.headline} ${CARE_BEYOND_CONTENT.livingTraditions.headline}`,
      keywords: [
        'Volunteering',
        'green spaces',
        'neighbourhood projects',
        'Care Beyond Circle',
        'benches',
        'rest points for walkers',
        'green corners',
        'story circles',
        'cultural corners',
        'living traditions',
        'digital companions',
        'skills exchange',
      ],
    },
    {
      id: 'initiatives-volunteer-sponsor',
      title: 'Volunteer, Sponsor a Bench or Propose a Neighbourhood Site',
      area: 'Community initiatives',
      pageLabel: 'Care Beyond Circle · Express Interest',
      path: '/care-beyond-circle#care-beyond-interest-form',
      summary: 'Express interest in sponsoring a shaded rest bench, planting a green corner, volunteering, or collaborating with P3J.',
      content: `${CARE_BEYOND_CONTENT.benchSection.description} ${CARE_BEYOND_CONTENT.benchSection.tiers.map((t) => `${t.title} ${t.description}`).join(' ')} ${CARE_BEYOND_CONTENT.greenSpacesSection.options.map((o) => `${o.title} ${o.description}`).join(' ')}`,
      keywords: [
        'Volunteering',
        'green spaces',
        'neighbourhood projects',
        'sponsor a bench',
        'volunteer with P3J',
        'suggest a site',
        'intergenerational',
      ],
    },

    // HELP AND CONTACT
    {
      id: 'help-faq',
      title: 'Frequently Asked Questions (FAQ)',
      area: 'Help and contact',
      pageLabel: 'Home · FAQ',
      path: '/#faq',
      summary: 'Clear answers about what happens in a P3J session, joining without yoga experience, online meetings, and medical guidance.',
      content: HOME_CONTENT.faqs.map((f) => `${f.question} ${f.answer}`).join(' '),
      keywords: [
        'frequently asked questions',
        'FAQ',
        'joining an online session',
        'contact',
        'yoga experience',
        'medical advice',
        'What is P3J',
      ],
    },
    {
      id: 'help-health-disclaimer',
      title: 'Health Disclaimer & Participation Safety Guidelines',
      area: 'Help and contact',
      pageLabel: 'Health Disclaimer',
      path: '/health-disclaimer',
      summary: 'Voluntary participation, chair-friendly comfort at home, spoken safety reminders, and non-medical community scope.',
      content: HEALTH_DISCLAIMER_SECTIONS.map((s) => `${s.title} ${s.paragraphs.join(' ')}`).join(' '),
      keywords: [
        'Health Disclaimer',
        'safety',
        'medical advice',
        'participating from home',
        'joining an online session',
        'help',
      ],
    },
    {
      id: 'help-contact-whatsapp',
      title: 'Contact P3J — WhatsApp, Email & Community Channels',
      area: 'Help and contact',
      pageLabel: 'Contact · Direct Support',
      path: '/#footer-contact',
      summary: 'Reach P3J Add Life Circle on WhatsApp (+91 94959 75238), by email (salfaanandam@gmail.com), or follow our YouTube, WordPress, and Instagram pages.',
      content:
        'Contact P3J Add Life Circle for help joining an online Google Meet session, WhatsApp guidance, email inquiries, or community questions.',
      keywords: [
        'Contact',
        'joining an online session',
        'WhatsApp',
        'email',
        'phone number',
        'help',
        'support',
        'YouTube',
        'Instagram',
        'WordPress',
      ],
      action: 'whatsapp',
    },
  ];

  return docs;
}

export const SEARCH_DOCUMENTS: SearchDocument[] = buildSearchIndex();

export function searchSite(
  query: string,
  areaFilter: SearchArea | 'All' = 'All',
): SearchResult[] {
  const normalizedQuery = normalizeText(query);
  const candidates =
    areaFilter === 'All'
      ? SEARCH_DOCUMENTS
      : SEARCH_DOCUMENTS.filter((doc) => doc.area === areaFilter);

  if (!normalizedQuery) {
    return candidates.map((doc) => ({
      ...doc,
      score: 0,
      matchedViaSynonym: false,
    }));
  }

  const queryTokens = tokenize(normalizedQuery);
  const results: SearchResult[] = [];

  for (const doc of candidates) {
    const titleNorm = normalizeText(doc.title);
    const areaNorm = normalizeText(doc.area);
    const keywordsNorm = normalizeText(doc.keywords.join(' '));
    const summaryNorm = normalizeText(doc.summary);
    const contentNorm = normalizeText(doc.content);

    let score = 0;
    let directHits = 0;
    let synonymHits = 0;
    let matchedTokenCount = 0;

    // Exact phrase boosts
    if (titleNorm.includes(normalizedQuery)) {
      score += 120;
      directHits += 1;
    }
    if (areaNorm.includes(normalizedQuery)) {
      score += 85;
      directHits += 1;
    }
    if (keywordsNorm.includes(normalizedQuery)) {
      score += 75;
      directHits += 1;
    }
    if (summaryNorm.includes(normalizedQuery)) {
      score += 55;
      directHits += 1;
    }
    if (contentNorm.includes(normalizedQuery)) {
      score += 40;
      directHits += 1;
    }

    // Token + synonym matching
    for (const token of queryTokens) {
      let tokenMatchedDirectly = false;
      let tokenMatchedSynonym = false;

      if (titleNorm.includes(token)) {
        score += 42;
        tokenMatchedDirectly = true;
      }
      if (areaNorm.includes(token)) {
        score += 28;
        tokenMatchedDirectly = true;
      }
      if (keywordsNorm.includes(token)) {
        score += 24;
        tokenMatchedDirectly = true;
      }
      if (summaryNorm.includes(token)) {
        score += 18;
        tokenMatchedDirectly = true;
      }
      if (contentNorm.includes(token)) {
        score += 12;
        tokenMatchedDirectly = true;
      }

      if (tokenMatchedDirectly) {
        directHits += 1;
        matchedTokenCount += 1;
      } else {
        const synonyms = SYNONYM_MAP.get(token);
        if (synonyms) {
          let bestSynScore = 0;
          for (const syn of synonyms) {
            if (titleNorm.includes(syn)) {
              bestSynScore = Math.max(bestSynScore, 24);
            } else if (areaNorm.includes(syn)) {
              bestSynScore = Math.max(bestSynScore, 18);
            } else if (keywordsNorm.includes(syn)) {
              bestSynScore = Math.max(bestSynScore, 16);
            } else if (summaryNorm.includes(syn)) {
              bestSynScore = Math.max(bestSynScore, 12);
            } else if (contentNorm.includes(syn)) {
              bestSynScore = Math.max(bestSynScore, 8);
            }
          }
          if (bestSynScore > 0) {
            score += bestSynScore;
            tokenMatchedSynonym = true;
            synonymHits += 1;
            matchedTokenCount += 1;
          }
        }
      }

      if (!tokenMatchedDirectly && !tokenMatchedSynonym && token.length >= 4) {
        // Light stem match (e.g., "relaxing" -> "relax", "joining" -> "join")
        const stem = token.slice(0, Math.min(token.length - 1, 5));
        if (
          titleNorm.includes(stem) ||
          keywordsNorm.includes(stem) ||
          summaryNorm.includes(stem)
        ) {
          score += 10;
          matchedTokenCount += 1;
        }
      }
    }

    if (queryTokens.length > 1 && matchedTokenCount === queryTokens.length) {
      score += 36;
    }

    if (score > 0) {
      results.push({
        ...doc,
        score,
        matchedViaSynonym: directHits === 0 && synonymHits > 0,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
