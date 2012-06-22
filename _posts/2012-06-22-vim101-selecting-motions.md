---
layout: post
title: "Vim 101: Combining Operators and Motions"
author: "Alex Young"
tags:
- vim101
- motions
- operators
---

In [Vim 101: Registers](http://usevim.com/2012/04/13/registers/), we looked at registers, and how to _yank_ and _put_ text.  In Normal and Visual mode, motions can be combined with operator commands, which offers a convenient way to apply operators to text selections.

For example, `y2as` will yank two sentences into a register.  This can be broken down as follows:

* `y` - The yank operator
* `2` - The count argument for the motion
* `as` - A sentence

Similarly, `yw` will yank the current word under the cursor into a register, and `y5l` will yank five characters to the right (including the one under the cursor).

This combination of motions and operators is applicable to other situations as well.  The `>` operator indents text, so indenting 5 lines can be performed by typing `>5$`:

* `>` - The indent operator
* `5` - The count argument for the motion
* `$` - To the end of the line, and `[count]` lines downward

The way to remember this is to realise that _operators_ generally delete or change text, and _motions_ move the cursor over text.  Therefore, operators can be applied to the text that was _moved over by the motion_.

Motions accept a `[count]` argument, but it appears before the motion.  Since most of us are used to reading left-to-right, then `>5$` looks a bit like `5` is an argument to `>`, but this is incorrect.  That example is easier to understand if it's broken up like this:

* `>` - Indent
* `5$` - Five lines

Try reading `:help operator` and testing out various operators with different motions to get a feel for how it works.
