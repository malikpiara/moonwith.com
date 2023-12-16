import { Sidebar } from '@/components/logicola/sidebar';
import Exercise from '@/components/logicola/exercise';

export default function EasierTranslations() {
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <Sidebar />
        <div className='p-4 w-full'>
          <h1 className='mb-6 text-3xl font-bold text-slate-900'>
            Quiz (6.1.a)
          </h1>
          <Exercise initialQuestionIdx={0} />
        </div>
      </div>
    </>
  );
}
