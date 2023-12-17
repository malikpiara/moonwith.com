export function ChapterSidebar() {
  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-stone-500 rounded-lg sm:hidden hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-200'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='default-sidebar'
        className='flex shrink-0 top-0 left-0 z-40 w-80 h-screen transition-transform -transtone-x-full sm:transtone-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full w-full px-4 py-4 overflow-y-auto bg-stone-50'>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-stone-900 rounded-lg  hover:bg-stone-200 group'
              >
                <svg
                  className='w-5 h-5 text-stone-600'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 16'
                >
                  <path d='M19.9 6.58c0-.009 0-.019-.006-.027l-2-4A1 1 0 0 0 17 2h-4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.3c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0A3.173 3.173 0 0 0 7.7 12h4.6c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0 3.177 3.177 0 0 0-.049-.5h.3a1 1 0 0 0 1-1V7a.99.99 0 0 0-.1-.42ZM16.382 4l1 2H13V4h3.382ZM4.5 13.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm11 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z' />
                </svg>
                <span className='ms-3'>Easier Translations</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/1'
                className='flex flex-col p-2 text-stone-900 rounded-lg hover:bg-stone-200 group'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 1</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/2'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 2</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/3'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 3</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/4'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 4</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/5'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 5</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/6'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 6</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/7'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 7</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/8'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 8</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/9'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 9</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/10'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 10</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/11'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 11</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/12'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 12</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/13'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 13</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/14'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 14</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/15'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 15</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/16'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 16</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/17'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 17</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/18'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 18</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/19'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 19</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/20'
                className='flex flex-col p-2 text-stone-700 rounded-lg  hover:bg-stone-200 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 20</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
