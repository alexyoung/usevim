---
layout: post
title: "Script Roundup: united-front"
author: "Alex Young"
tags: 
- plugins
- scripts
- registers
- server
---

###United Front

[united-front](http://www.vim.org/scripts/script.php?script_id=4734) (GitHub: [ardagnir / united-front](https://github.com/ardagnir/united-front), License: _AGPL v3_) by James Kolb is a plugin for syncing registers between instances of Vim.  First a server is run with `vim --servername name`, and then you can connect other clients to it.

I had a look at the source to see how it works.  Whenever one of the events `FocusLost`, `CursorHold`, or `VimEnter` is triggered, a function called `SendVimInfo` is run.  This function calls `remote_expr` which causes `UnitedFront_ReadFrontFile` to run on the other instances.

The `UnitedFront_ReadFrontFile` function reads `.unitedfront` for registers.  That file is written by `WriteFrontFile` which packs the desired registers based on an array called `savedRegs`.

It's a simple implementation but an interesting use of `remote_expr` and file system functions.
