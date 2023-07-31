import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';

export const BASE_URL = '/personal-portfolio';

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), tailwind()],
  site: 'https://david-abell.github.io',
  base: BASE_URL,
});
