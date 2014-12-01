---
layout: post
title: "Run Tests with vim-testkey"
author: "Alex Young"
tags: 
- scripts
- plugins
- tests
---

Micah Geisel sent in [vim-testkey](https://github.com/botandrose/vim-testkey), a script for quickly running tests.  You can press `<Enter>` or `<Space>` in a test file to run the tests, and the same shortcut will trigger a save and rerun in non-test files.

It comes with built-in support for Cucumber and Mocha, but you can add your own test runner settings as well.  You can also change the key mapping with `let g:TestKey`.

If you're a TDD practitioner then this might reduce the amount of times you switch to another terminal and press up/return.  I use a file watch-based solution, but vim-testkey might be more efficient for large projects.
