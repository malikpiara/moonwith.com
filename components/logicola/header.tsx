import Image from 'next/image';
import mascotPic from '@/public/mascot.png';

const header = {
  title: 'LogiCola for Everyone',
  description:
    'LogiCola helps you learn logic. This is a web version of the original software built by the late Professor Harry Gensler.',
};

export function Header() {
  return (
    <>
      <header className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-28'>
          <div className='flex gap-10'>
            <div>
              <Mascot />
            </div>
            <div className='mt-16'>
              <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-logicolaPrimary md:text-5xl lg:text-5xl'>
                {header.title}
              </h1>
              <p className='text-lg font-normal text-stone-500 lg:text-xl'>
                {header.description}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export function Mascot() {
  return (
    <Image
      src={mascotPic}
      alt='Mascot'
      width='600'
      height='600'
      priority
      placeholder='empty'
    />
  );
}
