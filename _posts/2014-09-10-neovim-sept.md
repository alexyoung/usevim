---
layout: post
title: "Neovim Update for September"
author: "Alex Young"
tags: 
- neovim
- altvim
---

I'm still following Neovim's progress, and there's just been [an update for September](http://neovim.org/news/2014/sept/).  The project now has 1,000 issues and pull requests. The contributors have been working on removing dead code for legacy systems, unit tests, and the RPC implementation.

One of the cool things about Neovim is it uses libuv, and a Neovim contributor has actually been sending pull requests to the libuv project:

> @Hinidu, one of Neovim's contributors, sent a pull request to libuv to add a new function, `uv_fs_mkdtemp`. The changes (now part of libuv version 0.11.27) are being used by Neovim to provide temporary file/directory creation and the changes work across platforms.

A Neovim bounty has been claimed as well:

> Back on April 9th, the first bounty on Neovim's Bountysource was created. The request was to port an existing patch that was written by Christian Brabandt from Vim to Neovim. The patch gives a `breakindent` option that will match the indentation when a line is wrapped.

The authors are still working on some fundamental project management issues, like moving the unit tests from MoonScript to Lua.  However, the VimScript `system()` function has been converted to using pipes and the job system, so some of the project's advantages over regular Vim are already been addressed.
