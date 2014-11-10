---
layout: post
title: "Resize Windows with directionalWindowResizer"
author: "Alex Young"
tags: 
- scripts
- plugins
- search
- shortcuts
---

Vim's default window resize shortcuts aren't bad, but I found them quite hard to get used to.  [directionalWindowResizer](http://www.vim.org/scripts/script.php?script_id=5051) is an attempt to make resizing more intuitive by allowing the `CTRL` key to be used instead.

The directional keys are used (`hjkl`), and the windows are resized depending on the selected window.  For example, if you've got four horizontal windows and you've selected one in the middle, then pressing `CTRL-k` will resize upwards, and `CTRL-j` will increase the size downwards.  However, if you've got the top or bottom window selected, then the behaviour changes: pressing up or down just moves the opposite partition.

I found it easier to understand than `CTRL-W +` and `-`, and it's a small, hackable script that you can edit if required.
