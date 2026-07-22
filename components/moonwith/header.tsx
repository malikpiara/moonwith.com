'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '../mode-toggle';
import Image from 'next/image';
import logo from '../../public/logomark.svg';
import logoDark from '../../public/logomark-dark.svg';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';

interface NavItem {
  label: string;
  destination: string;
}

const items: NavItem[] = [
  { label: 'Home', destination: '/' },
  { label: 'About', destination: '/about' },
  { label: 'Work', destination: '/projects' },
  { label: 'Software', destination: '/dashboard' },
  { label: 'Get in Touch', destination: '/contact' },
  {
    label: 'Subscribe',
    destination: 'https://malikpiara.substack.com/subscribe',
  },
];

/**
 * This component displays a navbar for Moonwith's main website.
 * To add new items to the navigation, add the items to the items constant.
 */
export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close the menu on any route change, including browser back/forward
  // (the header lives in the shared layout, so it survives navigations).
  // State is adjusted during render — React re-renders immediately without
  // committing the stale open state, unlike an effect.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    // If the viewport grows past the `sm` breakpoint (e.g. phone rotates to
    // landscape), the nav is display:none'd away — close so the scroll lock
    // can't strand the page.
    const desktopQuery = window.matchMedia('(min-width: 640px)');
    const onDesktop = () => setMenuOpen(false);

    document.addEventListener('keydown', onKeyDown);
    desktopQuery.addEventListener('change', onDesktop);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      desktopQuery.removeEventListener('change', onDesktop);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className='sm:hidden block w-full bottom-5 relative -mb-5'>
        <div className='relative z-50 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0'>
          <Link href='/' className='flex items-center'>
            <Image
              className='dark:hidden'
              alt='Moonwith'
              src={logo}
              width={140}
            />
            <Image
              className='hidden dark:block'
              alt='Moonwith'
              src={logoDark}
              width={140}
            />
          </Link>
          <button
            ref={toggleButtonRef}
            onClick={() => setMenuOpen(!isMenuOpen)}
            type='button'
            className='inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-primary dark:text-[#EAECD7] rounded-lg hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-hamburger'
            aria-expanded={isMenuOpen}
          >
            <span className='sr-only'>
              {isMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {isMenuOpen ? (
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 12 12M13 1 1 13'
                />
              </svg>
            ) : (
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div
            className='fixed inset-0 z-40 flex flex-col justify-center text-center bg-secondary dark:bg-primary'
            id='navbar-hamburger'
          >
            <div className='flex flex-col rounded-lg'>
              {items.map((item: NavItem) => {
                return (
                  <Button
                    asChild
                    key={item.label}
                    className=' text-4xl font-light bg-transparent py-2 px-3 text-primary rounded hover:text-white dark:text-inherit mb-5'
                  >
                    <Link
                      className='transition-all duration-300 hover:opacity-100 w-full'
                      href={item.destination}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <header className='max-sm:hidden flex w-full absolute left-0 top-2 flex-wrap justify-between text-primary dark:text-[#EAECD7]'>
        <div className='flex items-center'>
          <ModeToggle />
          <Link
            className='flex text-md p-2 transition-all duration-300 hover:opacity-100'
            href={'/'}
          >
            <span className='font-semibold tracking-wide  flex'>MOONWITH</span>
          </Link>
        </div>
        <div className='flex items-center justify-between'>
          <nav className='ml-auto font-medium space-x-1'>
            {items.map((item: NavItem) => {
              return (
                <Link
                  key={item.label}
                  className='text-md p-2 transition-all duration-300 hover:opacity-100'
                  href={item.destination}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
