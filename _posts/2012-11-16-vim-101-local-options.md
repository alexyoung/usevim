---
layout: post
title: "Vim 101: Local Options"
author: "Alex Young"
tags: 
- vim101
- options
---

Last week I talked about [managing options in Vim](http://usevim.com/2012/11/09/vim-101-options/).  If it surprised you that something as innocuous as `:set` has several different usages and options, then that's worth remembering when it comes to mastering Vim: even seemingly simple commands can have a lot of depth.

There's also another dimension to options that I didn't cover last week: local options (`:help local-options`).  These options are applied to the current window or buffer -- imagine that each window or buffer has an internal list of options.  This might sound overcomplicated, but it makes sense when working with files of different formats.  Splitting a window causes the new window to receive copies of the current local options.  Editing a new buffer, however, causes the options to be freshly initialized.

Using `:set`, therefore, will change the setting for both local and global options.  To set a local option, use `:setlocal` (abbreviation: `:setl`) -- typing `:setl` by itself will list the local options.  Much like `:set all`, `:setl all` will display all options rather than just the options that differ from their defaults.

If I was editing files with soft tabs but opened a Makefile and wanted to use tabs instead of spaces, I could type `:setlocal noet sts=0 ts=4` to use tabs instead, just for that buffer.

To reset an option to the global value, there's a useful shorthand in the form of `:setl {option}<` -- this effectively copies the global value.

What about setting _only_ the global value?  In that case, `:setglobal` (abbreviation: `:setg`) can be used instead.
