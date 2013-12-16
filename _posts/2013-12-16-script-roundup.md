---
layout: post
title: "Script Roundup: LiteDFM, investigate.vim"
author: "Alex Young"
tags: 
- plugins
- help
- writing
---

###LiteDFM

[LiteDFM](http://bilalquadri.com/blog/2013/11/27/removing-distractions-from-vim/) (GitHub: [bilalq / lite-dfm](https://github.com/bilalq/lite-dfm), License: _MIT_) by Bilal Quadri is a plugin for quickly removing distractions from Vim.  It hides things like line numbers and the status bar.

This is another plugin that's inspired by text editors like [WriteRoom](http://www.hogbaysoftware.com/products/writeroom), which aim to make writing as simple as possible.

###investigate.vim

[investigate.vim](http://keithbsmiley.github.io/investigate.vim/) (GitHub: [Keithbsmiley / investigate.vim](https://github.com/Keithbsmiley/investigate.vim), License: _MIT_) by Keith Smiley searches for documentation based on the text under the cursor:

> You can use _investigate_ to view the documentation for the current word in Vim in a few different places. Through your web browser, using Dash.app on OS X, or with an arbitrary shell command. View the Github repo for more information.

Keith suggests using the following remapping: `nnoremap K :call investigate#Investigate()<CR>`.  This allows you to invoke investigate.vim by pressing `K` in Normal mode.
