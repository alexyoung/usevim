---
layout: post
title: "Script Roundup: Sneak, ctrlp-cmdpalette"
author: "Alex Young"
tags: 
- plugins
- scripts
- motions
- ctrlp
---

###Sneak

It's always interesting to see a new motion.  Sneak (GitHub: [justinmk / vim-sneak](https://github.com/justinmk/vim-sneak), License: _MIT_) by Justin M. Keyes is a motion for moving "medium" distances -- that is, between `f` and `/`.  It searches for matches across multiple lines, works with operators, and also supports repeats and visual mode.

It has some default mappings: `s` waits for two characters, then moves to the next match.  Pressing `;` will repeat the last `s`.

It's a bit like a cross between [Seek](https://github.com/goldfeld/vim-seek) and [EasyMotion](https://github.com/Lokaltog/vim-easymotion) -- the author includes references to these plugins and the differences between them in [Sneak's documentation](https://github.com/justinmk/vim-sneak#overview).

###ctrlp-cmdpalette

[ctrlp-cmdpalette](http://www.vim.org/scripts/script.php?script_id=4737) (GitHub: [fisadev / vim-ctrlp-cmdpalette](https://github.com/fisadev/vim-ctrlp-cmdpalette)) by Juan Pedro Fisanotti is an extension for [ctrlp.vim](https://github.com/kien/ctrlp.vim) that allows Vim commands to be searched and run.  It makes a command available called `CtrlPCmdPalette`, which can be bound as required.

It's written with Python, and reads in a file with a list of commands which are then passed to ctrlp so it can search for matches.
