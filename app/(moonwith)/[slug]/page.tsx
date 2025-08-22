import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'content-collections';
import { MDXContent } from '@content-collections/mdx/react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPageFromParams(params: Promise<{ slug: string }>) {
  const { slug } = await params;

  const page = allPages.find((page) => page.slug === slug);

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

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allPages.map((pages) => ({
    slug: pages._meta.path,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = allPages.find((page) => page.slug === slug);

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
