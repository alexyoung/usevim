---
layout: post
title: "Script Roundup: indentLine, microbe"
author: "Alex Young"
tags: 
- plugins
- interface
- indentation
- package-managers
- scripts
---

###indentLine

[indentLine](http://www.vim.org/scripts/script.php?script_id=4354) (GitHub: [Yggdroot / indentLine](https://github.com/Yggdroot/indentLine)) by Yggdroot Chen can be used to display vertical lines at each indentation level when spaces are used instead of tabs.

The character used to represent an indentation level can be changed with `let g:indentLine_char = '|'`, and the author suggests using UTF-8 characters where supported for a cleaner visual style.

###Microbe

Microbe (GitHub: [xsc / microbe-vim](https://github.com/xsc/microbe-vim)) by Yannick Scherer is a Pathogen-based, minimalist, plugin manager.  It's a shell script that relies on curl and other widely available command-line tools for updating pathogen, adding and removing packages, and updating packages.

If you find maintaining your Pathogen setup a chore, `microbe` might help!
