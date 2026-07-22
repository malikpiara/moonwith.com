'use client';

import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  // Render both icons and let CSS pick based on the `.dark` class on <html>
  // (set by next-themes). This keeps the server and client DOM identical, so
  // there's no hydration mismatch and no icon flash on load.
  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='w-6 h-6 flex items-center justify-center'
    >
      <span className='sr-only'>Toggle mode</span>
      {/* Moon — shown in light mode (click to switch to dark) */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='#EAECD7'
        className='w-4 h-4 dark:hidden'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
        />
      </svg>
      {/* Sun — shown in dark mode (click to switch to light) */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='#EAECD7'
        className='w-4 h-4 hidden dark:block'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
        />
      </svg>
    </button>
  );
}
