import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';

/**
 * This component displays a navbar.
 */
export function Header() {
  return (
    <header className='flex bg-tertiary w-full absolute left-0 top-0 flex-wrap opacity-80 text-primary'>
      <div className='flex items-center justify-between'>
        <ModeToggle />
        <nav className='ml-auto font-medium space-x-1'>
          <Link
            className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
            href='/'
          >
            Home
          </Link>
          <Link
            className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
            href='/about'
          >
            About
          </Link>
          <Link
            className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
            href='/projects'
          >
            Work
          </Link>
          <Link
            className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
            href='/dashboard'
          >
            Software
          </Link>
          <Link
            className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
            href='/friends'
          >
            Friends
          </Link>
          <Link
            className='opacity-80 p-2 transition-all duration-300 hover:opacity-100'
            href='/contact'
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
