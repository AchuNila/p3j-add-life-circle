import { useState } from 'react';
import { Brain, Download, Ear, ExternalLink, Eye, FileText, HeartPulse, Layers, Smile } from 'lucide-react';
import { FadeUp, StaggerGroup, StaggerItem } from '../components/MotionPrimitives';
import { SafeImage } from '../components/SafeImage';
import { siteConfig } from '../config/siteConfig';
import { SCIENTIFIC_CONTENT } from '../data/p3jContent';

const DEFAULT_PRESENTATION_DECK_PDF = '/assets/aistudio/Session1_Review_4816338d.pdf';
const DEFAULT_WHITE_PAPER_INTRO_PDF = '/assets/aistudio/WhitePaper_Intro_9a689ce4.pdf';
const HASTA_MUDRA_STUDY_PDF =
  '/assets/aistudio/Effect_of_Yoga_Hand_Mudra_on_Cardiac_and_Neurological_Parameters_in_preventing_Heart_Attack_154eed23.pdf';

export function ScientificApproachPage() {
  const [showDeckPreview, setShowDeckPreview] = useState(false);
  const [showWhitePaperPreview, setShowWhitePaperPreview] = useState(false);
  const [showHastaMudraPreview, setShowHastaMudraPreview] = useState(false);
  const deckPdfUrl = siteConfig.presentationDeckUrl || DEFAULT_PRESENTATION_DECK_PDF;
  const whitePaperIntroPdfUrl = siteConfig.whitePaperUrl || DEFAULT_WHITE_PAPER_INTRO_PDF;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#F8F5EC] py-8 sm:py-10 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp immediate className="max-w-3xl">
            <p className="text-sm font-medium text-[#555D54] mb-1.5">
              Evidence-Informed Community Framework
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] mb-2.5">
              {SCIENTIFIC_CONTENT.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              {SCIENTIFIC_CONTENT.pageSubtitle}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Expert Introduction */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeUp className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#244B3B]/15 aspect-[3/4] max-w-md mx-auto bg-[#EBF0E6]">
                <SafeImage
                  src={SCIENTIFIC_CONTENT.expert.imageSrc}
                  alt={SCIENTIFIC_CONTENT.expert.imageAlt}
                  className="w-full h-full object-cover object-top"
                  containerClassName="w-full h-full"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.08} className="lg:col-span-7 space-y-5">
              <p className="text-sm font-medium text-[#555D54]">
                {SCIENTIFIC_CONTENT.expert.role}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
                {SCIENTIFIC_CONTENT.expert.name}
              </h2>
              <p className="text-lg font-medium text-[#244B3B] pb-4 border-b border-[#244B3B]/12">
                {SCIENTIFIC_CONTENT.expert.credential}
              </p>

              {SCIENTIFIC_CONTENT.expert.bio.map((para) => (
                <p key={para} className="text-base sm:text-lg text-[#30362F] leading-relaxed">
                  {para}
                </p>
              ))}

              {SCIENTIFIC_CONTENT.expert.bioPlaceholderNote && (
                <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/15 p-4 text-sm text-[#555D54]">
                  <strong>Note:</strong> {SCIENTIFIC_CONTENT.expert.bioPlaceholderNote}
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* White Paper & WHO Intrinsic Capacity Section */}
      <section className="bg-[#F8F5EC] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl mb-12">
            <p className="text-sm font-medium text-[#555D54] mb-2">
              WHO Intrinsic Capacity Framework
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] mb-4">
              {SCIENTIFIC_CONTENT.whitePaper.title}
            </h2>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              {SCIENTIFIC_CONTENT.whitePaper.intro}
            </p>
          </FadeUp>

          {/* The 5 Intrinsic Capacity Domains */}
          <div className="mb-14">
            <FadeUp className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-2">
                The 5 Intrinsic Capacity Domains
              </h3>
              <p className="text-base text-[#30362F] leading-relaxed">
                The core physical and mental reserves that support healthy ageing, resilience, and independence.
              </p>
            </FadeUp>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {/* 1. Locomotion */}
              <StaggerItem
                hoverLift
                className="lg:col-start-2 lg:col-span-2 rounded-3xl bg-[#FBECE0] border border-[#E4B896]/60 p-6 sm:p-7 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFFEFA]/70 flex items-center justify-center shrink-0 text-[#D97724]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                    aria-hidden="true"
                  >
                    <circle cx="13" cy="4.5" r="2" fill="currentColor" stroke="none" />
                    <path d="M13 8.5 10.5 14l3.5 3 1 4.5" />
                    <path d="M10.5 14 8 18.5 6.5 21" />
                    <path d="M13 9.5 16.5 12l2 1" />
                    <path d="M12.5 9.5 9 11l-1.5 2.5" />
                  </svg>
                </div>
                <div className="border-l-2 border-[#E4A06A]/70 pl-5">
                  <h4 className="font-serif text-2xl font-semibold text-[#244B3B] mb-1.5">
                    Locomotion
                  </h4>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    Movement, balance, walking, and strength
                  </p>
                </div>
              </StaggerItem>

              {/* 2. Vitality */}
              <StaggerItem
                hoverLift
                className="lg:col-start-4 lg:col-span-2 rounded-3xl bg-[#E8F1E1] border border-[#B7D3A6]/70 p-6 sm:p-7 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFFEFA]/70 flex items-center justify-center shrink-0 text-[#3B8746]">
                  <HeartPulse className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="border-l-2 border-[#8DC073]/75 pl-5">
                  <h4 className="font-serif text-2xl font-semibold text-[#244B3B] mb-1.5">
                    Vitality
                  </h4>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    Energy, nutrition, stamina, and physical reserve
                  </p>
                </div>
              </StaggerItem>

              {/* 3. Cognition */}
              <StaggerItem
                hoverLift
                className="lg:col-start-1 lg:col-span-2 rounded-3xl bg-[#E4F2FA] border border-[#A8D2EC]/70 p-6 sm:p-7 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFFEFA]/70 flex items-center justify-center shrink-0 text-[#1F7FB8]">
                  <Brain className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="border-l-2 border-[#7CC0E8]/80 pl-5">
                  <h4 className="font-serif text-2xl font-semibold text-[#244B3B] mb-1.5">
                    Cognition
                  </h4>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    Memory, thinking, attention, and decision-making
                  </p>
                </div>
              </StaggerItem>

              {/* 4. Sensory Function */}
              <StaggerItem
                hoverLift
                className="lg:col-span-2 rounded-3xl bg-[#F0EBF9] border border-[#CBBCE8]/70 p-6 sm:p-7 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFFEFA]/70 flex items-center justify-center gap-1 shrink-0 text-[#724EB0]">
                  <Eye className="w-6 h-6" aria-hidden="true" />
                  <Ear className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="border-l-2 border-[#B39AD9]/80 pl-5">
                  <h4 className="font-serif text-2xl font-semibold text-[#244B3B] mb-1.5">
                    Sensory Function
                  </h4>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    Vision and hearing that connect us to the world
                  </p>
                </div>
              </StaggerItem>

              {/* 5. Psychological Well-Being */}
              <StaggerItem
                hoverLift
                className="lg:col-span-2 rounded-3xl bg-[#FCF4DA] border border-[#E9D38E]/80 p-6 sm:p-7 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFFEFA]/75 flex items-center justify-center shrink-0 text-[#C8931E]">
                  <Smile className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="border-l-2 border-[#E3BE59]/85 pl-5">
                  <h4 className="font-serif text-2xl font-semibold text-[#244B3B] mb-1.5">
                    Psychological Well-Being
                  </h4>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    Mood, motivation, emotional balance, and stress resilience
                  </p>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>

          {/* Reserved Area for Presentation Deck & One-Page White Paper */}
          <div className="max-w-2xl">
            <FadeUp delay={0.08} className="rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-7 sm:p-9 space-y-5">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-[#244B3B]" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-semibold text-[#244B3B]">
                  Research Materials Archive
                </h3>
              </div>
              <p className="text-base text-[#30362F] leading-relaxed">
                Dedicated space for community presentation deck and other interesting studies.
              </p>

              <div className="space-y-3 pt-2">
                <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/12 p-4 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#EBF0E6] text-[#244B3B] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-[#244B3B]">Introduction to Healthy Ageing (ppt)</p>
                        <p className="text-sm text-[#555D54]">
                          Community Presentation Deck &middot; PDF
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowDeckPreview((prev) => !prev)}
                        className="min-h-[40px] px-3.5 py-2 rounded-lg bg-[#244B3B] text-[#FFFEFA] text-sm font-medium hover:bg-[#1A382B] transition-colors cursor-pointer"
                      >
                        {showDeckPreview ? 'Hide Preview' : 'View PDF'}
                      </button>
                      <a
                        href={deckPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Introduction to Healthy Ageing PDF in new tab"
                        className="min-h-[40px] px-3 py-2 rounded-lg border border-[#244B3B]/25 bg-[#FFFEFA] text-[#244B3B] text-sm font-medium hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        Open
                      </a>
                      <a
                        href={deckPdfUrl}
                        download="Introduction-to-Healthy-Ageing.pdf"
                        aria-label="Download Introduction to Healthy Ageing PDF"
                        className="min-h-[40px] px-3 py-2 rounded-lg border border-[#244B3B]/25 bg-[#FFFEFA] text-[#244B3B] text-sm font-medium hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        Download
                      </a>
                    </div>
                  </div>

                  {showDeckPreview && (
                    <div className="rounded-xl overflow-hidden border border-[#244B3B]/15 bg-[#FFFEFA]">
                      <iframe
                        src={`${deckPdfUrl}#view=FitH`}
                        title="Introduction to Healthy Ageing Presentation Deck PDF"
                        className="w-full h-[460px]"
                      />
                    </div>
                  )}
                </div>

                <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/12 p-4 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#EBF0E6] text-[#244B3B] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-[#244B3B]">Introduction to White Paper</p>
                        <p className="text-sm text-[#555D54]">
                          Living Longer, Living Better &middot; PDF
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowWhitePaperPreview((prev) => !prev)}
                        className="min-h-[40px] px-3.5 py-2 rounded-lg bg-[#244B3B] text-[#FFFEFA] text-sm font-medium hover:bg-[#1A382B] transition-colors cursor-pointer"
                      >
                        {showWhitePaperPreview ? 'Hide Preview' : 'View PDF'}
                      </button>
                      <a
                        href={whitePaperIntroPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Introduction to White Paper PDF in new tab"
                        className="min-h-[40px] px-3 py-2 rounded-lg border border-[#244B3B]/25 bg-[#FFFEFA] text-[#244B3B] text-sm font-medium hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        Open
                      </a>
                      <a
                        href={whitePaperIntroPdfUrl}
                        download="Introduction-to-White-Paper.pdf"
                        aria-label="Download Introduction to White Paper PDF"
                        className="min-h-[40px] px-3 py-2 rounded-lg border border-[#244B3B]/25 bg-[#FFFEFA] text-[#244B3B] text-sm font-medium hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        Download
                      </a>
                    </div>
                  </div>

                  {showWhitePaperPreview && (
                    <div className="rounded-xl overflow-hidden border border-[#244B3B]/15 bg-[#FFFEFA]">
                      <iframe
                        src={`${whitePaperIntroPdfUrl}#view=FitH`}
                        title="Introduction to White Paper PDF"
                        className="w-full h-[460px]"
                      />
                    </div>
                  )}
                </div>

                <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/12 p-4 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#EBF0E6] text-[#244B3B] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-[#244B3B]">A study on Hasta Mudra</p>
                        <p className="text-sm text-[#555D54]">
                          Research Journal of Recent Sciences &middot; PDF
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowHastaMudraPreview((prev) => !prev)}
                        className="min-h-[40px] px-3.5 py-2 rounded-lg bg-[#244B3B] text-[#FFFEFA] text-sm font-medium hover:bg-[#1A382B] transition-colors cursor-pointer"
                      >
                        {showHastaMudraPreview ? 'Hide Preview' : 'View PDF'}
                      </button>
                      <a
                        href={HASTA_MUDRA_STUDY_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open A study on Hasta Mudra PDF in new tab"
                        className="min-h-[40px] px-3 py-2 rounded-lg border border-[#244B3B]/25 bg-[#FFFEFA] text-[#244B3B] text-sm font-medium hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        Open
                      </a>
                      <a
                        href={HASTA_MUDRA_STUDY_PDF}
                        download="A-study-on-Hasta-Mudra.pdf"
                        aria-label="Download A study on Hasta Mudra PDF"
                        className="min-h-[40px] px-3 py-2 rounded-lg border border-[#244B3B]/25 bg-[#FFFEFA] text-[#244B3B] text-sm font-medium hover:bg-[#EBF0E6] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        Download
                      </a>
                    </div>
                  </div>

                  {showHastaMudraPreview && (
                    <div className="rounded-xl overflow-hidden border border-[#244B3B]/15 bg-[#FFFEFA]">
                      <iframe
                        src={`${HASTA_MUDRA_STUDY_PDF}#view=FitH`}
                        title="A study on Hasta Mudra PDF"
                        className="w-full h-[460px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Framework & Protocols */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Methodological Statement Pull Quote */}
          <FadeUp className="py-10 border-t border-b border-[#244B3B]/20 max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#555D54] mb-3">
              Methodological Statement
            </p>
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#244B3B] leading-relaxed">
              “{SCIENTIFIC_CONTENT.methodologicalStatement}”
            </blockquote>
          </FadeUp>

          {/* Arogyam, Adhyayanam, Anandam */}
          <div>
            <FadeUp className="max-w-2xl mb-10">
              <p className="text-sm font-medium text-[#555D54] mb-2">
                Three guiding dimensions of P3J
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
                Arogyam · Adhyayanam · Anandam
              </h2>
            </FadeUp>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SCIENTIFIC_CONTENT.threePillars.map((item) => (
                <StaggerItem
                  key={item.title}
                  hoverLift
                  className="rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-7 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-[#C6A66A] mb-1">
                      {item.meaning}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B] mb-3">
                      {item.title}
                    </h3>

                    {item.capacityTitle && (
                      <div className="mt-4 pt-4 border-t border-[#244B3B]/12">
                        {item.capacityTag && (
                          <p className="text-sm font-medium text-[#555D54] mb-1">
                            {item.capacityTag}
                          </p>
                        )}
                        <h4 className="font-serif text-xl font-semibold text-[#244B3B] mb-2">
                          {item.capacityTitle}
                        </h4>
                        {item.capacityDescription && (
                          <p className="text-base text-[#30362F] leading-relaxed mb-5">
                            {item.capacityDescription}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {item.sessionConnection && (
                    <p className="text-sm font-medium text-[#244B3B] pt-4 border-t border-[#244B3B]/10">
                      {item.sessionConnection}
                    </p>
                  )}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>
    </div>
  );
}
