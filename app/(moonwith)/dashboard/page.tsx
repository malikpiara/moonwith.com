import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';
import { format, subDays } from 'date-fns';

const currentDateTime = new Date();

const writingStreak = () => {
  let days = 30;
  let elements = [];

  for (let i = 0; i < days; i++) {
    // Calculate the date for each day in the loop
    const dateToCheck = subDays(currentDateTime, i);
    const formattedDate = format(dateToCheck, 'yyyy-MM-dd');

    // Check if any post matches the current date
    const matchingPost = allPosts.find((post) =>
      post.date.startsWith(formattedDate)
    );

    if (matchingPost) {
      elements.push(
        <Link
          key={i}
          className='rounded bg-pistachio hover:bg-pistachioDark w-3 h-3 inline-flex px-4 mx-1 hover:scale-110 transition-all'
          href={matchingPost.slug}
          title={matchingPost.slug}
        />
      );
    } else {
      elements.push(
        <Link
          key={i}
          className='rounded bg-eggshell hover:bg-eggshellDark w-3 h-3 inline-flex px-4 mx-1 hover:scale-110 transition-all'
          href={''}
          title={formattedDate}
        />
      );
    }
  }
  return elements;
};

export default function Dashboard() {
  return (
    <article className='py-6 prose dark:prose-invert'>
      <h1 className='text-primary dark:text-secondary italic'>
        Open Dashboard
      </h1>

      <div className='bg-white rounded-2xl p-5 dark:bg-primary'>
        <h2 className='text-primary  dark:text-secondary m-0'>Activity Map</h2>
        <p>
          Below you can see how many blog posts I have written in the last 30
          days.
        </p>

        {writingStreak()}
      </div>

      <Link className='no-underline  font-normal' href={'logicola'}>
        <div className='bg-white rounded-2xl p-5 mt-5 dark:bg-primary hover:scale-105 transition-all'>
          <h2 className='text-primary  dark:text-secondary m-0'>Logicola</h2>
          <p>
            A program to help college students learn logic. Web version of the
            original software built by the late Professor Harry Gensler.
          </p>
        </div>
      </Link>

      <Link className='no-underline  font-normal' href={'editor'}>
        <div className='bg-white rounded-2xl p-5 mt-5 dark:bg-primary hover:scale-105 transition-all'>
          <h2 className='text-primary  dark:text-secondary m-0'>
            Mercury Text Editor
          </h2>
          <p>
            Like a spellchecker but for style. This is a tool built by Malik to
            make your writing clear and concise. Work in progress.
          </p>
        </div>
      </Link>
    </article>
  );
}
