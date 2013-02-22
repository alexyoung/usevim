---
layout: post
title: "Vim 101: Object Motions"
author: "Alex Young"
tags: 
- vim101
- motions
- text-objects
---

[Discovering and retaining good habits](http://vimcasts.org/blog/2013/02/habit-breaking-habit-making/) for file navigation is one way to vastly improve your productivity when using Vim.  Other than [jumps](http://usevim.com/2013/02/15/vim-101-jumps/) and searching, _text object motions_ are also a great way for skipping around a file like a Vim virtuoso.

Text object motions (`:help object-motions`) cause the cursor to move in Normal mode based on rules that [sometimes seem archaic](http://learnvimscriptthehardway.stevelosh.com/chapters/50.html), but the basic ones are easy to get the hang of.

The `(` and `)` motions move the cursor `[count]` sentences backward and forward, respectively.  If you type `3)` the cursor will move 3 sentences forward.  Of course, the concept of a "sentence" may vary depending on what you're writing, and Vim's documentation defines a sentence as text that ends in a `.`, `!`, or `?`, followed by whitespace (`:help sentence`).  This might not make a lot of sense if you're writing code, but if I'm writing documentation or blog posts then I find myself using it.

Depending on how your code is formatted then the paragraph motions might be more useful.  They're `{` and `}`, and Vim's manual defines a paragraph as something that begins after each empty line (`:help paragraph`).  If you're working on code where blank newlines are used to create logical groups of statements or blocks then it can be convenient.

These motions can be used with object selection (`:help object-select`) and operator commands as well.  For example, pressing `d)` will delete a sentence.

