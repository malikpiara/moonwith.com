// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
var posts = defineCollection({
  name: "Post",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string()
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    const slug = document._meta.path;
    return {
      ...document,
      slug,
      body
    };
  }
});
var pages = defineCollection({
  name: "pages",
  directory: "content/pages",
  include: "**/*.md(x)?",
  schema: (z) => ({
    title: z.string(),
    description: z.string()
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    const slug = document._meta.path;
    return {
      ...document,
      body,
      slug
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts, pages]
});
export {
  content_collections_default as default
};
