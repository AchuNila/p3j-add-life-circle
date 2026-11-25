import { siteConfig } from '../config/siteConfig';
import {
  BlogArticle,
  DisclaimerSection,
  FrameworkPrinciple,
  IcopePillar,
  LivingTraditionActivity,
  MonthlyWeekendItem,
  NeighbourhoodInitiative,
  OnboardingStep,
  ScheduleDay,
  SessionActivity,
  ShortVideoItem,
  SponsorshipTier,
  TestimonialItem,
  TimelineStage,
} from '../types';

export const IMAGES = {
  heroOnlineCircle: '/src/assets/images/hero_online_circle_1794907185519.jpg',
  isThisForMeOnline: '/assets/aistudio/image_90b83ed2.png',
  communityParkFriends: '/assets/aistudio/image_76a7e58f.png',
  gardenBenchCouple: '/assets/aistudio/image_2f9b3ed2.png',
  sreedeviPortrait: '/assets/aistudio/image_142744cd.png',
  kalyaniPortrait: '/assets/aistudio/Kalyani_Sai_Reju_291fa55c.jpeg',
  goldenPavilion: '/assets/aistudio/image_f7510282.png',
  bhajanVeranda: '/src/assets/images/blog_bhajan_circle_1794907187287.jpg',
  horticultureTerrace: '/src/assets/images/blog_horticulture_1794907187745.jpg',
  greenCornerPark: '/src/assets/images/care_green_exercise_1794907186845.jpg',
};

export const ACKNOWLEDGEMENT_CHECKBOX_TEXT =
  "I have read and understood P3J's Health Disclaimer and Participation Acknowledgement. I understand that P3J is not a medical service, that participation is voluntary and involves risks, and that I may observe or skip any activity. I will seek appropriate medical advice where needed before participating.";

export const SPOKEN_SAFETY_REMINDER =
  'Stop if you experience pain, dizziness, faintness or unusual breathlessness. Chest pain or severe breathing difficulty requires urgent medical attention.';

