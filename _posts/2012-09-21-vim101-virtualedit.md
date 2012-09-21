---
layout: post
title: "Vim 101: Virtual Editing"
author: "Alex Young"
tags:
- vim101
- editing
- virtualedit
- visual-mode
- blockwise-visual-mode
---

Visual mode and Blockwise Visual mode have several associated settings.  In this article, we're going to look at `virtualedit`, which is definitely something to consider adding to your `.vimrc`.

To get up to speed with Visual mode, take a look at these previous Vim 101 articles:

* [Vim 101: Visual Mode](http://usevim.com/2012/05/11/visual/)
* [Vim 101: Blockwise Visual Mode](http://usevim.com/2012/05/18/vim101-visual-mode-2/)

The `virtualedit` setting basically allows block selections to operate across lines regardless of the underlying text.  In this screenshot, I've pressed `CTRL-V` and selected a block.  Notice how the block is limited to the characters in the file:

![Blockwise selection](/images/posts/vim101-virtualedit-1.png)

By typing `set virtualedit=block`, rectangular selections can be made.  The shorthand for this is `set ve=block`.  The cursor can now be placed anywhere -- including after the ends of lines and in the middle of tabs:

![virtualedit=block](/images/posts/vim101-virtualedit-2.png)

Vim's documentation for `virtualedit` (`:help 've'`) suggests this is useful for selecting text in tables -- imagine a space-separated text file of tabular data.

If you're laying out plain text files in a strict tabular structure, then using `set ve=all` might be useful because moving beyond the end of a line and then switching to Insert mode and typing will cause extra spaces to be added.  It's actually very intuitive.
