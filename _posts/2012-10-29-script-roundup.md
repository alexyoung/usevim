---
layout: post
title: "Script Roundup: vim-signature, vim-foldsearch"
author: "Alex Young"
tags: 
- plugins
- folding
- marks
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vim-signature

[vim-signature](http://www.vim.org/scripts/script.php?script_id=4118) (GitHub: [kshenoy / vim-signature](https://github.com/kshenoy/vim-signature)) by Kartik Shenoy can display marks and help navigate between them.  This is similar to vim-showmarks, but removes the delay between setting and displaying marks, and adds navigate features inspired by mark-tools.  It can also display multiple marks.

###vim-foldsearch

[vim-foldsearch](http://www.vim.org/scripts/script.php?script_id=2302) (GitHub: [embear / vim-foldsearch](https://github.com/embear/vim-foldsearch), License: _GPL_) by Markus Braun can fold lines based on a search pattern.  This can be the word under the cursor, the last search pattern, a regular expression, or spelling errors.

The documentation includes suggested leader mappings, but the commands are easy to remember.  Each command is two characters and starts with a `F`.  For example, `:Fp <pattern>` will show lines matching `<pattern>`.
