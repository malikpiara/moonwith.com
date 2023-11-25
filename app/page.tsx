import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='prose dark:prose-invert mt-6'>
      {allPosts.map((post) => (
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
