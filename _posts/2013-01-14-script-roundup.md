---
layout: post
title: "Script Roundup: Supertab, scriptease.vim"
author: "Alex Young"
tags: 
- plugins
- authoring
- debugging
- completion
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Supertab

[Supertab](http://www.vim.org/scripts/script.php?script_id=1643) (GitHub: [ervandew / supertab](https://github.com/ervandew/supertab), License: _BSD_) by Eric Van Dewoestine and created by Gergely Kontra is a plugin for invoking completion in Insert mode with the `<Tab>` key.  It knows when not to invoke completion, but has a setting for preventing `<Tab>` from completing.

It's actually been kicking around since 2006, so over time it's grown to include several settings which are fully documented.  For example, the first completion entry can be preselected, and completion functions can be chained together.

###scriptease.vim

"Enjoy this amalgamation of crap I use for editing runtime files," says Tim Pope, about [scriptease.vim](http://www.vim.org/scripts/script.php?script_id=4394) (GitHub: [tpope / vim-scriptease](https://github.com/tpope/vim-scriptease), License: _Vim_).  It includes lots of useful functions for plugin developers, like `:PP {expr}` -- pretty print, `:Time {command}` -- a simple benchmarking function, `zS` -- show the active syntax highlighting groups under the cursor.

The project comes with documentation for each of the included commands and functions.  Some enhance existing functionality and use an uppercase first version of the original name, like `:Breakadd` and `:Breakdel`.

