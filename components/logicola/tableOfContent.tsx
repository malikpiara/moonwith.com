const TableOfContent = () => {
  return (
    <div className='max-w-7xl p-6 bg-white border border-slate-200 rounded-lg mb-6'>
      <h3 className='mb-2 text-xl font-bold tracking-tight text-slate-900'>
        Chapter 6: Basic Propositional Logic
      </h3>
      <hr className='h-px my-4 bg-slate-200 border-0'></hr>
      <div className='mx-auto w-full max-w-screen-xl p-4'>
        <div className='md:flex md:justify-between'>
          <div className='grid grid-cols-2 sm:gap-72 sm:grid-cols-2'>
            <div>
              <ul className='text-slate-500 font-medium'>
                <li className='mb-4'>
                  <a href='https://flowbite.com/' className='hover:underline'>
                    Easier Translations
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Simple Truth Tables
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Truth Evaluations
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Unknown Truth Evaluations
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Complex Truth Tables
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    The Truth-table Test
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    The Truth-assignment Test
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className='text-slate-500 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Harder Translations
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Idiomatic Arguments
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    S-Rules
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    I-Rules
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Mixing S- and I-Rules
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Extended Inferences
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
