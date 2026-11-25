export type RoutePath =
  | '/'
  | '/scientific-approach'
  | '/community'
  | `/community/blog/${string}`
  | '/our-story'
  | '/our-story/founder'
  | '/care-beyond-circle'
  | '/health-disclaimer';

export interface SessionActivity {
  id: string;
  title: string;
  duration: string;
  description: string;
  iconName: 'wind' | 'book' | 'heart' | 'hand' | 'sparkles';
}

export interface ScheduleDay {
  day: 'Monday' | 'Wednesday' | 'Friday';
  time: string;
  duration: string;
  language: string;
  flow: string[];
  focusNote: string;
}

export interface OnboardingStep {
  number: string;
  title: string;
  description: string;
}

export interface IcopePillar {
  id: string;
  title: string;
  sanskritTerm: string;
  description: string;
  sessionConnection: string;
}

export interface FrameworkPrinciple {
  title: string;
  meaning: string;
  description: string;
  capacityTag?: string;
  capacityTitle?: string;
  capacityDescription?: string;
  sessionConnection?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  publishedLabel: string;
  readTime: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  paragraphs: string[];
  reflectionPrompt: string;
}

export interface ShortVideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  summary: string;
  youtubeId?: string;
  posterSrc: string;
  posterAlt: string;
  highlights: string[];
}

export interface TimelineStage {
  stageNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface NeighbourhoodInitiative {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'core' | 'extended';
}

export interface SponsorshipTier {
  title: string;
  description: string;
}

export interface LivingTraditionActivity {
  title: string;
  description: string;
}

export interface MonthlyWeekendItem {
  weekend: string;
  theme: string;
  focus: string;
}

export interface DisclaimerSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface TestimonialItem {
  id: string;
  paragraphs: string[];
  name: string;
  role: string;
  location: string;
}

