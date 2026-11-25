export const siteConfig = {
  brandName: 'P3J',
  philosophy: 'Parasparopagraho Jīvānām',
  philosophyTranslation: 'We help one another live.',
  primaryTagline: 'P3J – Live Better. Age at Home.',
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.trim() || '919495975238',
  whatsappDisplay: '+91 94959 75238',
  contactEmail:
    (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() ||
    'salfaanandam@gmail.com',
  whitePaperUrl: (import.meta.env.VITE_WHITE_PAPER_URL as string | undefined)?.trim() || '',
  presentationDeckUrl:
    (import.meta.env.VITE_PRESENTATION_DECK_URL as string | undefined)?.trim() || '',
  youtubeIds: {
    foods: (import.meta.env.VITE_YOUTUBE_SHORT_FOODS_ID as string | undefined)?.trim() || '',
    sleep: (import.meta.env.VITE_YOUTUBE_SHORT_SLEEP_ID as string | undefined)?.trim() || '',
    grounding:
      (import.meta.env.VITE_YOUTUBE_SHORT_GROUNDING_ID as string | undefined)?.trim() || '',
    mobility:
      (import.meta.env.VITE_YOUTUBE_SHORT_MOBILITY_ID as string | undefined)?.trim() || '',
  },
};

export function buildWhatsAppUrl(message: string): string | null {
  const cleaned = siteConfig.whatsappNumber.replace(/[^\d]/g, '');
  if (!cleaned) {
    return null;
  }
  const normalized = cleaned.length === 10 ? `91${cleaned}` : cleaned;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppShareUrl(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
