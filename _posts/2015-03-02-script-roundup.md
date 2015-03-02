---
layout: post
title: "gVim to xcolors"
author: "Alex Young"
tags: 
- scripts
- python
- colours
---

gvim-to-xcolors (GitHub: [97-109-107/gvim-to-xcolors](https://github.com/97-109-107/gvim-to-xcolors)) is a Python script for extracting colours from Vim themes and outputting colours in the X resources convention.

It does this by parsing highlight groups and their priority.  The normal group is processed separately to determine the foreground and background colour.

The author has been using it to generate i3wm colour schemes with [Charles Leifer's themer](http://charlesleifer.com/blog/using-python-to-generate-awesome-linux-desktop-themes/).  I think this would be cool if you've got a favourite Vim colour scheme but can't quite get your window manager to look right.
