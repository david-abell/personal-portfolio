import { defineCollection, z } from 'astro:content'

const technologyEnum = z.enum([
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'React',
  'Vite.js',
  'Parcel',
  'webpack',
  'Figma',
  'git',
])

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
})

export const collections = { projects }
