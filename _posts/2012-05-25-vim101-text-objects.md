---
layout: post
title: "Vim 101: Text Object Editing Tricks"
author: "Alex Young"
tags:
- vim101
- text-objects
- operators
- motions 
---

A favourite editing technique of mine is typing `ci<` in Normal mode to replace the contents of HTML tags:

![ci](/images/posts/vim101-cibracket.gif)

This can be used with other punctuation as well: `ci"` will delete the contents of a double-quoted string and start editing in Insert mode.

The previous example can be broken down like this:

* `c`: Change
* `i"`: Select text from the previous quote to the next quote (not including the quotes themselves)

The `i"` part is actually an argument to the change command, which in this case takes the form: `c{motion}`.  There are a lot more [text object selection](http://vimdoc.sourceforge.net/htmldoc/motion.html#text-objects) commands, and [operators](http://vimdoc.sourceforge.net/htmldoc/motion.html#operator) (see `:help text-objects` and `:help operator`).  For example, `yi"` would yank the text inside double quotes so it can be pasted elsewhere.

It's even possible to use `gui"` to make all of the text inside quotes lowercase, or uppercase with `gUi"`.

Once the principles of text objects and motions and operators are understood, performing efficient editing operations without leaving Normal mode becomes a lot easier.
