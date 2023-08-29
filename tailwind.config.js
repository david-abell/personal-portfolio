/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'];
export const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
    },
  },
  extend: {
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          code: {
            color: theme('colors.slate.600'),
            backgroundColor: theme('colors.stone.100'),
            borderRadius: theme('borderRadius.DEFAULT'),
            paddingLeft: theme('spacing[1.5]'),
            paddingRight: theme('spacing[1.5]'),
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
          },
        },
      },
    }),
  },
};
export const plugins = [require('@tailwindcss/typography')];
export const darkMode = ['class', '.darkmode'];
