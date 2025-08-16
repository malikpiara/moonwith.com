import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'content-collections';
import { MDXContent } from '@content-collections/mdx/react';

/* interface PageProps {
  params: {
    slug: string;
  };
} */

/* async function getPageFromParams(params: PageProps['params']) {
  const slug = params.slug;
  const page = allPages.find((page) => page._meta.path === slug);

  if (!page) {
    null;
  }

  return page;
} */

export default function Page({ params }: { params: { slug: string } }) {
  const page = allPages.find((page) => page.slug == params.slug);

  if (!page) {
    notFound();
  }

  return (
    <article className='py-6 prose dark:prose-invert text-lg'>
      <h1 className='text-primary dark:text-secondary'>{page.title}</h1>
      {page.description && <p className='text-xl '>{page.description}</p>}
      <hr />
      <MDXContent code={page.body} />
    </article>
  );
}
