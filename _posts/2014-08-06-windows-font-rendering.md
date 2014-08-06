---
layout: post
title: "Windows Font Rendering Improvements"
author: "Alex Young"
tags: 
- windows
- patches
---

I noticed [patch 7.4.393](https://groups.google.com/d/msg/vim_dev/KBk2ojpNNK0/ZW5rSga2JwQJ) has support for improved font rendering in Windows:

> Problem:    Text drawing on newer MS-Windows systems is suboptimal.  Some multi-byte characters are not displayed, even though the same font in Notepad can display them. (Srinath Avadhanula).

> Solution:   Add the 'renderoptions' option to enable Direct-X drawing. (Taro Muraoka)

There's an additional update from Ken Takata that fixes an issue with italics, but the DirectX drawing sounds better than GDI rendering which at this point feels dated in modern Windows.
