---
layout: post
title: "Script Roundup: Vimproc, vCoolor"
author: "Alex Young"
tags: 
- scripts
- plugins
- gtk
- ui
- async
---

###Vimproc

[Vimproc](https://github.com/Shougo/vimproc.vim) (License: _MIT_) by Shougo is an asynchronous process manager.  It's a fork of Yukihiro Nakadaira's proc.vim, and requires compilation to run.

Once it's installed, you can run `:VimProcBang` to run a command and echo the results.  You can also run `:VimProcRead` to paste the output of a command in the current buffer.

It also includes functions like `vimproc#open` and `vimproc#system`, so you could use it to build other plugins.

It takes a bit of work to get it running because it requires a compiled library, but it should work on Windows, Mac OS X, Linux, Cygwin, and Solaris.

###vCoolor

[vCoolor](http://www.vim.org/scripts/script.php?script_id=4995) (GitHub: [KabbAmine / vCoolor.vim](https://github.com/KabbAmine/vCoolor.vim)) is a colour picker for gVim.  It uses GTK+, and allows you to easily work with hex and RGB colours.

It also includes some colour conversion commands, like `:Rgb2Hex` and `:Hex2Rgb`.
