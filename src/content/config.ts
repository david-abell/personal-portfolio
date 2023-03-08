import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.string().array(),
    links: z.object({
      github: z.string(),
      live: z.string().optional(),
    }),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    images: z.object({
      hero: z.string(),
      graphic: z.string().optional(),
    }),
  }),
});

export const collections = { projects };
