---
layout: post
title: "Open Line on GitHub"
author: "Alex Young"
tags: 
- github
---

Felix Geisendörfer recently wrote [Vim Trick: Open current line on GitHub](http://felixge.de/2013/08/08/vim-trick-open-current-line-on-github.html).  The idea is to open a repository with GitHub in a browser for the current file and line number in Vim.

GitHub allows you to link directly to line numbers using fragment identifiers.  For example, if I wanted to link to line 7 of `index.jade` which is used to generate this blog, I can share [index.jade#L7](https://github.com/alexyoung/usevim/blob/master/index.jade#L7).

Felix's tip uses a Git alias and `xargs` and `open`, along with `nnoremap`, to figure out the URL of the current file and open it.  He also notes that [fugitive.vim](https://github.com/tpope/vim-fugitive) includes `:Gbrowse` for doing the same thing.

Fugitive's approach uses more Vim script to figure out the URL.  Take a look at [github_url()](https://github.com/tpope/vim-fugitive/blob/124550cfee33a1bb9a227e78ccc709317a89dae9/plugin/fugitive.vim#L1902-L1959) to see how that works.  It seems complicated, but it's more generic and portable.
