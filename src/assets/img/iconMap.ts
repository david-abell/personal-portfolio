// type IconMap = Record<Lowercase<TechnologyEnum>, string>

const iconMap = {
  css: 'logos:css-3',
  'css modules': 'logos:css-3',
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
  'chart.js': 'ic:round-area-chart',
  'd3.js': 'logos:d3',
  'express.js': 'simple-icons:express',
};

export type IconMap = keyof typeof iconMap;

export default iconMap;
