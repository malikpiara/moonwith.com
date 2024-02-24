const manualUrl = '/logic_teacher_manual.pdf';

export const metadata = {
  title: 'Logicola | Answers',
  description:
    'LogiCola is a program to help students learn logic. This is a web version of the original software built by the late Professor Harry Gensler.',
  creator: 'Malik Piara',
  keywords: [
    'logicola answers',
    'introduction to logic',
    'book',
    'teacher manual',
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

export default function Answers() {
  return (
    <>
      <div className='flex flex-col w-full py-8 px-4'>
        <h1 className='text-2xl font-bold'>Answers to Problems</h1>
        <div>
          The Teacher Manual for Introduction to Logic contains the answers to
          exercises that don&apos;t come with the student manual. Since
          Professor Gensler made it available, I&apos;do the same below.
        </div>

        <div className='flex w-full h-screen py-8 px-4'>
          <iframe className='w-full h-screen' src={manualUrl} />
        </div>
      </div>
    </>
  );
}
