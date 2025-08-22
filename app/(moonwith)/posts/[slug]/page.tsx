import { notFound } from 'next/navigation';
import { allPosts } from 'content-collections';
import { MDXContent } from '@content-collections/mdx/react';
import { Metadata } from 'next';
import { Sidenote } from '@/components/moonwith/sidenote';
import { TypographyH1 } from '@/components/moonwith/h1';
import { NewsletterSignup } from './subscribeWidget';

interface PostProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPostFromParams(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug == slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: 'Malik Piara', url: 'https://moonwith.com/' }],
    keywords: ['Malik Piara', 'Moonwith', 'Emotional Intelligence'],
    creator: 'Malik Piara',
    metadataBase: new URL('https://moonwith.com'),
    openGraph: {
      images: [
        {
          url: `https://moonwith.com/api/og?title=${encodeURIComponent(
            post.title
          )}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug == slug);

  if (!post) {
    notFound();
  }

  return (
    <article className='py-6 prose dark:prose-invert text-lg md:text-[1.2rem]'>
      <TypographyH1 text={post.title} />
      <MDXContent code={post.body} />
      <NewsletterSignup />
    </article>
  );
}
