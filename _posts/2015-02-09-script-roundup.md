---
layout: post
title: "Script Roundup: vim-prosession, vim-dotoo"
author: "Alex Young"
tags: 
- scripts
- plugins
- productivity
- sessions
---

Dhruva Sagar sent me two plugins that he's written: [VIM ProSession](https://github.com/dhruvasagar/vim-prosession) and [VIM Do Too](https://github.com/dhruvasagar/vim-dotoo).

Vim ProSession (or vim-prosession) is an extension to Tim Pope's [vim-obsession](https://github.com/tpope/vim-obsession).  The idea is to make it easier to manage multiple Vim sessions when Vim is started from a specific directory.  It adds a command called `:Prosession` that completes session file names from the directory set by `g:prosession_dir`.

![Vim Do Too](/images/posts/vim-dotoo.png)

Vim Do Too (vim-dotoo) is a to-do list script.  The required document structure is inspired by the Org Mode in Emacs.  It has four different views: agenda view, TODOs view, refiles, and notes.  You can use mappings to make quick edits to lists, like `cit` to edit an item, or `gI` to mark a headline under the cursor. You can also use abbreviations to insert the current date or time: `:date:` and `:time:`.

The project's GitHub page has screenshots that illustrate each of the views, so you can get a feel for how it works before installing it.

