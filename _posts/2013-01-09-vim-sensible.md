---
layout: post
title: "Universal Settings: sensible.vim"
author: "Alex Young"
tags: 
- plugins
- settings
---

[sensible.vim](https://github.com/tpope/vim-sensible) (License: _Vim_) by Tim Pope is a selection of default settings:

> Think of sensible.vim as one step above `'nocompatible'` mode: a universal set of defaults that (hopefully) everyone can agree on.

Tim suggests that it can be used by beginners who are new to Vim, without relying on "some random vimrc you found".  The settings aren't a million miles off my own `.vimrc`, to the point that I'm wondering if I should just start using sensible.vim and clean it up a little bit.

It sets `'backspace'` to `indent,eol,start`, which you'll find in many settings files.  It also has some handy completion and indentation settings, and sets the swap/backup/undo files to use `~/.cache/vim` rather than Vim's defaults which seem to be an annoyance for many people.

What I find most interesting about this plugin is the discussions that have appeared in the issue tracker.  For example: [Should 'list' be enabled by default?](https://github.com/tpope/vim-sensible/issues/5) -- sensible.vim has some `listchars` settings for visualising whitespace, and Tim argued that enabling it by default would encourage people to be more careful about spurious whitespaces.

If you're intent on installing sensible.vim, then be aware that it will load after your `.vimrc`.  Tim addresses this under "FAQ" in the readme -- you could put overrides in `after/plugin/sensible.vim` or run it at the start of your `.vimrc` with `runtime! plugin/sensible.vim`.

