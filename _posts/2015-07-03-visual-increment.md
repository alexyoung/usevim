---
layout: post
title: "Visual Mode Increment"
author: "Alex Young"
tags: 
- editing
- new-features
---

In [Vim patch 7.4.754](https://github.com/vim/vim/commit/3e0066389a80f201fc631391fa7f408f1ee39ba5), I noticed Vim now supports incrementing numbers in Visual mode. You can increment numbers by pressing `CTRL-A`, and decrement with `CTRL-X`. It's one of those features that doesn't sound amazingly useful but can be handy once you've memorised it. If you build off [Vim's master branch](https://github.com/vim/vim) you can try it out now.

![Visual increment](/images/posts/visual-increment.gif)

To enter Visual mode, type `CTRL-V` (technically Visual mode blockwise). You can then use `hjkl` to select multiple lines, and increment the numbers on each line with `CTRL-A`. I thought this might be good for shifting sets of numbers in a numerical list, like you might find in a Markdown file for example.
