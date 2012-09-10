---
layout: post
title: "Script Roundup: GrepTasks, easybuffer.vim"
author: "Alex Young"
tags: 
- plugins
- scripts
- buffers
- vimgrep
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###GrepTasks

[GrepTasks](http://www.vim.org/scripts/script.php?script_id=4196) (GitHub: [vim-scripts / GrepTasks](https://github.com/vim-scripts/GrepTasks)) by Ingo Karkat helps search for `FIXME`, `TODO`, and other markers.  The current buffer can be searched, and also all files in the argument-list.

The plugin's readme file also mentions [TaskMotions.vim](http://www.vim.org/scripts/script.php?script_id=3990) which adds movement commands for markers.

###easybuffer.vim

[easybuffer.vim](http://www.vim.org/scripts/script.php?script_id=4210) (GitHub: [troydm / easybuffer.vim](https://github.com/troydm/easybuffer.vim), License: _Vim_) by Dmitry Geurkov displays buffers in a table-like view with shortcut keys for quickly switching between them.  The keyboard shortcuts for switching buffers are defined in `g:easybuffer_chars`.

The buffer view can be opened vertically or horizontally, and there are shortcuts for opening based on the current window's position, like `:EasyBufferHorizontalBelow`.
