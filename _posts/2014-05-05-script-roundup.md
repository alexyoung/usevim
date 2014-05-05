---
layout: post
title: "Script Roundup: tslime.vim, diffchar.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
- diff
- tmux
---

###tslime.vim

[tslime.vim](http://www.vim.org/scripts/script.php?script_id=4931) (GitHub: [lord-garbage / tslime.vim](https://github.com/lord-garbage/tslime.vim)) by Christian Brauner is a fork of [slime.vim](http://technotales.wordpress.com/2007/10/03/like-slime-for-vim/) that uses tmux instead of screen.  It has been refactored to use tmux's panels.

If you used slime.vim, Christian has put the same shortcuts into the readme so you can make it feel like the original.

###diffchar.vim

[diffchar.vim](http://www.vim.org/scripts/script.php?script_id=4932) by Rick Howe is a plugin for diff mode that shows differences based on characters.

It has a built-in text comparison algorithm, so the author notes that it might have performance issues.  You can run it on selections of text rather than entire files, so it should be OK if you want something different to the standard diff view.
