---
layout: post
title: "vim-tag-comment"
author: "Alex Young"
tags: 
- scripts
- plugins
- html
- xml
---

[vim-tag-comment](http://www.vim.org/scripts/script.php?script_id=5190) (GitHub: [mvolkmann/vim-tag-comment](https://github.com/mvolkmann/vim-tag-comment), License: _MIT_) is another small but useful plugin by Mark Volkmann. This one adds/removes XML comments, but instead of adding a comment to each line it'll use one multi-line comment instead.

It's not quite as simple as wrapping a visual selection in the comment syntax, however. It'll try to wrap a given element, so if you've got nested elements they'll be included in the comment. The commands for this are `ElementComment` and `ElementUncomment`.

It comes with some built-in mappings:

* `tc`: ElementComment
* `tu`: ElementUncomment
* `tC`: TagComment
* `tU`: TagUncomment

I've noticed people like shortcuts for commenting code. I prefer to just delete code myself, but it depends on how you work.
