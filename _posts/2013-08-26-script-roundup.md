---
layout: post
title: "Script Roundup: fixkey, nextfile"
author: "Alex Young"
tags: 
- plugins
- scripts
- testing
- metakeys
- nnoremap
---

###fixkey

[fixkey](http://www.vim.org/scripts/script.php?script_id=4693) (GitHub: [drmikehenry / vim-fixkey](https://github.com/drmikehenry/vim-fixkey/), License: _Vim_) by Michael Henry helps console Vim access metakeys that are usually difficult to map correctly.

It takes a fair bit of work to set up: [the fixkey documentation](https://github.com/drmikehenry/vim-fixkey/blob/master/doc/fixkey.txt) has guides for each popular terminal type, including tmux and screen.  If I understand the source correctly, it seems to map new keys to `<F13>` to `<F37>`, and then `<S-F13>` to `<S-F37>`, giving 50 possible keys.

Once it's set up, `:nnoremap` can be used to map previously inaccessible metakeys, just like gVim.

###nextfile

[nextfile](http://www.vim.org/scripts/script.php?script_id=4698) (GitHub: [bighostkim / nextfile.vim](https://github.com/bighostkim/nextfile.vim), License: _MIT_) by Allen Kim is a script for quickly switching between sets of files.  If you're fed up of navigating between a file and its associated tests then nextfile may be what you're looking for.

It uses a function called `AddNextFile` that takes in regular expressions to determine how to switch between files.  The example in the readme is for a Node project, but it could be easily adapted if you `s/js/py` or whatever language you use.  There's even an elaborate example for the rather baroque way Rails works.

