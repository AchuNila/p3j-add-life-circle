import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { ACKNOWLEDGEMENT_CHECKBOX_TEXT, SPOKEN_SAFETY_REMINDER } from '../data/p3jContent';
import { useRouter } from '../context/RouterContext';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface IntroBookingFormProps {
  initialTopic?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

const SESSION_SCHEDULE_OPTIONS = [
  { value: 'Monday - 10:00 AM IST', label: 'Monday - 10:00 AM IST' },
  { value: 'Wednesday - 10:00 AM IST', label: 'Wednesday - 10:00 AM IST' },
  { value: 'Friday - 10:00 AM IST', label: 'Friday - 10:00 AM IST' },
];

const AGE_GROUP_OPTIONS = ['55 - 65 yrs', '65 - 75 yrs', '75+ yrs'] as const;

export function IntroBookingForm({
  initialTopic = '',
  onSuccess,
  compact = false,
}: IntroBookingFormProps) {
  const { navigate, closeBooking, triggerWhatsApp } = useRouter();

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [ageGroup, setAgeGroup] = useState<string>('65 - 75 yrs');
  const [residence, setResidence] = useState('');
  const [preferredDate, setPreferredDate] = useState(SESSION_SCHEDULE_OPTIONS[0].value);
  const [note, setNote] = useState(initialTopic);
  const [acknowledged, setAcknowledged] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    whatsapp: string;
    ageGroup: string;
    residence: string;
    preferredDateLabel: string;
  } | null>(null);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const digits = whatsapp.replace(/[^\d]/g, '');
    if (digits.length < 10 || digits.length > 15) {
      nextErrors.whatsapp = 'Please enter a valid 10 to 15 digit WhatsApp number (with country code if outside India).';
    }
    if (!preferredDate) {
      nextErrors.preferredDate = 'Please select a preferred Monday, Wednesday, or Friday session date.';
    }
    if (residence.trim().length < 2) {
      nextErrors.residence = 'Please enter your city or country of residence.';
    }
    if (!acknowledged) {
      nextErrors.acknowledged =
        'Please read and tick the Health Disclaimer and Participation Acknowledgement box before submitting.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const matchedDate =
      SESSION_SCHEDULE_OPTIONS.find((d) => d.value === preferredDate)?.label || preferredDate;

    setSubmittedData({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      ageGroup,
      residence: residence.trim(),
      preferredDateLabel: matchedDate,
    });
    if (onSuccess) onSuccess();
  };

  if (submittedData) {
    const confirmMsg = `Namaste P3J team! I just booked a Free Intro Session.\nName: ${submittedData.name}\nWhatsApp: ${submittedData.whatsapp}\nAge Group: ${submittedData.ageGroup}\nResidence: ${submittedData.residence}\nPreferred Date: ${submittedData.preferredDateLabel}${note ? `\nNote: ${note}` : ''}`;
    const hasConfiguredWhatsApp = Boolean(buildWhatsAppUrl(confirmMsg));

    return (
      <div className="rounded-2xl bg-[#EBF0E6] border border-[#244B3B]/20 p-6 sm:p-8 text-left">
        <div className="flex items-start gap-3 mb-4">
          <CheckCircle2 className="w-7 h-7 text-[#244B3B] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-2xl font-serif font-semibold text-[#244B3B]">
              Intro Session Request Received
            </h3>
            <p className="text-base text-[#30362F] mt-1">
              Thank you, <strong>{submittedData.name}</strong> ({submittedData.ageGroup} ·{' '}
              {submittedData.residence}). Your request for{' '}
              <span className="font-medium">{submittedData.preferredDateLabel}</span> has been recorded.
            </p>
          </div>
        </div>

        <ol className="space-y-2.5 text-base text-[#30362F] bg-[#FFFEFA] rounded-xl border border-[#244B3B]/15 p-5 mb-5">
          <li>
            <strong>1. Welcome Message:</strong> P3J contacts you on WhatsApp ({submittedData.whatsapp}) to confirm your preferred date.
          </li>
          <li>
            <strong>2. Google Meet Link:</strong> You will receive a simple Google Meet joining link directly through WhatsApp.
          </li>
          <li>
            <strong>3. Join Live:</strong> Open the Google Meet link at 10:00 AM IST from the comfort of home.
          </li>
        </ol>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() =>
              triggerWhatsApp({
                title: 'Send Booking Details via WhatsApp',
                message: confirmMsg,
              })
            }
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-medium hover:bg-[#1A382B] transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            {hasConfiguredWhatsApp ? 'Message P3J on WhatsApp' : 'Preview WhatsApp Message'}
          </button>

          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setName('');
              setWhatsapp('');
              setResidence('');
              setAcknowledged(false);
            }}
            className="px-4 py-3 rounded-xl text-base font-medium text-[#244B3B] hover:bg-[#FFFEFA] transition-colors"
          >
            Book for Another Date
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      <div className="rounded-xl bg-[#EBF0E6]/75 border border-[#244B3B]/15 px-4 py-3 text-base text-[#244B3B] font-medium">
        Your initial intro session is completely free — join live from home with no payment or obligation.
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label htmlFor="booking-name" className="block text-base font-medium text-[#244B3B] mb-1.5">
            Your Full Name
          </label>
          <input
            id="booking-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Meera Krishnan"
            className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFEFA] border border-[#244B3B]/25 text-base text-[#30362F] placeholder:text-[#555D54]/70"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm font-medium text-[#9A3412]" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="booking-whatsapp" className="block text-base font-medium text-[#244B3B] mb-1.5">
            WhatsApp Number
          </label>
          <input
            id="booking-whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="e.g., +91 98XXXXXXXX"
            className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFEFA] border border-[#244B3B]/25 text-base text-[#30362F] placeholder:text-[#555D54]/70 tabular-nums"
            aria-invalid={Boolean(errors.whatsapp)}
          />
          {errors.whatsapp && (
            <p className="mt-1.5 text-sm font-medium text-[#9A3412]" role="alert">
              {errors.whatsapp}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="booking-date" className="block text-base font-medium text-[#244B3B] mb-1.5">
          Preferred Intro Session Date (Mon, Wed & Fri · 10:00 AM IST)
        </label>
        <div className="relative">
          <Calendar
            className="w-5 h-5 text-[#244B3B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <select
            id="booking-date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className="w-full min-h-[48px] pl-12 pr-4 py-3 rounded-xl bg-[#FFFEFA] border border-[#244B3B]/25 text-base text-[#30362F]"
          >
            {SESSION_SCHEDULE_OPTIONS.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
        {errors.preferredDate && (
          <p className="mt-1.5 text-sm font-medium text-[#9A3412]" role="alert">
            {errors.preferredDate}
          </p>
        )}
      </div>

      <div>
        <span
          id="age-group-label"
          className="block text-base font-medium text-[#244B3B] mb-2"
        >
          Your Age Group (Helps us calibrate movement pacing)
        </span>
        <div
          role="radiogroup"
          aria-labelledby="age-group-label"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {AGE_GROUP_OPTIONS.map((option) => {
            const selected = ageGroup === option;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setAgeGroup(option)}
                className={`min-h-[48px] px-4 py-3 rounded-xl border text-base font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selected
                    ? 'bg-[#244B3B] text-[#FFFEFA] border-[#244B3B]'
                    : 'bg-[#FFFEFA] text-[#30362F] border-[#244B3B]/25 hover:bg-[#EBF0E6]'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="booking-residence" className="block text-base font-medium text-[#244B3B] mb-1.5">
          City / Country of Residence
        </label>
        <input
          id="booking-residence"
          type="text"
          value={residence}
          onChange={(e) => setResidence(e.target.value)}
          placeholder="e.g., Bengaluru, Mumbai, London, or Singapore"
          className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFEFA] border border-[#244B3B]/25 text-base text-[#30362F] placeholder:text-[#555D54]/70"
          aria-invalid={Boolean(errors.residence)}
        />
        {errors.residence && (
          <p className="mt-1.5 text-sm font-medium text-[#9A3412]" role="alert">
            {errors.residence}
          </p>
        )}
      </div>

      {initialTopic && (
        <div>
          <label htmlFor="booking-note" className="block text-base font-medium text-[#244B3B] mb-1.5">
            Interest / Note (Optional)
          </label>
          <input
            id="booking-note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FFFEFA] border border-[#244B3B]/25 text-base text-[#30362F]"
          />
        </div>
      )}

      <div className="rounded-xl bg-[#F8F5EC] border border-[#244B3B]/20 p-4 sm:p-5">
        <label className="flex items-start gap-3.5 cursor-pointer">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-[#244B3B]/40 text-[#244B3B] accent-[#244B3B] shrink-0 cursor-pointer"
          />
          <span className="text-sm sm:text-base leading-relaxed text-[#30362F]">
            {ACKNOWLEDGEMENT_CHECKBOX_TEXT}{' '}
            <button
              type="button"
              onClick={() => {
                closeBooking();
                navigate('/health-disclaimer');
              }}
              className="underline font-medium text-[#244B3B] hover:text-[#1A382B]"
            >
              Read full Health Disclaimer
            </button>
          </span>
        </label>
        {errors.acknowledged && (
          <p className="mt-2 text-sm font-medium text-[#9A3412]" role="alert">
            {errors.acknowledged}
          </p>
        )}
      </div>

      <p className="text-sm text-[#555D54] leading-relaxed">
        <strong>Session Safety Note:</strong> {SPOKEN_SAFETY_REMINDER}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <button
          type="submit"
          className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] transition-colors cursor-pointer"
        >
          Book a Free Intro Session
        </button>
        <span className="text-sm text-[#555D54]">
          Hosted live via Google Meet · Link sent on WhatsApp
        </span>
      </div>
    </form>
  );
}
