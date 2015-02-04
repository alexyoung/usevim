---
layout: post
title: "Pandoc and Vim"
author: "Alex Young"
tags: 
- pandoc
- vim
---

If you're like me and you find writing in Vim more pleasant than GUI tools, then you're probably a fan of [Pandoc](http://johnmacfarlane.net/pandoc/).  I've got a little Pandoc/Makefile/shell script setup that I've been using to write (sadly unfinished) books, and it works really well with Vim.  It basically lets me write in Markdown and then output PDFs.

One issue that I've got with this setup is previewing the results is fiddly.  It also took me a while to set up my editor for writing prose rather than code.  This whole process could have been avoided if I knew about [vim-pandoc](https://github.com/vim-pandoc/vim-pandoc), which aims to improve the integration between Vim and Pandoc.

Vim-pandoc directly supports writing Markdown, and can run Pandoc asynchronously so you can continue writing while a preview is generated.  It has custom mappings for Markdown, which includes some helpful WYSIWYG-style toggles for emphasis, strong text, subscripts, and so on.

There's even bibliography support, with autocompletion of cite keys.  If you're doing academic writing then you'll find this useful.

If you write articles, papers, or e-books, then vim-pandoc might help you use your favourite editor instead of your existing writing tools.
