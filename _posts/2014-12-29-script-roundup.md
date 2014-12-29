---
layout: post
title: "Script Roundup: EntryComplete, cf5-compile.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
- completion
---

###EntryComplete

[EntryComplete](http://www.vim.org/scripts/script.php?script_id=5073) by Ingo Karkat allows you to specify buffers that will be used for line completion (triggered by `CTRL-X CTRL-L` in Insert mode).  This means you can use a file that contains a list of useful snippets, like a cheat sheet.

Ingo was inspired by [a stackoverflow post](http://stackoverflow.com/questions/27539429/vim-snippet-phrase-dropdown-menu) where the issues with the default behaviour of `i_CTRL-X_CTRL-L` were discussed.

Note that if you want to try this plugin you'll need to install [ingo-library](http://www.vim.org/scripts/script.php?script_id=4433) and [CompleteHelper](http://www.vim.org/scripts/script.php?script_id=3914), also written by Ingo.

###cf5-compile.vim

Do you create single file experiments that you want to quickly compile from within Vim?  If so, [cf5-compile.vim](http://www.vim.org/scripts/script.php?script_id=5075) might be useful.  It uses `filetype` to determine which compiler to use, and it'll use some Vim variables to populate the compiler flags.

The documentation has example mappings and configuration values.  The suggested mapping is `F5`, which I believe is what Visual Studio uses.
