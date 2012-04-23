---
layout: post
title: "Plugin Roundup: Ruby Debugging, Splice"
author: "Alex Young"
tags: 
- plugins
- scripts
- ruby
- debugging
- python
- vimdiff
---

###Ruby Debugging

[vim-addon-ruby-debug-ide](http://www.vim.org/scripts/script.php?script_id=4028) (GitHub: [MarcWeber / vim-addon-ruby-debug-ide](https://github.com/MarcWeber/vim-addon-ruby-debug-ide)) by Marc Weber may not have the most original name, but nonetheless it's an interesting ruby debugging interface for `ruby-debug-ide19`.  It supports stepping, breakpoints, variables, and restarting the process.  It requires a patched version of `ruby-debug-ide19`, and is still at an early stage.

The author has also written [vim-addon-rdebug](http://www.vim.org/scripts/script.php?script_id=4024) (GitHub: [MarcWeber / vim-addon-rdebug](https://github.com/MarcWeber/vim-addon-rdebug)).  This script is a more minimal debugger that requires `debug` to be loaded in the ruby process.

###Splice

[Splice](http://www.vim.org/scripts/script.php?script_id=4026) (GitHub: [sjl / splice.vim](https://github.com/sjl/splice.vim/), License: _MIT/X11_) by Steve Losh helps resolve conflicts during three-way merges.  The [Splice homepage](http://sjl.bitbucket.org/splice.vim/) has more details on installation and usage (Python is required).

The interesting thing about Splice is it's inspired by Adobe Lightroom rather than traditional diff tools.  Like Lightroom, Splice has several modes that present files and their changes in various ways.  To see it in action, take a look at [Steve's Splice screencast](http://vimeo.com/25764692).