export const HOME_CONTENT = {
  heroKicker: 'Parasparopagraho Jīvānām · Online Community for Women 55+',
  heroHeadline: 'Add Life to Your Years.',
  heroSupportHeadline:
    'A caring community for women over 55 to learn, share healthy practices and grow older together from our home.',
  heroIntro:
    'P3J is a caring online community for women over 55. We explore research on ageing, share healthy practices, and support one another in living well and ageing at home. Together, we aim to stay active, connected, and fulfilled into our eighties and beyond—adding life to our years and loving the lives we lead.',
  heroRegistration:
    'P3J is a unit of Sree Annapoorneshwari Leela Foundation (SALF), incorporated on 05 November 2025, with UDYAM Registration No. UDYAM-KL-12-0123704.',
  heroTagline: 'P3J – Live Better. Age at Home.',
  isThisForMe: {
    heading: 'Is This For Me?',
    lead: 'A caring online community for healthy ageing at home.',
    paragraphs: [
      'P3J welcomes women over 55 who are looking for practical healthy practices, grounded insights on ageing, friendly company, and meaningful ways to keep their minds active.',
      'You do not need prior yoga experience or technical expertise. Every gathering happens live online in English via Google Meet from the comfort of your own living room, seated comfortably on a chair or mat at your own pace.',
    ],
    highlights: [
      'Women aged 55+ seeking structured rhythm and warm companionship',
      'Curious minds interested in research on healthy ageing',
      'Comfortable, zero-pressure participation from your home',
      'Respectful, cheerful English-language gatherings three mornings a week',
    ],
  },
  testimonials: [
    {
      id: 'prameela-s',
      paragraphs: [
        'My journey through P3J by nine months brought so many changes in my life. Various sessions of healthy ageing, new health tips, healthy dishes, utilise your Biome session, balanced diets emphasizing the calories of each diet etc. opened new vistas of knowledge quite unknown to me so far.',
        'Importance of morning walk, social connection, exercise for various parts of the body, different types of pranayama and daily meditation helped me a lot in making my post-retirement life active and joyful.',
        'Practise of storytelling, singing songs, and talk on any topic on the spot chased the stage fears in me and made me more confident and smart. Brain activating exercises I have gone through was a booster dose to my brain and helped me to realise my hidden talents and limitations. Massage exercises helped me to relieve the pain of my leg and foot.',
        'Totally my journey of nine months was informative, enthusiastic and entertaining.',
        'Thanking you the organisers of P3J.',
      ],
      name: 'Mrs. Prameela S.',
      role: 'Forensic Scientist (Rtd)',
      location: 'Kerala, India',
    },
    {
      id: 'jansi-kishore',
      paragraphs: [
        'Right from the name: “Parasparopagraho Jivanam” – P3J, this platform aims at mutually improving our lives by making it more meaningful and proactive. I am honoured to be in the Founding Members’ group.',
        'The dedication of Mrs. Sreedevi and Kalyani, in presenting relevant, interesting and stimulating material for each session, has to be applauded. Looking forward to many more inspiring sessions.',
        'Learnt so many fascinating concepts like Intrinsic Capacity, Lifespan–Healthspan Gap, Emptying the Sink for a Resilient Future, and more.',
      ],
      name: 'Mrs. Jansi Kishore',
      role: 'Horticulturist',
      location: 'Chennai, India',
    },
    {
      id: 'maya-mohan',
      paragraphs: [
        'I felt the P3J journey very enjoyable. Got a lot of insight about how to age gracefully. Kalyani gave us a lot of knowledge about how to eat healthy and what precautions one must take to age gracefully. Sreedevi’s session on meditation, simple exercises and pranayam were informative and great. The brain exercise really got the brain working. Enjoyable journey.',
      ],
      name: 'Mrs. Maya Mohan',
      role: 'Bal Vikas Guru',
      location: 'Belgaum, India',
    },
    {
      id: 'ragini-gopal',
      paragraphs: [
        'The sessions are all very interesting and informative. The knowledge I got from classes made me healthy both mentally and physically. After attending the sessions, my food habits improved. I also understood the importance of drinking water. Overall, the sessions are very good for all, especially old-aged people.',
      ],
      name: 'Mrs. Ragini Gopal',
      role: 'Accounts Officer (Rtd)',
      location: 'Kerala, India',
    },
    {
      id: 'vijayasree-ks',
      paragraphs: [
        'It is a complete session including meditation, yoga, massage therapy, brain exercise and group activities. Vitalise Your Biome session is very informative with pointwise summary at the end. In total the session is very useful.',
      ],
      name: 'Mrs. Vijayasree K.S.',
      role: 'Engineer (Rtd)',
      location: 'Kerala, India',
    },
    {
      id: 'ajitha-chandra-james',
      paragraphs: [
        'The last six months of my journey with P3J have given me a greater awareness of the importance of vitalising our biome, improving our mobility, and massaging our bodies. The sessions on meditation and “Vitalise Your Biome,” conducted by Mrs. Kalyani, along with the breathing exercises, self-massage, and gentle exercises conducted by Mrs. Sreedevi, were excellent. These sessions have helped me incorporate these practices into my daily life.',
        'The gratitude journaling we did after the sessions made me truly thankful to God for everything I have.',
        'By attending this programme, I have become more aware of the importance of meditation, mobility, vitalising our biome, gratitude, and the practice of writing. I am truly grateful for this wonderful journey and for everything I have learned through P3J.',
      ],
      name: 'Mrs. Ajitha Chandra James',
      role: 'Engineer (Rtd)',
      location: 'Kerala, India',
    },
  ] as TestimonialItem[],
  sessionActivities: [
    {
      id: 'relaxation-movement',
      title: 'Guided Relaxation',
      duration: '8 mins',
      description:
        'Unwind tension with calm guided meditation and gentle, chair-friendly mobility suited to your personal comfort.',
      iconName: 'wind',
    },
    {
      id: 'research-insights',
      title: 'Vitality your Biome(VYB): Insights from published ageing research',
      duration: '12 mins',
      description:
        'Clear, everyday conversations unpacking published studies on healthy ageing, nutrition, rest, and daily vitality.',
      iconName: 'book',
    },
    {
      id: 'paced-breathing',
      title: 'Soul to Sole',
      duration: '15 mins',
      description:
        'Paced breathing on Monday (15 min) / Comforting self-massage on Wednesday (15 min) / Gentle movement on Friday (15 min).',
      iconName: 'heart',
    },
    {
      id: 'self-massage',
      title: 'Circle of Voices - Mind engaging Activities & Lively interaction',
      duration: '15 mins',
      description:
        'Playful brain games, memory prompts, and lively interaction with fellow circle members.',
      iconName: 'hand',
    },
  ] as SessionActivity[],
  weeklySchedule: [
    {
      day: 'Monday',
      time: '10:00 AM IST',
      duration: '50 minutes',
      language: 'Live online in English',
      flow: ['Guided Relaxation', 'Talk', 'Comfortable Paced Breathing', 'Brain Games'],
      focusNote: 'Begin the week with calm breathwork, ageing insights, and cheerful cognitive play.',
    },
    {
      day: 'Wednesday',
      time: '10:00 AM IST',
      duration: '50 minutes',
      language: 'Live online in English',
      flow: ['Guided Relaxation', 'Talk', 'Gentle Self-Massage', 'Brain Games'],
      focusNote: 'Midweek restoration combining gentle hand and foot self-massage with lively interaction.',
    },
    {
      day: 'Friday',
      time: '10:00 AM IST',
      duration: '50 minutes',
      language: 'Live online in English',
      flow: ['Guided Relaxation', 'Talk', 'Gentle Movement', 'Brain Games'],
      focusNote: 'Gentle functional strength movements and memory games to carry energy into the weekend.',
    },
  ] as ScheduleDay[],
  onboardingSteps: [
    {
      number: '01',
      title: 'Book a Free Intro Session',
      description: 'Enter your name, WhatsApp number and preferred date in our simple form.',
    },
    {
      number: '02',
      title: 'Receive a Welcome Message',
      description: 'P3J contacts you on WhatsApp with confirmation of your chosen session date.',
    },
    {
      number: '03',
      title: 'Get Your Meeting Link',
      description: 'Receive a simple Google Meet joining link directly through WhatsApp.',
    },
    {
      number: '04',
      title: 'Join Us Live',
      description: 'Open the Google Meet link at 10:00 AM IST and experience P3J from home.',
    },
  ] as OnboardingStep[],
  communityInvitation: {
    heading: 'Bring a Sister Along.',
    description:
      'Aging Together, Rooted in Wisdom. If you know a sister, cousin, neighbour, or dear friend aged 55+ who would enjoy warm company and thoughtful conversations on healthy ageing, share this circle with her.',
    shareMessage:
      'Namaste! I wanted to share P3J Add Life Circle with you — a caring online community for women over 55 to learn, share healthy practices, and grow older together via Google Meet (Mon, Wed & Fri at 10:00 AM IST). Live Better. Age at Home.',
  },
  faqs: [
    {
      question: 'What is P3J Add Life Circle?',
      answer:
        'P3J is a caring online community for women over 55. We explore research on ageing, share healthy practices, and support one another in living well and ageing at home. Together, we aim to stay active, connected, and fulfilled into our eighties and beyond—adding life to our years and loving the lives we lead.',
    },
    {
      question: 'What happens during a P3J session?',
      answer:
        'Our sessions bring together shared learning, gentle movement, comfortable breathing, guided relaxation, and friendly conversation. Some sessions also include gentle hand and foot self-massage. Sessions are held online in English.',
    },
    {
      question: 'Do I need experience in yoga or other physical practices to join?',
      answer:
        'No previous experience is needed. You are welcome to observe first and participate at a pace that feels comfortable for you. Our focus is on shared practice and mutual support, not performance.',
    },
    {
      question: 'Does P3J provide medical advice or treatment?',
      answer:
        'No. P3J is a community initiative, not a medical service. Our facilitators do not provide medical advice, diagnosis, or treatment. Our sessions are intended for shared learning, healthy practices, and companionship—not as a replacement for professional healthcare.',
    },
  ],
};

