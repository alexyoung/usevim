---
layout: post
title: "Script Roundup: vim-nerdtree-tabs, Recover.vim"
author: "Alex Young"
tags: 
- plugins
- NERDTree
- filesystem
- swap
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vim-nerdtree-tabs

Something that I see a lot of people asking about is how to make [NERD Tree](https://github.com/scrooloose/nerdtree) stay open across all tabs.  [vim-nerdtree-tabs](https://github.com/jistr/vim-nerdtree-tabs) by Jiří Stránský is a plugin that can do this.  All expanded and collapsed file tree nodes will appear the same in every tab, and it can be configured to always open when Vim launches.

It also automatically closes the panel when the last file is closed, so NERD Tree is never left hanging open by itself.

It comes with several commands, mappings, and configuration options.

###Recover.vim

[Recover.vim](http://www.vim.org/scripts/script.php?script_id=3068) (GitHub: [chrisbra / Recover.vim](https://github.com/chrisbra/Recover.vim), License: _Vim_) by Christian Brabandt aims to provide an easy way to display the differences between recovered files and the file stored on disk.

When a file is opened and Vim detects a corresponding swap file, Recover.vim will kick in to show the differences with vimdiff.  Merge commands can be used to select which changes should be persisted.
