---
layout: post
title: "Script Roundup: MiniBufExpl, vim-github-comment"
author: "Alex Young"
tags: 
- plugins
- git
- github
- buffers
---

###MiniBufExpl Updates

Techlive Zheng sent in an update for [MiniBufExpl](http://www.vim.org/scripts/script.php?script_id=159) (GitHub: [techlivezheng / vim-plugin-minibufexpl](https://github.com/techlivezheng/vim-plugin-minibufexpl).  This is an old plugin that has passed between several authors, but continues to be popular thanks to Zheng's updates.  The most recent release is 6.5.0, which includes a lot of [bug fixes and improvements](https://github.com/fholgado/minibufexpl.vim/issues?milestone=1&page=1&state=closed).

If you haven't seen it before, MiniBufExpl adds a small bar that displays each buffer and allows buffers to be navigated.  The list looks like tabs, so it essentially makes Vim behave more like a typical GUI editor where buffers and tabs are equivalent.

###vim-github-comment

[vim-github-comment](http://www.vim.org/scripts/script.php?script_id=4631) (GitHub: [mmozuras / vim-github-comment](https://github.com/mmozuras/vim-github-comment), License: _MIT_) by Mindaugas Mozūras allows you to post a GitHub comment about the last line that was committed.  It does this by using the command-line `git` binary and `curl` to access GitHub's API.

To use the plugin, you'll need to set your GitHub username with `g:github_user`, and you can also make it open a browser at the page where the comment was posted by setting `g:github_comment_open_browser`.  For more, see the [documentation](https://github.com/mmozuras/vim-github-comment/blob/master/doc/github-comment.txt).
