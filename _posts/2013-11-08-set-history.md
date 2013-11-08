---
layout: post
title: "Increasing Vim's Command History"
author: Alex Young
tags:
- settings
- viminfo
---

If you type `:set history`, you'll see the number of `:` entires that will be stored.  The default is `20`, which is what my Vim is set to.  However, you can easily set it to anything:  I've seen [vimrc files on GitHub](https://github.com/garybernhardt/dotfiles/blob/master/.vimrc) with it set to `10000`.

History includes previous search patterns as well as command-line entries.  These are written to the `.viminfo` file.  You can change which file Vim reads for `.viminfo` by using the `-i` switch when starting Vim, and if you use `-i NONE` you can start Vim without a viminfo file, which can be useful if you're trying to work out strange behaviour between sessions, or if Vim is starting up slowly.

These days disks are fast enough that a large viminfo shouldn't cause much of a slowdown, so you may find it useful to increase `'history'` beyond the default of 20.
