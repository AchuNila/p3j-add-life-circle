import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { SHORT_VIDEOS } from '../data/p3jContent';
import { ShortVideoItem } from '../types';
import { EASE_CALM, FadeUp, StaggerGroup, StaggerItem } from './MotionPrimitives';
import { SafeImage } from './SafeImage';

export function ShortVideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeShort, setActiveShort] = useState<ShortVideoItem | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -340 : 340;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div>
      <FadeUp className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-medium text-[#555D54] mb-1">
            Short Video Library · Under 3 Mins
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#244B3B]">
            Community YouTube Shorts
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll videos left"
            className="w-11 h-11 rounded-xl border border-[#244B3B]/25 bg-[#FFFEFA] flex items-center justify-center text-[#244B3B] hover:bg-[#EBF0E6] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll videos right"
            className="w-11 h-11 rounded-xl border border-[#244B3B]/25 bg-[#FFFEFA] flex items-center justify-center text-[#244B3B] hover:bg-[#EBF0E6] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </FadeUp>

      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
      >
        <StaggerGroup className="flex gap-6">
          {SHORT_VIDEOS.map((short) => (
            <StaggerItem
              key={short.id}
              hoverLift
              className="w-[290px] sm:w-[310px] shrink-0 snap-start bg-[#FFFEFA] rounded-2xl border border-[#244B3B]/15 overflow-hidden flex flex-col hover:border-[#244B3B]/35"
            >
              <div className="relative aspect-[9/14] bg-[#244B3B]/10 overflow-hidden group">
                <SafeImage
                  src={short.posterSrc}
                  alt={short.posterAlt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A382B]/85 via-[#1A382B]/25 to-transparent" />

                <button
                  type="button"
                  onClick={() => setActiveShort(short)}
                  aria-label={`Open ${short.title} video`}
                  className="absolute inset-0 flex flex-col items-center justify-center text-[#FFFEFA] cursor-pointer"
                >
                  <span className="w-16 h-16 rounded-full bg-[#FFFEFA]/95 text-[#244B3B] flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:scale-105">
                    <Play className="w-7 h-7 fill-current ml-0.5" aria-hidden="true" />
                  </span>
                </button>

                <div className="absolute bottom-4 left-4 right-4 text-[#FFFEFA] pointer-events-none">
                  <p className="text-xs font-medium text-[#F8F5EC]/90 mb-1">
                    {short.category} · <span className="tabular-nums">{short.duration}</span>
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#FFFEFA] leading-snug">
                    {short.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <p className="text-sm sm:text-base text-[#30362F] leading-relaxed">
                  {short.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveShort(short)}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#244B3B]/25 text-sm font-semibold text-[#244B3B] hover:bg-[#EBF0E6] transition-colors duration-200 cursor-pointer"
                >
                  {short.youtubeId ? 'Watch YouTube Short' : 'Preview Session Guide'}
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Video Player / Preview Modal */}
      <AnimatePresence>
        {activeShort && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_CALM }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A382B]/70 backdrop-blur-xs p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="short-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.985 }}
              transition={{ duration: 0.28, ease: EASE_CALM }}
              className="relative w-full max-w-lg rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/20 p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveShort(null)}
                aria-label="Close video preview"
                className="absolute right-4 top-4 w-11 h-11 rounded-xl flex items-center justify-center text-[#30362F] hover:bg-[#EBF0E6] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <p className="text-sm text-[#555D54] font-medium mb-1">
                {activeShort.category} · {activeShort.duration}
              </p>
              <h3 id="short-modal-title" className="text-2xl font-serif font-semibold text-[#244B3B] pr-10 mb-4">
                {activeShort.title}
              </h3>

              {activeShort.youtubeId ? (
                <div className="aspect-[9/16] max-h-[60vh] mx-auto rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeShort.youtubeId}`}
                    title={activeShort.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-[#EBF0E6]">
                    <SafeImage
                      src={activeShort.posterSrc}
                      alt={activeShort.posterAlt}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <p className="text-base text-[#30362F] leading-relaxed">
                    {activeShort.summary}
                  </p>
                  <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/15 p-4">
                    <p className="text-sm font-semibold text-[#244B3B] mb-2">
                      Key Points Shared in This Short:
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#30362F] list-disc pl-5">
                      {activeShort.highlights.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-[#555D54]">
                    Integration slot ready: supply the YouTube Short ID via environment variable to embed the live video player directly here.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
