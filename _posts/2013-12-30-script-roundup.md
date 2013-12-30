---
layout: post
title: "Script Roundup: gtfo.vim, vim-sexp"
author: "Alex Young"
tags: 
- plugins
- motions
- lisp
- files
---

###gtfo.vim

[gtfo.vim](https://github.com/justinmk/vim-gtfo) (License: _Vim_) by Justin M. Keyes is a plugin for opening a file manager or terminal at the current file's directory.  In Normal mode, you can type `gof` to open the file manager, or `got` to open the terminal.  The mnemonic to remember these commands is '**go** to the current file's directory in the **f**ile manager'.

Capitalising the last letter (`goF`, `goT`) will make it open based on the current directory (`:pwd`).

It has platform-specific support, so on a Mac Finder will be used, while Windows users get Windows Explorer.

###vim-sexp

[vim-sexp](http://www.vim.org/scripts/script.php?script_id=4812) (GitHub: [guns / vim-sexp](https://github.com/guns/vim-sexp)) by Sung Pae makes several motions, text objects, and commands available for editing [s-expressions](http://en.wikipedia.org/wiki/S-expression).  For example, `af` in Visual or Operator-pending mode will select the text inside brackets, and `(` is a motion for moving to the nearest paired structural bracket.

The documentation in the readme is thorough, but you need to read it from the top down to understand what each of the terms means.

This plugin is by the same author that produced [vim-clojure-static](https://github.com/guns/vim-clojure-static), but vim-sexp seems general enough that you could use it even if you don't write Lisp or Clojure.
