---
layout: post
title: "Script Roundup: seeks.vim, Gocode"
author: "Alex Young"
tags: 
- plugins
- scripts
- web
- completion
---

###seeks.vim

[seeks.vim](http://www.vim.org/scripts/script.php?script_id=4143) (GitHub: [sanpii / seeks.vim](https://github.com/sanpii/seeks.vim)) by Sanpi is an interface to the [Seeks.fr](http://seeks.fr/) search engine that can display results using a window inside Vim.  It's built using the [webapi-vim](https://github.com/mattn/webapi-vim) project, which supports lots of interesting web-related technologies.

###Gocode

[Gocode](https://github.com/nsf/gocode) (License: _MIT_) by "nsf" is a daemon written with [Go](http://golang.org/) that provides context-sensitive autocompletion for various editors including Vim.  It's designed to be fast, providing omni completion matching that would potentially perform quite slowly inside a typical editor:

> Typical autocompletion time with warm cache is 30ms, which is barely noticeable.
