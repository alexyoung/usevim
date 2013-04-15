---
layout: post
title: "Script Roundup: vim-signify, vim-redl"
author: "Alex Young"
tags: 
- plugins
- git
- signs
- clojure
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###vim-signify

![Sy](/images/posts/signify.png)

[vim-signify](http://www.vim.org/scripts/script.php?script_id=4487) (GitHub: [mhinz / vim-signify](https://github.com/mhinz/vim-signify), License: _Vim_), or Sy, by Marco Hinz, uses signs to show linewise changes in a file.  It works with lots of version control systems: git, mercurial, darcs, bazaar, subversion, cvs, and rcs (phew!).  It's configurable, and has some clever navigation features -- `g:signify_mapping_next_hunk` and `g:signify_mapping_prev_hunk` can be set to jump between changed lines.

Other options allow the sign colours to be changed, and the plugin can be toggled per-buffer.

It also has a cool figlet banner in the help file.  What's not to like?!

###vim-redl

vim-redl (GitHub: [dgrnbrg / vim-redl](https://github.com/dgrnbrg/vim-redl), License: _Vim_) provides another option for Clojure and Vim integration:

> This plugin integrates Vim with a running Clojure JVM. It provides a repl that supports breakpoints, documentation lookup, source code navigation, and omnicompletion.

It also includes a [debug repl](https://github.com/dgrnbrg/redl#debug-repl), which allows `break` to be called.  The omnicompletion is cool, but requires redl to be loaded in the connected JVM instance, so make sure you've got everything setup properly before getting mad at it.
