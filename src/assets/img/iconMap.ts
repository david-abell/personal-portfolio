import type { TechnologyEnum } from '../../content/config';

export type IconMap = { [key in Lowercase<TechnologyEnum>]: string };

// type IconMap = Record<Lowercase<TechnologyEnum>, string>

const iconMap: IconMap = {
  css: 'logos:css-3',
  html: 'logos:html-5',
  tailwind: 'logos:tailwindcss-icon',
  bootstrap: 'logos:bootstrap',
  typescript: 'logos:typescript-icon',
  javascript: 'logos:javascript',
  react: 'logos:react',
  'node.js': 'vscode-icons:file-type-node',
  git: 'mdi:git',
  'vite.js': 'logos:vitejs',
  figma: 'logos:figma',
  parcel: 'logos:parcel-icon',
  webpack: 'logos:webpack',
};

export default iconMap;
