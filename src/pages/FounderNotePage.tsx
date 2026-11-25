import { ArrowLeft } from 'lucide-react';
import { FadeUp } from '../components/MotionPrimitives';
import { SafeImage } from '../components/SafeImage';
import { useRouter } from '../context/RouterContext';
import { IMAGES } from '../data/p3jContent';

export function FounderNotePage() {
  const { navigate, openBooking } = useRouter();

  return (
    <div>
      <article className="bg-[#FFFEFA] py-12 sm:py-16 border-b border-[#244B3B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp immediate>
            <button
              type="button"
              onClick={() => navigate('/our-story')}
              className="group inline-flex items-center gap-2 text-base font-medium text-[#244B3B] hover:underline underline-offset-4 mb-8 min-h-[44px] cursor-pointer"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Back to Our Story
            </button>

            {/* Founder Header */}
            <header className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-6 sm:p-8 mb-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
              <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden border border-[#244B3B]/15 shrink-0 bg-[#EBF0E6]">
                <SafeImage
                  src={IMAGES.sreedeviPortrait}
                  alt="Sreedevi Rajendraprasad, Founder of P3J ADD LIFE"
                  className="w-full h-full object-cover object-[50%_35%]"
                  containerClassName="w-full h-full"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-[#555D54]">
                  Founder’s Note · P3J ADD LIFE
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#244B3B] leading-tight">
                  Sreedevi Rajendraprasad
                </h1>
                <p className="text-base sm:text-lg font-medium text-[#244B3B]/90">
                  Founder, P3J ADD LIFE
                </p>
                <p className="text-sm sm:text-base text-[#555D54]">
                  MTech in Geotechnical Engineering · MBA in Finance · Three Decades in Government Engineering Service
                </p>
              </div>
            </header>
          </FadeUp>

          {/* Founder's Full Letter */}
          <FadeUp delay={0.08} className="article-prose text-left space-y-5">
            <p className="text-lg sm:text-xl text-[#244B3B] leading-relaxed">
              P3J began with a question close to my heart:{' '}
              <em className="font-serif italic">
                How can we prepare today for an active, connected, and fulfilling life in our eighties and beyond?
              </em>
            </p>

            <p>
              As I entered my fifties, I watched older family members—once energetic and confident—face increasing difficulties with mobility, shrinking social circles, and fewer opportunities to contribute. My mother offered another lasting perspective: while living with diabetes, she filled her life with work, yoga, gardening, sport, and community service. Helping at the women’s yoga centre she ran with my aunt introduced me early to the value of shared practice and companionship.
            </p>

            <p>
              With an MTech in Geotechnical Engineering and an MBA in Finance, I spent more than three decades as Engineer in Government service, including over a decade managing innovative projects in the power sector. The COVID years had me actively researching on ageing and how communities can help people remain active, connected, and engaged as they grow older. After retiring, my professional experience and personal observations came together in P3J ADD LIFE: a caring online community where women over 55 explore research, share healthy practices, and support one another in living well and ageing at home.
            </p>

            <p>
              Our P3J ADD LIFE CIRCLE sessions are inspired primarily by the World Health Organization’s{' '}
              <em>Integrated Care for Older People</em>—<strong className="font-bold text-[#244B3B]">ICOPE</strong>—approach, with its emphasis on the whole person, their physical and mental capacities, and what matters to them as they grow older. We bring this inspiration into shared learning, gentle practices, and meaningful connection.
            </p>

            <p>
              Guided by <em>Parasparopagraho Jīvānām</em>—“we help one another live”—our vision extends beyond the Circle. We aspire to encourage greener neighbourhoods, spaces for local arts and traditions, and meaningful opportunities for older people to contribute.
            </p>

            <p className="text-lg text-[#244B3B] font-medium leading-relaxed">
              For me, P3J is about adding life to our years &amp; loving our life while helping others do the same.
            </p>

            <div className="pt-6 mt-8 border-t border-[#244B3B]/15">
              <p className="font-serif text-xl font-bold text-[#244B3B]">
                Sreedevi Rajendraprasad
              </p>
              <p className="text-base text-[#555D54] mt-0.5">
                Founder, P3J ADD LIFE
              </p>
            </div>
          </FadeUp>

          {/* Bottom Navigation & CTA */}
          <FadeUp delay={0.12} className="mt-12 pt-8 border-t border-[#244B3B]/15 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate('/our-story')}
              className="group inline-flex items-center gap-2 min-h-[48px] px-5 py-3 rounded-xl border border-[#244B3B]/30 text-[#244B3B] text-base font-medium hover:bg-[#EBF0E6] transition-colors cursor-pointer"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              Back to Our Story
            </button>

            <button
              type="button"
              onClick={() => openBooking()}
              className="min-h-[48px] px-6 py-3 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              Book a Free Intro Session
            </button>
          </FadeUp>
        </div>
      </article>
    </div>
  );
}
