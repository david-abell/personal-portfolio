import { defineCollection, z } from 'astro:content';

export const technologyEnum = z.enum([
  'HTML',
  'CSS',
  'Tailwind',
  'Bootstrap',
  'JavaScript',
  'Typescript',
  'React',
  'Node.js',
  'Vite.js',
  'Parcel',
  'webpack',
  'Figma',
  'Git',
]);

export type TechnologyEnum = z.infer<typeof technologyEnum>;
export type Technologies = {
  [key in Lowercase<TechnologyEnum>]: string;
};

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(technologyEnum),
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
    heroImage: z.string().optional(),
    accentImage: z.string().optional(),
  }),
});

export const collections = { projects };
