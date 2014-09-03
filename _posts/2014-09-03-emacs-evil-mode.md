---
layout: post
title: "Emacs Evil Mode and SLIME"
author: "Alex Young"
tags: 
- videos
- emacs
- vim
---

I've recently seen people using Vim plugins in just about every editor: Visual Studio, [WebStorm](http://www.jetbrains.com/webstorm/), [Atom](https://atom.io/), Sublime, and Emacs.  Emacs seem to appeal to a particular type of programmer: experimenters who try out lots of languages only to find Lisp strangely rewarding.

Lisp programmers like Emacs because of [SLIME](http://common-lisp.net/project/slime/).  This is basically an editor mode dedicated to developing Lisp applications.  You can quickly evaluate selections of code or the whole file, inspect values, skip to files based on stacktraces, and restart programs.  It really gives you a feeling of being able to accurately work with parts of large, complex programs without treating them as impenetrable monoliths.

For an introduction to SLIME, take a look at [the SLIME chapter in Lisp: Outside the Box](http://lisp-book.org/contents/chslime.pdf).

Why am I telling Vim fans about Emacs and SLIME?  Well, there are Vim equivalents.  This has partly come about due to a Lisp renaissance inspired by Clojure programmers.  [fireplace.vim](https://github.com/tpope/vim-fireplace) allows you to evaluate from a buffer, and navigate through code and documentation.

But you can also go the other way: [Evil](http://www.emacswiki.org/emacs/Evil) is a "vi layer" for Emacs.  There are even [ports of popular Vim plugins](http://www.emacswiki.org/emacs/Evil#toc5).  I think Evil might be the gateway drug to Emacs for Vim users who love Lisp, because it's a well written project with detailed documentation, and gives you the "native" Lisp power Emacs has baked in.

And, even if you stick with Vim as your main editor, you might learn something by seeing what Emacs is good at.  I've enjoyed reading [What are the pros and cons of Vim and Emacs?](http://unix.stackexchange.com/questions/986/what-are-the-pros-and-cons-of-vim-and-emacs) about this very subject.