export const SCIENTIFIC_CONTENT = {
  pageTitle: 'Scientific Approach',
  pageSubtitle: 'Thoughtful structure based on research publications on ageing and the WHO Intrinsic Capacity framework.',
  expert: {
    name: 'Kalyani Sai Reju | Science Lead at P3J',
    credential: 'MSc in Molecular Genetics · University of Copenhagen',
    role: 'Science Lead at P3J · Research & Health Communication',
    imageSrc: IMAGES.kalyaniPortrait,
    imageAlt: 'Portrait of Kalyani Sai Reju, Science Lead at P3J',
    bioPlaceholderNote: '',
    bio: [
      'Kalyani is a published researcher and science communicator with five years of experience across laboratory research and health communication. She holds a master’s degree in Molecular Genetics from the University of Copenhagen and co-authored a peer-reviewed study in FEBS Letters. She worked in biochemistry research at CSIR–CIMAP and went on to develop educational content on metabolic health and lifestyle-related conditions in the healthcare sector.',
      'As P3J’s Science Lead, Kalyani draws on ageing research to develop and lead Vitalize Your Biome sessions for adults aged 55 and over. She explains how nutrition, movement and sleep shape our health as we age, using familiar examples like adding protein to a favourite meal or finding more opportunities to move during the day. Her sessions help members build habits that support their strength, mobility and independence.',
    ],
  },
  whitePaper: {
    title: 'Vitality & Everyday Strength for Women aged 55+',
    totalPages: 15,
    intro:
      'Inspired by the World Health Organization’s ICOPE approach, P3J looks beyond illness to support the whole person—their physical and mental capacities, everyday independence, and what matters to them as they grow older.',
    pageOne: {
      pageLabel: 'Page 01 of 15',
      chapterTitle: 'Introduction: Living Well and Ageing at Home',
      paragraphs: [
        'As women enter their late fifties, sixties, seventies, and eighties, conversations about health frequently narrow down to prescriptions, clinic visits, and managing isolated symptoms. Yet everyday independence and peace of mind depend on something much broader: how steadily we nurture our energy, our curiosity, our comfort in movement, and our sense of belonging.',
        'Inspired by the principle of Parasparopagraho Jīvānām—"we help one another live"—this 15-page collection of P3J notes brings together clear, plain-language reflections drawn from published ageing research and the World Health Organization (WHO) Integrated Care for Older People (ICOPE) Intrinsic Capacity perspective.',
        'Rather than treating ageing as something to resist, these notes explore practical routines women aged 55+ can practise comfortably at home—combining gentle chair-friendly movement, paced breathing, self-massage, cognitive engagement, and warm peer companionship.',
      ],
      keyTakeaway:
        'Healthy ageing is not about avoiding age. It is about nurturing with one another’s support our bodies and minds, so that we can live with strength, peace, and independence as we grow older.',
    },
    collectionOverview: [
      { pages: 'Pages 01 – 04', topic: 'Whole Health, Ageing at Home & WHO Intrinsic Capacity' },
      { pages: 'Pages 05 – 08', topic: 'Arogyam: Gentle Mobility, Breathing & Self-Massage' },
      { pages: 'Pages 09 – 12', topic: 'Adhyayanam: Cognitive Play, Memory & Everyday Food' },
      { pages: 'Pages 13 – 15', topic: 'Anandam: Mutual Support, Confidence & Next Steps' },
    ],
    whatsappRequestMessage:
      'Namaste P3J Add Life Circle! I read Page 1 of the 15-page White Paper ("Whole Health & Intrinsic Capacity for Women 55+") on your website and would love to receive Pages 2–15 via WhatsApp.',
    pillars: [
      {
        id: 'cognitive',
        title: 'Cognitive Capacity',
        sanskritTerm: 'Adhyayanam · Mind & Curiosity',
        description:
          'Supporting attention, memory, and lifelong learning through research talks, brain games, and lively interaction.',
        sessionConnection: 'Included in every Monday, Wednesday, and Friday circle.',
      },
      {
        id: 'vitality',
        title: 'Vitality',
        sanskritTerm: 'Arogyam · Energy & Rest',
        description:
          'Exploring balanced everyday nutrition, sleep rhythms, calm paced breathing, and gentle self-massage to support daily energy.',
        sessionConnection:
          'Explored through educational talks, Monday breathing sessions, and Wednesday self-massage.',
      },
      {
        id: 'psychological',
        title: 'Psychological Capacity',
        sanskritTerm: 'Anandam · Joy & Belonging',
        description:
          'Nurturing emotional warmth, mood, and social connection through singing, storytelling, and reminiscence in a caring peer circle.',
        sessionConnection:
          'Shared warmly through singing, storytelling, reminiscence, and lively group interaction.',
      },
    ] as IcopePillar[],
  },
  methodologicalStatement:
    'Healthy ageing is not about avoiding age. It is about nurturing with one another’s support our bodies and minds, so that we can live with strength, peace, and independence as we grow older.',
  threePillars: [
    {
      title: 'Arogyam',
      meaning: 'Whole-Body Ease & Daily Vitality',
      description:
        'Gentle movement, paced breathing, Wednesday self-massage, and everyday nourishment insights practised respectfully within personal comfort.',
      capacityTag: 'Arogyam · Energy & Rest',
      capacityTitle: 'Vitality',
      capacityDescription:
        'Exploring balanced everyday nutrition, sleep rhythms, calm paced breathing, and gentle self-massage to support daily energy.',
      sessionConnection:
        'Explored through educational talks, Monday breathing sessions, Wednesday self-massage, and Friday gentle movement sessions.',
    },
    {
      title: 'Adhyayanam',
      meaning: 'Shared Learning & Mental Curiosity',
      description:
        'Engaging with published research on ageing in plain language alongside playful cognitive challenges that spark curiosity.',
      capacityTag: 'Adhyayanam · Mind & Curiosity',
      capacityTitle: 'Cognitive Capacity',
      capacityDescription:
        'Supporting attention, memory, and lifelong learning through research talks, brain games, and lively interaction.',
      sessionConnection: 'Included in every Monday, Wednesday, and Friday circle.',
    },
    {
      title: 'Anandam',
      meaning: 'Joy, Belonging & Mutual Support',
      description:
        'Singing, storytelling, reminiscence, lively interaction, and friendly companionship that nurture emotional warmth and confidence.',
      capacityTag: 'Anandam · Joy & Belonging',
      capacityTitle: 'Psychological Capacity',
      capacityDescription:
        'Nurturing emotional warmth, mood, and social connection through singing, storytelling, and reminiscence in a caring peer circle.',
      sessionConnection:
        'Shared warmly through singing, storytelling, reminiscence, and lively group interaction.',
    },
  ] as FrameworkPrinciple[],
  psychologyTopics: [
    {
      title: 'Proactive Depression Prevention',
      description:
        'Regular social connection, structured mornings, and meaningful peer dialogue help counter the quiet isolation that can accompany retirement or changing family routines. P3J sessions offer welcoming community contact—never replacing clinical care when medical or psychological support is needed.',
    },
    {
      title: 'Confidence Building',
      description:
        'Learning new ideas, trying gentle functional movements at one’s own pace, and contributing stories in an encouraging circle help women 55+ sustain confidence in daily independence and community voice.',
    },
  ],
  reservedMaterials: {
    deckAvailable: Boolean(siteConfig.presentationDeckUrl),
    whitePaperAvailable: Boolean(siteConfig.whitePaperUrl),
  },
};

