---
layout: post
title: "Script Roundup: Stop Sign, KillBrackets"
author: "Alex Young"
tags: 
- plugins
- scripts
---

###Stop Sign

Stop Sign (GitHub: [joshuarh / vim-stopsign](https://github.com/joshuarh/vim-stopsign), License: _Vim_) by Joshua Hoff is a small plugin for integrating with command-line debuggers.  If you type `dbg` it will expand to the current file type's debug invocation code.

In languages like Ruby this is done with inline code, so Stop Sign makes this process a little bit more convenient.

###KillBrackets

[KillBrackets](http://www.vim.org/scripts/script.php?script_id=4714) (License: _MIT_) by Jonas Møller is designed to quickly remove matching brackets.  It works for Lisp, but could technically be used in other languages with a bit of configuration:

> There are problems associated with parens and brackets inside of quotes messing with "the order of things." KillBrackets is set up to ignore everything within "double quotes"  and 'single quotes' but if you're programming in a language that uses 'single quotes' for something completely different (like in LISP) you might be in trouble, if you had something like '(LIST OF STUFF) in your program. 

