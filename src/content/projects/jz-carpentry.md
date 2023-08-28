---
title: 'JZ Carpentry'
description: 'A landing page showcasing beautiful home and business remodels, and a contact form for new client inquiries.'
tech: ['HTML', 'JavaScript', 'Parcel', 'Figma']
links: { live: 'jzcarpentryvt.com', github: 'https://github.com/david-abell/JZCarpentryVT' }
pubDate: 'May 17 2022'
images: { hero: 'jzcarpentry-hero.webp', graphic: 'jzcarpentry-graphic.svg' }
---

## Landing page for JZ Carpentry

A landing page showcasing beautiful home and business remodels, and a contact form for new client inquiries. Designed and built to client specifications.

## Project goal

To replace a poorly designed wordpress site with a clean, mobile friendly design. A contact form to drive business engagement and minimize spam.

## Tools used

- prototyped with Figma: [JZ Carpentry Prototype](https://www.figma.com/file/ETWAvlJzF8x60tOen8LSKq/JZ-carpentry?node-id=496%3A170)

- I used feature branches and Pull Requests for build stability: [example PR](https://github.com/david-abell/JZCarpentryVT/pull/15)
- npm package management.
- wicg-inert for out of focus content.
- glightbox for a simple, mobile friendly picture gallery.
- lozad for lazy image loading.
- eslint and prettier for code formatting.
- parcel for bundling and build deployment
- deployments through netlify actions.

## Why I built the project this way

- wicg-inert was the first package installed through NPM. It provides a clean way to disallow page element focus when elements such as the nave menu or gallery are in use.

- The project gallery was designed as a fluid CSS Grid. I decided I did not wish to predefine or scale image sizes. BigPicture was chosen as a simple gallery display tool for its ease of implimentation and its lack of requirement for presized images.

- Parcel-bundler as added to compile node modules for deployment. It was chosen for its build speed and simple setup process compared to bundlers such as webpack. Initially I imported images statically due to Parcel-bundler's incompatiblity with bigPicture's use of a custom attribute `data-bp` for img urls. Parcel was later upgraded to version 2 for node compatibility.

- While testing Parcel 2 to remain compatible with current node versions, I found moritzlaube's Parcel 2 plugin [parcel-transformer-html-datasrc] (https://github.com/moritzlaube/parcel-transformer-html-datasrc) that appeared to use the correct underlying structure I needed to support bigPicture's `data-bp` attributes. Reading parcel docs, I was able to contribute custom options support for moritzlaube's plugin that allowed for out of box support for bigPicture.

- Lozad was chosen to handle lazy image loading of the gallery page to help with SEO and first impactful draws of sight as well as potentially reducing total network usage. Because of my work on the Parcel plugin [parcel-transformer-html-datasrc], lozad's custom data attributes also were seemlessly compatible with the parcel build process.

## If I had more time I would change this

- Set up continuous integration to run the tests and ESLint on every Pull Request
- Add backend support for client handling of gallery images including add and delete actions.
- Support file uploads for the contact page while minimizing client costs. netlify costs $19 per month for this form feature and the cost does not currently justify client needs.
