---
layout: post
title: "Script Roundup: Buffersaurus, CMake"
author: "Alex Young"
tags: 
- scripts
- plugins
- buffers
- build
- cmake
---

###Buffersaurus

Buffersaurus (GitHub: [jeetsukumaran / vim-buffersaurus](https://github.com/jeetsukumaran/vim-buffersaurus)) by Jeet Sukumaran is a plugin for searching (and replacing) across all open buffers.  Typing `:Bsgrep` searches all buffers for a regular expression, and you can use an exclamation mark to only search the current buffer.

The `:Bstoc` command generates a table of contents for patterns based on filetype, which means you can use it to generate lists of method names.

There's also a `:Bsreplace` command for replacing text.  For full documentation, see [buffersaurus.txt](https://github.com/jeetsukumaran/vim-buffersaurus/blob/master/doc/buffersaurus.txt).

###CMake Syntax Update

If you use CMake 2.8.12, then you can use [this syntax update](http://www.vim.org/scripts/script.php?script_id=4938) by Timothy Madden to improve Vim's support for the syntax.  It adds generator expressions, properties, variables, and the new CMake commands.
