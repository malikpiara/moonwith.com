import { allPosts } from 'content-collections';
import Link from 'next/link';
import { format, subDays } from 'date-fns';

const STREAK_DAYS = 30;

// Regenerate at most once a day so the rolling 30-day window keeps sliding
// without needing a redeploy (uses the R2 incremental cache).
export const revalidate = 86400;

// Build a day -> slug index once, so the streak is O(days) instead of
// scanning every post for each of the 30 days.
function indexPostsByDay(): Map<string, string> {
  const byDay = new Map<string, string>();
  for (const post of allPosts) {
    const day = format(new Date(post.date), 'yyyy-MM-dd');
    if (!byDay.has(day)) byDay.set(day, post.slug);
  }
  return byDay;
}

export default function Dashboard() {
  // Evaluated per render (build + each revalidation), never frozen at module load.
  const today = new Date();
  const postsByDay = indexPostsByDay();

  const streak = Array.from({ length: STREAK_DAYS }, (_, i) => {
    const day = format(subDays(today, i), 'yyyy-MM-dd');
    const slug = postsByDay.get(day);

    return slug ? (
      <Link
        key={i}
        className='rounded bg-pistachio hover:bg-pistachio-dark w-3 h-3 inline-flex px-4 mx-1 hover:scale-110 transition-all'
        href={`/posts/${slug}`}
        title={slug}
      />
    ) : (
      <div
        key={i}
        className='rounded bg-eggshell hover:bg-eggshell-dark w-3 h-3 inline-flex px-4 mx-1 hover:scale-110 transition-all cursor-pointer'
        title={day}
      />
    );
  });

  return (
    <article className='py-6 prose dark:prose-invert'>
      <h1 className='text-primary dark:text-secondary italic'>Software</h1>

      <div className='bg-white rounded-2xl p-5 dark:bg-eggshell/5'>
        <h2 className='text-primary  dark:text-secondary m-0!'>Activity Map</h2>
        <p>
          Below you can see how many blog posts I have published in the last 30
          days.
        </p>

        {streak}
      </div>

      <Link className='no-underline  font-normal' href='https://logicola.org/'>
        <div className='bg-white rounded-2xl p-5 mt-5 dark:bg-eggshell/5 hover:scale-105 transition-all'>
          <h2 className='text-primary  dark:text-secondary m-0!'>Logicola 3</h2>
          <p>
            An e-learning platform to help college students learn formal and
            informal logic. Web version of the original software built by the
            late Professor Harry Gensler.
          </p>
        </div>
      </Link>

      <Link
        className='no-underline  font-normal'
        href={'https://earnest.cards'}
      >
        <div className='bg-white rounded-2xl p-5 mt-5 dark:bg-eggshell/5 hover:scale-105 transition-all'>
          <h2 className='text-primary  dark:text-secondary m-0!'>
            Earnest Cards
          </h2>
          <p>
            Cards with questions for more meaningful conversations. You can use
            them to cultivate friendships and to get to know yourself better.
          </p>
        </div>
      </Link>

      {/* <Link className='no-underline  font-normal' href={'editor'}>
        <div className='bg-white rounded-2xl p-5 mt-5 dark:bg-primary hover:scale-105 transition-all'>
          <h2 className='text-primary  dark:text-secondary m-0!'>
            Mercury Text Editor
          </h2>
          <p>
            Like a spellchecker but for style. This is a tool built by Malik to
            make your writing clear and concise. Work in progress.
          </p>
        </div>
      </Link> */}
    </article>
  );
}
