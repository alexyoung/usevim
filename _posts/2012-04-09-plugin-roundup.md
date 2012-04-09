---
layout: post
title: "Plugin Roundup: Clam, Vroom.vim, Gist.vim"
author: "Alex Young"
tags: 
- plugins
- github
- gist
- ruby
- testing
---

###Clam

[Clam](http://www.vim.org/scripts/script.php?script_id=4000) (GitHub: [sjl / clam.vim](https://github.com/sjl/clam.vim), License: _MIT/X11_) by Steve Losh makes running shell commands on buffers extremely convenient.  He's made a [screencast of Clam](http://www.screenr.com/2Z18) so you can see how to use it, but basically buffers can be piped through shell commands and the contents replaced.

It doesn't _sound_ revolutionary, but the screencast sold me on it.

###Vroom.vim

[Vroom.vim](http://www.vim.org/scripts/script.php?script_id=3995) (GitHub: [skalnik / vim-vroom](https://github.com/skalnik/vim-vroom), License: _MIT_) by Mike Skalnik helps run Ruby tests.  The current test file can be run with `<Leader>r`, or the _nearest_ test can be run with `<Leader>R`.

###Gist.vim

[Gist.vim](http://www.vim.org/scripts/script.php?script_id=2423) (GitHub: [mattn / gist-vim](https://github.com/mattn/gist-vim), License: _BSD_) by Yasuhiro Matsumoto makes creating GitHub Gists extremely easy.  Typing `:Gist` will create a Gist with the current buffer; private Gists can be created by adding the `-p` argument.

Gists can also be listed, fetched, forked, and otherwise manipulated.  Yasuhiro has included lots of examples in both the project's readme and the plugin's documentation.
