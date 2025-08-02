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
    virtualPlatforms: z.array(z.string()),
    coverage: z.array(z.string()),
    gorgeServices: z.object({
      cities: z.array(z.string()),
      features: z.array(z.string())
    }).optional()
  })
});

export const collections = {
  blog,
  locations
};