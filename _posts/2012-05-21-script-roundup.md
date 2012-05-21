---
layout: post
title: "Script Roundup: vmark.vim, Jacinto"
author: "Alex Young"
tags: 
- plugins
- scripts
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###vmark.vim

![vmark.vim: Visual Bookmarking](/images/posts/vmark.png)

[vmark.vim](http://www.vim.org/scripts/script.php?script_id=4076) (GitHub: [vim-scripts / vmark.vim--Visual-Bookmarking](https://github.com/vim-scripts/vmark.vim--Visual-Bookmarking)) by Michael Zhou is a visually-oriented bookmarking system where lines can be bookmarked in normal mode.

The foreground and background colours are configurable, so if it doesn't quite work with your colours it's easy to adapt it.

###Jacinto

[Jacinto](https://github.com/alfredodeza/jacinto.vim) (License: _MIT_) by Alfredo Deza is a JSON formatter and validator.  Typing `:Jacinto validate` will validate the current buffer.  Validation works using `python -m json.tool`, so a working Python installation is required for validation, but the rest of the plugin is VimL.
