---
layout: post
title: "Indentation Motions"
author: "Alex Young"
tags: 
- indentation
- motions
- scripts
- plugins
---

Here's a cool idea: indentation with motions.  IndentWise by Jeet Sukumaran (GitHub: [jeetsukumaran/vim-indentwise](https://github.com/jeetsukumaran/vim-indentwise)) provides motions based on indent depths or levels in normal, visual, and operator-pending modes.

For example, pressing `[-` moves to the previous line of lesser indent than the current line.  The opposite is `]-`, which moves to next line of lesser indent than the current line.  It supports lots of other motions which are all documented, and configurable.

You can also move based on the absolute indentation level by providing a count argument, and block-scope boundary navigation is supported as well.

This plugin was inspired by [a VimTips wiki post](http://vim.wikia.com/wiki/Move_to_next/previous_line_with_same_indentation), but the author has expanded it quite a bit.
