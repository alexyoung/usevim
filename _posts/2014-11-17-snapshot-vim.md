---
layout: post
title: "Snapshot.vim"
author: "Alex Young"
tags: 
- scripts
- plugins
- undo
---

snapshot.vim (GitHub: [gelguy/snapshot.vim](https://github.com/gelguy/snapshot.vim), License: _MIT_) is a plugin for storing sections of code so you can quickly revert later.  You might prefer to do this rather than doing something like `git stash`.  It works well visually because it can dim regions as you select text to snapshot.

The default mappings are `<leader>a` for defining a snapshot region, `<leader>s` for storing the snapshot, and `<leader>S` for viewing and selecting the stored snapshots.

If you like the idea then be aware that snapshots aren't persisted so they'll be lost if you quit Vim.  It's really intended as a tool to help you make potentially breaking changes that aren't cleanly encapsulated by an undo.
