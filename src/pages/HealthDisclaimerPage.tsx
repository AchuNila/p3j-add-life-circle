import { useState } from 'react';
import { MessageCircle, ShieldAlert } from 'lucide-react';
import { FadeUp } from '../components/MotionPrimitives';
import { useRouter } from '../context/RouterContext';
import {
  ACKNOWLEDGEMENT_CHECKBOX_TEXT,
  HEALTH_DISCLAIMER_SECTIONS,
  SPOKEN_SAFETY_REMINDER,
} from '../data/p3jContent';

export function HealthDisclaimerPage() {
  const { openBooking, triggerWhatsApp } = useRouter();
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div>
      {/* Header */}
      <section className="bg-[#F8F5EC] py-14 sm:py-18 border-b border-[#244B3B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp immediate>
            <p className="text-sm font-medium text-[#555D54] mb-2">
              Important Safety & Participation Guidance
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#244B3B] mb-4">
              Health Disclaimer & Participation Acknowledgement
            </h1>
            <p className="text-lg text-[#30362F] leading-relaxed max-w-2xl">
              Please read this guidance carefully before joining P3J Add Life Circle online sessions. Your comfort, autonomy, and safety come first.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Complete Disclaimer Sections */}
      <section className="bg-[#FFFEFA] py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Spoken Safety Reminder Callout */}
          <FadeUp immediate delay={0.08} className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/20 p-6 sm:p-7 flex items-start gap-4">
            <ShieldAlert className="w-7 h-7 text-[#244B3B] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#244B3B] mb-2">
                Spoken Safety Reminder in Every Session
              </h2>
              <p className="text-base sm:text-lg text-[#30362F] leading-relaxed font-medium">
                {SPOKEN_SAFETY_REMINDER}
              </p>
            </div>
          </FadeUp>

          <div className="space-y-9 max-w-[650px]">
            {HEALTH_DISCLAIMER_SECTIONS.map((section, idx) => (
              <FadeUp key={section.id} delay={0.04}>
                <section
                  id={section.id}
                  className="pb-8 border-b border-[#244B3B]/12 last:border-b-0"
                >
                  <p className="text-sm font-medium text-[#C6A66A] mb-1 tabular-nums">
                    0{idx + 1}
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-[#30362F] leading-relaxed">
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </section>
              </FadeUp>
            ))}
          </div>

          {/* Interactive Acknowledgement Preview & Booking Link */}
          <FadeUp className="rounded-2xl bg-[#EBF0E6]/75 border border-[#244B3B]/20 p-6 sm:p-8 max-w-[650px] space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-[#244B3B]">
              Participation Acknowledgement
            </h2>
            <label className="flex items-start gap-3.5 cursor-pointer">
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-[#244B3B]/40 text-[#244B3B] accent-[#244B3B] shrink-0 cursor-pointer"
              />
              <span className="text-base text-[#30362F] leading-relaxed">
                {ACKNOWLEDGEMENT_CHECKBOX_TEXT}
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                disabled={!acknowledged}
                onClick={() => openBooking()}
                className={`min-h-[48px] px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  acknowledged
                    ? 'bg-[#244B3B] text-[#FFFEFA] hover:bg-[#1A382B] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                    : 'bg-[#244B3B]/35 text-[#FFFEFA] cursor-not-allowed'
                }`}
              >
                Book a Free Intro Session
              </button>

              <button
                type="button"
                onClick={() =>
                  triggerWhatsApp({
                    title: 'Ask a Question on WhatsApp',
                    message:
                      'Namaste P3J team! I have a question regarding the Health Disclaimer and session participation.',
                  })
                }
                className="inline-flex items-center gap-2 min-h-[48px] px-5 py-3 rounded-xl border border-[#244B3B]/30 text-[#244B3B] text-base font-medium hover:bg-[#FFFEFA] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Ask Questions on WhatsApp
              </button>
            </div>
            {!acknowledged && (
              <p className="text-sm text-[#555D54]">
                Please tick the acknowledgement box above to proceed to booking from this page.
              </p>
            )}
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
