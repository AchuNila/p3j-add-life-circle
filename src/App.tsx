import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { EASE_CALM } from './components/MotionPrimitives';
import { Navbar } from './components/Navbar';
import { WhatsAppActionModal } from './components/WhatsAppActionModal';
import { RouterProvider, useRouter } from './context/RouterContext';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { CareBeyondCirclePage } from './pages/CareBeyondCirclePage';
import { CommunityPage } from './pages/CommunityPage';
import { FounderNotePage } from './pages/FounderNotePage';
import { HealthDisclaimerPage } from './pages/HealthDisclaimerPage';
import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ScientificApproachPage } from './pages/ScientificApproachPage';

function AppShell() {
  const { pathname } = useRouter();

  const renderPage = () => {
    if (pathname === '/' || pathname === '') {
      return <HomePage />;
    }
    if (pathname === '/scientific-approach') {
      return <ScientificApproachPage />;
    }
    if (pathname === '/community') {
      return <CommunityPage />;
    }
    if (pathname.startsWith('/community/blog/')) {
      const slug = pathname.replace('/community/blog/', '').replace(/\/+$/, '');
      return <BlogArticlePage slug={slug} />;
    }
    if (pathname === '/our-story') {
      return <OurStoryPage />;
    }
    if (pathname === '/our-story/founder') {
      return <FounderNotePage />;
    }
    if (pathname === '/care-beyond-circle') {
      return <CareBeyondCirclePage />;
    }
    if (pathname === '/health-disclaimer') {
      return <HealthDisclaimerPage />;
    }
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EC] text-[#30362F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#244B3B] focus:text-[#FFFEFA] focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: EASE_CALM }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BookingModal />
      <WhatsAppActionModal />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <AppShell />
      </RouterProvider>
    </MotionConfig>
  );
}
