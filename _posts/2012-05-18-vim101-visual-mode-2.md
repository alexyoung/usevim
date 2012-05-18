---
layout: post
title: "Vim 101: Blockwise Visual Mode"
author: "Alex Young"
tags:
- vim101
- visual-mode
- blockwise-visual-mode
---

Last week I wrote about the virtues of Visual mode in [Vim 101: Visual Mode](http://usevim.com/2012/05/11/visual/).  This is the gateway to an entire class of powerful text manipulation techniques.  One aspect that I find myself using regularly in my daily coding chores is _blockwise Visual mode_.

Blockwise Visual mode is started by typing `CTRL-V` when in Normal mode, and is indicated by `-- VISUAL BLOCK --` in the status line.  This is usually performed at the start of a line, or perhaps somewhere in the middle:

![Blockwise selection](/images/posts/vim101-blockwise.png)

As you can see, I've selected a single column here.  Notice how the selection is only visible on certain lines -- this is where the text is longer than one line.

Once a block has been selected, editing commands can be applied.  For example, the case could be switched using `~` or deleted using `x`.  If the selection is removed (perhaps you make an edit then undo it), then it can be reselected by typing `gv`.  Vim will remember the selection was active in blockwise Visual mode, so you'll see `-- VISUAL BLOCK --` again in the status line.

###Editing Columns

This is my favourite part!  Not only can editing commands be made to an entire block's selection, but they can also be applied to _each line_.  This is amazingly useful for a programmer, and it works like this:

* Select a block by pressing `CTRL-V`
* Type `I`
* Edit the text.  For example, if I wanted to prepend bullet points before each line I'd type `* `
* Press `<Esc>`
* Watch as each line is prepended with `* `

This is illustrated in the gif below:

![Blockwise selection](/images/posts/vim101-blockwise.gif)

The `I` command is actually "block insert".  You can read about this in `:help v_b_I`, which stands for "Visual-block Insert".

This technique is pretty easy to remember, and depending on your programming or writing style, you may find yourself using it so regularly it becomes second nature.
