---
layout: post
title: "Vertically Centring the Cursor Line"
author: "Alex Young"
tags: 
- writing
- settings
---

I was reading [Zen room for Vim: Focusing only on the essential](http://amix.dk/blog/post/19744), a post about a fork of [VimRoom](http://projects.mikewest.org/vimroom/).  There's been a glut of these distraction-free-writing plugins recently, but I like looking at their source because they all struggle to solve one simple problem: how to horizontally offset the cursor.  In [WriteRoom](http://www.hogbaysoftware.com/products/writeroom) and similar applications, the text is heavily offset from the left of the screen because you're writing in fixed character length columns.  You can't easily do that in Vim, so most plugins offset text by using vertical split windows with a hidden bar.

Another interesting thing I noticed these plugins doing is setting `scrolloff` to a high value.  This setting means "scroll offset" -- the number of screen lines to keep above and below the cursor.  If the cursor moves within a threshold then the content will be scrolled.  Vim's documentation notes that setting it a very large value, like 999, causes the cursor line to be centred.

If you try out some desktop applications like WriteRoom you'll notice they do this as well.  Rather than having to mess around with split windows you can just use a handy setting that has a desirable side effect.

I thought there was a lesson in there somewhere for plugin authors: rather than programatically creating complex solutions to things, Vim probably has a setting with a side effect that does what you want.
