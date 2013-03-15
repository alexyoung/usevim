---
layout: post
title: "Vim 101: Pasting into Command-line Mode"
author: "Alex Young"
tags: 
- vim101
- search
- command-line
- modes
---

There are times when you're tempted to lift your hand from the keyboard to the mouse, idly wondering if there's a better way.  One such case is taking text from a buffer and placing it into Command-line mode.  For example, performing text substitution with `%s`, or invoking a shell command with `:!`.  Many Vim users will reach for the mouse and use the operating system's copy and paste feature to do this, but there's a quicker way provided by Vim's registers.

The `CTRL-R` (`:help i_CTRL-R`) command can insert the contents of a register in Insert or Replace mode.  This is known as a "special key" (`:help ins-special-keys`).  The great thing about this shortcut is you can reuse it to put registers into Command-line mode.  For example, let's say you've got some text you want to search for in a buffer.  First yank the text into a register, and then paste it with `CTRL-R`:

* In Normal mode, type `"ayw` to yank a word
* Press escape, and then `/` to search
* Then press `CTRL-R` and `a` to _put_ register `a`

A shorter way to do this is to use the default register.  Typing `yw` will yank up to the word boundary into the default register, and then typing `CTRL-R_"` will put it into the command-line.  It's worth practicing using this, particularly if you haven't got used to working with registers yet.
