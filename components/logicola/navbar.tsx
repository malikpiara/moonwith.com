'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white border-slate-200 dark:border-slate-600 dark:bg-slate-900'>
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
        <a
          href='/logicola'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            LogiCola
          </span>
        </a>
        <button onMouseOver={() => console.log('Mouse over!')}>
          Mouse Over
        </button>

        <button
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600'
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
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          id='mega-menu-full'
          className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700'>
            <li>
              <a
                href='/logicola'
                className='block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-slate-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-slate-700'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <button
                type='button'
                onMouseOver={toggleMenu}
                id='mega-menu-full-dropdown-button'
                data-collapse-toggle='mega-menu-full-dropdown'
                className='flex items-center justify-between w-full py-2 px-3 text-slate-900 rounded md:w-auto hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-slate-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-slate-700'
              >
                Chapters{' '}
                <svg
                  className='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
            </li>

            <li>
              <a
                href='#'
                className='block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-slate-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-slate-700'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id='mega-menu-full-dropdown'
        className={`${
          !isMenuOpen && 'hidden'
        } mt-1 border-slate-200 shadow-sm bg-slate-50 md:bg-white border-y dark:bg-slate-800 dark:border-slate-600`}
      >
        <div className='grid max-w-screen-xl px-4 py-5 mx-auto text-slate-900 dark:text-white sm:grid-cols-2 md:px-6'>
          <ul>
            <li>
              <a
                href='/logicola/logic'
                className='block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700'
              >
                <div className='font-semibold'>Basic Propositional Logic</div>
                <span className='text-sm text-slate-500 dark:text-slate-400'>
                  Chapter 6
                </span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic'
                className='block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700'
              >
                <div className='font-semibold'>Quantificational Logic</div>
                <span className='text-sm text-slate-500 dark:text-slate-400'>
                  Chapter 8
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href='/logicola/logic'
                className='block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700'
              >
                <div className='font-semibold'>Propositional Proofs</div>
                <span className='text-sm text-slate-500 dark:text-slate-400'>
                  Chapter 7
                </span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic'
                className='block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700'
              >
                <div className='font-semibold'>Relations and Identity</div>
                <span className='text-sm text-slate-500 dark:text-slate-400'>
                  Chapter 9
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
