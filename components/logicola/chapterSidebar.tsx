export function ChapterSidebar() {
  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-slate-500 rounded-lg sm:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200'
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
        className='flex shrink-0 top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full w-full px-4 py-4 overflow-y-auto bg-slate-50'>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-slate-900 rounded-lg  hover:bg-slate-100 group'
              >
                <svg
                  className='w-5 h-5 text-slate-500 transition duration-75  group-hover:text-slate-900'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
                <span className='ms-3'>Easier Translations</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/1'
                className='flex flex-col p-2 text-slate-900 rounded-lg hover:bg-slate-100 group'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 1</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/2'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 2</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/3'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 3</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/4'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 4</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/5'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 5</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/6'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 6</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/7'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 7</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/8'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 8</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/9'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 9</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/10'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 10</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/11'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 11</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/12'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 12</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/13'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 13</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/14'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 14</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/15'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 15</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/16'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 16</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/17'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 17</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/18'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 18</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/19'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
              >
                <span className='flex-1 whitespace-nowrap'>Exercise 19</span>
              </a>
            </li>
            <li>
              <a
                href='/logicola/logic/basic-propositional-logic/easier-translations/20'
                className='flex flex-col p-2 text-slate-700 rounded-lg  hover:bg-slate-100 opacity-50'
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
