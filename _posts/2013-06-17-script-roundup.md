---
layout: post
title: "Script Roundup: vim-origami, vim-c-cr"
author: "Alex Young"
tags: 
- plugins
- folds
- mappings
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###Origami

[Origami](http://www.vim.org/scripts/script.php?script_id=4613) (GitHub: [kshenoy / vim-origami](https://github.com/kshenoy/vim-origami), License: _MIT/X11) by Kartik Shenoy is a plugin for working with folds.  It can align foldmarkers, insert start and end foldmarkers, and more.

The default mappings are all prefixed with `<Leader>`.  For example, `<Leader>zax` aligns all folds at level _x_, and `<Leader>ze`   deletes the current foldmarker.

###vim-c-cr

vim-c-cr (GitHub: [jtmkrueger / vim-c-cr](https://github.com/jtmkrueger/vim-c-cr)) by John Krueger remaps `CTRL-Enter` and `CTRL-C` to add new behaviour for working with brackets.  Positioning the cursor over `{`, `[`, or `(` and hitting `CTRL-Enter` will cause Vim to insert two new lines, with the corresponding closing bracket on the second line.

