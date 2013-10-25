---
layout: post
title: "Actual Vim in Sublime Text 3"
author: Alex Young
tags:
- sublime
- plugins
---

Here's an artefact of such unique strangeness that I had to write about it: [Actual Vim](https://github.com/lunixbochs/actualvim).  It's a Python script that acts as a bridge between [Sublime Text 3](http://www.sublimetext.com/3) and Vim.

It works like this: a hidden Vim instance is used to manipulate a buffer that Sublime Text is editing.  You interact with Sublime Text directly, but are able to use Vim commands, motions, and pretty much everything:

> It's not simply a terminal emulator embedded in a text editor. Sublime is still in control of the text buffer. You will be able to use the entire native Sublime interface while in INSERT mode, including plugins.

I took a look at the source, and it uses Python to communicate between Vim and Sublime.  Because both editors have such good APIs it's actually surprisingly lightweight and easy to follow.  Since this approach means Sublime can effectively use Vim plugins, you could potentially get the best of both worlds.  Now, if only someone had done this with Xcode...
