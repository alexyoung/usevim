---
layout: post
title: "Script Roundup: TabLineNumbers, yankstack.vim"
author: "Alex Young"
tags: 
- plugins
- tabs
- ruby
- testing
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###TabLineNumbers

[TabLineNumbers](http://www.vim.org/scripts/script.php?script_id=4331) (License: _WTFPL_), by Dmitry Konishchev and added to vim.org by Alexander Tarmolov, adds numbers to tabs in Vim.  The original plugin can be found on [Dmitry's blog](http://konishchevdmitry.blogspot.co.uk/2008/07/vim.html), and this edited version has comments in English.  It uses a function that rebuilds the `tabline`, inserting numbers and close symbols as required.

###yankstack.vim

[yankstack.vim](http://www.vim.org/scripts/script.php?script_id=3834) (GitHub: [maxbrunsfeld / vim-yankstack](https://github.com/maxbrunsfeld/vim-yankstack), License: _Vim_) by Max Brunsfeld allows yank, delete, and put to act more like a stack by changing the behaviour of the default register.  This is inspired by the [Emacs kill ring](http://www.gnu.org/software/emacs/manual/html_node/emacs/Kill-Ring.html).

The stack can be displayed by typing `:Yanks`, the output of which is similar to `:reg`.

The author has included tests created with his [Vimbot library](https://github.com/maxbrunsfeld/vimbot).  Vimbot allows Vim tests to be scripted with Ruby 1.9.
