import Exercise from '@/components/logicola/exercise';
import ExerciseSidebar from '@/components/logicola/exerciseSidebar';

export const metadata = {
  title: 'Logicola | Basic Propositional Logic: Easier Translations',
  description:
    'Basic Propositional Logic exercises. Translating from natural language to symbolic form. LogiCola is a program to help students learn logic.',
  creator: 'Malik Piara',
  keywords: [
    'logic',
    'propositional logic',
    'introduction to logic',
    'basic propositional logic',
    'propositional logic translations',
    'download logicola',
  ],
  publisher: 'Malik Piara',
  openGraph: {
    images: '/malik_mini.jpeg',
    authors: ['Malik'],
  },
  icons: {
    icon: '/next.svg',
  },
};

export default function ExercisePage({
  params,
}: {
  params: { exercise: number };
}) {
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <ExerciseSidebar initialQuestionIdx={0} />
        <div className='p-4 w-full'>
          <h1 className='mb-6 text-3xl font-bold text-stone-900'>
            Quiz (6.1.a)
          </h1>
          {/* We're subtracting 1 from the parameters because the index of the exercises starts at 0 */}
          <Exercise chapter={6.1} initialQuestionIdx={params.exercise - 1} />
        </div>
      </div>
    </>
  );
}
