import { Sidebar } from '@/components/logicola/sidebar';
import TableOfContent from '@/components/logicola/tableOfContent';

export const metadata = {
  title: 'Logicola | Exercises',
  description:
    'LogiCola is a program to help students learn logic. This is a web version of the original software built by the late Professor Harry Gensler.',
  creator: 'Malik Piara',
  keywords: [
    'logic',
    'propositional logic',
    'introduction to logic',
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

export default function Logic() {
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <Sidebar />
        <div className='p-4 w-full'>
          <TableOfContent chapter={6} />
          <TableOfContent chapter={7} />
        </div>
      </div>
    </>
  );
}
