---
layout: post
title: "Script Roundup: vim-tmuxify, vim-git-log"
author: "Alex Young"
tags: 
- plugins
- tmux
- git
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###vim-tmuxify

[vim-tmuxify](http://www.vim.org/scripts/script.php?script_id=4482) (GitHub: [mhinz / vim-tmuxify](https://github.com/mhinz/vim-tmuxify), License: _BSD_) by Marco Hinz allows tmux to be controlled from within Vim.

Panes can be associated with tmuxify and then manipulated using various commands.  For example, `<leader>ms` will prompt for text and send it to the associated pane.  Panes can be created, deleted, cleared, and you can even send the interrupt signal.

###vim-git-log

[vim-git-log](http://www.vim.org/scripts/script.php?script_id=4485) (GitHub: [kablamo / vim-git-log](https://github.com/kablamo/vim-git-log)) by Eric Johnson is an extension to [Fugitive](https://github.com/tpope/vim-fugitive) that allows Git's log to be viewed.  Almost any argument that can be passed to `git log` can be used, except `--pretty` (because presumably the script needs to interpret the output of `log`).

The plugin provides a `:GitLog` command, and the author has a colour scheme to make `vimdiff` look less like it was created by "crazy clowns".
