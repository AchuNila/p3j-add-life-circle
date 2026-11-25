import { ArrowRight } from 'lucide-react';
import {
  FadeUp,
  ParallaxFrame,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';
import { SafeImage } from '../components/SafeImage';
import { useRouter } from '../context/RouterContext';
import { IMAGES, STORY_CONTENT } from '../data/p3jContent';

export function OurStoryPage() {
  const { navigate, openBooking } = useRouter();

  return (
    <div>
      {/* Living Principle Hero */}
      <section className="bg-[#F8F5EC] py-8 sm:py-10 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp immediate className="max-w-3xl space-y-2.5">
            <p className="text-sm font-medium text-[#555D54]">
              Our Living Principle
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#244B3B]">
              {STORY_CONTENT.livingPrincipleTitle}
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-[#C6A66A]">
              “{STORY_CONTENT.livingPrincipleMeaning}”
            </p>
            <p className="text-base sm:text-lg font-medium text-[#244B3B]">
              {STORY_CONTENT.supportingLine}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Golden Pavilion Story */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeUp className="lg:col-span-6 space-y-5">
              <p className="text-sm font-medium text-[#555D54]">
                The Heart of P3J
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
                A Golden Pavilion for Golden Agers
              </h2>
              <p className="text-lg sm:text-xl font-serif text-[#244B3B]/90 leading-relaxed">
                {STORY_CONTENT.storyLead}
              </p>
              {STORY_CONTENT.storyParagraphs.map((para) => (
                <p key={para} className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                  {para}
                </p>
              ))}
              <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                {STORY_CONTENT.registrationNote
                  .split('Sree Annapoorneshwari Leela Foundation (SALF)')
                  .map((segment, index, arr) => (
                    <span key={index}>
                      {segment}
                      {index < arr.length - 1 && (
                        <strong className="font-bold">
                          Sree Annapoorneshwari Leela Foundation (SALF)
                        </strong>
                      )}
                    </span>
                  ))}
              </p>
            </FadeUp>

            <FadeUp delay={0.08} className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#244B3B]/15 aspect-[4/3] bg-[#EBF0E6]">
                <ParallaxFrame offset={8} className="w-full h-full">
                  <SafeImage
                    src={IMAGES.goldenPavilion}
                    alt="Smiling Indian woman over 55 in a blue saree connecting online with a laptop on a sunlit traditional home veranda"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </ParallaxFrame>
              </div>
              <p className="mt-3 text-sm font-serif italic text-[#555D54]">
                Grounded in Indian cultural warmth, mutual respect, and joyful lifelong learning.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Three-Stage Visual Timeline */}
      <section className="bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              Founders & Legacy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
              How P3J Came Together
            </h2>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {STORY_CONTENT.timeline.map((stage) => (
              <StaggerItem
                key={stage.stageNumber}
                hoverLift
                className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#244B3B]/12">
                    <span className="font-serif text-3xl font-semibold text-[#C6A66A] tabular-nums">
                      {stage.stageNumber}
                    </span>
                    <span className="text-sm font-medium text-[#555D54]">
                      Stage {stage.stageNumber}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-base font-medium text-[#244B3B]/85 mb-4">
                    {stage.subtitle}
                  </p>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Reserved Portraits & Biographies for Founder & Research Analyst */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="max-w-2xl">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              Stewards of the Circle
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
              Founder & Research Leadership
            </h2>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder Reserved Bio Slot */}
            <StaggerItem
              hoverLift
              className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-7 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-28 h-36 rounded-xl overflow-hidden border border-[#244B3B]/15 shrink-0 bg-[#EBF0E6]">
                <SafeImage
                  src={IMAGES.sreedeviPortrait}
                  alt="Sreedevi Rajendraprasad, Founder of P3J Add Life Circle"
                  className="w-full h-full object-cover object-[50%_35%]"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#555D54]">Founder</p>
                <h3 className="font-serif text-2xl font-semibold text-[#244B3B]">
                  Sreedevi Rajendraprasad
                </h3>
                <p className="text-base text-[#30362F] leading-relaxed">
                  Inspired by her mother’s women’s yoga centre, Sreedevi founded P3J Add Life Circle to offer women aged 55+ an accessible, warm digital home for healthy ageing together.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => navigate('/our-story/founder')}
                    className="group min-h-[44px] px-5 py-2.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-sm font-semibold hover:bg-[#1A382B] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                  >
                    View More
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* Science Lead Profile */}
            <StaggerItem
              hoverLift
              className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-7 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-28 h-36 rounded-xl overflow-hidden border border-[#244B3B]/15 shrink-0 bg-[#EBF0E6]">
                <SafeImage
                  src={IMAGES.kalyaniPortrait}
                  alt="Kalyani Sai Reju, Science Lead at P3J"
                  className="w-full h-full object-cover object-top"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#555D54]">
                  Science Lead at P3J
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#244B3B]">
                  Kalyani Sai Reju
                </h3>
                <p className="text-sm font-medium text-[#244B3B]">
                  MSc in Molecular Genetics · University of Copenhagen
                </p>
                <p className="text-base text-[#30362F] leading-relaxed">
                  Published researcher and science communicator leading Vitalize Your Biome sessions for adults aged 55 and over—connecting nutrition, movement, and sleep research with everyday habits for strength, mobility, and independence.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <FadeUp className="rounded-2xl bg-[#244B3B] text-[#FFFEFA] p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FFFEFA]">
                Step Into the Circle This Week
              </h3>
              <p className="text-base text-[#F8F5EC]/90">
                Join us Monday, Wednesday, or Friday at 10:00 AM IST on Google Meet—or explore our neighbourhood aspirations in Care Beyond Circle.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBooking()}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#FFFEFA] text-[#244B3B] text-base font-semibold hover:bg-[#EBF0E6] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                Book a Free Intro Session
              </button>
              <button
                type="button"
                onClick={() => navigate('/care-beyond-circle')}
                className="group min-h-[48px] px-5 py-3 rounded-xl border border-[#FFFEFA]/40 text-[#FFFEFA] text-base font-medium hover:bg-[#FFFEFA]/10 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                Care Beyond Circle
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
