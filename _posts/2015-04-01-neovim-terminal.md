---
layout: post
title: "Neovim Terminal PR Merged"
author: "Alex Young"
tags: 
- neovim
- terminal
---

The pull request to add a terminal emulator to Neovim has been [merged into master](https://github.com/neovim/neovim/commit/a6e53a3797a93fe060f807fe2e4c6361854b6c97).  That means you can now use a terminal from within Neovim!

![nvim terminal](/images/posts/nvim-term.png)

There are several ways to start a "terminal buffer", one is to open a file that starts with `term://`.  For example, `:e term://zsh`.  You can send input to the terminal by entering Insert mode -- Neovim just forwards key presses to the terminal process.

To exit the terminal buffer, type `C-\ C-n`.  This took me a while to get used to, so I might look into changing it.  The terminal doesn't exit until you explicitly quit it.  On my computer this currently throws a `malloc` error, so the feature doesn't seem entirely stable quite yet.  However, it has the potential to change the way we work with Vim so it's still very impressive.

The terminal buffer also gets its own key bindings with `:tnoremap`, so plugin authors will undoubtedly find ways to extend this feature.

If you use a Mac and homebrew, the easiest way to get this going is `brew tap neovim/homebrew-neovim` and `brew install neovim --HEAD`.
