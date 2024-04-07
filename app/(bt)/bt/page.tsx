'use client';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

export default function GameWindow() {
  const [playerPosition, setPlayerPosition] = useState(50);
  const [isAttacking, setAttacking] = useState(false);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case ' ':
        event.preventDefault();
        setAttacking(!isAttacking);
        break;
      case 'ArrowRight':
        event.preventDefault();
        setPlayerPosition((prevPosition) => Math.min(prevPosition + 25, 3000));
        break;
      case 'ArrowLeft':
        event.preventDefault();
        setPlayerPosition((prevPosition) => Math.max(prevPosition - 25, 0));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  return (
    <>
      <div className='relative flex m-auto bg-[#060f20] w-full h-full rounded-xl max-w-6xl max-h-[35rem] z-50'>
        <Character position={playerPosition} />
        <Character color='bg-blue-600' position={800} />
        <Ball />
        {isAttacking && <Arrow position={playerPosition} />}
      </div>
    </>
  );
}

const Character = ({ color = 'bg-pink-600', position }: any) => {
  return (
    <>
      <div
        className={classNames(
          'absolute w-14 h-14 rounded-t-full bottom-0 z-10',
          color,
          'transition-all',
          'hover:animate-pulse'
        )}
        style={{ transform: `translateX(${position}px)` }}
      />
    </>
  );
};

const Ball = ({ color = 'bg-yellow-500', xPosition = 'left-16' }: any) => {
  return (
    <>
      <div
        className={classNames(
          'absolute w-40 h-40 rounded-full bottom-80',
          color,
          xPosition,
          'transition-all'
        )}
        style={{
          animation:
            'moveX 4.05s linear 0s infinite alternate, moveY 1.4s linear 0s infinite alternate',
        }}
      />
    </>
  );
};

const Arrow = ({ position }) => {
  return (
    <svg
      className='absolute text-white bottom-5 -z-10 left-5'
      style={{
        animation: 'arrowAttack 4s linear 0s infinite',
        transform: `translateX(${position}px)`, // Key Change
      }}
      viewBox='239.515 95.492 18.685 332.098'
      width='18.685'
      height='332.098'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M 248.857 95.492 L 248.857 427.59 M 248.857 95.492 L 258.2 106.845 M 248.857 95.492 L 239.515 106.845'
      />
    </svg>
  );
};
