import Image from 'next/image';

export function Header() {
  return (
    <>
      <section className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-28'>
          <div className='flex gap-10'>
            <div>
              <Image
                src={'/mascot.png'}
                alt='Mascot'
                width={600}
                height={600}
              />
            </div>
            <div className='mt-16'>
              <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-stone-900 md:text-5xl lg:text-5xl'>
                LogiCola for Everyone
              </h1>
              <p className='text-lg font-normal text-stone-500 lg:text-xl'>
                LogiCola helps you learn logic. This is a web version of the
                original software built by the late Professor Harry Gensler.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
