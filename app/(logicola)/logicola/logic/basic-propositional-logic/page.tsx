import { Sidebar } from '@/components/logicola/sidebar';
import TableOfContent from '@/components/logicola/tableOfContent';

export default function BasicPropositionalLogic() {
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <Sidebar />
        <div className='p-4 w-full'>
          <h1 className='mb-6 text-3xl font-bold text-slate-900'>
            Chapter 6: Basic Propositional Logic
          </h1>
          <TableOfContent chapter={6} />
        </div>
      </div>
    </>
  );
}
