// type IconMap = Record<Lowercase<TechnologyEnum>, string>

const iconMap = {
  astro: 'simple-icons:astro',
  bootstrap: 'logos:bootstrap',
  'chart.js': 'ic:round-area-chart',
  css: 'logos:css-3',
  'css modules': 'logos:css-3',
  'd3.js': 'logos:d3',
  docker: 'logos:docker-icon',
  'express.js': 'simple-icons:express',
  figma: 'logos:figma',
  git: 'mdi:git',
  html: 'logos:html-5',
  javascript: 'logos:javascript',
  jest: 'simple-icons:jest',
  leaflet: 'simple-icons:leaflet',
  'next.js': 'simple-icons:nextdotjs',
  'node.js': 'vscode-icons:file-type-node',
  parcel: 'logos:parcel-icon',
  react: 'logos:react',
  redis: 'logos:redis',
  sass: 'vscode-icons:file-type-sass',
  scss: 'vscode-icons:file-type-sass',
  sqlite: 'simple-icons:sqlite',
  tailwind: 'logos:tailwindcss-icon',
  typescript: 'logos:typescript-icon',
  'vite.js': 'logos:vitejs',
  webpack: 'logos:webpack',
};

export type IconMap = keyof typeof iconMap;

export default iconMap;
