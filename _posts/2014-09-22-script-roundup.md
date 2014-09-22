---
layout: post
title: "Script Roundup: vim-lambdify"
author: "Alex Young"
tags: 
- scripts
- plugins
---

###vim-lambdify

Some languages make heavy use of lambdas to the point that you may like to fold them.  [vim-lambdify](http://www.vim.org/scripts/script.php?script_id=5021) (GitHub: [calebsmith / vim-lambdify](https://github.com/calebsmith/vim-lambdify)) by Caleb Smith is a plugin that conceals lambdas and inline functions with a lambda character.

It supports Python, JavaScript, and Scheme.  It works by replace text for display, but not when the file is saved:

> Plugins such as vim-haskellConceal and vim-cute-python use this to replace many different things with more pithy/mathy symbols. The approach taken here is to replace only lambdas, but to do so for many different languages to avoid having to use many plugins for a single feature.

I imagine this would look really cool in functional languages if you use the &lambda; character.
