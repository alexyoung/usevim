---
layout: post
title: "Vim Bootstrap"
author: "Alex Young"
tags: 
- vimrc
---

[Vim Bootstrap](http://vim-bootstrap.appspot.com/) is a web app that helps you to quickly generate a new `.vimrc`.  It allows you to select from a list of programming languages, then creates a file that includes the appropriate NeoBundle dependencies.

To use the file, copy it to `~/.vimrc` and then install the dependencies with `vim +NeoBundleInstall +qall`.

Vim Bootstrap supports further customisation through an optional `.vimrc.local` file, so you don't need to modify the original.

The project has plenty of documentation on GitHub, so it should help beginners get started with Vim for their preferred programming languages.
