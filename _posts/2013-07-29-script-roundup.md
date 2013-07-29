---
layout: post
title: "Script Roundup: vim-node, ctrlp-tjump"
author: "Alex Young"
tags: 
- plugins
- scripts
- node
- ctrlp
---

###vim-node

[vim-node](http://www.vim.org/scripts/script.php?script_id=4674) (GitHub: [moll / vim-node](https://github.com/moll/vim-node), License: _Lesser GNU Affero General Public License_) by Andri Möll is inspired by Rails.vim and Rake.vim.  It adds shortcuts for jumping to modules and keyword searching.

When in Normal mode:

* Use `gf` on `require()` to jump to the source file
* Use `[I` on a keyword to look for it in the current and required files

###ctrlp-tjump

[ctrlp-tjump](http://www.vim.org/scripts/script.php?script_id=4673) (GitHub: [ivalkeen / vim-ctrlp-tjump](https://github.com/ivalkeen/vim-ctrlp-tjump)) by Ivan Tkalin extends [CtrlP](https://github.com/kien/ctrlp.vim) to support fuzzy search for tags: when the cursor is over a class or method, use `:CtrlPtjump` to list matching tags.  This replaces the `:tjump` command.

