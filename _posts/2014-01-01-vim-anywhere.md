---
layout: post
title: "vim-anywhere"
author: "Alex Young"
tags: 
- mac
- linux
---

[vim-anywhere](https://github.com/cknadler/vim-anywhere) by Chris Knadler is a set of scripts that allow you to invoke Vim for anything that lets you input text.  That means the next time you're filling out an annoying web form you can spawn Vim, write your text, then once you save and quit it'll be inserted into the field.

On a Mac that means you'll need MacVim, and you'll also have to set up a shortcut to an Automator workflow.  This is all explained in the readme with a screenshot and illustrative gif.

For Linux, you'll need Gnome and gVim.  If you run the installation script Linux users will automatically get a keyboard shortcut set up, but Mac users will need to set this manually.

I've seen similar things before, where an editor is invoked and a temporary file is used to prepare text for a GUI control.  The thing I like about this project is it's well documented and has cross-platform support.
