---
layout: post
title: "Changing Case"
author: "Alex Young"
tags:
- gu
- simple-changes
---

If you've ever been editing a file then noticed everything has somehow been made lowercase, then read on for a likely explanation.  Vim has a rich set of Normal mode commands for changing or deleting text.  The ones I'm going to talk about can be found under `simple-change` in the manual.  In particular, the `gu` commands.

If you type `gu{motion}`, Vim will make the text that is covered by the motion lowercase.  For example, `guw` will lowercase a word, and `gu$` will lowercase the rest of the line.  You can also use `guu` to make the current line lowercase, and `{Visual}u` to make the visual selection lowercase.

This is probably the cause of many editing mistakes: `u` feels a lot like undo, and it's easy to forget whether or not a visual selection has been made.  I find myself hitting `gu{motion}` with a movement command as well, and I don't always spot it in time.

I last did this with `guk`, which caused the entire paragraph to become lowercase because it moved the cursor to the previous line.

I don't find `gu` particularly useful, although I do use `~` to toggle case when I'm programming.  It is useful to know exactly why random chunks of text have become lowercase, however!