export const SHORT_VIDEOS: ShortVideoItem[] = [
  {
    id: 'healthy-ageing-foods',
    title: 'Everyday Foods for Healthy Ageing',
    category: 'Vitality & Nutrition',
    duration: '0:58',
    summary:
      'Simple kitchen staples—lentils, greens, fermented foods, and warm hydration—discussed in our Monday research talks.',
    youtubeId: siteConfig.youtubeIds.foods,
    posterSrc: IMAGES.horticultureTerrace,
    posterAlt: 'Two Indian women tending fresh herbs and greens on a sunlit terrace',
    highlights: [
      'Protein diversity across familiar Indian home meals',
      'Hydration cues across seasons',
      'Gentle meal timing for comfortable digestion',
    ],
  },
  {
    id: 'sleep-methods',
    title: 'Calmer Evenings & Restful Sleep',
    category: 'Rest & Rhythm',
    duration: '1:00',
    summary:
      'Practical evening wind-down habits, light exposure cues, and paced breathing ideas shared for better rest at home.',
    youtubeId: siteConfig.youtubeIds.sleep,
    posterSrc: IMAGES.heroOnlineCircle,
    posterAlt: 'Indian woman in a serene sunlit home living room',
    highlights: [
      'Morning daylight to anchor natural sleep rhythms',
      'Screen-free quiet transition before bedtime',
      'Gentle seated breath pacing without strain',
    ],
  },
  {
    id: 'guided-grounding',
    title: 'Two-Minute Grounding Meditation',
    category: 'Mindful Calm',
    duration: '0:55',
    summary:
      'A quiet seated grounding reflection to settle shoulders, notice breath, and feel present before starting your day.',
    youtubeId: siteConfig.youtubeIds.grounding,
    posterSrc: IMAGES.communityParkFriends,
    posterAlt: 'Three smiling Indian women friends together outdoors',
    highlights: [
      'Comfortable upright posture in your favourite chair',
      'Softening jaw and shoulder tension',
      'Gentle awareness of feet resting on the floor',
    ],
  },
  {
    id: 'chair-mobility',
    title: 'Gentle Hand & Wrist Mobility',
    category: 'Locomotor Ease',
    duration: '0:52',
    summary:
      'A preview of our Wednesday self-massage and finger articulation sequence that participants can try seated.',
    youtubeId: siteConfig.youtubeIds.mobility,
    posterSrc: IMAGES.greenCornerPark,
    posterAlt: 'Indian seniors stretching gently in a shaded park corner',
    highlights: [
      'Slow wrist circles at your own comfort range',
      'Warm palm pressure along fingers and thumbs',
      'Pause immediately if any joint feels tender',
    ],
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'urgent-need-senior-friendly-benches-indian-footpaths',
    title: 'The Urgent Need for Senior-Friendly Benches on Indian Footpaths',
    category: 'Care Beyond Circle · Public Spaces',
    publishedLabel: 'Community Essay',
    readTime: '5 min read',
    excerpt:
      'Why a simple, shaded place to pause every few hundred metres transforms whether older women can walk to the market, visit friends, and remain active in their neighbourhoods.',
    imageSrc: IMAGES.gardenBenchCouple,
    imageAlt: 'Older Indian couple seated peacefully on a shaded wooden bench in a garden',
    imageCaption: 'A welcoming shaded bench turns a simple neighbourhood walk into an invitation to linger and connect.',
    paragraphs: [
      'When we speak about active ageing, conversations often turn quickly to indoor exercise routines or personal willpower. Yet step outside onto a typical Indian neighbourhood street, and a quieter barrier becomes immediately clear: there is nowhere to sit down and catch your breath.',
      'For many women over 55, a morning walk to buy fresh vegetables, visit a temple, or meet a friend is not prevented by a lack of desire. Rather, the uncertainty of whether a resting spot exists along the route makes leaving home feel daunting. When a footpath offers no pause points, errands shrink, walks grow shorter, and confidence outside the home gradually narrows.',
      'A well-placed bench with comfortable height, sturdy armrests for easy rising, and a pocket of shade from a neem or rain tree changes the entire character of a street. It signals that older residents belong in public life—not only inside clinics or living rooms, but right in the lively rhythm of the neighbourhood.',
      'Through P3J’s Care Beyond Circle vision, we explore how communities can begin gently: mapping one everyday walking route, identifying two safe pause points with local permissions, and inviting neighbours to steward rest points where generations naturally cross paths.',
    ],
    reflectionPrompt:
      'Look along your own daily walking lane: where would one sturdy, shaded bench make an immediate difference for you or an older neighbour?',
  },
  {
    slug: 'why-singing-bhajans-together-excellent-cognitive-therapy',
    title: 'Why Singing Bhajans Together Is Wonderful Cognitive & Community Practice',
    category: 'Mind & Culture · Cognitive Wellbeing',
    publishedLabel: 'Community Essay',
    readTime: '4 min read',
    excerpt:
      'Shared rhythm, remembered verses, breath phrasing, and joyful group belonging make traditional singing circles a rich practice for mind and spirit.',
    imageSrc: IMAGES.bhajanVeranda,
    imageAlt: 'Indian women aged 55 to 72 singing bhajans together on a sunlit veranda with a harmonium',
    imageCaption: 'Shared melody and rhythm on a sunlit veranda bring memory, breath, and companionship together.',
    paragraphs: [
      'Across Indian homes and courtyards, generations of women have gathered in the late afternoon or morning to sing bhajans, folk melodies, and traditional verses. Long before modern terminology existed, these informal circles wove together memory, breath, rhythm, and companionship.',
      'When we sing together, several capacities are engaged simultaneously without feeling like a chore. Recalling verses and ragas exercises verbal and musical memory; keeping time with gentle claps or small cymbals coordinates attention and rhythm; and singing phrases aloud naturally lengthens the out-breath in a relaxed, joyful way.',
      'Equally meaningful is the social warmth of the circle. No one sings for perfection or performance. Voices blend, someone smiles when a familiar line returns, and conversation flows naturally once the final chord fades.',
      'In P3J Add Life Circle—and in our proposed Living Traditions Corners—we honour these familiar cultural anchors as living, joyful ways to keep minds active and friendships strong after 55.',
    ],
    reflectionPrompt:
      'Which song, verse, or folk melody from your younger years still brings an instant smile when hummed with friends?',
  },
  {
    slug: 'introduction-therapeutic-horticulture-active-ageing',
    title: 'Introduction to Therapeutic Horticulture for Active Ageing',
    category: 'Green Living · Daily Practice',
    publishedLabel: 'Community Essay',
    readTime: '5 min read',
    excerpt:
      'From a single pot of tulsi on a balcony to shared neighbourhood green corners, tending plants invites gentle movement, sensory joy, and daily purpose.',
    imageSrc: IMAGES.horticultureTerrace,
    imageAlt: 'Two smiling Indian women tending tulsi and marigold plants in terracotta pots on a sunny terrace',
    imageCaption: 'Tending terracotta pots of tulsi and marigolds offers gentle movement, sunlight, and daily rhythm.',
    paragraphs: [
      'You do not need an acre of land to experience the quiet steadiness of gardening. Even a few terracotta pots on a sunny balcony, courtyard, or shared building terrace offer something deeply grounding: living growth that responds to daily attention.',
      'Therapeutic horticulture focuses on the everyday sensory and physical engagement of caring for plants. Watering at morning light encourages gentle stepping and reaching; pinching spent marigold blooms or harvesting fresh curry leaves keeps fingers nimble; and noticing new shoots brings quiet anticipation to each week.',
      'When neighbours tend plants side by side—trading cuttings of hibiscus, mint, or tulsi—gardening also becomes an effortless bridge across households and generations. Younger family members learn plant names from elders, while elders stay active outdoors in soft morning sun.',
      'As part of our Care Beyond Circle aspiration, P3J hopes to encourage small, manageable native green corners in neighbourhoods where residents can breathe, pause under shade, and nurture living greenery together.',
    ],
    reflectionPrompt:
      'Could one easy-to-care-for native plant or kitchen herb become part of your morning sunlight routine this week?',
  },
];

