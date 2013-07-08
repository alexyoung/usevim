---
layout: post
title: "Script Roundup: GitHub Dashboard, presenting.vim"
author: "Alex Young"
tags: 
- plugins
- presentations
- git
- github
---

###GitHub Dashboard

![GitHub Dashboard](/images/posts/vim-github-dashboard.jpg)

[vim-github-dashboard](http://www.vim.org/scripts/script.php?script_id=4635) (GitHub: [junegunn / vim-github-dashboard](https://github.com/junegunn/vim-github-dashboard), License: _MIT_) by Junegunn Choi is a GitHub event browser.  It can display your dashboard, a specific user's activity, or the activity for a repository.

It needs the `json_pure` Ruby gem, and Ruby support in Vim.  The author has provided installation instructions for Mac OS X, Windows, and Ubuntu.

###presenting.vim

[presenting.vim](http://www.vim.org/scripts/script.php?script_id=4653) (GitHub: [sotte / presenting.vim](https://github.com/sotte/presenting.vim)) by Stefan Otte is a plugin for displaying presentations inside Vim.  Presentations come in a single file, and can be written in one of three formats: Markdown, rst, or orgmode.

Typing `:StartPresenting` will begin a presentation, and there are keyboard shortcuts for navigating between slides.

I've seen a few talks given by programmers using Vim -- some simply show text inside Vim without a plugin specific to presentations, others flip between Vim and more traditional slides.  This seems useful because it allows you to write your presentation anywhere with Markdown, and the author has included documentation that encourages the extension of the plugin.
