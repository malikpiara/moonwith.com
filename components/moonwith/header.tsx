'use client';
import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';
import Image from 'next/image';
import logo from '../../public/logomark.svg';
import { useState } from 'react';

interface NavItem {
  label: string;
  destination: string;
}

/**
 * This component displays a navbar for Moonwith's main website.
 * To add new items to the navigation, add the items to the items constant.
 */
export function Header() {
  const items: NavItem[] = [
    { label: 'Home', destination: '/' },
    { label: 'About', destination: '/about' },
    { label: 'Work', destination: '/projects' },
    { label: 'Software', destination: '/dashboard' },
    { label: 'Friends', destination: '/friends' },
    { label: 'Get in Touch', destination: '/contact' },
  ];

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
      <nav className='sm:hidden block w-full bottom-5 relative -mb-5'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0'>
          <a
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <svg
              className='w-[28px] h-[28px] text-gray-800 dark:text-white m-auto hidden dark:block'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='#fbf9f2'
              viewBox='0 0 18 20'
            >
              <path d='M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z' />
            </svg>
            <svg
              className='w-[28px] h-[28px] text-gray-800 dark:text-white m-auto dark:hidden'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='#152644'
              viewBox='0 0 18 20'
            >
              <path d='M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z' />
            </svg>
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden dark:block'>
              Moonwith
            </span>
            <Image
              className='dark:hidden'
              alt='logomark'
              src={logo}
              width={140}
            />
          </a>
          <button
            onClick={toggleMenu}
            data-collapse-toggle='navbar-hamburger'
            type='button'
            className='inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-hamburger'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          {isDropdownVisible && (
            <div className='w-full' id='navbar-hamburger'>
              <ul className='flex flex-col font-medium mt-4 rounded-lg'>
                {items.map((item: NavItem) => {
                  return (
                    <li
                      key={item.label}
                      className='block py-2 px-3 text-primary rounded hover:text-white hover:bg-primary dark:text-inherit dark:hover:text-white dark:hover:bg-blue-600'
                    >
                      <Link
                        className='transition-all duration-300 hover:opacity-100'
                        href={item.destination}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <header className='max-sm:hidden flex w-full absolute left-0 top-2 flex-wrap justify-between text-primary dark:text-gray'>
        <div className='flex items-center'>
          <ModeToggle />
          <Link
            className='flex text-md p-2 transition-all duration-300 hover:opacity-100'
            href={'/'}
          >
            <span className='font-semibold tracking-wide dark:text-gray flex'>
              MOONWITH
            </span>
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
