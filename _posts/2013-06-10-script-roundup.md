---
layout: post
title: "Script Roundup: shootingstar, thumbnail.vim"
author: "Alex Young"
tags: 
- plugins
- motion
- ui
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###shootingstar

[Shootingstar](http://www.vim.org/scripts/script.php?script_id=4616) (GitHub: [jceb / vim-shootingstar](https://github.com/jceb/vim-shootingstar), License: _Vim_) by Jan Christoph Ebersbach is based in the star command which automatically searches forward in Normal mode for the word under the cursor.  Rather than searching for the word, the plugin searches for the text fragment that begins at the cursor's location.

This is implemented using `getline()` and `match()` -- `getline()` gets the current line, which is fed through `match()` with `col('.')` which gets the byte index of the cursor.  It's a compact plugin, so you can check out the source to see how it all works.

###thumbnail.vim

![thumbnail.vim](/images/posts/thumbnail-vim.png)

Taking inspiration from Chrome's _Most visited_ tab, [thumbnail.vim](http://www.vim.org/scripts/script.php?script_id=4615) (GitHub: [itchyny / thumbnail.vim](https://github.com/itchyny/thumbnail.vim), License: _MIT_) by "itchyny" shows a preview of the text in each buffer.

Typing `:Thumbnail` displays the buffer selector in a _Scratch_ window.  Options can be supplied to change the behaviour of the new window: it supports horizontal and vertical split modes, and can open in a new tab.

You might like this plugin if you liked [vim-startify](https://github.com/mhinz/vim-startify).
