---
layout: post
title: "Writing Vim Syntax Plugins"
author: "Alex Young"
tags:
- syntax
- plugins
- tutorial
---

Keith Smiley at thoughtbot published a detailed [about writing syntax plugins](http://robots.thoughtbot.com/writing-vim-syntax-plugins).  He's been adding support for Swift to Vim, and has written up all of the steps you need to make Vim support a new language: file type detection (ftdetect), Vim script execution based on file type (ftplugin), syntax highlighting, and indentation.

Swift's syntax is relatively simple, but there are still some pretty gnarly `syntax region` lines.  Keith also had to write a function to correctly handle Swift indentation, which is invoked by `setlocal indentexpr`.

