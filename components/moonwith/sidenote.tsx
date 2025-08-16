export function Sidenote({ content = 'This is a sidenote.' }: any) {
  return (
    <aside className='relative float-right -mr-96 right-20 w-60 border-[#6ab25d] border-l-2 pl-2 text-sm hover:bg-green-100 hover:cursor-default transition-all duration-300 max-lg:hidden'>
      {content}
    </aside>
  );
}
