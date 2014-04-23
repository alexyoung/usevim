---
layout: post
title: "Being Sorta Useful in Vim"
author: "Alex Young"
tags: 
- tutorials
- beginners
---

[Being sorta useful in Vim](https://kivikakk.ee/2014/04/19/being-sorta-useful-in-vim.html) is a guide to Vim split into sections based on each main mode: [Normal](https://kivikakk.ee/2014/04/19/being-sorta-useful-in-vim.html#normal), [Insert](https://kivikakk.ee/2014/04/19/being-sorta-useful-in-vim.html#insert), and [Visual](https://kivikakk.ee/2014/04/19/being-sorta-useful-in-vim.html#visual).  Later other fundamental concepts like [registers](https://kivikakk.ee/2014/04/19/being-sorta-useful-in-vim.html#registers) and [text objects](https://kivikakk.ee/2014/04/19/being-sorta-useful-in-vim.html#text_objects) are explained.

The style of writing is great for beginners, because it's completely focused on the outcome of each typed command, and the Vim jargon gradually accumulates:

> `d` deletes stuff.

That's good so far, what more can we say about `d`?

> You have to tell it what by following with a movement command: it deletes from the cursor position up to where you tell it.

Interesting, how about some more concrete examples?

> `dw` deletes the word you're on, up to the start of the next word. `dl` deletes up to the following character; i.e. the single character your cursor is on.

Eventually more abstract concepts are introduced, but still in the same clear style:

> Text objects are another way to select areas of text. They can't be used as movement commands in normal mode in and of themselves, as they refer to regions; they may only be movement command arguments to commands that do something to regions, such as `d` and `c`. They are, however, very useful.

> I lied, though: they can be used directly in visual mode, which selects the region they refer to. Experimenting with this is a good way to see how they work.


