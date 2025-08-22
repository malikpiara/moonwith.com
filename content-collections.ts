import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import { z } from 'zod';

const posts = defineCollection({
  name: 'Post',
  directory: 'content/posts',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional().default([]),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    const slug = document._meta.path;
    return {
      ...document,
      slug,
      body,
    };
  },
});

const pages = defineCollection({
  name: 'pages',
  directory: 'content/pages',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    const slug = document._meta.path;
    return {
      ...document,
      body,
      slug,
    };
  },
});

export default defineConfig({
  collections: [posts, pages],
});
