---
layout: post
title: "Script Roundup: Move, Hardtime"
author: "Alex Young"
tags: 
- plugins
- scripts
---

###Move

![Move](/images/posts/RMv8KsJ.gif)

[Move](http://www.vim.org/scripts/script.php?script_id=4687) (GitHub: [matze / vim-move](https://github.com/matze/vim-move), License: _MIT_) by Matthias Vogelgesang is a plugin for quickly moving text in Normal or Visual mode:

> It's annoying to delete and paste parts of a text just to move it up and down a bit. There is the `:m[ove]` command but it is quite awkward to use by todays standards. vim-move is a Vim plugin that moves lines and selections in a more visual manner.

The default shortcuts are `<A-k>` and `<A-j>`, and these commands can be prefixed with a numerical argument to specify the number of lines to move by.

I found setting the meta-key to control made it work on a Mac, with `let g:move_key_modifier = 'C'`, otherwise your terminal will need to be configured to send Alt+Esc (I think).

###Hardtime

Hardtime (GitHub: [takac / vim-hardtime](https://github.com/takac/vim-hardtime)) by Tom Cammann is inspired by [vim-hardmode](https://github.com/wikitopian/hardmode) -- it basically trains you out of bad habits:

> Hardtime helps you break that annoying habit vimmers have of scrolling up and down the page using `jjjjj` and `kkkkk` but without compromising the rest of our Vim experience.

It works using a timeout on the keys you want to stop repeating, i.e. `h`, `j`, `k`, `l`, `UP`, `DOWN`, `LEFT`, `RIGHT`. This timeout is set to 1 second. After 1 second you can use a movement key again.

Once it's installed, you can enable it with `:HardTimeOn` and turn it off with `:HardTimeOff`.  You can even set `let g:hardtime_default_on = 1` in your `.vimrc` to make it run automatically in every buffer.

