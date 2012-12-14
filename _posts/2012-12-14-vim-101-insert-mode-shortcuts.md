---
layout: post
title: "Vim 101: Insert Mode Shortcuts"
author: "Alex Young"
tags: 
- vim101
- insert-mode
---

When editing a file in Insert mode, it sometimes feels restrictive in terms of editing shortcuts.  However, many shortcuts used elsewhere in Unix and other text editors are available.  For example, `CTRL-w` (`:help i_CTRL-W`) will delete the word before the cursor, and `CTRL-u` (`:help i_CTRL-U`) will delete the current line.  Pressing `CTRL-[` (`:help i_CTRL-[`) quits Insert mode and goes back to Normal mode.

There's even a shortcut for putting text from a register: `CTRL-r {reg}` (`:help i_CTRL-R`).  This is extremely useful when working with the system paste buffer.

You may already know about these, but `CTRL-n` and `CTRL-p` (`:help CTRL-N`) will invoke [Vim's auto completion](http://usevim.com/2012/07/06/vim101-completion/), displaying a menu of matches.

There are many other similar shortcuts, see `:help ins-special-keys` for a complete table of them in the Vim manual.

I like to map the caps-lock key to CTRL, which makes typing these shortcuts very convenient -- `CTRL-[` is easier than pressing `<Esc>`, because I don't have to move my hands from the home row.  However, hanging out for too long in Insert mode can be dangerous, because changes made with commands like `CTRL-U` cannot be undone.  The text will still be available in the `.` register (type `:reg .` to see it).  The Vim Tips Wiki has a solution to this problem: [Recover from accidental Ctrl-U](http://vim.wikia.com/wiki/Recover_from_accidental_Ctrl-U).

