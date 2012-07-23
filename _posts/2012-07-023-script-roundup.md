---
layout: post
title: "Script Roundup: textobj-word-column.vim, refactor-rails.vim"
author: "Alex Young"
tags: 
- plugins
- scripts
- ruby
- rails
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###textobj-word-column.vim

[textobj-word-column.vim](https://github.com/coderifous/textobj-word-column.vim) by Jim Garvin adds extra text-objects:

* `ac`: A column
* `ic`: Inner column
* `aC`: A COLUMN, based on `aW`
* `iC`: Inner COLUMN, based on `iW`

These text-objects can be combined with other commands.  For example, `vic` will visually select a column.  The author has made an [animated gif](https://a248.e.akamai.net/camo.github.com/84e6a86442b9c6f9a9c3fdaf7d47d3d0b756b4a1/687474703a2f2f692e696d6775722e636f6d2f4141674d392e676966) that demonstrates the plugin with some Ruby code.

###refactor-rails.vim

[refactor-rails.vim](http://www.vim.org/scripts/script.php?script_id=4137) (GitHub: [sandeepravi / refactor-rails.vim](https://github.com/sandeepravi/refactor-rails.vim), License: _Vim_) by Sandeep Ravichandran is designed to help refactor Rails projects, and includes commands like these:

* `riv`: Select an instance variable in Visual mode, then use this to rename it
* `em`: Extract selected code into a new method
* `rc`: Rename a controller, including all associated helpers and test cases
