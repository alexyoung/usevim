---
layout: post
title: "Script Roundup: DuplicateWrite, SuperSub"
author: "Alex Young"
tags: 
- plugins
- scripts
- netrw
- substitute
---

###DuplicateWrite

[DuplicateWrite](http://www.vim.org/scripts/script.php?script_id=4722) by Ingo Karkat is a script that writes a duplicate copy of a file whenever it's saved.  That means you could do things like use `netrw` to write a copy to a remote server.

> This plugin defines a `:DuplicateWrite` command that sets up additional `:write` targets. From then on, whenever you save that buffer, the write is cascaded to the additional files. Thus, when editing a script in your project directory, you can have it immediately copied to the install directory that is in the `PATH`. Or, with the help of the netrw plugin, you can even automatically upload a locally edited HTML page to the remote web server.

The author notes that version control and automated deployment make this largely redundant, but there are times when it might be convenient.

###SuperSub

[SuperSub](http://www.vim.org/scripts/script.php?script_id=4718) by Phil Miller changes the substitute command to make it copy with multiple replacements across several lines.  That means you can replace repeated text with a set of values.

It's a fairly simple plugin that uses a loop and `strpart` to look for semicolons, then performs replacement based on the subsequent split values.
