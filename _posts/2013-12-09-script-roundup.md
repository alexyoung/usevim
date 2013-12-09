---
layout: post
title: "Script Roundup: Vim-CtrlSpace, railsdock.vim"
author: "Alex Young"
tags: 
- plugins
- rails
- buffers
---

###Vim-CtrlSpace

Vim-CtrlSpace (GitHub: [szw / vim-ctrlspace](https://github.com/szw/vim-ctrlspace), License: _MIT_) by Szymon Wrozynski helps you organise buffers by listing them per-tab.  Workspaces can be saved to disk, and it supports fuzzy search through buffer lists and files.

> I've introduced a concept of many buffer lists tightly coupled with tabs. That means each tab holds its own buffer list. Once the buffer is shown in the tab, the tab is storing it in its own buffer list. No matter in which window. It's just like having many windows related to the same concern, but without the need of split windows at all! Then you can forget the buffer (remove it from tab's buffer list), or perform many other actions.

It changes the status bar, but Szymon has some ideas about integrating it with vim-airline.

###railsdock.vim

Jack Wu sent in railsdock.vim (GitHub: [xuwupeng2000 / vim-rails-apidock](https://github.com/xuwupeng2000/vim-rails-apidock), License: _Vim_), a plugin for opening pages from <http://apidock.com/>.

Typing `:Api` will open the documentation for the method name under the cursor.
