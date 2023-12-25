const people = [
  {
    name: 'Malik',
    color: 'bg-red-700',
  },
  {
    name: 'Sarah',
    color: 'bg-pink-800',
  },
  {
    name: 'Paty',
    color: 'bg-pink-700',
  },
  {
    name: 'Soraya',
    color: 'bg-red-600',
  },
];

export default function PeopleSelection() {
  return (
    <div className='flex flex-col m-auto w-full'>
      <div className='absolute w-full m-5 font-extrabold text-sm' />
      <div className='flex m-auto h-screen items-center gap-14'>
        {people.map((person) => {
          return (
            <>
              <div className='p-4 w-full flex flex-col gap-3 items-center rounded-xl hover:bg-neutral-200 cursor-pointer transition duration-500 hover:scale-125'>
                <div className={`w-20 h-20 ${person.color} rounded-full`} />
                <h1 className='font-medium text-slate-800 text-lg'>
                  {person.name}
                </h1>
              </div>
            </>
          );
        })}
      </div>
      <div className='m-5 flex gap-8'>
        <aside className='flex flex-col gap-4 w-72'>
          <div className='p-2 rounded-md hover:opacity-60 transition duration-500 font-extrabold bg-red-800 text-white'>
            Everything
          </div>
          <div className='p-2 rounded-md hover:bg-neutral-200 transition duration-500'>
            Public Speaking
          </div>
          <div className='p-2 rounded-md hover:bg-neutral-200 transition duration-500'>
            Design
          </div>
          <div className='p-2 rounded-md hover:bg-neutral-200 transition duration-500'>
            Software Engineering
          </div>
        </aside>
        <div className='bg-neutral-200 w-full rounded-xl h-screen' />
      </div>
    </div>
  );
}