export const STORY_CONTENT = {
  livingPrincipleTitle: 'Parasparopagraho Jīvānām',
  livingPrincipleMeaning: 'We help one another live.',
  supportingLine: 'Life Flourishes With Mutual Support. Together We Thrive.',
  storyLead:
    'P3J is a Golden Pavilion for Golden Agers—a welcoming online home where women over 55 can add life to their years.',
  storyParagraphs: [
    'We come together to learn, share healthy practices, and support one another as we grow older with strength, peace, and joy.',
    'Guided by Parasparopagraho Jīvānām—we help one another live—P3J is a place to feel connected, capable, and cared for.',
  ],
  registrationNote:
    'P3J is a unit of Sree Annapoorneshwari Leela Foundation (SALF), incorporated on 05 November 2025, with UDYAM Registration No. UDYAM-KL-12-0123704.',
  timeline: [
    {
      stageNumber: '01',
      title: 'The Roots',
      subtitle: 'Founded by Sreedevi Rajendraprasad',
      description:
        'Inspired by her mother’s pioneering work running a women’s yoga centre, Sreedevi Rajendraprasad envisioned a welcoming space where women over 55 could gather regularly—honouring quiet discipline, cultural warmth, and mutual care from the comfort of home.',
    },
    {
      stageNumber: '02',
      title: 'The System',
      subtitle: 'Giving our Gatherings Shape',
      description:
        'A retired government engineer helped shape the clear, practical structure of our 50-minute gatherings—bringing meditation, research discussions, breathing, self-massage, light resistance exercises, and brain games into a familiar Monday–Wednesday–Friday rhythm. Kalyani, our science lead, helped weave these elements into a cohesive approach inspired by the World Health Organization’s Integrated Care for Older People (ICOPE) framework.',
    },
    {
      stageNumber: '03',
      title: 'The Scientific Foundation',
      subtitle: 'Kalyani Sai Reju · Science Lead at P3J',
      description:
        'Kalyani Sai Reju, holding an MSc in Molecular Genetics from the University of Copenhagen, anchors the programme in published ageing research and leads Vitalize Your Biome sessions for adults aged 55 and over.',
    },
  ] as TimelineStage[],
};

