---
layout: post
title: "Too Many Tabs!"
author: "Alex Young"
tags: 
- tabs
---

I use tabs and split windows a lot.  I organise them depending on context: sometimes I'll have `test | source`, other times arbitrary groupings based on the problem at hand.  I have two main issues with tabs, though: switching between large numbers of tabs, and opening them based on buffers.

<div class="image">
  <img src="/images/posts/friendly-tabs.png" alt="" />
  <small>Too many tabs!</small>
</div>

The basic tab switching commands are `gt` and `gT` -- move forward and backwards.  These commands can take a numerical arguments, so `3gt` skips three tabs ahead.  You can even skip to the first tab with `:tabr`.  If you've got mouse input enabled (`:set mouse=a`), then you can click tabs.

If you don't like the order of your tabs, `:tabm +` and `:tabm -` can be used to move tabs around.

Sometimes I get into a mess with too many tabs.  To allow myself to focus again, I like to use `:tabonly` which closes all tabs apart from the current one.

I'm not that bothered about saving the exact state of tabs, so if I want to reopen files as tabs I'll often try `:tab ball` which opens all of the buffers in tabs.  It's usually a good idea to type `:ls` first to see what buffers are open.

Other than that I don't really use anything else -- no fancy scripts or remappings.  I find the basic tab commands just enough.
