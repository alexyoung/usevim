---
layout: post
title: "Script Roundup: Sharefix, GDBFromVim"
author: "Alex Young"
tags: 
- plugins
- scripts
- python
- gdb
- quicklist
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Sharefix

[Sharefix](http://www.vim.org/scripts/script.php?script_id=4098) (GitHub: [samiconductor / vim-sharefix](https://github.com/samiconductor/vim-sharefix), License: _MIT_) by Sam Simmons makes it easier to work with multiple quickfix lists.  If you're running unit tests and getting a list of failing tests in your quickfix list, then it can be annoying when another command overwrites it.  This plugin helps make quickfix commands work together.

Once installed, a `Sharefix` function is exposed that can be used to wrap commands or functions that update the quickfix list.  The author has included documentation and usage examples.

###GDBFromVim

[GDBFromVim](http://www.vim.org/scripts/script.php?script_id=4103) (GitHub: [skibyte / gdb-from-vim](https://github.com/skibyte/gdb-from-vim), License: _GPL2_) by Fernando Castillo provides gdb integration that automatically starts and manages a gdb instance.  It requires Python and [Gdb lib](https://github.com/skibyte/gdblib), and provides lots of commands for interacting with the debugger, like `GdbFromVimRun` and `GdbFromVimNext`.

The `g:gdb_from_vim_app` variable controls which application will be debugged, and arguments can be passed with `g:gdb_from_vim_args`.
