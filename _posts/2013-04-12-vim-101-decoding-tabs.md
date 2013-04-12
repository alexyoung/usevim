---
layout: post
title: "Vim 101: Decoding Tab Titles"
author: "Alex Young"
tags: 
- vim101
- tabs
- windows
- tabline
---

If you've managed to fit [tabs](http://usevim.com/2012/06/08/js101-tabs/) into your workflow, then you've probably noticed curious numbers and signs that appear alongside the truncated filename.  It's very easy to read this information once you know how: the number refers to the number of split windows in a tab, and the `+` means there is an unsaved file in the tab.

![Decoding tabs](/images/posts/decoding-tabs.png)

The tab bar itself is known as the `'tabline'` (`:help 'tabline'`).  If you executed `:set tabline=hello` then 'hello' would be displayed instead of the standard content.  You can switch back to the default by typing `:set tabline=`.

The `'showtabline'` (`:help 'showtabline'`) option allows the tabline to be turned off, on, or always on:

* `:set showtabline=0`: Hide the tabline
* `:set showtabline=1`: Show the tabline
* `:set showtabline=2`: Always show the tabline

