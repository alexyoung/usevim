---
layout: post
title: "Script Roundup: vim-table-mode, Gundo"
author: "Alex Young"
tags: 
- plugins
- git
- tables
- modes
- undo
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###vim-table-mode

[vim-table-mode](http://www.vim.org/scripts/script.php?script_id=4501) (GitHub: [dhruvasagar / vim-table-mode](https://github.com/dhruvasagar/vim-table-mode/), License: _MIT_) by Dhruva Sagar is an Emacs-inspired Table Mode plugin that makes it easier to work with ASCII formatted tables.  The author wrote a [blog post](http://dhruvasagar.com/2013/03/17/vim-table-mode) with a bit of background behind the plugin (it was derived from earlier work by Tim Pope), and some videos that illustrate how it works.

> Using Table Mode is dead simple. You simply start typing on a new line with the table separator - |g:table-mode-separator|, and you just type away! The plugin does the rest automatically for you as you type. With each additional separator you add, it aligns the table properly, without having to do anything else.

###Gundo

I was going through Steve Losh's plugins, after referencing [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/) in a talk I gave earlier this year about Vim.  I stumbled on [Gundo](http://www.vim.org/scripts/script.php?script_id=3304) (GitHub: [sjl / gundo.vim](https://github.com/sjl/gundo.vim), License: _GPLv2+_), which was released before I started writing _usevim_, but I thought it was worth writing about because I know many people struggle with Vim's undo system.

Gundo helps you visualise undo trees using an ASCII tree diagram rather than a simple list.  Typing `:GundoToggle` will display the tree view, and Steve recommends setting up a shortcut in the [project's documentation](http://sjl.bitbucket.org/gundo.vim/) to make it easier to access.

The plugin displays an undo graph and preview pane, showing a diff between the current state and the selected line.  It also has options for controlling the size and position of its window.

Vim's undo system does bury a mine of information within itself, but it can be hard to tease out what you're looking for.  Gundo makes it a lot of easier to work with.
