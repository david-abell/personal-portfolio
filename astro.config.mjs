import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export const BASE_URL = '/personal-portfolio';

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), mdx(), tailwind()],
  site: 'https://github.com/david-abell',
  base: BASE_URL,
});
