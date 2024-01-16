import { allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

/*
 * Sorting all of my posts in descending order
 * so that the most recent posts appear on top of the page.
 *
 * Using .toSorted() instead of .sort() to copy instead of mutate
 * the original array. In this instance it doesn't make any difference though.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
 */

export default function Home() {
  const posts = allPosts.toSorted((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className='prose dark:prose-invert mt-6'>
      {posts.map((post) => (
        <article
          className='hover:bg-eggshell rounded-xl transition-all duration-700 p-2 dark:hover:bg-primary'
          key={post._id}
        >
          <Link className='no-underline' href={post.slug}>
            <h2 className='text-primary mt-2 dark:text-secondary'>
              {post.title}
            </h2>
          </Link>
          {post.description && (
            <p className='dark:text-gray'>{post.description}</p>
          )}
        </article>
      ))}
    </div>
  );
}
