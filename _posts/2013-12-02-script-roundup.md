---
layout: post
title: "Script Roundup: vim-vertical-move, npm.vim"
author: "Alex Young"
tags: 
- plugins
- motions
- javascript
---

###vim-vertical-move

vim-vertical-move (GitHub: [bruno- / vim-vertical-move](https://github.com/bruno-/vim-vertical-move), License: _MIT_) by Bruno Sutic adds vertical movement motions.  You can move the cursor to the point where a column change would be required.  Bruno's example shows him editing quoted URLs in CSS, where he uses `f'<Ctrl>V,]f'` to do the following:

* `f'`: Move to the first quote
* `CTRL-v`: Enter Visual mode, blockwise
* `,]`: Move down to the last column
* `f'`: Move to the next column that contains `'`

This causes a set of image URLs to be replaced with a new relative URL.

###npm.vim

[npm.vim](http://www.vim.org/scripts/script.php?script_id=4783) (GitHub: [oinksoft / npm.vim](https://github.com/oinksoft/npm.vim), License: _MIT_) adds support for [npm](https://npmjs.org/) to Vim.  Once it's installed you can use `:Npm` to install and manage modules.  It even supports tab completion!

