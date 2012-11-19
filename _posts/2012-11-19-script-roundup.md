---
layout: post
title: "Script Roundup: dragee.vim, BufNameComplete"
author: "Alex Young"
tags: 
- plugins
- completion
- configuration
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###dragee.vim

[dragee.vim](https://github.com/emma-dev/dragee.vim) by "emma-dev" is a Vim distribution that aims to improve the default settings, and make it easier to share Vim dotfiles.  It uses a few Vim scripts and [VAM](https://github.com/MarcWeber/vim-addon-manager) to manage both settings and plugins.

Plugins are defined in the [.vim/addon/rc](https://github.com/emma-dev/dragee.vim/blob/master/addon/rc) file using a tree structure, core settings are stored in `.vim/core` and "patch" settings are kept in `.vim/patch`.  Core settings are probably what you usually dump in your `.vimrc` file, while patch settings are plugin-specific settings.  The example Emma uses is [patch/endwise+double-tap.vim](https://github.com/emma-dev/dragee.vim/blob/master/patch/endwise%2Bdouble-tap.vim).

###BufNameComplete

[BufNameComplete](http://www.vim.org/scripts/script.php?script_id=4313) by Ingo Karkat is a filename completion plugin that only matches filenames in the current buffer list.  This is based on `i_CTRL-X_CTRL-F` (used in Insert mode) which displays matches for files in the current directory.  For a bit of background on this plugin, see the following StackOverflow post: [Vim Completion Based on Buffer Name](http://stackoverflow.com/questions/13406751/vim-completion-based-on-buffer-name).
