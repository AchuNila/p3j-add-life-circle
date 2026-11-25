import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Clock, Menu, MessageCircle, Search, X } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BrandMark } from './BrandMark';
import { ListenWelcomeButton } from './ListenWelcomeButton';
import { EASE_CALM } from './MotionPrimitives';

const PRIMARY_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Scientific Approach', path: '/scientific-approach' },
  { label: 'Community Blogs & Videos', path: '/community' },
  { label: 'Our Story', path: '/our-story' },
];

const SECONDARY_NAV = [
  { label: 'Care Beyond Circle', path: '/care-beyond-circle' },
  { label: 'Health Disclaimer', path: '/health-disclaimer' },
];

export function Navbar() {
  const { pathname, navigate, openBooking, openSearch, triggerWhatsApp } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFEFA]/95 backdrop-blur-sm border-b border-[#244B3B]/12">
      {/* Slim Top Utility Strip: Session Timings & Listen / Read Aloud */}
      <div className="bg-[#244B3B] border-b border-[#1A382B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FFFEFA] min-w-0">
            <Clock className="w-3.5 h-3.5 text-[#C6A66A] shrink-0" aria-hidden="true" />
            <span className="hidden md:inline truncate tabular-nums">
              Live Sessions: Monday - 10:00 AM IST · Wednesday - 10:00 AM IST · Friday - 10:00 AM IST
            </span>
            <span className="md:hidden truncate tabular-nums">
              Mon, Wed & Fri - 10:00 AM IST
            </span>
          </div>

          <ListenWelcomeButton compact onDark />
        </div>
      </div>

      {/* Main 3-Zone Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[62px] sm:h-[68px] flex items-center justify-between gap-4 lg:gap-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('/');
          }}
          className="shrink-0 focus-visible:rounded-lg"
          aria-label="P3J MORE LIFE Home"
        >
          <BrandMark label="P3J MORE LIFE" />
        </a>

        {/* Zone 2: Four Primary Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-5 2xl:gap-7"
        >
          {PRIMARY_NAV.map((item) => {
            const active = isActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.path);
                }}
                aria-current={active ? 'page' : undefined}
                className={`text-[16px] font-medium whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors duration-200 ${
                  active
                    ? 'text-[#244B3B] border-[#244B3B]'
                    : 'text-[#30362F] border-transparent hover:text-[#244B3B] hover:border-[#A7B89B]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Search + WhatsApp Contact + Primary CTA */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search P3J website"
            className="inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-xl border border-[#244B3B]/25 text-[15px] font-medium text-[#244B3B] hover:bg-[#EBF0E6] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            Search
          </button>

          <button
            type="button"
            onClick={() =>
              triggerWhatsApp({
                title: 'Contact P3J on WhatsApp',
                message:
                  'Namaste P3J Add Life Circle! I would like to learn more about joining the online community for women 55+.',
              })
            }
            aria-label="Contact P3J on WhatsApp"
            className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl border border-[#244B3B]/25 text-[15px] font-medium text-[#244B3B] hover:bg-[#EBF0E6] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp
          </button>

          <button
            type="button"
            onClick={() => openBooking()}
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-[15px] font-semibold hover:bg-[#1A382B] hover:shadow-[0_6px_16px_-6px_rgba(36,75,59,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book a Free Intro Session
          </button>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="xl:hidden flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openSearch();
            }}
            aria-label="Search P3J website"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#244B3B]/20 text-[#244B3B] hover:bg-[#EBF0E6] transition-colors shrink-0 cursor-pointer"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#244B3B]/20 text-[#244B3B] hover:bg-[#EBF0E6] transition-colors shrink-0 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EASE_CALM }}
            className="xl:hidden overflow-hidden border-t border-[#244B3B]/12 bg-[#FFFEFA]"
          >
            <div className="px-4 sm:px-6 py-5 space-y-4">
              <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/12 px-4 py-3 text-sm text-[#244B3B] font-medium space-y-1 tabular-nums">
                <p className="font-semibold">Live Online Session Timings:</p>
                <p>Monday - 10:00 AM IST · Wednesday - 10:00 AM IST · Friday - 10:00 AM IST</p>
              </div>

              <nav aria-label="Mobile Primary Navigation" className="flex flex-col space-y-1">
                {PRIMARY_NAV.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(item.path);
                      }}
                      aria-current={active ? 'page' : undefined}
                      className={`min-h-[44px] px-3 py-2.5 rounded-xl text-base font-medium flex items-center transition-colors duration-200 ${
                        active
                          ? 'bg-[#EBF0E6] text-[#244B3B]'
                          : 'text-[#30362F] hover:bg-[#F8F5EC]'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="border-t border-[#244B3B]/10 pt-3 flex flex-col space-y-1">
                <span className="px-3 text-xs uppercase tracking-wider text-[#555D54] font-medium">
                  Community & Guidance
                </span>
                {SECONDARY_NAV.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(item.path);
                      }}
                      className={`min-h-[44px] px-3 py-2.5 rounded-xl text-base font-medium flex items-center transition-colors duration-200 ${
                        active
                          ? 'bg-[#EBF0E6] text-[#244B3B]'
                          : 'text-[#30362F] hover:bg-[#F8F5EC]'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openBooking();
                  }}
                  className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] transition-colors"
                >
                  Book a Free Intro Session
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    triggerWhatsApp({
                      title: 'Contact P3J on WhatsApp',
                      message:
                        'Namaste P3J Add Life Circle! I would like to learn more about joining the online community for women 55+.',
                    });
                  }}
                  className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-xl border border-[#244B3B]/25 text-[#244B3B] text-base font-medium hover:bg-[#EBF0E6] inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Contact via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
