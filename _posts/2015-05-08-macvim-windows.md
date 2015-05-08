---
layout: post
title: "Neovim.app: Multiple Windows"
author: "Alex Young"
tags: 
- mac
- neovim
---

![Neovim.app windows](/images/posts/macneovim-windows.png)

The [Neovim.app](https://github.com/rogual/neovim-dot-app) project for Mac OS X has recently got multiple window support.  It's starting to feel closer to [MacVim](https://github.com/b4winckler/macvim), although you'll still need to build it yourself.

I tried sourcing my `.vimrc` in it, and it worked pretty well without many changes. That's really Neovim doing the hard work, but I wondered about GUI glitches from my colour scheme, syntax highlighting, and plugins.

I haven't used Neovim.app for real work yet (I use tmux/Vim most of the time), but a few things have impressed me.  The startup time is good, the Dock icon looks great, and it hasn't crashed so far.

If you've got time to try it, follow the instructions in the readme for getting the Neovim through Homebrew and then get the source and run `make`.  You can run it by typing `open build/Neovim.app` or by clicking on the icon from Finder.
