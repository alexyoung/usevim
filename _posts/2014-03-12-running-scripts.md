---
layout: post
title: "Testing One-off Scripts"
author: "Alex Young"
tags: 
- scripts
- plugins
---

I was recently teaching some non-programmers Ruby, and I used TextMate 2 as the editor.  The reason I used TextMate 2 was because it's open source, easy to install, and can run Ruby programs with a quick press of `cmd-r`.

It seems like a lot of people miss this feature when they switch to Vim.  Thomas Allen wrote a post about how to write your own program execution mappings, called [Testing One-off Scripts in Vim](http://www.oinksoft.com/blog/view/6/).  The basic idea is to create a Vimscript dictionary that maps file types to command-line programs, so you can type `<C-p>` to run a script instead of `:w !python`, or the equivalent command for your programming language.

I liked Thomas's example because even though it's written with Vimscript, which is known for being inscrutable, it's easy to follow and extend.  This may help you ease yourself into Vim from your previous editor of choice.
