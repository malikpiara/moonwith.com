'use client';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

export default function GameWindow() {
  const [playerPosition, setPlayerPosition] = useState(50);

  const handleKeyDown = (event) => {
    switch (event.key) {
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
      <div className='relative flex m-auto bg-[#060f20] w-full h-full rounded-xl max-w-6xl max-h-[35rem]'>
        <Character position={playerPosition} />
        {/* <Character color='bg-blue-600' position={playerPosition} /> */}
        <Ball />
      </div>
    </>
  );
}

const Character = ({ color = 'bg-pink-600', position }: any) => {
  return (
    <>
      <div
        className={classNames(
          'absolute w-14 h-14 rounded-t-full bottom-0',
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
