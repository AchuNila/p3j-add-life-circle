import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Search, X } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import {
  SearchArea,
  SearchResult,
  searchSite,
} from '../data/searchIndex';
import { FadeUp } from './MotionPrimitives';

const AREA_FILTERS: Array<SearchArea | 'All'> = [
  'All',
  'About P3J',
  'Joining the community',
  'Sessions and events',
  'Healthy practices',
  'Learning about ageing',
  'Community initiatives',
  'Help and contact',
];

const QUICK_SEARCH_EXAMPLES = [
  'Our story',
  'How to join',
  'Timings',
  'Relaxation',
  'Self-massage',
  'Ageing at home',
  'Volunteering',
  'FAQ',
];

export function LandingSearchSection() {
  const { navigate, openBooking, triggerWhatsApp, searchFocusToken } = useRouter();
  const [query, setQuery] = useState('');
  const [activeArea, setActiveArea] = useState<SearchArea | 'All'>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchFocusToken === 0) return;
    const timer = window.setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 360);
    return () => window.clearTimeout(timer);
  }, [searchFocusToken]);

  const hasQuery = query.trim().length > 0;
  const showResults = hasQuery || activeArea !== 'All';
  const results = useMemo(() => searchSite(query, activeArea), [query, activeArea]);

  const handleSelectResult = (item: SearchResult) => {
    if (item.action === 'booking') {
      openBooking();
      return;
    }
    navigate(item.path);
  };

  const handleReset = () => {
    setQuery('');
    setActiveArea('All');
    inputRef.current?.focus();
  };

  return (
    <section
      id="site-search"
      aria-labelledby="landing-search-heading"
      className="bg-[#FFFEFA] py-10 sm:py-12 border-b border-[#244B3B]/10 scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-sm font-medium text-[#555D54] mb-1">
                Explore P3J Add Life Circle
              </p>
              <h2
                id="landing-search-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#244B3B]"
              >
                Search Pages, Sessions &amp; Healthy Practices
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555D54]">
              Matches everyday words like “calm” &amp; “relaxation” or “join” &amp; “membership”
            </p>
          </div>

          {/* Inline Search Input */}
          <div className="relative">
            <Search
              className="w-5 h-5 text-[#555D54] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              id="landing-site-search-input"
              type="text"
              role="searchbox"
              enterKeyHint="search"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search “how to join”, “timings”, “relaxation”, “hand and foot self-massage”, “volunteering”..."
              aria-label="Search P3J website"
              className="w-full min-h-[54px] pl-12 pr-12 py-3.5 rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 text-base sm:text-lg text-[#244B3B] placeholder:text-[#555D54]/75 focus:outline-none focus:bg-[#FFFEFA] focus:border-[#244B3B] focus:ring-2 focus:ring-[#244B3B]/15 transition-colors"
            />
            {hasQuery && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                aria-label="Clear search text"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-[#555D54] hover:bg-[#EBF0E6] hover:text-[#244B3B] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Topic Filter Tabs */}
          <div className="space-y-3">
            <div
              role="tablist"
              aria-label="Filter search by topic"
              className="flex flex-wrap items-center gap-1.5"
            >
              {AREA_FILTERS.map((area) => {
                const selected = activeArea === area;
                return (
                  <button
                    key={area}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveArea(area)}
                    className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selected
                        ? 'bg-[#244B3B] text-[#FFFEFA]'
                        : 'bg-[#F8F5EC] text-[#30362F] border border-[#244B3B]/12 hover:bg-[#EBF0E6] hover:text-[#244B3B]'
                    }`}
                  >
                    {area}
                  </button>
                );
              })}
            </div>

            {/* Quick Suggested Terms (when idle) */}
            {!showResults && (
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-[#555D54]">
                <span className="font-medium text-[#244B3B] mr-1">Popular searches:</span>
                {QUICK_SEARCH_EXAMPLES.map((term, idx) => (
                  <span key={term} className="inline-flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setQuery(term);
                        inputRef.current?.focus();
                      }}
                      className="text-[#30362F] hover:text-[#244B3B] underline underline-offset-4 decoration-[#244B3B]/30 hover:decoration-[#244B3B] transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                    {idx < QUICK_SEARCH_EXAMPLES.length - 1 && (
                      <span aria-hidden="true" className="text-[#555D54]/50">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Inline Search Results */}
          {showResults && (
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#244B3B]/12">
                <p className="text-sm font-medium text-[#555D54] tabular-nums">
                  Showing {results.length} {results.length === 1 ? 'result' : 'results'}
                  {hasQuery ? ` for “${query.trim()}”` : ''}
                  {activeArea !== 'All' ? ` in ${activeArea}` : ''}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm font-semibold text-[#244B3B] underline underline-offset-4 hover:text-[#1A382B] cursor-pointer"
                >
                  Clear search
                </button>
              </div>

              {results.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((item) => (
                    <li key={item.id} className="flex">
                      <button
                        type="button"
                        onClick={() => handleSelectResult(item)}
                        className="group w-full text-left rounded-xl bg-[#F8F5EC]/75 border border-[#244B3B]/15 hover:border-[#244B3B]/40 hover:bg-[#EBF0E6]/60 p-5 transition-colors duration-200 flex items-start justify-between gap-4 cursor-pointer"
                      >
                        <div className="space-y-1.5 min-w-0">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-sm text-[#555D54]">
                            <span className="font-medium text-[#244B3B]">{item.area}</span>
                            <span aria-hidden="true">·</span>
                            <span>{item.pageLabel}</span>
                            {item.matchedViaSynonym && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="italic">Related topic</span>
                              </>
                            )}
                          </div>
                          <h3 className="font-serif text-lg font-semibold text-[#244B3B] group-hover:underline underline-offset-4 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#30362F] leading-relaxed line-clamp-2">
                            {item.summary}
                          </p>
                        </div>

                        <span className="mt-1 w-9 h-9 rounded-lg bg-[#FFFEFA] border border-[#244B3B]/15 group-hover:bg-[#244B3B] text-[#244B3B] group-hover:text-[#FFFEFA] flex items-center justify-center shrink-0 transition-colors">
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/15 p-6 text-center space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-[#244B3B]">
                    No direct matches found for “{query.trim()}”
                  </h3>
                  <p className="text-base text-[#30362F] max-w-lg mx-auto leading-relaxed">
                    Try searching with terms like “how to join”, “relaxation”, “timings”, “white paper”, or “volunteering” — or reach out to us directly on WhatsApp.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                    {activeArea !== 'All' && (
                      <button
                        type="button"
                        onClick={() => setActiveArea('All')}
                        className="min-h-[44px] px-4 py-2 rounded-xl border border-[#244B3B]/25 bg-[#FFFEFA] text-sm font-semibold text-[#244B3B] hover:bg-[#EBF0E6] transition-colors cursor-pointer"
                      >
                        Search Across All Topics
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        triggerWhatsApp({
                          title: 'Ask P3J on WhatsApp',
                          message: `Namaste P3J Add Life Circle! I was looking for "${query.trim()}" on your website and would love some guidance.`,
                        })
                      }
                      className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-sm font-semibold hover:bg-[#1A382B] inline-flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      Ask Us on WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
