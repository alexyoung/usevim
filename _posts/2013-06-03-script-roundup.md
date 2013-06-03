---
layout: post
title: "Script Roundup: Vim Table Mode, Move Until Char Changes"
author: "Alex Young"
tags: 
- plugins
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###Vim Table Mode

Dhruva Sagar sent in [Vim Table Mode](http://www.vim.org/scripts/script.php?script_id=4501) (GitHub: [dhruvasagar / vim-table-mode](https://github.com/dhruvasagar/vim-table-mode), License: _MIT_), a plugin for automatically creating and formatting tables.  A recent update adds support for calculations, allowing tables to behave like spreadsheets.

There's a [demonstration video on YouTube](http://www.youtube.com/watch?v=sK2IH1hiDkw) that covers the basic features.

###Move Until Char Changes

I coincidentally found a spreadsheet-inspired script called [move\_until\_char\_changes.vim](http://www.vim.org/scripts/script.php?script_id=4606) by Joey Twiddle, which mimics the Ctrl-Arrow shortcut in Excel.  This allows you to move until there's a new character under the cursor.  It has various options:

{% highlight text %}
let g:move_stay_in_column   = 1   " Will not stop on shorter lines than the one we started on
let g:move_skip_empty_lines = 1   " Never stop on an empty line (if also unifying, never stop on whitespace)
let g:move_unify_whitespace = 1   " Tab, space and empty-line are all considered the same.
let g:move_once_at_start    = 1   " Don't stop on the very next line just because it has a different char from the current!
{% endhighlight %}


