import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { buildWhatsAppShareUrl, buildWhatsAppUrl } from '../config/siteConfig';

interface RouterContextValue {
  pathname: string;
  navigate: (to: string) => void;
  isBookingOpen: boolean;
  openBooking: (initialInterest?: string) => void;
  closeBooking: () => void;
  bookingPrefill: string;
  searchFocusToken: number;
  openSearch: () => void;
  whatsAppPreview: { title: string; message: string; isShare: boolean } | null;
  triggerWhatsApp: (options: { title: string; message: string; isShare?: boolean }) => void;
  closeWhatsAppPreview: () => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

const ROUTE_TITLES: Record<string, string> = {
  '/': 'P3J Add Life Circle – Live Better. Age at Home.',
  '/scientific-approach': 'Scientific Approach | P3J Add Life Circle',
  '/community': 'Community Blogs & Videos | P3J Add Life Circle',
  '/our-story': 'Our Story | P3J Add Life Circle',
  '/our-story/founder': 'Sreedevi Rajendraprasad – Founder | P3J Add Life Circle',
  '/care-beyond-circle': 'Care Beyond Circle | P3J Add Life Circle',
  '/health-disclaimer': 'Health Disclaimer & Participation Acknowledgement | P3J Add Life Circle',
};

function scrollToHashElement(hashId: string) {
  const attemptScroll = (triesLeft: number) => {
    const el = document.getElementById(hashId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (triesLeft > 0) {
      window.setTimeout(() => attemptScroll(triesLeft - 1), 80);
    }
  };
  window.requestAnimationFrame(() => attemptScroll(8));
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState('');
  const [searchFocusToken, setSearchFocusToken] = useState(0);
  const [whatsAppPreview, setWhatsAppPreview] = useState<{
    title: string;
    message: string;
    isShare: boolean;
  } | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
      if (window.location.hash) {
        scrollToHashElement(window.location.hash.slice(1));
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const baseTitle =
      ROUTE_TITLES[pathname] ||
      (pathname.startsWith('/community/blog/')
        ? 'Community Essay | P3J Add Life Circle'
        : 'P3J Add Life Circle – Live Better. Age at Home.');
    document.title = baseTitle;
  }, [pathname]);

  const navigate = useCallback((to: string) => {
    const [rawPath, hashId] = to.split('#');
    const targetPath = rawPath || '/';

    if (targetPath === pathname) {
      if (hashId) {
        window.history.replaceState({}, '', `${targetPath}#${hashId}`);
        scrollToHashElement(hashId);
      } else {
        window.history.replaceState({}, '', targetPath);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const fullUrl = hashId ? `${targetPath}#${hashId}` : targetPath;
    window.history.pushState({}, '', fullUrl);
    setPathname(targetPath);

    if (hashId) {
      // Allow AnimatePresence page transition to mount target section before scrolling
      window.setTimeout(() => scrollToHashElement(hashId), 320);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);

  const openBooking = useCallback((initialInterest = '') => {
    setBookingPrefill(initialInterest);
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
    setBookingPrefill('');
  }, []);

  const openSearch = useCallback(() => {
    navigate('/#site-search');
    setSearchFocusToken((prev) => prev + 1);
  }, [navigate]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openSearch]);

  const triggerWhatsApp = useCallback(
    ({ title, message, isShare = false }: { title: string; message: string; isShare?: boolean }) => {
      if (isShare) {
        const shareUrl = buildWhatsAppShareUrl(message);
        const opened = window.open(shareUrl, '_blank', 'noopener,noreferrer');
        if (!opened) {
          setWhatsAppPreview({ title, message, isShare });
        }
        return;
      }
      const directUrl = buildWhatsAppUrl(message);
      if (directUrl) {
        const opened = window.open(directUrl, '_blank', 'noopener,noreferrer');
        if (!opened) {
          setWhatsAppPreview({ title, message, isShare });
        }
      } else {
        setWhatsAppPreview({ title, message, isShare });
      }
    },
    [],
  );

  const closeWhatsAppPreview = useCallback(() => {
    setWhatsAppPreview(null);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        pathname,
        navigate,
        isBookingOpen,
        openBooking,
        closeBooking,
        bookingPrefill,
        searchFocusToken,
        openSearch,
        whatsAppPreview,
        triggerWhatsApp,
        closeWhatsAppPreview,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return ctx;
}
