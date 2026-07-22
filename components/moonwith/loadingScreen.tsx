'use client';
import { useEffect, useState } from 'react';

// Show a brief branded splash, then fade it out once the page is genuinely
// ready — mirroring X's behaviour rather than waiting on a fixed timer.
const MIN_VISIBLE_MS = 600; // brand beat, so it never just flashes on fast loads
const MAX_VISIBLE_MS = 2500; // safety cap, so a slow network can't trap the user
const FADE_MS = 500;

type Phase = 'visible' | 'fading' | 'hidden';

export const LoadingScreen = () => {
  const [phase, setPhase] = useState<Phase>('visible');

  useEffect(() => {
    const start = performance.now();
    let started = false;
    let fadeTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const beginFade = () => {
      if (started) return;
      started = true;
      // Honour the minimum brand-beat even if we're ready sooner.
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      fadeTimer = setTimeout(() => {
        setPhase('fading');
        removeTimer = setTimeout(() => setPhase('hidden'), FADE_MS);
      }, wait);
    };

    // "Ready" = fonts painted (content is already there via SSG). The cap
    // guarantees we fade regardless, even without the Font Loading API.
    const cap = setTimeout(beginFade, MAX_VISIBLE_MS);
    if (document.fonts?.ready) {
      document.fonts.ready.then(beginFade).catch(beginFade);
    } else if (document.readyState === 'complete') {
      beginFade();
    } else {
      window.addEventListener('load', beginFade, { once: true });
    }

    return () => {
      clearTimeout(cap);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      window.removeEventListener('load', beginFade);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      aria-hidden='true'
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#232616] transition-opacity ease-out duration-500 motion-reduce:transition-none ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <svg
        className={`w-[48px] h-[48px] transition-transform ease-out duration-500 motion-reduce:transition-none motion-reduce:animate-none ${
          phase === 'fading' ? 'scale-150' : 'animate-pulse'
        }`}
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='#E8ECD4'
        viewBox='0 0 18 20'
      >
        <path d='M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z' />
      </svg>
    </div>
  );
};
