---
layout: post
title: "Mavericks and Vim"
author: "Alex Young"
tags: 
- mac
- macvim
---

![Mavericks](/images/posts/mavericks.png)

I've been watching with interest to see how fellow Vimmers are coping with the migration to Mac OS X: Mavericks.  It sounds like MacVim has [minor build issues](https://github.com/mxcl/homebrew/pull/20473), but even [Homebrew was struggling](https://github.com/mxcl/homebrew/pull/20499) so don't rush to upgrade just yet.

The [vim_mac](https://groups.google.com/forum/#!forum/vim_mac) group has a brief discussion about building on Mavericks: [macvim OS X 10.9 Mavericks build](https://groups.google.com/d/msg/vim_mac/5kVAMSPb6uU/QcMa6DyaqpsJ).  It sounds like existing binaries should just about work, with caveats:

* [CGContextErase deprecation notice in Mavericks preview](https://code.google.com/p/macvim/issues/detail?id=452)
* [Full Screen does not work properly on 10.9 Mavericks](https://code.google.com/p/macvim/issues/detail?id=454)

Given that MacVim's maintainer, Björn Winckler, doesn't have access to Mavericks, I'd hold off upgrading your main development machine if you're a MacVim user.  Remember that you _can_ install Mavericks onto its own partition or USB drive, so if you're desperate to try it out do that instead of replacing your main OS.
