---
layout: post
title: "Plugin Roundup: Vim and tmux"
author: "Alex Young"
tags: 
- tmux
- plugins
---

I live inside tmux and Vim, but I'm always interested in discovering new ways to make them work together more efficiently.  I noticed that Vitality and vimux were released recently, and both aim to help those of us who use tmux and Vim regularly.

###Vitality

[Vitality](http://www.vim.org/scripts/script.php?script_id=4014) (GitHub: [sjl / vitality.vim](https://github.com/sjl/vitality.vim), License: _MIT/X11_) by Steve Losh restores the `FocusLost` and `FocusGained` autocommands in [iTerm 2](http://www.iterm2.com/).

My favourite part of the project is the [Vitality documentation](https://github.com/sjl/vitality.vim/blob/master/doc/vitality.txt) which includes a story about how ridiculous implementing the plugin was through the use of Zork references.

###vimux

[vimux](http://www.vim.org/scripts/script.php?script_id=4011) (GitHub: [benmills / vimux](https://github.com/benmills/vimux)) by Ben Mills is inspired by [tslime.vim](https://github.com/kikijump/tslime.vim), but works a little bit differently.  Calling `RunVimTmuxCommand` will create a 20% tall horizontal pane under the current tmux pane and execute a command in it without leaving Vim.  Once the pane has been created, all `RunVimTmuxCommand` commands will be printed there instead of new panes.

It can also be configured to work as a tslime replacement, where commands are sent to a REPL.  Each of vimux's commands has documentation, and there are `map` examples based on the author's usage.
