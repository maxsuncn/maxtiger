import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastmod: z.coerce.date().optional(),
    description: z.string(),
    summary: z.string(),
    topics: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('科技小虎哥'),
  }),
});

export const collections = { posts };
