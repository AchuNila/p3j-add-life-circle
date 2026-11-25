import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { IntroBookingForm } from './IntroBookingForm';
import { EASE_CALM } from './MotionPrimitives';

export function BookingModal() {
  const { isBookingOpen, closeBooking, bookingPrefill } = useRouter();

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE_CALM }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A382B]/60 backdrop-blur-xs p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.985 }}
            transition={{ duration: 0.28, ease: EASE_CALM }}
            className="relative w-full max-w-2xl my-8 rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Close booking dialog"
              className="absolute right-4 top-4 w-11 h-11 rounded-xl flex items-center justify-center text-[#30362F] hover:bg-[#EBF0E6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10 mb-6">
              <p className="text-sm font-medium text-[#555D54]">
                Live Online via Google Meet · Mon, Wed & Fri at 10:00 AM IST
              </p>
              <h2 id="booking-modal-title" className="text-3xl font-serif font-semibold text-[#244B3B] mt-1">
                Book a Free Intro Session
              </h2>
              <p className="text-base text-[#30362F] mt-2">
                Experience a welcoming 50-minute Add Life Circle from your home. Enter your details below and we will send your confirmation and Google Meet link via WhatsApp.
              </p>
            </div>

            <IntroBookingForm initialTopic={bookingPrefill} compact />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
