---
layout: post
title: "Script Roundup: vim-expand-region, Git Support"
author: "Alex Young"
tags: 
- plugins
- text-objects
- visual-mode
- git
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###vim-expand-region

[vim-expand-region](http://www.vim.org/scripts/script.php?script_id=4499) (GitHub: [terryma / vim-expand-region](https://github.com/terryma/vim-expand-region), License: _MIT_) by Terry Ma allows visual selections to be expanded.  Pressing `+` will expand the selection, and `_` will shrink it.

The expansion is performed using text objects, and the text object list used by the plugin can be customised by passing a dictionary to `expand_region#custom_text_objects` -- the documentation includes an example of how to do this.

###Git Support

[Git Support](http://www.vim.org/scripts/script.php?script_id=4497) by Wolfgang Mehner allows Git to be called from within Vim, and it also provides a menu for the commands supported by the plugin.  It has some nice features like automatic folds for diffs and logs.

The author has uploaded [screenshots](http://lug.fh-swf.de/vim/website_git/) on his site that illustrate the main features.
