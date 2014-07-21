---
layout: post
title: "Script Roundup: textobj-delimited"
author: "Alex Young"
tags: 
- scripts
- plugins
---

###textobj-delimited

[textobj-delimited](http://www.vim.org/scripts/script.php?script_id=4977) (GitHub: [machakann / vim-textobj-delimited](https://github.com/machakann/vim-textobj-delimited), License: _NYSL_) by Masaaki Nakamura makes textobjects work better with delimited strings.  The default mappings are `id`, `ad`, `iD`, and `aD`.  Visual mode is supported as well.

By passing a change command, like `d` for example, you can manipulate text based on the recognised separators.  Given a string like `foo_bar_baz`, `d3id` would move the cursor to the last separator and delete the remaining text, resulting in `foo_bar_`.

Given the same string, `vid` would select the "inner" text between two separators.  So in the case of `foo_bar_baz`, with the cursor on `b`, `bar` would be selected.
