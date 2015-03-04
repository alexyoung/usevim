---
layout: post
title: "Emacs in Neovim"
author: "Alex Young"
tags: 
- neovim
- terminal
- emacs
---

There's a pull request on the [neovim / neovim](https://github.com/neovim/neovim) project that adds [libvterm](http://www.leonerd.org.uk/code/libvterm/).  This library is a C implementation of a terminal emulator that provides callbacks for drawing, so Thiago de Arruda has hooked into it and displays the output from within Neovim.

That means you can get a full terminal by typing `:terminal`.  It's even capable of running Emacs.  There's even a video of this on YouTube: take a look at [Emacs running in Neovim by Justin M. Keyes](https://www.youtube.com/watch?v=xZbMVj9XSUo).

I found this on [reddit/r/vim](https://www.reddit.com/r/vim/) under [Emacs running in Neovim](https://www.reddit.com/r/vim/comments/2xlz3s/emacs_running_in_neovim/).  Besides the obvious Emacs/Vim jokes, people seemed genuinely impressed.  If this ships in Neovim it'll mean we have to completely rewrite all of our "Vim as an IDE" posts!
