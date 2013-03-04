---
layout: post
title: "Script Roundup: VimL Parser, Pry/Vim Integration"
author: "Alex Young"
tags: 
- plugins
- ruby
- parsers
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###VimL Parser

[VimL Parser](http://www.vim.org/scripts/script.php?script_id=4454) (GitHub: [ynkdir / vim-vimlparser](https://github.com/ynkdir/vim-vimlparser)) by Yukihiro Nakadaira is a Vim Script parser that, given a suitable file, will output a parenthesized Polish prefix notation version of the script.  For example, `call vimlparser#test('.vimrc')` will display a parsed version of your Vim configuration.

The project also includes [tests](https://github.com/ynkdir/vim-vimlparser/tree/master/test), with examples of the expected output.  The source in this plugin is pretty huge, so you might like to check it out if you want to see something extreme in Vim Script.

###Pry/Vim Integration

[pry for Ruby](https://github.com/pry/pry) is a popular IRB replacement.  Ryan King has created [a script to integrate Vim and pry](http://www.vim.org/scripts/script.php?script_id=4451) that has some [interesting ideas behind it](https://github.com/pry/pry/wiki/pry-de).

It basically provides a quick way to drop into pry from Vim, but can also do things like yank the last line from pry's history.
