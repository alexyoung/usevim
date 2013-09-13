---
layout: post
title: "Popular Dotfile Options"
author: "Alex Young"
tags: 
- plugins
- scripts
- dotfiles
---

I loves a bit of dotfile spelunkin':

> I downloaded 155 `.vimrc` files from the net (mostly from dotfiles.org and github.com), and wrote a little script which counts the number of times an option has been set. Since most options come in normal- and shortcut form, I mapped the shortcuts to the long version whenever I recognized them.

It's interesting to compare the popular options against your own file.  For example, I noticed I don't use the following:

* [whichwrap](http://vim.wikia.com/wiki/Automatically_wrap_left_and_right): Make left/right keys wrap at the start/end of a line
* `hlsearch`: Highlight all search matches
* `showcmd`: Show information about the last command.  This can show extra information for things like visual selections
* `smartcase`: Ignore case when searches are typed

It's interesting that some of the popular options that I don't use make Vim behave more like an IDE.
