---
title: 'IP Address Tracker'
description: 'An IP address and domain lookup tool to display server locations on OpenStreetMap.'
tech: ['HTML', 'JavaScript', 'CSS', 'Node.js', 'Express.js']
links:
  {
    live: 'https://david-abell.github.io/ip-address-tracker/',
    github: 'https://github.com/david-abell/ip-address-tracker',
  }
pubDate: 'May 17 2022'
images: { hero: 'ip-tracker-hero.webp', graphic: 'leaflet-graphic.svg' }
---

## Frontend Mentor - IP address tracker solution

This is my solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Built with HTML, CSS, Leaflet.js, and Express.js server for proxy and rate limit of https://geo.ipify.org API

If the map does not load it is because API is rate limited by the Express Proxy to 5 requests per 15 minutes so that limited API credits aren't used up too quickly.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Express](https://expressjs.com/) - Node.js Server framework api proxy
- [Leaflet Maps](https://leafletjs.com)
- [Geo-ipify location API](https://geo.ipify.org)

### What I learned

Use Typescript when building Express servers. Not having access to any method return types for `http-proxy-middleware` made route string conversion much more complicated than it needed to be.
