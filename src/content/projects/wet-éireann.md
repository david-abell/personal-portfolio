---
title: 'Wet Éireann'
description: 'A simple to use portal for Met Éireann weather warnings and forecast data.'
tech: ['HTML', 'JavaScript', 'React', 'Git', 'Bootstrap', 'Chart.js', 'React Query', 'Node.js']
links: { live: 'https://wet-eireann.netlify.app', github: 'https://github.com/david-abell/wet-eireann' }
pubDate: 'Aug 09 2022'
images: { hero: 'wet-eireann-hero.webp', graphic: 'wet-eireann-graphic.svg' }
---

This project was built out of annoyance with how Met Éireann displays its weather data. This apps weather components are designed to put precipitation amount front and center so that I can easily know whether its just going to be cloudy with a few drops or pouring buckets.

Please be patient with load times. The free proxy server can take a while to spin up.

Places lookup is restricted to the region covered by Met Éireann forecast data covering Ireland and some of the UK.

## Project goals

- Build a full feature weather app that I could use as a personal weather app.
- Explore react state management techniques.

## Technology used

- Met Éireann XML weather API
- Met Éireann XML warning RSS API
- cors-anywhere proxy server hosted on ~~heroku~~ `render.com` as Met Éireann apis do not provide cors headers
- hosted on heroku
- Create React App
- react-bootstrap
- fast-xml-parser
- luxon dates library
- Chart.js
- react-chartjs-2
- chartjs-plugin-zoom
- Inkscape for SVG creation
- SVGR CLI for SVG web prep and React component conversion
- Google places API
- React query for data fetch and some global state management
- Insomnia for troubleshooting Google Maps url queries

## Lessons learned/ problems encountered

- Attempts to add a scrollbar tied to chart pan percentage failed. Successfully added slider control to pan chart at base zoom levels but as chart-plugin-zoom does not expose pan level, there was no way to tie current pan position back to the slider when panning directly from the chart via touch or drag actions. [See the enhancement request: How to get the pan distance/level #627](https://github.com/chartjs/chartjs-plugin-zoom/issues/627).
- Png sprite sheets didn't scale nicely. After some attempts at svg sprite sheets with symbols not rendering, found SVGR CLI to batch transform individual icons into React components.
- Ran into ID collision caused by the icon set I built off of using linear gradients. Accordions would hide parts of svgs in later components when collapsed...Changed all linear gradients to flat solved the render issues.
- Having at least some form of global state management using React Query really helped to reduce prop drilling on a few widely used state variables.
- Setter functions for custom react query hooks don't run in jest when calling the hook with renderHook(). Had to manually set react query cache with `queryClient.setQueryData("some-data)` in order to get tests passing.
- Cors errors are apparently a thing even when mocking api responses with nock for testing. Took longer than expected to get options preflight and get request headers configured.

## Credits

Weather icons built off of the [Free-Weather-Icons design file](https://dribbble.com/shots/3761552-Free-Weather-Icons) by Alexey Onufriev
I found Jack Herrington's video [Five Clever Hacks for React-Query and SWR](https://www.youtube.com/watch?v=JaM2rExmmqs) really helpful for implementing some React query state management techniques.
