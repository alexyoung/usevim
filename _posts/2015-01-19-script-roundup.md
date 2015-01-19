---
layout: post
title: "Script Roundup: vim-lastplace"
author: "Alex Young"
tags: 
- scripts
- plugins
- files
---

[vim-lastplace](http://www.vim.org/scripts/script.php?script_id=5090) (GitHub: [dietsche/vim-lastplace](https://github.com/dietsche/vim-lastplace), License: _MIT_) records the last line you were on when you reopen a file.  It can ignore certain files, which means you won't get issues when making Git commits.  The ignored files are configurable with `g:lastplace_ignore`.

This plugin is based around `BufReadPost`, which allows a command to be added whenever a file is opened.  It then positions the cursor using `g` with a backtick and `"`, which moves the cursor at the last known position in the file.  So it's essentially an intelligent repackaging of a built-in Vim feature, which appealed to me.  It goes to show that useful plugins don't need a huge amount of code!
