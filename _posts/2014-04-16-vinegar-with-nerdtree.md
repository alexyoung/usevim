---
layout: post
title: "Use Vinegar with NERDTree"
author: "Alex Young"
tags: 
- scripts
- plugins
- nerdtree
---

I use [Tim Pope's vinegar.vim](https://github.com/tpope/vim-vinegar), which shows a file list whenever `-` is pressed.  I don't use project drawers anymore, and for some background on why you should check out [Oil and vinegar - split windows and the project drawer](http://vimcasts.org/blog/2013/01/oil-and-vinegar-split-windows-and-project-drawer/).

If you agree with that article, but still like the way NERDTree handles files, you could compromise with [Dhruva Sagar's fork of vinegar.vim](https://github.com/dhruvasagar/vim-vinegar).  This triggers NERDTree whenever `-` is pressed instead of the built-in `netrw`.

I found this fork in [Why does NerdTree exist? What's wrong with netrw?](http://www.reddit.com/r/vim/comments/22ztqp/why_does_nerdtree_exist_whats_wrong_with_netrw/) on reddit, where Dhruva said:

> IMHO NERDTree has a much cleaner API. Manipulating the tree is a lot saner using NERDTree than Netrw. Although I too agree to this vimcast, and since I like nerdtree better, I have my own fork of vinegar

