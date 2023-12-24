import Image from 'next/image';

export default function Logicola() {
  return (
    <>
      <div className='flex m-auto h-screen items-center gap-14'>
        <div className='p-4 w-full flex flex-col gap-3 items-center rounded-xl hover:bg-neutral-200 cursor-pointer transition duration-500 hover:scale-125'>
          <div className='w-20 h-20 bg-red-700 rounded-full' />
          <h1 className='font-medium text-slate-800 text-lg'>Malik</h1>
        </div>
        <div className='p-4 w-full flex flex-col gap-3 items-center rounded-xl hover:bg-neutral-200 cursor-pointer transition duration-500 hover:scale-125'>
          <div className='w-20 h-20 bg-pink-800 rounded-full' />
          <h1 className='font-medium text-slate-800 text-lg'>Sarah</h1>
        </div>
        <div className='p-4 w-full flex flex-col gap-3 items-center rounded-xl hover:bg-neutral-200 cursor-pointer transition duration-500 hover:scale-125'>
          <div className='w-20 h-20 bg-pink-700 rounded-full' />
          <h1 className='font-medium text-slate-800 text-lg'>Paty</h1>
        </div>
        <div className='p-4 w-full flex flex-col gap-3 items-center rounded-xl hover:bg-neutral-200 cursor-pointer transition duration-500 hover:scale-125'>
          <div className='w-20 h-20 bg-red-600 rounded-full' />
          <h1 className='font-medium text-slate-800 text-lg'>Soraya</h1>
        </div>
      </div>
    </>
  );
}
