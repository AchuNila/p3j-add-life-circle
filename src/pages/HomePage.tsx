import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  FileText,
  Hand,
  Heart,
  MessageCircle,
  Sparkles,
  Video,
  Wind,
} from 'lucide-react';
import { IntroBookingForm } from '../components/IntroBookingForm';
import {
  EASE_CALM,
  FadeUp,
  ParallaxFrame,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';
import { SafeImage } from '../components/SafeImage';
import { ShortVideoCarousel } from '../components/ShortVideoCarousel';
import { siteConfig } from '../config/siteConfig';
import { useRouter } from '../context/RouterContext';
import {
  BLOG_ARTICLES,
  HOME_CONTENT,
  IMAGES,
  SCIENTIFIC_CONTENT,
  SPOKEN_SAFETY_REMINDER,
} from '../data/p3jContent';
import { SessionActivity } from '../types';

function ActivityIcon({ name }: { name: SessionActivity['iconName'] }) {
  const cls = 'w-6 h-6 text-[#244B3B]';
  switch (name) {
    case 'wind':
      return <Wind className={cls} aria-hidden="true" />;
    case 'book':
      return <BookOpen className={cls} aria-hidden="true" />;
    case 'heart':
      return <Heart className={cls} aria-hidden="true" />;
    case 'hand':
      return <Hand className={cls} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={cls} aria-hidden="true" />;
  }
}

export function HomePage() {
  const { navigate, openBooking, triggerWhatsApp } = useRouter();
  const [wpName, setWpName] = useState('');
  const [wpWhatsapp, setWpWhatsapp] = useState('');
  const [wpErrors, setWpErrors] = useState<Record<string, string>>({});
  const [wpSubmitted, setWpSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleWhitePaperSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (wpName.trim().length < 2) {
      errs.name = 'Please enter your name.';
    }
    const digits = wpWhatsapp.replace(/[^\d]/g, '');
    if (digits.length < 10 || digits.length > 15) {
      errs.whatsapp = 'Please enter a valid 10 to 15 digit WhatsApp number.';
    }
    setWpErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setWpSubmitted(true);
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#EBF0E6] border-b border-[#244B3B]/10">
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0">
          <img
            src="/assets/aistudio/p3j_bg_image_aadcb61f.png"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.26]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EBF0E6]/50 via-[#EBF0E6]/25 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <FadeUp immediate duration={0.58} className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-sm sm:text-base font-medium text-[#555D54] mb-4">
                {HOME_CONTENT.heroKicker}
              </p>

              <h1 className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-[#244B3B] mb-5">
                {HOME_CONTENT.heroHeadline}
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-[#30362F] leading-snug mb-5">
                {HOME_CONTENT.heroSupportHeadline}
              </p>

              <p className="text-base sm:text-lg text-[#30362F] leading-relaxed mb-4 max-w-xl">
                {HOME_CONTENT.heroIntro}
              </p>

              <p className="text-base font-medium text-[#244B3B] mb-3">
                {HOME_CONTENT.heroTagline} · Hosted live online via Google Meet
              </p>

              <p className="text-sm sm:text-base text-[#30362F] font-medium mb-8 tabular-nums">
                Session Timings: Monday - 10:00 AM IST · Wednesday - 10:00 AM IST · Friday - 10:00 AM IST
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="group min-h-[52px] px-7 py-3.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  Book a Free Intro Session
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/scientific-approach')}
                  className="min-h-[52px] px-6 py-3.5 rounded-xl border border-[#244B3B]/30 bg-[#FFFEFA] text-[#244B3B] text-base font-semibold hover:bg-[#EBF0E6] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  Explore Our Approach
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-[#244B3B]/15 text-[#244B3B]">
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-[13px] font-semibold tracking-wide">
                  <li className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B]" aria-hidden="true" />
                    PARASPARA: MUTUAL
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B]" aria-hidden="true" />
                    UPAGRAHA: SUPPORT
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B]" aria-hidden="true" />
                    JIVANAM: LIVING BEINGS
                  </li>
                </ul>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#244B3B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B] shrink-0" aria-hidden="true" />
                  <span>Life Flourishes With Mutual Support. Together we thrive.</span>
                </p>
              </div>
            </FadeUp>

            <FadeUp immediate delay={0.12} duration={0.62} className="lg:col-span-6 flex">
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#244B3B]/15 bg-[#EBF0E6] min-h-[340px] lg:min-h-[480px]">
                <ParallaxFrame offset={10} className="w-full h-full min-h-[340px]">
                  <SafeImage
                    src={IMAGES.heroOnlineCircle}
                    alt="Indian woman over 55 participating warmly in a live P3J Add Life Circle online session from her living room"
                    className="w-full h-full object-cover lg:h-full"
                    containerClassName="w-full h-full min-h-[340px]"
                  />
                </ParallaxFrame>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A382B]/90 via-[#1A382B]/55 to-transparent p-6 sm:p-7 text-[#FFFEFA]">
                  <p className="text-sm font-medium text-[#F8F5EC]/90 flex items-center gap-2 mb-1">
                    <Video className="w-4 h-4 text-[#C6A66A]" aria-hidden="true" />
                    Live Online via Google Meet · 50 Minutes
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-medium text-[#FFFEFA]">
                    Aging Together, Rooted in Wisdom.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 1B. WHITE PAPER ABSTRACT SHOWCASE */}
      <section id="white-paper-abstract" className="relative overflow-hidden bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10 scroll-mt-28">
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0">
          <img
            src="/assets/aistudio/p3j_bg_image_aadcb61f.png"
            alt=""
            className="w-full h-full object-cover object-left opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EC]/20 via-[#F8F5EC]/75 to-[#F8F5EC]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Full White Paper Part-1 Abstract */}
            <FadeUp className="lg:col-span-7 space-y-5">
              <p className="text-sm font-medium text-[#555D54]">
                P3J White Paper &middot; Part 1 Abstract
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] leading-tight">
                Read the Abstract Below
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#30362F] leading-relaxed">
                <p>
                  Over the past century, global average life expectancy rose from 47 to 73.2 years, yet healthy life expectancy reaches only 64.0 years. This creates a 9.2-year gap where the average person spends roughly one-fifth of life managing chronic illness and physical disability. Conventional medicine excels at acute trauma, but intervenes decades too late against slow-developing conditions—primarily heart disease, cancer, dementia, and diabetes.
                </p>
                <p>
                  To bridge this gap, the World Health Organization’s healthy ageing framework focuses on building and preserving intrinsic capacity—the vital physical, mental, and metabolic reserves that power everyday independence. Long-term studies show that protecting these internal reserves slashes early death risk by 43%, reduces daily functional disability by 63%, and adds 8 to 10 disease-free years.
                </p>
                <p>
                  While healthy longevity ultimately depends on multiple interconnected habits, this paper suggests circadian rhythm alignment as an accessible, high-leverage starting point. By practicing Four Daily Anchors—waking with morning sunlight, keeping a consistent daytime eating window, moving daily, and dimming evening lights—we can synchronize internal organ clocks and support natural cellular repair.
                </p>
              </div>
            </FadeUp>

            {/* Right Column: Three Sections in the White Paper - Part 1 */}
            <FadeUp delay={0.08} className="lg:col-span-5">
              <div className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 shadow-[0_14px_38px_-12px_rgba(36,75,59,0.14)] p-7 sm:p-9 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#244B3B]/12">
                  <svg
                    viewBox="0 0 40 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-9 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 53C20 44 20 34 20 26"
                      stroke="#7E9774"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 4C11.5 11 8 21.5 11 31.5C13 38 17 41.5 20 43C23 41.5 27 38 29 31.5C32 21.5 28.5 11 20 4Z"
                      fill="#DCE6D3"
                      stroke="#8BA481"
                      strokeWidth="1.2"
                    />
                    <ellipse cx="20" cy="24" rx="5.5" ry="7.5" fill="#C6A66A" fillOpacity="0.65" />
                    <ellipse cx="20" cy="24.5" rx="3.4" ry="4.8" fill="#244B3B" />
                    <circle cx="20.8" cy="23.2" r="1.1" fill="#F8F5EC" />
                  </svg>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#244B3B] leading-snug">
                    Three sections in the White Paper – Part 1:
                  </h3>
                </div>

                <ul className="space-y-4 text-base text-[#30362F] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#C6A66A] shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-[#244B3B]">
                        The Lifespan–Healthspan Gap:
                      </strong>{' '}
                      We live longer, but spend our final 9+ years managing preventable illness and disability.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#C6A66A] shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-[#244B3B]">
                        Your Health Savings Account:
                      </strong>{' '}
                      Intrinsic capacity acts as your internal cushion—keeping you strong enough to handle daily life and bounce back from setbacks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#C6A66A] shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-[#244B3B]">
                        The Daily Clock:
                      </strong>{' '}
                      Consistency beats intensity. Anchoring your light, meals, movement, and sleep sets the master switch for healthy, independent longevity.
                    </span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      const target = document.getElementById('white-paper');
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] hover:shadow-[0_10px_24px_-10px_rgba(36,75,59,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Download White Paper
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. IS THIS FOR ME? */}
      <section id="welcome" className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeUp className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#244B3B]/15 aspect-[4/3] bg-[#EBF0E6]">
                <ParallaxFrame offset={8} className="w-full h-full">
                  <SafeImage
                    src={IMAGES.isThisForMeOnline}
                    alt="Smiling Indian woman aged 55+ joining an online P3J session comfortably from her garden chair on her phone"
                    className="w-full h-full object-cover object-top"
                    containerClassName="w-full h-full"
                  />
                </ParallaxFrame>
              </div>
              <p className="mt-3 text-sm font-serif italic text-[#555D54]">
                Warm companionship and mutual encouragement for women aged 55+.
              </p>
            </FadeUp>

            <FadeUp delay={0.08} className="lg:col-span-6 space-y-5">
              <p className="text-sm font-medium text-[#555D54]">
                Welcome to the Circle
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
                {HOME_CONTENT.isThisForMe.heading}
              </h2>
              <p className="text-xl font-serif text-[#244B3B]/90">
                {HOME_CONTENT.isThisForMe.lead}
              </p>

              {HOME_CONTENT.isThisForMe.paragraphs.map((para) => (
                <p key={para} className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                  {para}
                </p>
              ))}

              <StaggerGroup staggerDelay={0.06} className="space-y-3 pt-2">
                {HOME_CONTENT.isThisForMe.highlights.map((item) => (
                  <StaggerItem key={item} className="flex items-start gap-3 text-base text-[#30362F]">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#EBF0E6] text-[#244B3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2B. TESTIMONIALS */}
      <section id="testimonials" className="bg-[#EBF0E6]/65 py-16 sm:py-20 border-b border-[#244B3B]/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              Voices from Our Circle
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] mb-3 text-balance">
              Testimonials
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              Reflections from few of our founding members – Words from those who continue to grow with us – loving their lives and adding life to their years
            </p>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {HOME_CONTENT.testimonials.map((item, idx) => {
              const spanClasses = [
                'lg:col-span-7',
                'lg:col-span-5',
                'lg:col-span-6',
                'lg:col-span-6',
                'lg:col-span-4',
                'lg:col-span-8',
              ];
              return (
                <StaggerItem
                  key={item.id}
                  hoverLift
                  className={`${spanClasses[idx] ?? 'lg:col-span-6'} rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-7 sm:p-8 flex flex-col justify-between gap-6`}
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className="block font-serif text-4xl leading-none text-[#C6A66A] mb-3 select-none"
                    >
                      “
                    </span>
                    <div className="space-y-3.5 text-base text-[#30362F] leading-relaxed">
                      {item.paragraphs.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <footer className="pt-5 border-t border-[#244B3B]/10">
                    <p className="font-serif text-lg font-semibold text-[#244B3B]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#555D54] mt-0.5">
                      {item.role} <span aria-hidden="true">·</span> {item.location}
                    </p>
                  </footer>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. WHAT HAPPENS IN A SESSION? */}
      <section id="sessions" className="bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              The 50-Minute Add Life Circle
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] mb-4">
              What Happens in a Session?
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              Each gathering follows a calm, predictable 50-minute flow designed for comfort at home. You are always welcome to participate seated on a chair, pause whenever you wish, or simply observe.
            </p>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOME_CONTENT.sessionActivities.map((activity, idx) => (
              <StaggerItem
                key={activity.id}
                hoverLift
                className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF0E6] flex items-center justify-center">
                      <ActivityIcon name={activity.iconName} />
                    </div>
                    <span className="text-sm font-medium text-[#555D54] tabular-nums">
                      {idx === 0
                        ? '8 mins'
                        : idx === 3
                          ? '15 mins'
                          : `0${idx + 1} · ${activity.duration}`}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#244B3B] mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeUp delay={0.08} className="mt-10 rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-base text-[#30362F] leading-relaxed max-w-3xl">
              <strong className="text-[#244B3B]">Spoken Safety Reminder:</strong>{' '}
              {SPOKEN_SAFETY_REMINDER}
            </p>
            <button
              type="button"
              onClick={() => navigate('/health-disclaimer')}
              className="text-base font-semibold text-[#244B3B] underline underline-offset-4 hover:text-[#1A382B] shrink-0 self-start md:self-center cursor-pointer transition-colors"
            >
              Read Health Disclaimer
            </button>
          </FadeUp>
        </div>
      </section>

      {/* 4. WEEKLY SCHEDULE */}
      <section id="schedule" className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#555D54] mb-2">
                Consistent Weekly Rhythm
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
                Weekly Schedule
              </h2>
            </div>

            <div className="text-base font-medium text-[#244B3B] flex flex-wrap items-center gap-x-5 gap-y-2 tabular-nums">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C6A66A]" aria-hidden="true" />
                Monday - 10:00 AM IST · Wednesday - 10:00 AM IST · Friday - 10:00 AM IST
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C6A66A]" aria-hidden="true" />
                50 minutes
              </span>
            </div>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {HOME_CONTENT.weeklySchedule.map((dayItem, index) => {
              const cardStyles = [
                'bg-[#F8F5EC] border-[#244B3B]/15',
                'bg-[#EBF0E6]/70 border-[#244B3B]/20',
                'bg-[#F8F5EC] border-[#C6A66A]/40',
              ];
              return (
                <StaggerItem
                  key={dayItem.day}
                  hoverLift
                  className={`rounded-2xl border p-7 flex flex-col justify-between ${cardStyles[index]}`}
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-3 pb-4 mb-5 border-b border-[#244B3B]/12">
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B]">
                        {dayItem.day}
                      </h3>
                      <span className="text-sm font-semibold text-[#244B3B] tabular-nums">
                        {dayItem.time}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-[#555D54] mb-4">
                      {dayItem.language} · {dayItem.duration}
                    </p>

                    <ol className="space-y-2.5 mb-6">
                      {dayItem.flow.map((step, stepIndex) => (
                        <li
                          key={step}
                          className="flex items-center gap-3 text-base sm:text-lg font-medium text-[#244B3B]"
                        >
                          <span className="w-7 h-7 rounded-lg bg-[#FFFEFA] border border-[#244B3B]/20 text-sm font-semibold flex items-center justify-center shrink-0 tabular-nums">
                            {stepIndex + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <p className="text-base text-[#30362F] leading-relaxed pt-4 border-t border-[#244B3B]/10">
                    {dayItem.focusNote}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 4B. WHITE PAPER SECTION (15-PAGE COLLECTION OF NOTES — PAGE 1 DISPLAYED) */}
      <section id="white-paper" className="bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl mb-10">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              P3J Whitepaper - Research Review - 15 Pages
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] mb-3">
              Vitality & Everyday Strength for Women aged 55+
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              Explore key findings curated from international scientific studies on healthy, independent ageing. To receive the complete white paper with infographics, tap the WhatsApp button.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Page 1 Manuscript Sheet */}
            <FadeUp className="lg:col-span-7 relative">
              {/* Subtle stacked paper shadow sheets beneath Page 1 */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute inset-x-3 -bottom-2.5 top-3 rounded-2xl bg-[#EBF0E6] border border-[#244B3B]/12"
              />
              <article className="relative rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/20 p-7 sm:p-10 overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#244B3B]/12">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#244B3B]">
                    <FileText className="w-4 h-4 text-[#C6A66A]" aria-hidden="true" />
                    P3J White Paper
                  </span>
                  <span className="text-sm font-semibold text-[#555D54] tabular-nums">
                    {SCIENTIFIC_CONTENT.whitePaper.pageOne.pageLabel}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-5">
                  Foundation of Healthy Ageing
                </h3>

                {/* Visible opening excerpt */}
                <div className="article-prose text-left space-y-4">
                  <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:text-[#244B3B] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                    {SCIENTIFIC_CONTENT.whitePaper.pageOne.paragraphs[0]}
                  </p>
                </div>

                {/* Partially veiled continuation of Page 1 */}
                <div className="relative mt-4 max-h-[250px] overflow-hidden select-none pointer-events-none" aria-hidden="true">
                  <div className="article-prose text-left space-y-4 blur-[2.5px] opacity-45">
                    {SCIENTIFIC_CONTENT.whitePaper.pageOne.paragraphs.slice(1).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-[#244B3B]/12 blur-[2.5px] opacity-40">
                    <p className="font-serif italic text-lg text-[#244B3B] leading-relaxed">
                      “{SCIENTIFIC_CONTENT.whitePaper.pageOne.keyTakeaway}”
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FFFEFA]/10 via-[#FFFEFA]/80 to-[#FFFEFA]" />
                </div>

                {/* Request the White Paper Gate Card layered on top */}
                <div className="relative z-10 -mt-44 sm:-mt-48 rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/18 shadow-[0_12px_32px_-8px_rgba(36,75,59,0.14)] p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-[#244B3B] shrink-0" aria-hidden="true" />
                    <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B]">
                      Request the White Paper
                    </h4>
                  </div>
                  <p className="text-base text-[#30362F] mb-6 leading-relaxed">
                    Receive the complete white paper <em>“The Foundations of Healthy Ageing”</em>.
                  </p>

                  {wpSubmitted ? (
                    <div className="rounded-xl bg-[#EBF0E6] border border-[#244B3B]/20 p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#244B3B] shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="font-serif text-xl font-semibold text-[#244B3B]">
                            Thank you, {wpName}
                          </p>
                          <p className="text-base text-[#30362F] mt-1">
                            {siteConfig.whitePaperUrl
                              ? 'Your white paper is ready to download below.'
                              : 'Your white paper request has been recorded. You can also tap below to receive the complete 15-page white paper directly on WhatsApp.'}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 pt-1">
                        {siteConfig.whitePaperUrl ? (
                          <a
                            href={siteConfig.whitePaperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-sm font-semibold hover:bg-[#1A382B] transition-colors inline-flex items-center gap-2"
                          >
                            <Download className="w-4 h-4" aria-hidden="true" />
                            Open White Paper PDF
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              triggerWhatsApp({
                                title: 'Get the 15-Page White Paper on WhatsApp',
                                message: SCIENTIFIC_CONTENT.whitePaper.whatsappRequestMessage,
                              })
                            }
                            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-sm font-semibold hover:bg-[#1A382B] transition-colors inline-flex items-center gap-2 cursor-pointer"
                          >
                            <MessageCircle className="w-4 h-4" aria-hidden="true" />
                            Receive on WhatsApp
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setWpSubmitted(false);
                            setWpName('');
                            setWpWhatsapp('');
                          }}
                          className="text-sm font-semibold text-[#244B3B] underline underline-offset-4 cursor-pointer"
                        >
                          Submit another request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleWhitePaperSubmit} noValidate className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="home-wp-name" className="block text-base font-medium text-[#244B3B] mb-1.5">
                            Your Name
                          </label>
                          <input
                            id="home-wp-name"
                            type="text"
                            value={wpName}
                            onChange={(e) => setWpName(e.target.value)}
                            placeholder="e.g., Lakshmi Nair"
                            className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base text-[#30362F]"
                          />
                          {wpErrors.name && (
                            <p className="mt-1 text-sm text-[#9A3412] font-medium" role="alert">
                              {wpErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="home-wp-whatsapp" className="block text-base font-medium text-[#244B3B] mb-1.5">
                            WhatsApp Number
                          </label>
                          <input
                            id="home-wp-whatsapp"
                            type="tel"
                            value={wpWhatsapp}
                            onChange={(e) => setWpWhatsapp(e.target.value)}
                            placeholder="e.g., +91 98XXXXXXXX"
                            className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base text-[#30362F] tabular-nums"
                          />
                          {wpErrors.whatsapp && (
                            <p className="mt-1 text-sm text-[#9A3412] font-medium" role="alert">
                              {wpErrors.whatsapp}
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="min-h-[48px] px-6 py-3 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        Download White Paper
                      </button>
                    </form>
                  )}
                </div>
              </article>
            </FadeUp>

            {/* Contents Overview & WhatsApp Continuation Panel */}
            <FadeUp delay={0.1} className="lg:col-span-5">
              <aside className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-7 sm:p-8 space-y-6">
                <div>
                  <p className="text-sm font-medium text-[#555D54] mb-1">
                    Inside the 15-Page Collection
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-[#244B3B]">
                    What You Will Receive
                  </h3>
                </div>

                <ul className="divide-y divide-[#244B3B]/10">
                  {SCIENTIFIC_CONTENT.whitePaper.collectionOverview.map((section) => (
                    <li key={section.pages} className="py-3.5 first:pt-0 last:pb-0">
                      <p className="text-sm font-semibold text-[#C6A66A] tabular-nums">
                        {section.pages}
                      </p>
                      <p className="text-base font-medium text-[#244B3B] mt-0.5">
                        {section.topic}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-[#EBF0E6]/75 border border-[#244B3B]/15 p-5 space-y-4">
                  <p className="text-base text-[#30362F] leading-relaxed">
                    Want to continue reading Pages 2 to 15 at your own pace? Request the complete 15-page notes collection directly on WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      triggerWhatsApp({
                        title: 'Get the 15-Page White Paper on WhatsApp',
                        message: SCIENTIFIC_CONTENT.whitePaper.whatsappRequestMessage,
                      })
                    }
                    className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Continue Reading on WhatsApp
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/scientific-approach')}
                  className="group inline-flex items-center gap-2 text-base font-semibold text-[#244B3B] hover:underline underline-offset-4 cursor-pointer"
                >
                  Explore Scientific Approach
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </aside>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. HOW DO I BEGIN? + INLINE BOOKING */}
      <section id="begin" className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              Simple Google Meet Onboarding
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] mb-3">
              How Do I Begin?
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              Four straightforward steps to join your first session from home using Google Meet and WhatsApp.
            </p>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {HOME_CONTENT.onboardingSteps.map((step) => (
              <StaggerItem
                key={step.number}
                hoverLift
                className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-6"
              >
                <p className="font-serif text-3xl font-semibold text-[#C6A66A] mb-3 tabular-nums">
                  {step.number}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#244B3B] mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-[#30362F] leading-relaxed">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeUp className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="mb-7">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-2">
                Book a Free Intro Session
              </h3>
              <p className="text-base text-[#30362F]">
                Choose an upcoming Monday, Wednesday, or Friday morning at 10:00 AM IST. Your Google Meet link will be sent directly to your WhatsApp.
              </p>
            </div>
            <IntroBookingForm />
          </FadeUp>
        </div>
      </section>

      {/* 5B. COMMUNITY SHORTS & ESSAYS PREVIEW */}
      <section className="bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ShortVideoCarousel />

          <div className="pt-8 border-t border-[#244B3B]/12">
            <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-medium text-[#555D54] mb-1">
                  From Community Blogs & Videos
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B]">
                  Recent Community Essays
                </h3>
              </div>

              <button
                type="button"
                onClick={() => navigate('/community')}
                className="group min-h-[44px] px-5 py-2.5 rounded-xl border border-[#244B3B]/30 bg-[#FFFEFA] text-[#244B3B] text-base font-semibold hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                Explore Community Blogs & Videos
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </FadeUp>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_ARTICLES.map((article) => (
                <StaggerItem key={article.slug} hoverLift className="flex">
                  <a
                    href={`/community/blog/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/community/blog/${article.slug}`);
                    }}
                    className="group w-full rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-6 flex flex-col justify-between hover:border-[#244B3B]/35 transition-colors duration-300"
                  >
                    <div>
                      <p className="text-xs font-medium text-[#555D54] mb-2">
                        {article.category} · {article.readTime}
                      </p>
                      <h4 className="font-serif text-xl font-semibold text-[#244B3B] leading-snug mb-2 group-hover:underline underline-offset-4">
                        {article.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#30362F] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#244B3B]">
                      Read Essay
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY INVITATION + CARE BEYOND PREVIEW */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="rounded-2xl bg-[#244B3B] text-[#FFFEFA] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm font-medium text-[#C6A66A]">
                Parasparopagraho Jīvānām · Mutual Support
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FFFEFA]">
                {HOME_CONTENT.communityInvitation.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#F8F5EC]/90 leading-relaxed max-w-2xl">
                {HOME_CONTENT.communityInvitation.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <button
                type="button"
                onClick={() =>
                  triggerWhatsApp({
                    title: 'Invite a Sister via WhatsApp',
                    message: HOME_CONTENT.communityInvitation.shareMessage,
                    isShare: true,
                  })
                }
                className="min-h-[48px] px-6 py-3.5 rounded-xl bg-[#FFFEFA] text-[#244B3B] text-base font-semibold hover:bg-[#EBF0E6] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Share Invitation on WhatsApp
              </button>
            </div>
          </FadeUp>

          {/* Care Beyond Circle Cross-Link */}
          <FadeUp delay={0.08} className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 aspect-[16/10] rounded-xl overflow-hidden border border-[#244B3B]/15">
              <SafeImage
                src={IMAGES.gardenBenchCouple}
                alt="Older Indian couple sitting comfortably on a shaded wooden park bench"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm font-medium text-[#555D54]">
                Neighbourhood Aspirations
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B]">
                Care Beyond Circle
              </h2>
              <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                Healthy ageing is also shaped by the streets and green spaces right outside our door. Explore how P3J proposes to inspire Rest Points for Walkers, Green Corners, and Living Traditions Corners in Indian neighbourhoods.
              </p>
              <button
                type="button"
                onClick={() => navigate('/care-beyond-circle')}
                className="group min-h-[44px] px-5 py-2.5 rounded-xl border border-[#244B3B] text-[#244B3B] text-base font-semibold hover:bg-[#244B3B] hover:text-[#FFFEFA] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Care Beyond Circle
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="bg-[#F8F5EC] py-16 sm:py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <FadeUp className="lg:col-span-4 space-y-4">
              <p className="text-sm font-medium text-[#555D54]">
                Common Questions
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                Clear answers about our online sessions, gentle pace, and caring community for women over 55.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    triggerWhatsApp({
                      title: 'Ask a Question on WhatsApp',
                      message:
                        'Namaste P3J Add Life Circle! I have a question before joining a session.',
                    })
                  }
                  className="min-h-[44px] px-5 py-2.5 rounded-xl border border-[#244B3B]/30 bg-[#FFFEFA] text-[#244B3B] text-base font-semibold hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Ask Us on WhatsApp
                </button>
              </div>
            </FadeUp>

            <StaggerGroup className="lg:col-span-8 space-y-4">
              {HOME_CONTENT.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                const panelId = `home-faq-panel-${index}`;
                return (
                  <StaggerItem
                    key={faq.question}
                    className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 overflow-hidden transition-colors duration-200 hover:border-[#244B3B]/30"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="flex items-baseline gap-3.5 pr-2">
                        <span className="font-serif text-lg font-semibold text-[#C6A66A] tabular-nums shrink-0">
                          0{index + 1}
                        </span>
                        <span className="font-serif text-xl sm:text-[22px] font-semibold text-[#244B3B] leading-snug">
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className={`w-9 h-9 rounded-full bg-[#EBF0E6] text-[#244B3B] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: EASE_CALM }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 pl-[56px] sm:pl-[64px]">
                            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>
    </div>
  );
}
