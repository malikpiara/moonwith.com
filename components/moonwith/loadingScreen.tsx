'use client';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 1000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showLoadingScreen && (
        <div className='w-full h-screen z-50 absolute left-0 top-0 bg-[#232616] flex items-center m-auto'>
          <svg
            className='w-[48px] h-[48px] text-gray-800 animate-pulse dark:text-white m-auto'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='#E8ECD4'
            viewBox='0 0 18 20'
          >
            <path d='M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z' />
          </svg>
        </div>
      )}
    </>
  );
};
