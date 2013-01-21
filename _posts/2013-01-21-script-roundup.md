---
layout: post
title: "Script Roundup: togglecursor, jk-jumps"
author: "Alex Young"
tags: 
- plugins
- movement
- cursor
- terminals
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###togglecursor

[togglecursor](http://www.vim.org/scripts/script.php?script_id=4403) (GitHub: [jszakmeister / vim-togglecursor](https://github.com/jszakmeister/vim-togglecursor), License: _Vim_) by John Szakmeister will change the cursor to a caret-style graphic when entering insert mode in iTerm and Konsole.  I tested it in [iTerm2](http://www.iterm2.com/) and it works.  I'm not sure how I feel about it though, it makes the cursor harder to see on my screen which is probably a bad idea.

The script itself takes into account tmux, and I confirmed it works with Vim in tmux as well.

###jk-jumps

[jk-jumps](http://www.vim.org/scripts/script.php?script_id=4395) (GitHub: [teranex / jk-jumps.vim](https://github.com/teranex/jk-jumps.vim), License: _Vim_) by Jeroen Budts makes `j` and `k` add entries into the jumplist, so they behave more like jump motions (`:help jump-motions`).  If I'm reading the source correctly, it remaps `j` and `k` to work using the `G` command, which modifies the jumplist.

The thinking behind this is that moving using `j` and `k` with count arguments makes the jumplist confusing, but that depends on whether or not you use those commands to navigate like that.
