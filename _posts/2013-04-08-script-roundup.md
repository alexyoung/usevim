---
layout: post
title: "Script Roundup: eighties.vim, thwins"
author: "Alex Young"
tags: 
- plugins
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###eighties.vim

[eighties.vim](http://www.vim.org/scripts/script.php?script_id=4502) (GitHub: [justincampbell / vim-eighties](https://github.com/justincampbell/vim-eighties), License: _MIT_) by Justin Campbell will automatically resize windows when switching between them.  It calculates the size based on the longest line and takes into account signs -- the default width is 80 characters.  It ignores file browsers, so it won't resize NERDTree.

The configuration options are as follows:

{% highlight text %}
let g:eighties_enabled = 1
let g:eighties_minimum_width = 80 
let g:eighties_extra_width = 0 " Increase this if you want some extra room
let g:eighties_compute = 1 " Disable this if you just want the minimum + extra
{% endhighlight %}

###thwins

[thwins](http://www.vim.org/scripts/script.php?script_id=4512) (GitHub: [mitnk / thwins](https://github.com/mitnk/thwins)) "three windows" by Hugo Wang makes Vim display three windows -- one main window with two vertically split windows in the right column, and was inspired by [dwm.vim](http://www.vim.org/scripts/script.php?script_id=4186). 

It has shortcuts for "zooming" into the main window, and various other window manipulation functions.  Full documentation is available in the project's readme.
