import { Sidebar } from '@/components/logicola/sidebar';
import TableOfContent from '@/components/logicola/tableOfContent';

export default function Logic() {
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <Sidebar />
        <div className='p-4 w-full'>
          <TableOfContent />
          <TableOfContent />
        </div>
      </div>
    </>
  );
}
