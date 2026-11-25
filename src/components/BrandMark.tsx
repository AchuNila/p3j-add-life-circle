interface BrandMarkProps {
  light?: boolean;
  label?: string;
}

export function BrandMark({ light = false, label = 'P3J ADD LIFE' }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0">
      <img
        src="/assets/aistudio/WhatsApp_Image_2026-11-17_at_16.38.52_bc21213c.jpeg"
        alt={`${label} logo — Parasparopagraho Jivanam, Vasudhaiva Kudumbakam`}
        referrerPolicy="no-referrer"
        className={`object-contain shrink-0 bg-white ${
          light
            ? 'h-14 w-14 rounded-xl p-1'
            : 'h-11 w-11 sm:h-12 sm:w-12 rounded-lg p-0.5 border border-[#244B3B]/15'
        }`}
      />
      <span
        className={`font-serif text-xl sm:text-[23px] font-bold tracking-tight whitespace-nowrap shrink-0 ${
          light ? 'text-[#FFFEFA]' : 'text-[#244B3B]'
        }`}
      >
        {label}
      </span>
    </span>
  );
}
