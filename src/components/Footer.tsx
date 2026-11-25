import { Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useRouter } from '../context/RouterContext';
import { SPOKEN_SAFETY_REMINDER } from '../data/p3jContent';
import { BrandMark } from './BrandMark';

export function Footer() {
  const { navigate, openBooking, triggerWhatsApp } = useRouter();

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer id="footer-contact" className="bg-[#244B3B] text-[#F8F5EC] border-t border-[#C6A66A]/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#FFFEFA]/15">
          {/* Brand Introduction */}
          <div className="md:col-span-5 space-y-4">
            <BrandMark light />
            <p className="font-serif italic text-lg text-[#C6A66A]">
              Parasparopagraho Jīvānām — “We help one another live.”
            </p>
            <p className="text-base text-[#F8F5EC]/90 leading-relaxed max-w-md">
              A caring online community for healthy ageing at home, welcoming women aged 55+ every Monday, Wednesday, and Friday at 10:00 AM IST via Google Meet.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openBooking()}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#FFFEFA] text-[#244B3B] text-base font-semibold hover:bg-[#EBF0E6] transition-colors cursor-pointer"
              >
                Book a Free Intro Session
              </button>
            </div>
          </div>

          {/* Primary Pages */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[#FFFEFA]">Explore P3J</h2>
            <ul className="space-y-2.5 text-base">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, '/')}
                  className="text-[#F8F5EC]/90 hover:text-[#FFFEFA] underline-offset-4 hover:underline py-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/scientific-approach"
                  onClick={(e) => handleLink(e, '/scientific-approach')}
                  className="text-[#F8F5EC]/90 hover:text-[#FFFEFA] underline-offset-4 hover:underline py-1 inline-block"
                >
                  Scientific Approach
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  onClick={(e) => handleLink(e, '/community')}
                  className="text-[#F8F5EC]/90 hover:text-[#FFFEFA] underline-offset-4 hover:underline py-1 inline-block"
                >
                  Community Blogs & Videos
                </a>
              </li>
              <li>
                <a
                  href="/our-story"
                  onClick={(e) => handleLink(e, '/our-story')}
                  className="text-[#F8F5EC]/90 hover:text-[#FFFEFA] underline-offset-4 hover:underline py-1 inline-block"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Secondary Pages & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[#FFFEFA]">
              Community, Care & Contact
            </h2>
            <ul className="space-y-2.5 text-base">
              <li>
                <a
                  href="/care-beyond-circle"
                  onClick={(e) => handleLink(e, '/care-beyond-circle')}
                  className="text-[#F8F5EC]/90 hover:text-[#FFFEFA] underline-offset-4 hover:underline py-1 inline-block"
                >
                  Care Beyond Circle
                </a>
              </li>
              <li>
                <a
                  href="/health-disclaimer"
                  onClick={(e) => handleLink(e, '/health-disclaimer')}
                  className="text-[#F8F5EC]/90 hover:text-[#FFFEFA] underline-offset-4 hover:underline py-1 inline-block"
                >
                  Health Disclaimer & Acknowledgement
                </a>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() =>
                    triggerWhatsApp({
                      title: 'Contact P3J Add Life Circle on WhatsApp',
                      message:
                        'Namaste P3J team! I have a question about P3J Add Life Circle.',
                    })
                  }
                  className="inline-flex items-center gap-2 text-[#FFFEFA] hover:text-[#C6A66A] transition-colors py-1 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">
                    WhatsApp: {siteConfig.whatsappDisplay}
                  </span>
                </button>
              </li>
              <li>
                <div className="inline-flex items-center gap-2 text-[#F8F5EC]/90 py-1">
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {siteConfig.contactEmail ? (
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="underline underline-offset-4 hover:text-[#FFFEFA]"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  ) : (
                    <span>Email: Configure via VITE_CONTACT_EMAIL</span>
                  )}
                </div>
              </li>
            </ul>

            <div className="pt-3">
              <p className="text-sm font-medium text-[#C6A66A] mb-2.5">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com/@p3jaddlife?si=mUc99Z6K9yGJZES_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="P3J ADD LIFE on YouTube"
                  title="YouTube"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#FFFEFA]/10 border border-[#FFFEFA]/20 text-[#FFFEFA] hover:bg-[#FFFEFA] hover:text-[#244B3B] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://sreedevirajendraprasad-mzrdg.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="P3J ADD LIFE on WordPress"
                  title="WordPress"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#FFFEFA]/10 border border-[#FFFEFA]/20 text-[#FFFEFA] hover:bg-[#FFFEFA] hover:text-[#244B3B] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-8.49 10c0-1.225.263-2.388.73-3.44l4.022 11.018A8.497 8.497 0 0 1 3.51 12zm8.49 8.49c-.833 0-1.637-.122-2.398-.346l2.548-7.402 2.61 7.152c.017.042.038.08.06.116a8.458 8.458 0 0 1-2.82.48zm1.168-12.463c.511-.027.972-.081.972-.081.458-.054.404-.726-.054-.699 0 0-1.377.108-2.266.108-.835 0-2.24-.108-2.24-.108-.458-.027-.512.672-.054.699 0 0 .433.054.891.081l1.324 3.63-1.86 5.578-3.095-9.208c.512-.027.973-.081.973-.081.458-.054.404-.726-.054-.699 0 0-1.377.108-2.266.108-.16 0-.348-.004-.547-.01A8.487 8.487 0 0 1 12 3.51c2.212 0 4.228.847 5.74 2.233-.037-.002-.072-.007-.11-.007-.835 0-1.428.727-1.428 1.508 0 .7.404 1.292.835 1.992.323.566.7 1.292.7 2.342 0 .727-.28 1.57-.647 2.747l-.848 2.834-3.074-9.132zm3.597 11.498l2.587-7.479c.484-1.211.646-2.18.646-3.042 0-.313-.021-.603-.059-.873a8.45 8.45 0 0 1 .551 3.869 8.49 8.49 0 0 1-3.725 7.525z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/p3j_sreedevirajendraprasad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="P3J ADD LIFE on Instagram"
                  title="Instagram"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#FFFEFA]/10 border border-[#FFFEFA]/20 text-[#FFFEFA] hover:bg-[#FFFEFA] hover:text-[#244B3B] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-sm text-[#F8F5EC]/80">
          <p className="max-w-2xl leading-relaxed">
            <strong>Safety Notice:</strong> P3J is an educational community, not a medical service. {SPOKEN_SAFETY_REMINDER}
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} P3J. Live Better. Age at Home.
          </p>
        </div>
      </div>
    </footer>
  );
}