export const CARE_BEYOND_CONTENT = {
  intro:
    'At P3J, we propose to look beyond personal healthy practices to the communities we grow older in. We aspire to bring people together through benches that offer rest, green corners that invite gathering, cultural spaces that keep local traditions alive, and opportunities for older adults to share their skills.',
  philosophyNote:
    'Healthy ageing is not only about eating well, moving regularly, and sleeping well. Meaningful relationships and welcoming places to meet, move, and participate matter too. Every project described here represents an initiative P3J aspires to co-create step by step with local partners and residents.',
  neighbourhoodCards: [
    {
      id: 'rest-points',
      title: 'Rest Points for Walkers',
      tagline: 'A place to pause.',
      description:
        'Shaded, sturdy benches placed along everyday neighbourhood walking routes so older adults can walk further with peace of mind.',
      category: 'core',
    },
    {
      id: 'green-corners',
      title: 'Green Corners',
      tagline: 'A place to breathe.',
      description:
        'Small, welcoming pockets of native greenery with seating, shade, and water points transformed from underused street corners.',
      category: 'core',
    },
    {
      id: 'story-circles',
      title: 'Story Circles',
      tagline: 'A place to share.',
      description:
        'Informal neighbourhood gatherings where elders and younger neighbours exchange lived memories, recipes, and local wisdom.',
      category: 'core',
    },
    {
      id: 'cultural-corners',
      title: 'Cultural Corners',
      tagline: 'A corner to keep traditional art alive.',
      description:
        'Accessible community spaces for shared singing, rangoli, weaving, folk music, and seasonal traditions across generations.',
      category: 'core',
    },
    {
      id: 'digital-companions',
      title: 'Digital Companions',
      tagline: 'A place to learn.',
      description:
        'Patient, peer-friendly guidance helping older residents feel comfortable using everyday digital tools like video calls and WhatsApp.',
      category: 'core',
    },
    {
      id: 'skills-exchange',
      title: 'Volunteering',
      tagline: 'A place to contribute.',
      description:
        'Meaningful opportunities for women 55+ to volunteer for causes they care about—sharing their time and life experience to support education, mentoring, discovering new interests, and making a meaningful difference.',
      category: 'core',
    },
    {
      id: 'neighbourhood-care',
      title: 'Neighbourhood Care Circles',
      tagline: 'A place to belong.',
      description:
        'Friendly mutual check-ins and local solidarity inspired by Parasparopagraho Jīvānām—we help one another live.',
      category: 'core',
    },
  ] as NeighbourhoodInitiative[],
  extendedInitiatives: [
    {
      id: 'safe-walking',
      title: 'Safe Walking Circles',
      tagline: 'Shared morning walks',
      description: 'Coordinated local walking routes where neighbours look out for uneven paving and walk at a comfortable pace together.',
      category: 'extended',
    },
    {
      id: 'age-friendly-spaces',
      title: 'Age-Friendly Public Spaces',
      tagline: 'Thoughtful civic design',
      description: 'Advocating calmly for accessible steps, handrails, clear signage, and resting places in parks and neighbourhood lanes.',
      category: 'extended',
    },
    {
      id: 'senior-exercise-corners',
      title: 'Senior-Friendly Exercise Corners',
      tagline: 'Gentle outdoor movement',
      description: 'Low-impact, joint-friendly outdoor movement stations placed in shaded park edges alongside comfortable seating.',
      category: 'extended',
    },
    {
      id: 'age-friendly-directory',
      title: 'Age-Friendly Business Directory',
      tagline: 'Welcoming local shops',
      description: 'Highlighting neighbourhood pharmacies, grocers, and cafés that offer patient service, seating, and accessible entry.',
      category: 'extended',
    },
    {
      id: 'listening-project',
      title: 'Community Listening Project',
      tagline: 'Voices of elders heard',
      description: 'Gathering lived insights from older residents on what helps them feel safe, respected, and active in their locality.',
      category: 'extended',
    },
    {
      id: 'intergenerational',
      title: 'Intergenerational Partnerships',
      tagline: 'Bridging youth and elders',
      description: 'Partnering with schools, colleges, and resident associations for shared planting, storytelling, and cultural afternoons.',
      category: 'extended',
    },
  ] as NeighbourhoodInitiative[],
  benchSection: {
    headline: 'A Place to Pause. A City That Cares.',
    description:
      'P3J aspires to serve as a trusted connector between local bench makers, thoughtful sponsors, civic bodies, and suitable neighbourhood walking routes. Sponsorship pathways are currently at the interest-gathering stage—no online payments are collected here.',
    tiers: [
      {
        title: 'Individual Sponsorship',
        description: 'Express interest in supporting a single shaded rest bench on a local walking lane.',
      },
      {
        title: 'Shared Sponsorship',
        description: 'Join together with neighbours, walking friends, or an apartment circle to fund a bench jointly.',
      },
      {
        title: 'Memorial or Celebration Sponsorship',
        description: 'Honour a parent, grandparent, or milestone anniversary with a lasting gift of rest for walkers.',
      },
      {
        title: 'Corporate Sponsorship',
        description: 'Partner with P3J to explore age-friendly civic seating in residential districts as CSR projects develop.',
      },
    ] as SponsorshipTier[],
    actions: [
      {
        title: 'Sponsor a Bench',
        description: 'Share your interest in supporting a future rest point and help us map neighbourhood needs.',
        cta: 'Express Bench Interest',
      },
      {
        title: 'Offer a Volunteering Opportunity',
        description: 'Resident associations, schools, or local groups can propose a neighbourhood collaboration.',
        cta: 'Propose Collaboration',
      },
      {
        title: 'Express Interest in Volunteering',
        description: 'Lend time to route mapping, permissions outreach, or hosting gentle community gatherings.',
        cta: 'Volunteer With P3J',
      },
    ],
  },
  greenSpacesSection: {
    headline: 'Green Spaces. Active Lives.',
    description:
      'Unused or underused public corners can grow into welcoming green spaces with native plants, comfortable seating, water points, and senior-friendly outdoor exercise corners where older adults feel invited outdoors each morning.',
    options: [
      {
        title: 'Sponsor a Green Corner',
        description: 'Register interest in supporting native saplings, soil beds, and shaded seating for a local pocket park.',
      },
      {
        title: 'Sponsor Exercise Equipment',
        description: 'Explore supporting gentle, joint-safe outdoor movement equipment tailored to older adults.',
      },
      {
        title: 'Volunteer for Planting & Maintenance',
        description: 'Join future community planting mornings and help water and care for young neighbourhood trees.',
      },
      {
        title: 'Suggest a Site',
        description: 'Know an overlooked street corner or park edge in your locality? Share its location for future study.',
      },
    ],
  },
  livingTraditions: {
    headline: 'Living Traditions Corners – A Place to Gather, Share and Keep Traditions Alive.',
    intro:
      'We envision intimate neighbourhood corners where different generations gather comfortably to share music, stories, crafts, and festive warmth—keeping living heritage alive without formality or barrier.',
    activities: [
      { title: 'Community Singing', description: 'Bhajans, regional melodies, and joyful group choruses.' },
      { title: 'Folk Music & Dance', description: 'Gentle traditional rhythms, claps, and cultural appreciation.' },
      { title: 'Storytelling', description: 'Grandmother tales, neighbourhood histories, and memory sharing.' },
      { title: 'Traditional Crafts', description: 'Embroidery, basketry, paper craft, and handmade keepsakes.' },
      { title: 'Rangoli & Weaving', description: 'Festive floor art, kolam patterns, and handloom appreciation.' },
      { title: 'Cooking Traditions', description: 'Seasonal recipes, heritage grains, and spice wisdom.' },
      { title: 'Intergenerational Activities', description: 'Grandchildren and elders creating, singing, and learning together.' },
      { title: 'Community Celebrations', description: 'Warm, inclusive neighbourhood observances of harvests and festivals.' },
    ] as LivingTraditionActivity[],
    guidelines: [
      '45–60-minute sessions',
      'Seating and shade available',
      'Simple explanations before activities',
      'Participation encouraged but never compulsory',
      'Affordable or community-provided materials',
      'Language-friendly and open to all generations',
    ],
    participationOptions: [
      'Host a Cultural Corner',
      'Share a Tradition',
      'Learn and Participate',
      'Sponsor a Session',
      'Volunteer',
      'Document Traditions',
      'Partner with P3J',
    ],
    monthlyProgramme: [
      {
        weekend: 'First Weekend',
        theme: 'Music and Song',
        focus: 'Group singing, folk melodies, and gentle rhythm circles.',
      },
      {
        weekend: 'Second Weekend',
        theme: 'Story and Memory',
        focus: 'Intergenerational storytelling and neighbourhood oral history.',
      },
      {
        weekend: 'Third Weekend',
        theme: 'Craft and Making',
        focus: 'Rangoli, weaving, mending, and tactile traditional handwork.',
      },
      {
        weekend: 'Fourth Weekend',
        theme: 'Food, Festival and Celebration',
        focus: 'Traditional recipe sharing and warm seasonal gatherings.',
      },
    ] as MonthlyWeekendItem[],
  },
  immediateInitiatives: {
    headline: 'Start With One Neighbourhood, One Partner, and One Small Completed Project.',
    intro:
      'Before attempting city-wide scale, P3J believes meaningful community change starts modestly—proving what works with care, local permissions, and neighbourly stewardship.',
    threeInitial: [
      'Rest Points for Walkers',
      'Green Corners',
      'Story Circles',
    ],
    exampleSteps: [
      'Map one safe walking route frequently used by older neighbours.',
      'Place two sturdy, shaded benches with local permission.',
      'Plant a small native green corner with neighbours caring for it.',
      'Hold one welcoming intergenerational story session nearby.',
    ],
  },
};

