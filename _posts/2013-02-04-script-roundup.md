---
layout: post
title: "Script Roundup: movar, vim-fat-finger"
author: "Alex Young"
tags: 
- plugins
- movement
- motions
- spelling
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###movar

[Inspired by the Vim London meetup](https://twitter.com/robmil/status/296658616088395779), Rob Miller wrote movar (GitHub: [robmiller / vim-movar](https://github.com/robmiller/vim-movar)) which adds some motions for moving around variables in PHP and Ruby.  He's used the `onoremap` command with a function that builds up a string that searches using `searchpos`.

Typing `av` will select _around_ a variable, while `iv` selects _inner_ variables (thereby ignoring the variable's prefix, like `$`).  These motions work with operators as well, so you can delete, change, or yank.

###vim-fat-finger

vim-fat-finger (GitHub: [chip / vim-fat-finger](https://github.com/chip/vim-fat-finger), Vim.org: [fat-finger](http://www.vim.org/scripts/script.php?script_id=4423)) by Chip Castle supports over 4,000 commonly typed misspellings, which are corrected using the `iabbrev` command.  It doesn't have any settings, but the author has mentioned a toggle feature in the project's [TODO](https://github.com/chip/vim-fat-finger/blob/master/TODO.md) file.

I'm not sure where the misspellings come from, but I thought the [iabbrev spelling correction idea](http://vim.wikia.com/wiki/Auto_spelling_correction_using_abbreviations) was interesting.

