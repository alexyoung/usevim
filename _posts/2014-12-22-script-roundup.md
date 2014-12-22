---
layout: post
title: "Script Roundup: vim-tab, Vim-Swoop"
author: "Alex Young"
tags: 
- scripts
- plugins
---

###vim-tab

[vim-tab](http://www.vim.org/scripts/script.php?script_id=5070) (GitHub: [rargo/vim-tab](https://github.com/rargo/vim-tab)) by Rargo Ye is designed to allow Vim to use a different working directory for each tab.  Why?  The author provides some interesting background: he writes software for Android, and finds that because Android development can be so complex things like ctags get slow.

vim-tab allows you to set a directory per tab, and also run commands.  That means you could reload tags for the new working directory.

The readme on GitHub has more details and configuration examples.

###Vim-Swoop

[Vim-Swoop](http://www.vim.org/scripts/script.php?script_id=5069) (GitHub: [pelodelfuego/vim-swoop](https://github.com/pelodelfuego/vim-swoop), License: _GPL_) by Clément Crepy is based on the helm-swoop Emacs plugin.  It allows you to see the context of matches while finding and replacing text:

> Once you start swoop, you will be prompted for a pattern. Then a split screen contains the Swoop Buffer which contains all matched occurrences. As you navigate in the Swoop Buffer, the initial window will display the context of the match under the cursor.

This should make it easier to perform renames across multiple files, so it could work well as a refactoring tool.
