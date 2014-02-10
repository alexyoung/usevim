---
layout: post
title: "Script Roundup: Better Whitespace, vim-stdtabs"
author: "Alex Young"
tags: 
- scripts
- plugins
- whitespace
---

###Better Whitespace

I spent ages fiddling with my vimrc to get whitespace displayed just the way I wanted.  It was awkward because some of the UTF-8 symbols I wanted to use didn't reproduce properly on all of the terminals and systems that I use.  A time saving alternative might have been [Better Whitespace](http://www.vim.org/scripts/script.php?script_id=4859) (GitHub: [ntpeters / vim-better-whitespace](https://github.com/ntpeters/vim-better-whitespace)) by Nate Peterson, a plugin for highlighting trailing whitespace.

> Whitespace for the current line will not be highlighted while in insert mode. It is possible to disable current line highlighting while in other modes as well (see options below). A helper function :StripWhitespace is also provided to make whitespace cleaning painless.

Once it's installed you can toggle whitespace with `:ToggleWhitespace`, or even just toggle the current line with `:CurrentLineWhitespaceOff`.

###vim-stdtabs

[vim-stdtabs](http://www.vim.org/scripts/script.php?script_id=4858) (GitHub: [sdanielf / vim-stdtabs](https://github.com/sdanielf/vim-stdtabs/), License: _GPL_) by Daniel Francis automatically sets the community accepted indentation style for 5 major languages and markup languages.

This fits in with my policy of doing as the Romans do, and you could easily add your own mappings by following Daniel's examples.
