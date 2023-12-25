import Link from 'next/link';

const people: any = [
  {
    id: 0,
    name: 'Malik',
    color: 'bg-red-700',
  },
  {
    id: 1,
    name: 'Sarah',
    color: 'bg-pink-800',
  },
  {
    id: 2,
    name: 'Paty',
    color: 'bg-pink-700',
  },
  {
    id: 3,
    name: 'Soraya',
    color: 'bg-red-600',
  },
];

const content = [
  {
    id: 1,
    name: 'Objectified',
    description:
      'Examining the role of everyday non-living objects and the people who design them, on our daily lives. This documentary shaped the way I see the world.',
    type: 'documentary',
    category: 'design',
    url: '',
    owner: 0,
  },
  {
    id: 2,
    name: 'Product-led Certification',
    description:
      'This course takes an interactive look at the fundamentals of being a product-led product manager at your organization. From Pendo.io.',
    type: 'online course',
    category: 'technology',
    url: '',
    owner: 0,
  },
  {
    id: 3,
    name: 'The Vault from Pip Decks',
    description:
      'In-depth videos about storytelling. They include practical demonstrations, real world examples and coaching on how to extract value from the cards.',
    type: 'online resource',
    category: 'communication',
    url: '',
    owner: 1,
  },
];

const getColorById = (id: number) => {
  for (const person of people) {
    if (id === person.id) {
      return person.color;
    }
  }
};

export default function PeopleSelection() {
  return (
    <div className='flex flex-col m-auto w-full'>
      <div className='absolute w-full m-5 font-extrabold text-sm' />
      <div className='flex m-auto h-screen items-center gap-14'>
        {people.map((person: any) => {
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
          <div className='p-2 rounded-md hover:opacity-60 transition duration-500 font-extrabold bg-red-800 text-white cursor-pointer'>
            Tudo ({content.length})
          </div>
          {content.map((item) => {
            return (
              <div
                key={item.id}
                className='p-2 rounded-md hover:bg-neutral-200 transition duration-500 cursor-pointer'
              >
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </div>
            );
          })}
        </aside>
        <div className='px-4 w-full rounded-xl h-screen gap-8 flex flex-col overflow-x-scroll'>
          {content.map((item) => {
            return (
              <div
                key={item.id}
                className='flex p-2 gap-16 text-neutral-500 rounded-lg hover:bg-white hover:text-neutral-800 transition duration-500 cursor-pointer'
              >
                <div className='flex font-semibold w-32'>{item.name}</div>
                <div className='w-32'>{item.type}</div>
                <div className='flex-1'>{item.description}</div>
                <div
                  className={`w-2 rounded-full ${getColorById(item.owner)}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
