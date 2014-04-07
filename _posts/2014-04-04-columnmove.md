---
layout: post
title: "Vertical Movement with vim-columnmove"
author: "Alex Young"
tags: 
- motions
- plugins
---

A reader who was also a fan of [Patternjump](http://www.vim.org/scripts/script.php?script_id=4881) sent in [vim-columnmove](https://github.com/machakann/vim-columnmove), which is by the same author.  This is a plugin that helps make vertical movement more convenient by providing vertical equivalents of motions like `f` and `t`.

For example, `columnmove-f` (mapped to `<M-f>`) will move the cursor down along the current column to the next matching character.

There's also `columnmove-w` which is for word-wise movement, where "words" are the characters in the current column.  I find this harder to visualise, so I've only really used `columnmove-f`.
