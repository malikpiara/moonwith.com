import Linkify from 'linkify-react';

export function Sidenote({
  highlight = '',
  content = 'This is a sidenote.',
}: any) {
  return (
    <>
      <span className='group inline'>
        <span className='bg-[#a9ff70]/60 group-hover:bg-[#a9ff70] dark:bg-green-100/10 dark:group-hover:bg-green-100/20 rounded-md decoration-clone transition-colors cursor-pointer'>
          {highlight}
        </span>
        <aside className='relative float-right -mr-96 right-20 w-60 border-[#6ab25d] border-l-2 pl-2 text-sm group-hover:bg-[#a9ff70]/30 dark:group-hover:bg-green-100/20 dark:bg-opacity-20 hover:cursor-default transition-all duration-300 max-lg:hidden rounded-r-sm overflow-ellipsis overflow-clip'>
          <Linkify options={{ target: '_blank', rel: 'noopener noreferrer' }}>
            {content}
          </Linkify>
        </aside>
      </span>
    </>
  );
}
