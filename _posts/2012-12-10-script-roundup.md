---
layout: post
title: "Script Roundup: textobj-indblock, qfnotes"
author: "Alex Young"
tags: 
- plugins
- textobjects
- quickfix
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###textobj-indblock

[textobj-indblock](http://www.vim.org/scripts/script.php?script_id=4348) (GitHub: [glts / vim-textobj-indblock](https://github.com/glts/vim-textobj-indblock)) is a set of text objects for selecting whitespace based on the current line's indentation.  It supports Visual and Operator-pending modes, and it built with [textobj-user](https://github.com/kana/vim-textobj-user) by Kana Natsuno.

###qfnotes

[qfnotes](http://www.vim.org/scripts/script.php?script_id=4347) (GitHub: [khorser / vim-qfnotes](https://github.com/khorser/vim-qfnotes)) by Sergey Khorev allows files to be annotated using a quickfix window.  With a file open, pressing `\qn` displays a prompt for a note, and then notes can be loaded later with `:QFXLoad`.  If search or compiler output overwrites your notes, then `:colder` will refresh them.
