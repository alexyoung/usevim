---
layout: post
title: "A Tale of Two Selections"
author: "Alex Young"
tags: 
- visual
- selection
---

One command that's burned into my muscle memory is `gv`.  This starts Visual mode with the previous area selected.  I find this useful for shuffling around blocks of text or applying commands to selected regions.  Some commands clear a region, so quickly typing `gv` to get it back is great.

There are arguments to avoid Visual mode for certain classes of operations, but I find it useful for performing refactoring, or stylistic changes.  Practice `gv` if you're not used to it.

I often want to do the opposite as well: after _putting_ (pasting) something I may want to visually select it.  This isn't as easy as `gv`, and it took me a while to figure it out -- <code>\`[v\`]</code>.  It works like this:

* <code>\`[</code>: Move to the first character of the previously changed text
* <code>v</code>: Enter Visual mode
* <code>\`]</code>: Move to the last character of the previous changed text

This is harder to learn, but user-friendliness is only a `nnoremap` away.  See [Selecting your pasted text](http://vim.wikia.com/wiki/Selecting_your_pasted_text) for more.
