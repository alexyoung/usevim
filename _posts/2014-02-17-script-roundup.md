---
layout: post
title: "Script Roundup: jdaddy.vim, wildfire.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
- javascript
- json
- text-objects
---

###jdaddy.vim

[jdaddy.vim](http://www.vim.org/scripts/script.php?script_id=4863) (GitHub: [tpope / vim-jdaddy](https://github.com/tpope/vim-jdaddy), License: _MIT_) by Tim Pope is a set of useful mappings for working with JSON.

`aj` is a text object for the outermost JSON object, and `gqaj` pretty prints the JSON under the cursor.  There's also `gwaj`, which merges JSON from a register into the outermost JSON object.

There are more features that are documented in [doc/jdaddy.txt](https://github.com/tpope/vim-jdaddy/blob/master/doc/jdaddy.txt).  The source itself is interesting -- there's a [parse function](https://github.com/tpope/vim-jdaddy/blob/master/autoload/jdaddy.vim#L115) that uses some monster regular expressions.

###wildfire.vim

[wildfire.vim](http://www.vim.org/scripts/script.php?script_id=4868) by (GitHub: [gcmt / wildfire.vim](https://github.com/gcmt/wildfire.vim)) can potentially speed up working with text objects by support "smart selections" when you press `<Enter>` in Normal mode.

> With *Wildfire* you can quickly select the closest text object among a group of candidates. By default candidates are `i'`, `i"`, `i)`, `i]`, `i}`, `ip` and `it`.

> Press `<Enter>` in normal mode to select the closest text object. Keep pressing `<ENTER>` for selecting the **next** closest text object. To go the other way round, that is, to select the **previously** selected text object, press `<BS>`.

You can add more text objects by editing `g:wildfire_objects`.  I think this is a really clever idea, and could easily find itself into my `.vimrc`.
