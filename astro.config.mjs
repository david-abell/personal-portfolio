import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import emoji from 'remark-emoji';
// import rehypeToc from 'rehype-toc';
// import rehypeSlug from 'rehype-slug';

export const BASE_URL = '/personal-portfolio';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://david-abell.github.io',
  base: BASE_URL,
  markdown: {
    remarkPlugins: [[emoji, { accessible: true }]],
    // rehypePlugins: [
    //   rehypeSlug,
    //   [
    //     rehypeToc,
    //     {
    //       headings: ['h2', 'h3'],
    //       nav: true,
    //       cssClasses: {
    //         toc: 'not-prose toc', // Change the CSS class for the TOC
    //         link: 'page-link', // Change the CSS class for links in the TOC
    //       },
    //     },
    //   ],
    // ],
  },
});
