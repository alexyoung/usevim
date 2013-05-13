---
layout: post
title: "Script Roundup: tbone.vim, Niji"
author: "Alex Young"
tags: 
- plugins
- tmux
- parentheses
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###tbone.vim

[tbone.vim](http://www.vim.org/scripts/script.php?script_id=4488) (GitHub: [tpope / vim-tbone](https://github.com/tpope/vim-tbone), License: _Vim_) by Tim Pope provides some integration between Vim and tmux.  The `:Tmux` command executes arbitrary tmux commands with tab completion, and `:Tyank` and `:Tput` gives you access to tmux's buffers.

> Would you like to paste a shell command into another pane over and over again? I am sorry but you will have to install one of the 300 other Vim plugins for tmux.

###Niji

[Niji](http://www.vim.org/scripts/script.php?script_id=4580) (GitHub: [amdt / vim-niji](https://github.com/amdt/vim-niji), License: _Vim_) by Alastair M. D. Touw is another rainbow parentheses plugin that has been influenced by previous similar plugins, including RainbowParenthsis.vim, Lisp.vim, and rainbow_parentheses.vim.

It comes with two themes, and is configured to work with Lisp, Scheme, and Clojure, but can be set to work with all files by using `g:niji_match_all_filetypes`.  The colour-related options (`g:niji_dark_colours`, `g:niji_dark_colours`) use the British spelling of colour, so keep an eye out for that if things don't seem to work as expected.

The [documentation](https://github.com/amdt/vim-niji/blob/master/doc/niji.txt) is detailed with full installation instructions.
