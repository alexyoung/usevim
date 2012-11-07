---
layout: post
title: "Repeatability"
author: "Alex Young"
tags: 
- macros
---

As I noted in my review of [Practical Vim](http://usevim.com/2012/10/31/practical-vim-review/), one of Drew Neil's most interesting tips for mastering Vim is to use repeatable commands.  What isn't repeatable?  Well, Drew's main example was using the mouse -- Vim's macros are based around text sequences, so it's impossible to record movements and selections made with the mouse.

Much like [forcing yourself to learn hjkl](http://usevim.com/2012/03/02/the-importance-of-home-keys/), disabling the mouse and using console Vim may help you learn to exploit Vim's repeatable commands.  Also, it's worth being aware of the range of commands that are repeatable.  Although `.` can be used to repeat the last change, `@:` can repeat the last command-line, and `;` will repeat the last `f` and `t` command.  When searching, `n` will move to the next match, and substitutions with `:s` can be repeated with `&`.  I covered this in [Vim 101: Repeating Commands](http://usevim.com/2012/06/01/vim101-repeating-commands/) and [Vim 101: Repeating Motions](http://usevim.com/2012/06/15/vim101-repeating-2/).

Repeating commands isn't just a clever trick, it's the basis of macros.  What we call macros are called "complex repeats" in Vim: typing `q` causes Vim to record typed characters into a register, and then pressing `q` again stops recording.  I wrote a brief introduction to this in [Vim 101: A Gentle Introduction to Macros](http://usevim.com/2012/08/10/macros/).

However, the really important thing to understand about repeatability is _when_ to use it.  Drew suggests that using `.` rather than count arguments is a great way to leverage repeatability and make editing more efficient -- but you have to get used to thinking this way.  Fortunately for us programmers, we're used to thinking about solutions to problems in generalised terms, and this is the secret to unlocking the power of repeatability.  Try to think about edits as functional units with the potential for reuse, and your Vim skills will multiply in no time.
