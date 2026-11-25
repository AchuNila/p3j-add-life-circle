import { useEffect, useRef, useState } from 'react';
import { Loader2, Square, Volume2 } from 'lucide-react';

interface ListenWelcomeButtonProps {
  compact?: boolean;
  onDark?: boolean;
}

export function ListenWelcomeButton({ compact = false, onDark = false }: ListenWelcomeButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }
    };
  }, []);

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setStatus('idle');
  };

  const handleToggleSpeech = async () => {
    if (status === 'loading') return;

    if (status === 'playing') {
      stopPlayback();
      return;
    }

    setErrorMsg('');

    try {
      let url = audioUrlRef.current;

      if (!url) {
        setStatus('loading');
        const response = await fetch('/api/welcome-audio');
        if (!response.ok) {
          let detail = 'Unable to load welcome audio.';
          try {
            const payload = (await response.json()) as { error?: string };
            if (payload?.error) detail = payload.error;
          } catch {
            // Keep default detail
          }
          throw new Error(detail);
        }

        const blob = await response.blob();
        url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
      }

      if (!audioRef.current) {
        const audio = new Audio(url);
        audio.onended = () => setStatus('idle');
        audio.onerror = () => {
          setStatus('error');
          setErrorMsg('Audio playback could not start.');
        };
        audioRef.current = audio;
      }

      audioRef.current.currentTime = 0;
      await audioRef.current.play();
      setStatus('playing');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unable to play welcome audio.');
    }
  };

  return (
    <div className="inline-flex items-center gap-2 shrink-0">
      <button
        type="button"
        onClick={handleToggleSpeech}
        aria-pressed={status === 'playing'}
        aria-busy={status === 'loading'}
        title={errorMsg || 'Listen to a warm welcome from P3J'}
        className={`inline-flex items-center gap-2 rounded-full border font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
          compact
            ? 'min-h-[34px] px-3.5 py-1 text-xs sm:text-sm'
            : 'min-h-[44px] px-4 py-2 text-sm sm:text-base'
        } ${
          status === 'playing'
            ? onDark
              ? 'bg-[#1A382B] text-[#FFFEFA] border-[#C6A66A] hover:bg-[#142B21]'
              : 'bg-[#244B3B] text-[#FFFEFA] border-[#244B3B]'
            : onDark
              ? 'bg-[#FFFEFA] text-[#244B3B] border-[#FFFEFA]/80 hover:bg-[#EBF0E6]'
              : 'bg-[#FFFEFA] text-[#244B3B] border-[#244B3B]/25 hover:bg-[#EBF0E6]'
        }`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
            <span>Loading Voice...</span>
          </>
        ) : status === 'playing' ? (
          <>
            <Square className="w-3.5 h-3.5 fill-current shrink-0" aria-hidden="true" />
            <span>Stop Listening</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Listen / Read Aloud</span>
          </>
        )}
      </button>

      {status === 'error' && errorMsg && (
        <span
          className={`text-xs font-medium max-w-[180px] truncate ${
            onDark ? 'text-[#FDE68A]' : 'text-[#9A3412]'
          }`}
          role="status"
        >
          {errorMsg}
        </span>
      )}
    </div>
  );
}
