---
layout: post
title: "Script Roundup: butane.vim, longline.vim"
author: "Alex Young"
tags: 
- plugins
- scripts
- buffers
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###butane.vim

[butane.vim](http://www.vim.org/scripts/script.php?script_id=4245) (GitHub: [Soares / butane.vim](https://github.com/Soares/butane.vim), License: _Vim_) by Nate Soares, originally based on [Vim Tip #165](http://vim.wikia.com/wiki/VimTip165), adds a command called `:Bclose` which closes the current buffer without rearranging the window layout.

This plugin checks the modified state of the buffer, and displays an error message when closing an edited buffer.  The `:Bclose!` command can be used to force a window to close.

###longline.vim

[longline.vim](http://www.vim.org/scripts/script.php?script_id=4246) (GitHub: [Soares / longline.vim](https://github.com/Soares/longline.vim), License: _Vim_) also by Nate Soares highlights lines that are too long.  The line length can be set based on `filetype`, and it also has hooks for updating `statusline`.

The length that is considered too long can be set with `g:longline_maxlength`, and `g:longline_filetype_map` is a dictionary of lengths based on `filetype`.  Typing `:LongLine` will toggle highlighting.
