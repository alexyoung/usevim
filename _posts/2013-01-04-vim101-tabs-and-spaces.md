---
layout: post
title: "Vim 101: Jumping Between Files"
author: "Alex Young"
tags: 
- vim101
---

If you were born and raised on GUI editors, switching to the console and Vim feels like it lacks some of the speed of file navigation.  Vim has a lot of different ways to quickly flip between files, and one that I like is the `gf` command (`:help gf`).

When in Normal mode, typing `gf` over text that refers to a file name will cause Vim to attempt to open that file.  This is great when working with programming languages that `include` or `require` files relative to the current working directory.

By default, however, `gf` needs a little bit of assistance to find files.  Let's say you're working on a project that's written with [Node](http://nodejs.org/).  In Node, files are referred to like this:

{% highlight javascript %}
var textile = require('stextile')
  , existsSync = require('./utils').existsSync
  , exists = require('./utils').exists
  , fs = require('./graceful')
  , path = require('path')
  , jade = require('jade')
;
{% endhighlight %}

The files that start with `./` are relative to the current file.  If I move the cursor over `./utils` and type `gf`, it should open `./utils.js`, but it doesn't because Vim isn't aware that `.js` needs to be added.  To help Vim figure out the file name, `suffixesadd` (abbreviation: `sua`, help: `:help 'suffixesadd'`) can be used:

{% highlight text %}
:set suffixesadd+=.js
{% endhighlight %}

Now if I type `gf` over `require('./utils')`, Vim will open `./utils.js` as expected.

###Path

The path Vim will search can also be changed.  To view the current path, type `:set path?`.  To add a new path, type `:set path+=/path/to/includes`.  The `+=` operator will append paths rather than replacing the current value.  Type `:help 'path'` to read more about paths.

###Quickly Opening Other Files

If there's a file you want to edit and you know the name, you can type `:find filename` (abbreviation: `:fin`, help: `:help :find`) to open it.  Vim will search the `'path'` option for matching files and open one of them.  Providing a count argument causes Vim to open the next match, so `:2find file` will open the second match.

Typing `:tabfind file` (abbreviation: `:tabf`, help: `:help :tabfind`) will open the file in a new tab.

Pressing the tab key after a partially typed file name makes Vim autocomplete based on the files in `'path'`, which is great when you forget the exact name of a file.

###Summary

Getting used to `gf` and `:find` will help you flip between files, without the need for third-party plugins.  When you really can't remember file names, plugins like [ctrlp.vim](http://kien.github.com/ctrlp.vim/) and [The NERD Tree](http://www.vim.org/scripts/script.php?script_id=1658) add an extra dimension of visualisation.

