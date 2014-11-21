---
layout: post
title: "Interview with Bram Moolenaar"
author: "Alex Young"
tags: 
- interviews
---

Binpress has an [interview with Bram Moolenaar](http://www.binpress.com/blog/2014/11/19/vim-creator-bram-moolenaar-interview/) that focuses on the business-side of Vim: the choice of charity, keeping the project sustainable, and the future of Vim:

> Nothing spectacular. Mainly small improvements. There are a few areas that could do with bigger improvements, such as making it easier to write and use plugins. But it's not clear how to do that. And plugin managers appear to be filling the gap quite well.

There are also some interesting comments about NeoVim:

> It's a lot like what happened to Elvis: A rewrite was going to make it much better, but it took so long, during which Vim added more features, that eventually there are not so many Elvis users. And the rewritten Elvis may have nice code, but users don't notice that.
>
> I do hope that the nice things that NeoVim comes up with can be added back to Vim. I mean, who doesn't want better plugin support, a better GUI and embedding? The big question is how to do that, and who is going to implement it properly.

Elvis was a vi clone that initially influenced Vim.  The NeoVim changes that I find the most interesting are things like using [libuv](https://github.com/neovim/neovim/wiki/Porting-OS-layer-to-libuv), which is more architectural than high-level.  The fact that Bram states in the interview that Vim will only receive small improvements means NeoVim could differentiate itself and have room to do things differently.  The future looks promising for both projects right now.
