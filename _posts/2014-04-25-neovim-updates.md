---
layout: post
title: "Neovim Progress"
author: "Alex Young"
tags: 
- neovim
- alt
---

[Neovim](https://github.com/neovim/neovim) is now on GitHub, has a [Google Group](https://groups.google.com/forum/#!forum/neovim), and Thiago has been [posting progress updates](https://www.bountysource.com/teams/neovim/updates):

> * Rewards have been fufilled with backers.md and logos on website
> * Most of the code in os_unix.c has been ported to libuv in the os directory, getting us closer to have windows support.
> * The job control patch has been merged, which will be the base for the new plugin architecture
> * Currently working on the msgpack-rpc interface

The [job patch](https://github.com/neovim/neovim/pull/475) is an improved version of the one he submitted to [the Vim mailing list in January](https://groups.google.com/forum/#!topic/vim_dev/QF7Bzh1YABU).

> The job module implemented here will be reused for spawning plugins.
> The basic difference between plugins and plain jobs started with jobstart is that instead of invoking an auto commands passing the raw data to the vimscript programmer, plugins will have access to Neovim msgpack API directly

The [Neovim issue tracker](https://github.com/neovim/neovim/issues) already has a lot of activity, so check that out if you're interested in what work is being planned for the near future.

