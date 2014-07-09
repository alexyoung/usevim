---
layout: post
title: "Neovim Progress"
author: "Alex Young"
tags: 
- neovim
- altvim
---

The [second Neovim newsletter](http://neovim.org/news/2014/july/) has been posted.  The project has settled on the permissive Apache 2.0 license, and progress has been made on the RPC infrastructure.  This allows scripting languages to be supported, and works differently to Vim where bindings have to be compiled into the Vim binary.

There are other improvements and refactoring as well, including changes to growable array, file function refactoring, and work to replace `vim_strncpy` with `strlcpy`.

I've been downloading Neovim from GitHub and running it from master on a Mac, so you should be able to build it if you have a compiler set up.  Not everything works, but it's fun to try it out!
