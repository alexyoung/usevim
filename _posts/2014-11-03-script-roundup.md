--
layout: post
title: "Script Roundup: RootIgnore, VIntSearch, ReplaceWithSameIndentRegister"
author: "Alex Young"
tags: 
- scripts
- plugins
- search
- project-management
---

###RootIgnore

[RootIgnore](http://www.vim.org/scripts/script.php?script_id=5048) (GitHub: [octref/RootIgnore](https://github.com/octref/RootIgnore)) by Pine Wu allows you to set `wildignore` from a Git repository root.  It's designed to work with [ctrlp.vim](http://kien.github.io/ctrlp.vim/) so you can restrict search results to the files in the current directory and honor the `.gitignore` for the project.

###VIntSearch

[VIntSearch](http://www.vim.org/scripts/script.php?script_id=5047) (GitHub: [yssl/VIntSearch](https://github.com/yssl/VIntSearch)) will search for symbols and text based on ctags and grep.  It generates results in a QuickFix window, and should be easier to use than the built-in grep commands.


###ReplaceWithSameIndentRegister

[ReplaceWithSameIndentRegister](http://www.vim.org/scripts/script.php?script_id=5046) by Ingo Karkat replaces text based on the current line's indentation.  It can replace `[count]` lines when invoked with `[count]["x]grR`, but there's also a Visual mode equivalent that is probably easier to use.
