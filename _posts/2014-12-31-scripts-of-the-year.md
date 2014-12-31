---
layout: post
title: "Scripts of 2014"
author: "Alex Young"
tags: 
- scripts
- plugins
- games
- json
- whitespace
---

I've been going over the Script Roundup posts of 2014 to find the things that I still use, enjoyed trying out, or had the most GitHub stars.  People have 

###Textabyss

[Textabyss](http://www.vim.org/scripts/script.php?script_id=4835) by Liang Li is a plugin for panning around lots of files.  It organises files into columns, and allows you to scroll through columns quickly using the mouse.  It's a unique idea that's best explained [in a video](http://www.youtube.com/watch?v=QTIaI_kI_X8).

###Better Whitespace

[Better Whitespace](http://www.vim.org/scripts/script.php?script_id=4859) (GitHub: [ntpeters / vim-better-whitespace](https://github.com/ntpeters/vim-better-whitespace)) by Nate Peterson is a plugin for highlighting trailing whitespace.

> Whitespace for the current line will not be highlighted while in insert mode. It is possible to disable current line highlighting while in other modes as well (see options below). A helper function :StripWhitespace is also provided to make whitespace cleaning painless.

Once it's installed you can toggle whitespace with `:ToggleWhitespace`, or even just toggle the current line with `:CurrentLineWhitespaceOff`.

###jdaddy.vim

[jdaddy.vim](http://www.vim.org/scripts/script.php?script_id=4863) (GitHub: [tpope / vim-jdaddy](https://github.com/tpope/vim-jdaddy), License: _MIT_) by Tim Pope is a set of useful mappings for working with JSON.

`aj` is a text object for the outermost JSON object, and `gqaj` pretty prints the JSON under the cursor.  There's also `gwaj`, which merges JSON from a register into the outermost JSON object.

There are more features that are documented in [doc/jdaddy.txt](https://github.com/tpope/vim-jdaddy/blob/master/doc/jdaddy.txt).  The source itself is interesting -- there's a [parse function](https://github.com/tpope/vim-jdaddy/blob/master/autoload/jdaddy.vim#L115) that uses some monster regular expressions.

###t9md

[t9md's GitHub profile](https://github.com/t9md?tab=repositories) has some cool Vim projects.  One that I like is [vim-choosewin](https://github.com/t9md/vim-choosewin), a tmux-inspired window numbering system.

###v

[v](https://github.com/rupa/v) is like `z` for Vim:

> v  uses  viminfo's list of recently edited files to open one quickly no
> matter where you are in the filesystem.
>
> By default, it will open the most recently edited file matching all of
> the provided regular expressions.

###rogue.vim

![Rogue.vim](/images/posts/roguevim.png)

[Rogue.vim](http://www.vim.org/scripts/script.php?script_id=5017) (GitHub: [katono / rogue.vim](https://github.com/katono/rogue.vim), License: _MIT_) by Kato Noriaki is a Vim implementation of the game Rogue.  It requires Lua-enabled Vim, which I installed with `brew install vim --with-lua`.

If you don't already know, Rogue uses `hjkl` for movement, so it's a great excuse to play a game while practising essential Vim skills.  This version includes lots of useful stuff, like the Rogue man page, guide, and also documentation for rogue.vim itself.

There are other Vim Rogue-likes, but this is the most complete version that I've seen.

###vim-lambdify

Some languages make heavy use of lambdas to the point that you may like to fold them.  [vim-lambdify](http://www.vim.org/scripts/script.php?script_id=5021) (GitHub: [calebsmith / vim-lambdify](https://github.com/calebsmith/vim-lambdify)) by Caleb Smith is a plugin that conceals lambdas and inline functions with a lambda character.

It supports Python, JavaScript, and Scheme.  It works by replace text for display, but not when the file is saved:

> Plugins such as vim-haskellConceal and vim-cute-python use this to replace many different things with more pithy/mathy symbols. The approach taken here is to replace only lambdas, but to do so for many different languages to avoid having to use many plugins for a single feature.

I imagine this would look really cool in functional languages if you use the &lambda; character.

###smartpairs

smartpairs (GitHub: [gorkunov / smartpairs.vim](https://github.com/gorkunov/smartpairs.vim), License: _wtfpl_) by Alexander Gorkunov is a plugin for visually selecting ranges based on brackets or quotes, without needing to type the brackets or quotes.  So rather than `vi{` you can type `viv` -- the last `v` will cause the plugin to search for the pair of the symbol under the cursor.  It's a nice tweak to the existing behaviour that seems easy to learn.
