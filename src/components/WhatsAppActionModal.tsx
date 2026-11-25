import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, MessageCircle, X } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { buildWhatsAppShareUrl, buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { EASE_CALM } from './MotionPrimitives';

export function WhatsAppActionModal() {
  const { whatsAppPreview, closeWhatsAppPreview } = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!whatsAppPreview) return;
    try {
      await navigator.clipboard.writeText(whatsAppPreview.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <AnimatePresence>
      {whatsAppPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE_CALM }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A382B]/55 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.985 }}
            transition={{ duration: 0.28, ease: EASE_CALM }}
            className="relative w-full max-w-lg rounded-2xl bg-[#FFFEFA] border border-[#244B3B]/15 p-6 sm:p-8 shadow-xl"
          >
            <button
              type="button"
              onClick={closeWhatsAppPreview}
              aria-label="Close WhatsApp message dialog"
              className="absolute right-4 top-4 w-11 h-11 rounded-xl flex items-center justify-center text-[#30362F] hover:bg-[#EBF0E6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-[#244B3B] mb-4 pr-10">
              <MessageCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
              <h2 id="whatsapp-modal-title" className="text-2xl font-serif font-semibold text-[#244B3B]">
                {whatsAppPreview.title}
              </h2>
            </div>

            <p className="text-base text-[#30362F] mb-4">
              Your prepared WhatsApp message is ready below to send to{' '}
              <span className="font-semibold tabular-nums">{siteConfig.whatsappDisplay}</span>.
            </p>

            <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/15 p-4 text-base text-[#30362F] whitespace-pre-wrap mb-6">
              {whatsAppPreview.message}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-medium hover:bg-[#1A382B] transition-colors whitespace-nowrap cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Message Copied' : 'Copy Message'}
              </button>

              <a
                href={buildWhatsAppUrl(whatsAppPreview.message) || buildWhatsAppShareUrl(whatsAppPreview.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#244B3B]/30 text-[#244B3B] text-base font-medium hover:bg-[#EBF0E6] transition-colors whitespace-nowrap"
              >
                Open in WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
