---
layout: post
title: "Beginner's Guide to Beginner's Guides"
author: "Alex Young"
tags: 
- plugins
- vundle
- pathogen
---

Earlier this week I wrote [Beginner's Guide to Unite](http://usevim.com/2013/06/19/unite/), which was an attempt to demystify the popular [Unite](http://www.vim.org/scripts/script.php?script_id=3396) plugin.  I noticed people grumbling on [Reddit](http://www.reddit.com/r/vim/comments/1go3ei/beginners_guide_to_unite/) that it didn't contain any installation instructions.

I've written a little bit about working with plugin managers before:

* [Using Pathogen with Git Submodules](http://usevim.com/2012/03/01/using-pathogen-with-git-submodules/)
* [Vim 101: Using Vundle and Pathogen in Windows](http://usevim.com/2012/10/12/vim101-windows/)

The Windows-specific post came out of a series of articles on Windows and Vim.  So, what are plugin managers, why are they needed, and how are plugins installed?

###Installing Vim Plugins

One does not simply walk into Mordor and install a Vim plugin.  The thing about plugins is they're usually bundles of lots of different subdirectories that Vim expects to be copied to the correct place.  Plugins can consist of plugin files, which go in `~/.vim/plugin`, syntax files which go in `~/.vim/syntax`, autoload files which go in... you get the idea.  Plugins have multiple files and directories and installing them is a giant pain.

You're probably thinking: "but that sucks, I just want to quickly try out a plugin to see what it does!  I don't want to mess up `~/.vim` all the time!"

Exactly, and that's why plugin managers were created.

###Plugin Managers

All plugin managers really do is manipulate `'runtimepath'`.  I've written about this before in [Vim 101: runtimepath](http://usevim.com/2012/12/28/vim-101-runtimepath/), so go there to read about what exactly _that_ means.

There are two main popular plugin managers: [Pathogen](https://github.com/tpope/vim-pathogen) and [Vundle](https://github.com/gmarik/vundle).  I find Pathogen works best if you're happy with Git submodules, and Vundle works well if you want want to list your plugins in `.vimrc`.

If you sync your dotfiles with Git and don't mind messing around with submodules, check out Pathogen, otherwise get Vundle.  Both have excellent documentation and are easier to learn than manually copying files to `~/.vim`.

Also worth mentioning is [NeoBundle](https://github.com/Shougo/neobundle.vim), which is another plugin manager that's gaining popularity created by the author of [Unite](https://github.com/Shougo/unite.vim).

###Summary

I'm not going to teach you how to use Vundle or Pathogen here -- read their documentation on GitHub and try them out.  I've used both of them a lot since they were released... they definitely help me out writing and researching material for this blog!
