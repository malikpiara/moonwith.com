import { Sidebar } from '@/components/logicola/sidebar';
import Exercise from '@/components/logicola/exercise';

export default function ExercisePage({
  params,
}: {
  params: { exercise: number };
}) {
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <Sidebar />
        <div className='p-4 w-full'>
          <h1 className='mb-6 text-3xl font-bold text-slate-900'>
            Quiz (6.1.a)
          </h1>
          {/* We're subtracting 1 from the parameters because the index of the exercises starts at 0 */}
          <Exercise initialQuestionIdx={params.exercise - 1} />
        </div>
      </div>
    </>
  );
}
