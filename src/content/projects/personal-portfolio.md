---
title: 'My personal porfolio'
description: 'This site. A showcase of some of my personal work.'
tech: ['HTML', 'Typescript', 'Astro', 'Git', 'Tailwind', 'SCSS', 'Figma']
links:
  {
    live: 'https://david-abell.github.io/personal-portfolio/',
    github: 'https://github.com/david-abell/personal-portfolio',
  }
pubDate: 'Mar 09 2023'
images: { hero: 'portfolio-hero.webp', graphic: 'astronaut-hero-img.webp' }
---

## Table of Contents

---

- [General Info](#general-information)
- [Features](#features)
- [Room for Improvement](#room-for-improvement)
- [Lessons learned](#lessons-learned)
- [Acknowledgements](#acknowledgements)

## General Information

I turned to Astro for my personal portfolio for its reusable component design, lighning fast content delivery, and built in support for Typescript.

## Features

Using Astro's layouts is a godsend for improved development speed and single source of truth. No longer does each page require its own HTML structure, nav, or footer. Build those components once and slot in content as needed for different pages. Adding a new project is now as simple as creating a new Markdown file, adding a few images and writing a snazzy description. It automatically generates page routes and appears in my project list! Awesome!

## Room for Improvement

- They eye tracking animation is fun but it needs depth! There is no way I wouldn't be crosseyed with a mouse shoved right in my face :)

## Lessons learned

Astro, as a relatively new tool has its share of kinks still to be ironed out.

- Supporting tools such as `eslint-plugin-astro` are not yet out of beta. Setup was more finicky than expected and JSX linting was inexplicably broken with some projects.
- Astro Icon is also just beginning a major update. Some current Iconify icon sets that should be available are just not usable yet.
- While I loved the work of Mark Teekman with his accessible astro components, they do not currently support Typescript. For the moment I've gone the quick and dirty route of declaring a module with `type any` for the package but that means no type safety on the imported Props until I can write, or somebody else writes, proper types for the package.

## Acknowledgements

Thanks to the accessible astro starter creater Mark Teekman :)

Design inspirations from Fred Nerby, Rob Owen, and Will Boyd

1. [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter/)
2. [Fred Nerby](https://nerby.com)
3. [Rob Owen](https://robbowen.digital)
4. [Will Boyd](https://codersblock.com)
