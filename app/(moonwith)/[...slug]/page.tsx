import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'content-collections';
import { MDXContent } from '@content-collections/mdx/react';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPageFromParams(params: Promise<{ slug: string[] }>) {
  const { slug } = await params;
  // Join the slug array to create the path (e.g., ['about'] becomes 'about')
  const slugPath = slug.join('/');
  const page = allPages.find((page) => page.slug === slugPath);

  if (!page) {
    return null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    metadataBase: new URL('https://moonwith.com'),
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  // Join the slug array to create the path
  const slugPath = slug.join('/');
  const page = allPages.find((page) => page.slug === slugPath);

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
