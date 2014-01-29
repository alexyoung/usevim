---
layout: post
title: "Vim and the Web, Vim Croquet"
author: "Alex Young"
tags: 
- talks
- events
---

<script async class="speakerdeck-embed" data-id="0edbff506b3b0131a94c1ece10ede835" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

I spoke at [Vim London](http://www.meetup.com/Vim-London/) last night about Vim and the web.  The slides are here: [Vim and the Web](https://speakerdeck.com/aryoung/vim-and-the-web), and the [Lanyrd page](http://lanyrd.com/2014/vimlondon/scwggq/) has more resources and coverage.

I've spent some time with Chromebooks over the last year, trying to use web-based editors.  Some attempt to emulate Vim, which is never quite 100%.  Recently the [Vim.js](http://coolwanglu.github.io/vim.js/web/vim.html) project caught my attention -- it uses Emscripten to build a JavaScript version of Vim that has asm.js optimisations.  I cover this briefly in the talk.

### Vim Croquet

Seth Brown's [Vim Croquet](http://www.drbunsen.org/vim-croquet/) post discusses analysing keystrokes in Vim.  He generates a heatmap based on thousands of keystrokes and finds ways to improve his editing fluency.

> After lexing my log data, I forked Patrick Wied's awesome heatmap-keyboard project and added my own custom layout to read the output of my lexer. Patrick's project does not detect most meta-characters like escape, control, and command, so it was necessary for me to write a data loader in JavaScript and make some other modifications so the heatmap would accurately depict key usage in vim. I
