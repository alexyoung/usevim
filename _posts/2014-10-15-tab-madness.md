---
layout: post
title: "Stop the Tab Madness"
author: "Alex Young"
tags: 
- tabs
- windows
- buffers
---

If you've switched to Vim from a GUI tab-based editor like TextMate or Sublime Text, then you've probably learned how to use Vim's tabs.  However, Vim's version of tabs are different, and to really take advantage of them involves properly learning buffers and split windows.

In [Vim Tab Madness. Buffers vs Tabs](https://joshldavis.com/2014/04/05/vim-tab-madness-buffers-vs-tabs/), Josh Davis points out how he uses Vim's buffers, windows, and tabs.  He shows you how to disable tabs until you learn how to use windows and buffers, and he's got some mappings for using buffers more efficiently.

Thinking back to when I started using Vim as my main editor, I struggled to understand how buffers should be used.  It seemed weird that every file ever opened gets added to the buffer list, and switching between buffers seems less instant than the keyboard shortcuts in a GUI editor.

One command that helped me master buffers was `:bd`.  This deletes a buffer, which helps keep the buffer list more manageable.  The list can be displayed with `:ls`.  You can open a buffer based on the number in the list, so `:b1` opens buffer number one.

Josh's main argument is that you shouldn't be using a single tab per file, so if you're using Vim like that you might want to read his article and start learning about the ways to split windows and manage buffers.
