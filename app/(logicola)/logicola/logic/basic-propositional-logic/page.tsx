import { Sidebar } from '@/components/logicola/sidebar';
import TopicTable from '@/components/logicola/topicTable';

export default function BasicPropositionalLogic() {
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <Sidebar />
        <div className='p-4 w-full'>
          <h1 className='mb-6 text-3xl font-bold text-slate-900'>
            Chapter 6: Basic Propositional Logic
          </h1>
          <TopicTable topic={1} />
        </div>
      </div>
    </>
  );
}
