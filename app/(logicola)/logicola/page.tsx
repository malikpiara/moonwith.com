import { Header } from '@/components/logicola/header';
import Image from 'next/image';

export default function Logicola() {
  return (
    <>
      <div className='flex flex-col m-auto'>
        <Header />
        <div className='p-4 w-full'>
          {/* <div className='p-4 border-2 border-stone-200 border-dashed rounded-lg dark:border-stone-700'>
            <div className='flex items-center justify-center h-96 mb-4 rounded bg-stone-50 dark:bg-stone-800'>
              <div className='text-2xl text-stone-400 dark:text-stone-500' />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
