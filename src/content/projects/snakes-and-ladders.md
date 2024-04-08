---
title: 'Snakes and ladders'
description: 'A single player snakes and ladders board game'
tech: ['HTML', 'JavaScript', 'CSS', 'Node.js', 'Jest']
links:
  {
    live: 'https://david-abell.github.io/snakes-and-ladders/',
    github: 'https://github.com/david-abell/snakes-and-ladders',
  }
pubDate: 'May 17 2022'
images: { hero: 'snakes-and-ladders-hero.webp', graphic: 'snakes-and-ladders-graphic.svg' }
---

## About this project

This project was just me playing around with HTML Canvas and JavaScript classes.

Snake and ladder colors are randomized so the color pallet might be appealing or it might be appalling! Enjoy the 1990s web experience or refresh the page if the combination is too horrifying.

## Project goals

Build an interactive snakes and ladder game, playable in browser.

- Game logic should be covered by unit tests to ensure stable code.
- Use JavaScript class based code structure.

It should have:

- a graphical board
- player tokens
- a play button
- a list of game messages
- when clicked the play button should:
  - roll two 6 sided dice
  - move the player token the resulting spaces
  - move up or down when ending turn on any snakes or ladders
- a winner should be declared when one player manages to reach the final space

## Technology used

- Jest testing library
- eslint
- prettier

## Why I built it this way

- project was a good playground for practicing with JavaScript classes
- meaningful way to learn industry standard testing skills

## Lessons learned/ problems encountered

- Jest doesn't support canvas out of box. Had to install jest-canvas-mock
- Player token movement was extremely complicated until I pregenerated coordinates and just drew array indexes.
- Separation of methods into correct place. Initially built draw methods into a player token class, duplicating methods with each instance and requiring to many variables getting passed back and forth.
- Draw animations were too complicated until I stopped trying to clear portions of the board and did full wipe and redraws.
- Spent far too long troubleshooting `requestAnimationFrame()` causing separate move animations to overlap. Promises didn't help. Ended up with a simple boolean variable check using setTimeout and a promise to wait for animations to report themselves done.
- Wrote a nice messaging class and set the default start message to be first `<li>.innerText`. Turns out jest and jsdom don't support innerText and the issue open for it is six years old and not yet resolved...[Jest Issue #1245](https://github.com/jsdom/jsdom/issues/1245). Replaced with Happy-dom. Other properties such as offsetWidth still not supported because of lack of render engine.

## Credits

- I was inspired to expand on a quick and dirty solution I made for the CodeWars kata [Snakes and Ladders](https://www.codewars.com/kata/587136ba2eefcb92a9000027/javascript)
