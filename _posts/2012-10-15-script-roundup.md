---
layout: post
title: "Script Roundup: Ozzy.vim, autotags"
author: "Alex Young"
tags: 
- plugins
- ctags
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Ozzy.vim

[Ozzy.vim](https://github.com/gcmt/ozzy.vim) (License: _MIT_) by Giacomo Comitti allows files to be opened quickly and easily.  An algorithm is used to determine which file to open: it can be set to use `most recent`, `most frequent`, or `context`.  The last means the closest to the current working directory.

Files are opened with `:Ozzy <file name>`, and partial paths are supported.  Ending `<file name>` with a forward slash will cause Ozzy to interpret the file name as a directory and open all of the contained files.

Ozzy seems like a good way to quickly switch between files across different projects, or to switch between files in a very large project.

###autotags

[autotags](http://www.vim.org/scripts/script.php?script_id=4263) (GitHub: [basilgor / vim-autotags](https://github.com/basilgor/vim-autotags), License: _Vim_) by Basil Gor is a wrapper for ctags and cscope that makes working with tag files a little bit easier.  Once the plugin is installed, tags can be built with a keystroke, and are loaded automatically when a file is opened.  Tags are stored in `~/.autotags/` to avoid polluting your source directory, and extra directories can be added to support library code.
