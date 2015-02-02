---
layout: post
title: "Script Roundup: enabler, vim-stay"
author: "Alex Young"
tags: 
- scripts
- plugins
- viewoptions
- sessions
- plugin-management
---

###enabler

[enabler](http://www.vim.org/scripts/script.php?script_id=5101) (GitHub: [tomtom/enabler_vim](https://github.com/tomtom/enabler_vim/)) by Tom Link is a script for selectively loading bundles. It can be used with a plugin manager like Pathogen, allowing you to avoid slowing down Vim's loading time.

A specific plugin can be loaded with `:Enable`, and you can enable a set of plugins that you always use in your `.vimrc`.

If you use Vim on a slow machine or regularly try out lots of plugins, then this will be useful.

###vim-stay

Martin Kopischke's [vim-stay](http://www.vim.org/scripts/script.php?script_id=5099) (GitHub: [kopischke/vim-stay](https://github.com/kopischke/vim-stay), License: _MIT_) plugin adds automated view session creation and restoration whenever editing a buffer.  If you find Vim loses state when cycling through buffers with commands like `argdo` and `bufdo`, then this might help you take back control of the editor's state.

It maintains a list of "volatile" file types (`g:volatile_ftypes`) that are never persisted, and there are some recommended `viewoptions` in the documentation that should help it work with folds and cursor position.

> Keeping editing session state should be a given in an editor; unluckily, Vim's solution for this, *view sessions*, are not easily automated without encountering painful bumps. As the one plug-in I found that aims to fix this, Zhou Yi Chao’s restore_view.vim, limits itself to Vim sessions, doesn't play well with other position setting plug-ins like my own vim-fetch and as I found its buffer name based heuristics rather error prone, I wrote my own.

