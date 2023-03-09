import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export const BASE_URL = '/personal-portfolio';

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), tailwind()],
  site: 'https://david-abell.github.io',
  base: BASE_URL,
});
