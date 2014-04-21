---
layout: post
title: "Script Roundup: Reveal in Finder, Autosave"
author: "Alex Young"
tags: 
- scripts
- plugins
- mac
- autosave
---

###vim-reveal-in-finder

[Thai Pangsakulyanont](http://dt.in.th/) sent in vim-reveal-in-finder (GitHub: [henrik / vim-reveal-in-finder](/https://github.com/henrik/vim-reveal-in-finder), License: _MIT_), a plugin that can open the current path in Finder.  It uses the `open` command that Mac OS has, and can be run by typing `:Reveal`.

Thai suggests adding `:map <leader>e :Reveal<cr>` to your `.vimrc` so it can be invoked quickly.

###Autosave

[Autosave](http://www.vim.org/scripts/script.php?script_id=4927) by Calon Xu saves backups of new files.

If you find yourself editing new files for a long time before saving them, then this will help to avoid losing work if your computer crashes.
