---
layout: post
title: "Neovim and Windows"
author: "Alex Young"
tags: 
- neovim
- community
---

One of the reasons I started using Vim for serious work was cross-platform support.  It felt weird investing time learning editors that were only available for Windows or Mac OS.  Recently some [strong arguments](http://usevim.com/2015/01/16/neovim-better/) in support of Neovim have made me use it more regularly in Unix, but I never even considered Windows and just assumed it would work there too.

Well, [apparently it doesn't](https://groups.google.com/d/topic/neovim/G1qNr99K7Zo/discussion).  Regulars at the [neovim Google Group](https://groups.google.com/forum/#!forum/neovim) have been trying to get it running, but it still has some issues.  Rui Abreu Ferreira has a branch called [tb-win32-any](https://github.com/equalsraf/neovim/tree/tb-win32-any) which has fixes for Windows, and there are [gists with build instructions](https://groups.google.com/d/msg/neovim/G1qNr99K7Zo/qtQVUHG3PdMJ) in the main discussion.

It sounds like it only builds on MSVC 2013 update 2, but MSVC 2015 might be needed.

The Neovim team has been talking about building Neovim since [issue #696](https://github.com/neovim/neovim/issues/696) which was posted in May 2014.  There's also a [Building Neovim](https://github.com/neovim/neovim/wiki/Building-Neovim) document which you can start with if you want to try it for yourself.

I really hope more Windows developers start helping out because I think solid Windows support is necessary for Neovim to become mainstream.
