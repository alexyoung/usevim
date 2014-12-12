---
layout: post
title: "The Finer Points of Repeat and Registers"
author: "Alex Young"
tags: 
- registers
- repeat
- yank
---

The repeat change command, `.`, has an interesting side effect when combined with pasting a register: if you type `"1p` to put register `1`, and then press `.`, you'll see the contents of register `2`.  You can repeat this up to the ninth register.  To understand how this works you need to look at how the registers work.

Register `0` is used for storing the contents of the last yank command.  So if you press `yy` to yank the current line, it will be stored there.  Register `1` stores the most recently deleted text, and subsequent deletes cause the contents to be copied from `1` to `2` and so on, up to `9`.

If you've gone on a delete frenzy, then you can actually get the text back by repeating a put.  Try typing `"1p` and then pressing `.` a few times and you should see what I mean.  If you combine this with undo then you can cycle through each line: `"1p.u.u.`.

The reason this works is because `.` increases the number of the register for you.  This is from the `redo-register` documentation:

> If you want to get back more than one part of deleted text, you can use a
> special feature of the repeat command ".".  It will increase the number of the
> register used.  So if you first do ""1P", the following "." will result in a
> '"2P'.  Repeating this will result in all numbered registers being inserted.

This "special feature" unlocks lots of interesting tricks that are apparently similar to the Emacs `yank-pop` command, which allows you to cycle through the "kill-ring".  The size of the kill-ring is configurable -- if you want to read more about it refer to the [KillingAndYanking](http://www.emacswiki.org/emacs/KillingAndYanking) section in the Emacs Wiki.
