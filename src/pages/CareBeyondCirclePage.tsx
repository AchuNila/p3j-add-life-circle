import React, { useState } from 'react';
import { Check, CheckCircle2, HeartHandshake, MapPin, Sprout } from 'lucide-react';
import {
  FadeUp,
  ParallaxFrame,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';
import { SafeImage } from '../components/SafeImage';
import { CARE_BEYOND_CONTENT, IMAGES } from '../data/p3jContent';

export function CareBeyondCirclePage() {
  const [selectedInterest, setSelectedInterest] = useState('Sponsor a Bench');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const jumpToInterestForm = (interestTitle: string) => {
    setSelectedInterest(interestTitle);
    setSubmitted(false);
    const el = document.getElementById('care-beyond-interest-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (name.trim().length < 2) errs.name = 'Please enter your full name.';
    const digits = whatsapp.replace(/[^\d]/g, '');
    if (digits.length < 10 || digits.length > 15) {
      errs.whatsapp = 'Please enter a valid 10 to 15 digit WhatsApp number.';
    }
    if (neighbourhood.trim().length < 2) {
      errs.neighbourhood = 'Please enter your city or neighbourhood.';
    }
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
  };

  return (
    <div>
      {/* 1. Hero Introduction */}
      <section className="bg-[#F8F5EC] py-14 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <FadeUp immediate className="lg:col-span-7 space-y-5">
              <p className="text-sm font-medium text-[#555D54]">
                Proposed Community Initiatives · Aspiring Neighbourhood Vision
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#244B3B]">
                Care Beyond Circle
              </h1>
              <p className="text-lg sm:text-xl text-[#30362F] leading-relaxed">
                {CARE_BEYOND_CONTENT.intro}
              </p>
              <p className="text-base sm:text-lg text-[#555D54] leading-relaxed">
                {CARE_BEYOND_CONTENT.philosophyNote}
              </p>
            </FadeUp>

            <FadeUp immediate delay={0.1} className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#244B3B]/15 aspect-[4/3] bg-[#EBF0E6]">
                <SafeImage
                  src={IMAGES.gardenBenchCouple}
                  alt="Older Indian couple resting peacefully on a shaded wooden park bench"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <p className="mt-3 text-sm font-serif italic text-[#555D54]">
                A shaded place to pause turns everyday neighbourhood streets into welcoming spaces.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. P3J in the Neighbourhood */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="max-w-2xl">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              Seven Pillars of Neighbourhood Care
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
              P3J in the Neighbourhood
            </h2>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARE_BEYOND_CONTENT.neighbourhoodCards.map((card, index) => (
              <StaggerItem
                key={card.id}
                hoverLift
                className={`rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-7 flex flex-col justify-between ${
                  index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-[#C6A66A] mb-2">
                    0{index + 1} · {card.tagline}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-[#244B3B] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Extended Community Aspirations */}
          <div className="pt-6">
            <FadeUp>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-6">
                Broader Community Programmes We Aspire to Nurture
              </h3>
            </FadeUp>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CARE_BEYOND_CONTENT.extendedInitiatives.map((item) => (
                <StaggerItem
                  key={item.id}
                  hoverLift
                  className="rounded-xl bg-[#FFFEFA] border border-[#244B3B]/15 p-5 space-y-2"
                >
                  <p className="text-xs uppercase tracking-wider text-[#555D54] font-medium">
                    {item.tagline}
                  </p>
                  <h4 className="font-serif text-xl font-semibold text-[#244B3B]">
                    {item.title}
                  </h4>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* 3. Bench Sponsorship and Volunteering */}
      <section className="bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#555D54]">
              Bench Sponsorship & Volunteering · Future Collaborative Pathways
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
              {CARE_BEYOND_CONTENT.benchSection.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              {CARE_BEYOND_CONTENT.benchSection.description}
            </p>
          </FadeUp>

          {/* 4 Sponsorship Options */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARE_BEYOND_CONTENT.benchSection.tiers.map((tier) => (
              <StaggerItem
                key={tier.title}
                hoverLift
                className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-[#244B3B] mb-2">
                  {tier.title}
                </h3>
                <p className="text-base text-[#30362F] leading-relaxed">
                  {tier.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* 3 Prominent Action Cards */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CARE_BEYOND_CONTENT.benchSection.actions.map((action) => (
              <StaggerItem
                key={action.title}
                hoverLift
                className="rounded-2xl bg-[#244B3B] text-[#FFFEFA] p-7 flex flex-col justify-between gap-6"
              >
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#FFFEFA] mb-3">
                    {action.title}
                  </h3>
                  <p className="text-base text-[#F8F5EC]/90 leading-relaxed">
                    {action.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => jumpToInterestForm(action.title)}
                  className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-[#FFFEFA] text-[#244B3B] text-base font-semibold hover:bg-[#EBF0E6] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  {action.cta}
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 4. Green Outdoor Exercise Corners */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <FadeUp className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#244B3B]/15 aspect-[16/9] bg-[#EBF0E6]">
                <ParallaxFrame offset={8} className="w-full h-full">
                  <SafeImage
                    src={IMAGES.greenCornerPark}
                    alt="Shaded Indian neighbourhood green corner with native trees, benches, and older residents stretching and walking"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </ParallaxFrame>
              </div>
            </FadeUp>

            <FadeUp delay={0.08} className="lg:col-span-6 space-y-4">
              <p className="text-sm font-medium text-[#555D54] inline-flex items-center gap-2">
                <Sprout className="w-4 h-4 text-[#244B3B]" aria-hidden="true" />
                Accessible Pocket Parks
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
                {CARE_BEYOND_CONTENT.greenSpacesSection.headline}
              </h2>
              <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                {CARE_BEYOND_CONTENT.greenSpacesSection.description}
              </p>
            </FadeUp>
          </div>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARE_BEYOND_CONTENT.greenSpacesSection.options.map((opt) => (
              <StaggerItem
                key={opt.title}
                hoverLift
                className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-6 flex flex-col justify-between gap-4"
              >
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#244B3B] mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    {opt.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => jumpToInterestForm(opt.title)}
                  className="text-left text-base font-semibold text-[#244B3B] underline underline-offset-4 hover:text-[#1A382B] transition-colors cursor-pointer"
                >
                  Register interest →
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5. Living Traditions / Cultural Corners */}
      <section className="bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#555D54]">
              Intergenerational Heritage Spaces
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
              {CARE_BEYOND_CONTENT.livingTraditions.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              {CARE_BEYOND_CONTENT.livingTraditions.intro}
            </p>
          </FadeUp>

          {/* 8 Activity Cards */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARE_BEYOND_CONTENT.livingTraditions.activities.map((act) => (
              <StaggerItem
                key={act.title}
                hoverLift
                className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-[#244B3B] mb-2">
                  {act.title}
                </h3>
                <p className="text-base text-[#30362F] leading-relaxed">
                  {act.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Inclusive Format + Participation Options */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <FadeUp className="lg:col-span-6 rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-7 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#244B3B] mb-5">
                Inclusive Format Guidelines
              </h3>
              <ul className="space-y-3">
                {CARE_BEYOND_CONTENT.livingTraditions.guidelines.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#30362F]">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#EBF0E6] text-[#244B3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.08} className="lg:col-span-6 rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-7 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#244B3B] mb-5">
                Ways to Participate
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CARE_BEYOND_CONTENT.livingTraditions.participationOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => jumpToInterestForm(`Living Traditions: ${opt}`)}
                    className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/15 text-left text-base font-medium text-[#244B3B] hover:bg-[#EBF0E6] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Example Monthly Programme */}
          <FadeUp className="rounded-2xl bg-[#EBF0E6]/75 border border-[#244B3B]/15 p-7 sm:p-9">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-6">
              Example Monthly Cultural Corner Programme
            </h3>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CARE_BEYOND_CONTENT.livingTraditions.monthlyProgramme.map((wk) => (
                <StaggerItem
                  key={wk.weekend}
                  hoverLift
                  className="rounded-xl bg-[#FFFEFA] border border-[#244B3B]/12 p-5"
                >
                  <p className="text-sm font-semibold text-[#C6A66A] mb-1">
                    {wk.weekend}
                  </p>
                  <h4 className="font-serif text-xl font-semibold text-[#244B3B] mb-2">
                    {wk.theme}
                  </h4>
                  <p className="text-sm sm:text-base text-[#30362F] leading-relaxed">
                    {wk.focus}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </FadeUp>
        </div>
      </section>

      {/* 6. Immediate Neighbourhood Initiatives + Methodology */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeUp className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#555D54] inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#244B3B]" aria-hidden="true" />
              Immediate Neighbourhood Initiatives
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
              {CARE_BEYOND_CONTENT.immediateInitiatives.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              {CARE_BEYOND_CONTENT.immediateInitiatives.intro}
            </p>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CARE_BEYOND_CONTENT.immediateInitiatives.threeInitial.map((title, idx) => (
              <StaggerItem
                key={title}
                hoverLift
                className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-6"
              >
                <p className="text-sm font-semibold text-[#C6A66A] mb-2 tabular-nums">
                  Initial Focus 0{idx + 1}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#244B3B]">
                  {title}
                </h3>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeUp className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-7 sm:p-9">
            <h3 className="font-serif text-2xl font-semibold text-[#244B3B] mb-5">
              How One Small Completed Project Begins
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CARE_BEYOND_CONTENT.immediateInitiatives.exampleSteps.map((step, idx) => (
                <div key={step} className="space-y-2">
                  <span className="inline-block font-serif text-2xl font-semibold text-[#244B3B] tabular-nums">
                    0{idx + 1}
                  </span>
                  <p className="text-base text-[#30362F] leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 7. Community Interest Form (No payment gateway) */}
      <section id="care-beyond-interest-form" className="bg-[#F8F5EC] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-7 sm:p-10">
            <div className="flex items-center gap-3 mb-3">
              <HeartHandshake className="w-6 h-6 text-[#244B3B]" aria-hidden="true" />
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B]">
                Express Interest in Care Beyond Circle
              </h2>
            </div>
            <p className="text-base text-[#30362F] mb-6 leading-relaxed">
              Share your interest in volunteering, suggesting a neighbourhood site, hosting a Cultural Corner, or exploring future bench and green corner sponsorships. No payments are collected on this website.
            </p>

            {submitted ? (
              <div className="rounded-xl bg-[#EBF0E6] border border-[#244B3B]/20 p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#244B3B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#244B3B]">
                      Thank You for Your Neighbourhood Interest
                    </h3>
                    <p className="text-base text-[#30362F] mt-1">
                      We have noted your interest in <strong>{selectedInterest}</strong> for{' '}
                      <strong>{neighbourhood}</strong>. Our community team will reach out via WhatsApp ({whatsapp}).
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setNotes('');
                  }}
                  className="text-sm font-semibold text-[#244B3B] underline underline-offset-4 cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInterestSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="care-interest" className="block text-base font-medium text-[#244B3B] mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    id="care-interest"
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base text-[#30362F]"
                  >
                    <option value="Sponsor a Bench">Sponsor a Bench (Interest Inquiry)</option>
                    <option value="Offer a Volunteering Opportunity">Offer a Volunteering Opportunity</option>
                    <option value="Express Interest in Volunteering">Express Interest in Volunteering</option>
                    <option value="Sponsor a Green Corner">Sponsor a Green Corner</option>
                    <option value="Sponsor Exercise Equipment">Sponsor Exercise Equipment</option>
                    <option value="Volunteer for Planting & Maintenance">Volunteer for Planting & Maintenance</option>
                    <option value="Suggest a Site">Suggest a Site</option>
                    <option value="Living Traditions: Host a Cultural Corner">Living Traditions: Host a Cultural Corner</option>
                    <option value="Living Traditions: Share a Tradition">Living Traditions: Share a Tradition</option>
                    <option value="Living Traditions: Partner with P3J">Living Traditions: Partner with P3J</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="care-name" className="block text-base font-medium text-[#244B3B] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      id="care-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Ananya Deshmukh"
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base text-[#30362F]"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[#9A3412] font-medium" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="care-whatsapp" className="block text-base font-medium text-[#244B3B] mb-1.5">
                      WhatsApp Number
                    </label>
                    <input
                      id="care-whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="e.g., +91 98XXXXXXXX"
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base text-[#30362F] tabular-nums"
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-[#9A3412] font-medium" role="alert">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="care-neighbourhood" className="block text-base font-medium text-[#244B3B] mb-1.5">
                    City & Neighbourhood
                  </label>
                  <input
                    id="care-neighbourhood"
                    type="text"
                    value={neighbourhood}
                    onChange={(e) => setNeighbourhood(e.target.value)}
                    placeholder="e.g., Indiranagar, Bengaluru"
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base text-[#30362F]"
                  />
                  {errors.neighbourhood && (
                    <p className="mt-1 text-sm text-[#9A3412] font-medium" role="alert">
                      {errors.neighbourhood}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="care-notes" className="block text-base font-medium text-[#244B3B] mb-1.5">
                    Notes or Site Suggestion (Optional)
                  </label>
                  <textarea
                    id="care-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share a walking lane, park edge, or local partner idea..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base text-[#30362F]"
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-[48px] px-7 py-3.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  Submit Interest Inquiry
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
