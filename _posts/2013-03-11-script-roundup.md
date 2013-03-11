---
layout: post
title: "Script Roundup: obsession.vim, vim-multiedit"
author: "Alex Young"
tags: 
- plugins
- sessions
- selection
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###obsession.vim

[obsession.vim](http://www.vim.org/scripts/script.php?script_id=4472) (GitHub: [tpope / vim-obsession](https://github.com/tpope/vim-obsession), License: _Vim_) by Tim Pope provides some sugar for working with Vim's session files.  It automatically calls `:mksession` before exiting, and whenever the layout changes.

To start using it, type `:Obsess` with an optional file or path.  Session files can then be loaded with `vim -S` or `:source`.

###vim-multiedit

[vim-multiedit](http://www.vim.org/scripts/script.php?script_id=4467) (GitHub: [hlissner / vim-multiedit](https://github.com/hlissner/vim-multiedit), License: _MIT_) by Henrik Lissner is a plugin for working with multiple selections, based on [Felix Riedel's earlier work](https://github.com/felixr/vim-multiedit).

Once several selections have been made, edits can be applied to each region.  This is done by using the mappings documented in `:help multiedit-mappings`.  Regions can be added, cleared, and restored, and then editing is started by issuing `:Multiedit` or `:Multiedit!` (change mode).
