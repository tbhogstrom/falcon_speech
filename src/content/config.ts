import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    description: z.string(),
    image: z.string()
  })
});

const locations = defineCollection({
  schema: z.object({
    state: z.string(),
    description: z.string(),
    services: z.array(z.string()),
    contact: z.object({
      phone: z.string(),
      email: z.string()
    }),
    virtualPlatforms: z.array(z.string()),
    coverage: z.array(z.string())
  })
});

export const collections = {
  blog,
  locations
};