---
layout: post
title: "Script Roundup: vim-dict, Vdebug"
author: "Alex Young"
tags: 
- plugins
- scripts
- dictionary
- debugging
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vim-dict

[vim-dict](http://www.vim.org/scripts/script.php?script_id=4180) (GitHub: [szw / vim-dict](https://github.com/szw/vim-dict), License: _Vim_) by Szymon Wrozynski is a client for dict servers.  It uses curl to access the HTTP API, and will attempt to check [dict.org](http://www.dict.org/) by default.

A word can be checked by typing `:Dict hello`, and the results will be displayed in a new window.

###Vdebug

[Vdebug](http://www.vim.org/scripts/script.php?script_id=4170) (GitHub: [joonty / vdebug](https://github.com/joonty/vdebug), License: _MIT_) by Jonathan Cairns is a debugger client that works with PHP, Python, Ruby, and Perl.  Like other Vim debugger scripts, this one works using the DBGP protocol and is compatible with Xdebug.  The author has included configuration details which can be read by typing `:help VdebugSetUp`.

Commands are mapped to the F-keys: `<F2>` is step over, and `<F6>` is stop.
