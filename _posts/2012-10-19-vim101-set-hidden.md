---
layout: post
title: "Vim 101: Set Hidden"
author: Alex Young
tags:
- vim101
- hidden
- set
- buffers
---

If you're looking for a good way to learn new Vim skills, then you can discover a lot from someone's `~/.vimrc`.  Searching for dotfile repositories on sites like GitHub is a good start.  On one such dotfile diving session I noticed how often `set hidden` crops up.  The documentation for `set hidden` (`:help 'hidden'`) isn't exactly easy to follow:

> When off a buffer is unloaded when it is abandoned.  When on a buffer becomes hidden when it is abandoned.  If the buffer is still displayed in another window, it does not become hidden, of course. The commands that move through the buffer list sometimes make a buffer hidden although the 'hidden' option is off: When the buffer is modified, 'autowrite' is off or writing is not possible, and the '!' flag was used.

This is a bit much for a tutorial series called "Vim 101", so I'll break it down:

* Under default settings, making changes and then opening a new file will display `E37: No write since last change (add ! to override)`
* Typing `:set hidden` will change this behaviour
* With `:set hidden`, opening a new file when the current buffer has unsaved changes causes files to be hidden instead of closed
* The unsaved changes can still be accessed by typing `:ls` and then `:b[N]`, where `[N]` is the number of a buffer -- I wrote more about buffers in [Vim 101: Buffers](http://usevim.com/2012/03/23/buffers/)

I've found quite a few discussions on `:set hidden` (or `:set hid` for short).  I like this one by Vincent Driessen, in [How I boosted my Vim](http://nvie.com/posts/how-i-boosted-my-vim/):

> It _hides_ buffers instead of _closing_ them. This means that you can have unwritten changes to a file and open a new file using `:e`, without being forced to write or undo your changes first. Also, undo buffers and marks are preserved while the buffer is open.

[The Absolute Bare Minimum](http://www.derekwyatt.org/vim/the-vimrc-file/the-absolute-bare-minimum/) by Derek Wyatt argues why this should actually be a default setting, and there's an interesting discussion about the advantages and disadvantages of `:set hid` in the comments.

It's extremely likely that you'll want this in your settings file.  Give it a try!
