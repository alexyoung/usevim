---
layout: post
title: "Moving Windows"
author: "Alex Young"
tags: 
- windows
---

As Vim users, we like to work with split windows.  We tend to split them ad hoc rather than according to a fixed scheme -- I'll often use a vertical split for `code | unit test`, but it's so easy to split windows that I'll open more as needed, quite arbitrarily.

Armed with just `:split` (shortcut: `CTRL-W_s`, alias: `:sp`) and `:vsplit` (shortcut: `CTRL-W_v`, alias: `:vs`), it's possible to get by productively without taking advantage of the hidden wealth of window management commands that lie just beneath the surface.  Let's look at one category of these commands: moving windows.

###Flippin' Windows

Vim's documentation for window movement is under `:help window-moving`.  The first command it introduces is `CTRL-W r`, which rotates windows downwards and rightwards.  This is useful, but what I usually want to do is switch between a horizontal and vertical layout.

To flip layouts, you need to understand how Vim moves windows internally.  Let's say I've got two horizontally split windows in the following configuration:

![Horizontally split windows](/images/posts/windows-horiz.png)

For whatever reason I want to change this layout to use a vertical split instead.  To do that, I press `CTRL-W_L` (that's `CTRL` _and_ `w` then uppercase `L`):

![Vertically split windows](/images/posts/windows-vert.png)

Although it seems like the windows have changed layout, what really happened was the current window ("win b") was moved to be the right window, _using the full height of the screen_.  This is implemented by closing "win b", creating another window using `:vert topleft split`, and then replacing the new window with the closed window.

These operations make sense because they allow you to work with arbitrarily complicated window layouts.  If I now type `CTRL-W_s` to horizontally split the window and open another file, it splits the new window into two:

![Vert, horiz, horiz](/images/posts/windows-horiz-horiz.png)

This can lead to situations where there are too many windows to be usable.  Fortunately, I can easily send the new window to another tab by typing `CTRL-W T`:

![Window, tab](/images/posts/windows-tab.png)

It's great to be able to quickly move a window to a new tab when your screen is full of windows.  I find it easier than closing a window then finding it in the buffer list.
