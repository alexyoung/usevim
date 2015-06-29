---
layout: post
title: "CTerm to GUI"
author: "Alex Young"
tags: 
- colours
- gui
---

I've seen some tools that map from Vim GUI themes to console, but what about the other way around? A reader sent in vim cterm2gui2cterm (GitHub: [97-109-107/vim_cterm2gui2cterm](https://github.com/97-109-107/vim_cterm2gui2cterm)), a tool that maps from console themes to GUI themes and back again.

It's a Python script that has a dictionary that maps colours from the console number to a hex equivalent (`xtermMap`).  It outputs the result in a cterm or vim colour scheme file, so you can easily load it as a colour scheme.  It might be useful if you often switch between gVim and console Vim and want to unify the themes.
