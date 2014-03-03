---
layout: post
title: "Script Roundup: Wipeout, Patternjump"
author: "Alex Young"
tags: 
- scripts
- plugins
- motions
---

###Wipeout

[Wipeout](http://www.vim.org/scripts/script.php?script_id=4882) by Artem Nezvigin is a small plugin that closes all buffers that are not open in any tabs or windows.  It's adapted from [this Stack Overflow question](http://stackoverflow.com/questions/1534835).

###Patternjump

[Patternjump](http://www.vim.org/scripts/script.php?script_id=4881) (GitHub: [machakann / vim-patternjump](https://github.com/machakann/vim-patternjump), License: _NYSL_) by Masaaki Nakamura is a plugin for defining cursor jumps based on patterns.  The patterns can be per-mode, so you can limit them to Normal, Visual, Operator-pending, Command-line, and Insert modes.

Patterns can have a head or a tail, or both.  "Head" patterns will cause the cursor to move to the first matching character, and tail moves to the end.  It's like a DSL for defining complex motions.  [The documentation](http://www.vim.org/scripts/script.php?script_id=4881) explains everything in much more detail than the readme and vim.org pages, so dive in there if you're interested.

