import Link from 'next/link';

type TopicTableProps = {
  topic: number;
};

const TopicTable = ({ topic }: TopicTableProps) => {
  return (
    <div className='max-w-7xl p-6 bg-white border border-slate-200 rounded-lg mb-6'>
      {topic === 1 ? (
        <>
          <h3 className='mb-2 text-xl font-bold tracking-tight text-slate-900'>
            Easier Translations (6.1)
          </h3>
          <hr className='h-px my-4 bg-slate-200 border-0'></hr>
          <div className='mx-auto w-full max-w-screen-xl p-4'>
            <div className='md:flex md:justify-between'>
              <div className='grid grid-cols-2 sm:gap-72 sm:grid-cols-2'>
                <div>
                  <ul className='text-slate-500 font-medium'>
                    <li className='mb-4'>
                      <Link
                        href='/logicola/logic/basic-propositional-logic/easier-translations/1'
                        className='hover:text-green-600 hover:underline'
                      >
                        Not Both A and B
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link
                        href='/logicola/logic/basic-propositional-logic/easier-translations/2'
                        className='opacity-30 cursor-not-allowed'
                      >
                        Both A and either B or C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        Either both A and B or C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        If A, then B or C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        If A then B, or C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        If not A, then either not B or C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        If not A, then either not B or C
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='text-slate-500 font-medium'>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        Either A or B, and C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        Either A, or B and C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        If A then not both not B and not C
                      </Link>
                    </li>
                    <li className='mb-4'>
                      <Link href='#' className='opacity-30 cursor-not-allowed'>
                        If you get an error message, then the disk is bad or it
                        is a Macintosh disk.
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TopicTable;
