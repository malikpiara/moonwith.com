import { allPosts } from 'content-collections';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

/*
 * Sorting all of my posts in descending order
 * so that the most recent posts appear on top of the page.
 */

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className='prose dark:prose-invert mt-6'>
      {posts.map((post) => (
        <article
          className='hover:bg-eggshell rounded-xl transition-all duration-700 p-2 dark:hover:bg-eggshell/5'
          key={post._meta.path}
        >
          <Link className='no-underline' href={`/posts/${post.slug}`}>
            <h2 className='text-primary mt-2 dark:text-secondary'>
              {post.title}
            </h2>
          </Link>
          {post.description && <p className='text-lg'>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