export const HEALTH_DISCLAIMER_SECTIONS: DisclaimerSection[] = [
  {
    id: 'about-our-programme',
    title: 'About Our Programme',
    paragraphs: [
      'P3J Add Life Circle is a caring online community for healthy ageing at home, designed for women aged 55 and above. Our sessions include guided relaxation and gentle movement, simple insights from published research on ageing, comfortable paced breathing, gentle hand and foot self-massage, light resistance activities, and mind-engaging activities with lively interaction.',
      'P3J is NOT a medical service, hospital, clinic, therapy practice, or emergency service. Our facilitators are community hosts and educators—not doctors, physiotherapists, or licensed clinicians. All talks, materials, and activities are strictly educational and community-oriented and do not provide medical diagnosis, clinical advice, prescription, or treatment.',
    ],
  },
  {
    id: 'before-participating',
    title: 'Before Participating',
    paragraphs: [
      'Please consult a qualified physician or healthcare professional before beginning any new movement, breathing, light resistance, or self-massage routine—especially if you have heart conditions, high or low blood pressure, respiratory issues, dizziness, recent surgery, joint injuries, osteoporosis, balance concerns, or any chronic medical condition.',
      'Participants should seek appropriate medical advice wherever needed before joining sessions and continue following all guidance provided by their own medical practitioners.',
    ],
  },
  {
    id: 'your-choice-and-comfort',
    title: 'Your Choice and Comfort',
    paragraphs: [
      'All participation in P3J Add Life Circle sessions is completely voluntary. You are always encouraged to listen to your body and move only within your personal range of ease and comfort.',
      'At any moment during a session, you may choose to sit quietly, observe, pause, rest, modify a movement using a sturdy chair, or skip any activity altogether without explanation.',
      'Spoken Session Safety Reminder: Stop immediately if you experience pain, dizziness, faintness, or unusual breathlessness. Chest pain or severe breathing difficulty requires urgent medical attention.',
    ],
  },
  {
    id: 'participating-from-home',
    title: 'Participating from Home',
    paragraphs: [
      'Because sessions are conducted live online via Google Meet from your home, you are responsible for ensuring your surroundings are safe before joining. Please use a well-lit, clutter-free space with non-slip flooring and a sturdy, stable chair without wheels nearby.',
      'Keep drinking water close at hand, wear comfortable clothing, and avoid overexertion. Remember that P3J cannot supervise your physical environment remotely and is not an emergency response service—if a medical emergency occurs at home, contact local emergency medical services or family nearby immediately.',
    ],
  },
  {
    id: 'no-guaranteed-outcomes',
    title: 'No Guaranteed Outcomes',
    paragraphs: [
      'Every individual’s health background, physical capacity, and life circumstances are unique. While P3J explores published research on healthy ageing and encourages positive daily habits, P3J makes no guarantees or promises regarding specific physical, cognitive, or medical outcomes from participation.',
    ],
  },
  {
    id: 'responsibility-and-liability',
    title: 'Responsibility and Limitation of Liability',
    paragraphs: [
      'Movement, paced breathing, light resistance exercise, and self-massage practices naturally involve physical risks, including the possibility of muscle strain, discomfort, dizziness, or falls if performed beyond personal comfort or in an unsafe home environment.',
      'By registering for and participating in P3J Add Life Circle sessions, you acknowledge these inherent risks, affirm that your participation is voluntary, and accept personal responsibility for pacing yourself safely and seeking medical clearance where needed. To the fullest extent permitted by applicable law, P3J Add Life Circle, its founders, facilitators, and contributors are not liable for any injury, loss, or adverse health event arising from voluntary participation in online sessions or independent practice of shared ideas.',
    ],
  },
  {
    id: 'questions',
    title: 'Questions',
    paragraphs: [
      'If you have any questions about how a P3J session works, what comfort adaptations are available, or anything in this Health Disclaimer and Participation Acknowledgement, please reach out to us via our WhatsApp contact option or contact email before joining your session.',
    ],
  },
];
