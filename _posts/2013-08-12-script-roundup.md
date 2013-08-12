---
layout: post
title: "Script Roundup: Bbye, Enhanced JavaScript Syntax"
author: "Alex Young"
tags: 
- plugins
- scripts
- buffers
- highlights
- syntax
---

###Bbye

[Bbye](http://www.vim.org/scripts/script.php?script_id=4664) (GitHub: [moll / vim-bbye](https://github.com/moll/vim-bbye), License: _Affero GPL_) by Andri Möll allows buffers to be closed without changing Vim's window layout:

> Vim by default closes all windows that have the buffer (file) open when you do :bdelete. If you've just got your splits and columns perfectly tuned, having them messed up equals a punch in the face and that's no way to tango.

Once Bbye is installed, you can use it with `:Bdelete` to unload the current buffer.

###Enhanced JavaScript Syntax for Vim

[Enhanced JavaScript Syntax for Vim](http://www.vim.org/scripts/script.php?script_id=3425) (GitHub: [jelera / vim-javascript-syntax](https://github.com/jelera/vim-javascript-syntax), License: _Vim_) by Jose Elera adds some improvements to the original Vim syntax file.  Highlights include better handling of brackets, semicolons, DOM-related keywords, and logical operators.

It also improves code folding, which can be enabled with `au FileType javascript call JavaScriptFold()`.
