---
layout: post
title: "Vim 101: The Vim Distribution"
author: "Alex Young"
tags: 
- vim101
- distribution
---

If you're a Vim beginner, it's likely that you've seen a screencast, blog post, or colleague that employs a wide range of impressive Vim plugins.  This might be the reason you've been compelled to learn Vim, and why you're reading yet another Vim 101 post.

However, before you rush off to install lots of plugins, take some time to look at what actually comes with Vim.  The raw Vim distribution, without any operating system package manager interference, comes with some command-line scripts, syntax highlighting files and colour schemes, autoload scripts, and several plugins.

###Scripts

As well as `vim`, you should also be able to run `vimtutor` and `vimdiff`.  The `vimtutor` command opens Vim with a tutorial that's worth trying if you've never seen it before.

###Colour Schemes

One of the built-in colour schemes is "desert".  Type `:colo desert` to switch to it.  You can tab through all of the available colour schemes by typing `:e $VIMRUNTIME/color`.

###Syntax Highlighting

In Vim 7.3 there are over 500 syntax files.  You can find them in `$VIMRUNTIME/syntax`.

###Autoload Scripts and Plugins

The autoload scripts include `gzip.vim` (`:help gzip-autocmd`) for editing compressed files, `netrw` for editing remote files (`:help netrw`), and lots of omnicompletion files for various languages.

There's also a plugin called `getscriptPlugin.vim` (`:help glvs`) which can be used to get the latest version of a Vim script -- the documentation explains how to set it up.

###Macros

If you peek inside `$VIMRUNTIME/macros` you'll see some interesting macro files.  The `dvorak` macro is designed to help with Dvorak keyboards, and `matchit.vim` which makes `%` work with HTML tags and programming control statements.  If you type `:help matchit-install`, Vim's manual will explain how to set it up.

###Summary

It's worth taking the time to install the goodies found inside `$VIMRUNTIME`.  You may find a solution to a problem that you didn't know Vim had already solved!
