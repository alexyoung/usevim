---
layout: post
title: "Script Roundup: Sunset, Makeshift"
author: "Alex Young"
tags: 
- plugins
- themes
- make
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Sunset

[Sunset](http://www.vim.org/scripts/script.php?script_id=4277) (GitHub: [amdt / sunset](https://github.com/amdt/sunset), License: _Vim_) by Alastair Touw automatically sets `background` when the sun rises and sets.  It works with themes that have light and dark variants, and Alastair points out both [Solarized](http://github.com/altercation/vim-colors-solarized) and [Hemisu](http://github.com/noahfrederick/Hemisu) support this.

###Makeshift

[Makeshift](http://www.vim.org/scripts/script.php?script_id=4278) (GitHub: [johnsyweb / vim-makeshift](https://github.com/johnsyweb/vim-makeshift/), License: _Vim_) by Pete Johns detects which build system `:make` should use by setting `'makeprg'` based on the files present in the working directory.  The built-in build systems are Make, Rake, SCons, Ant, Maven, CMake, and BJam, but more can be added by setting `g:makeshift_systems`.
