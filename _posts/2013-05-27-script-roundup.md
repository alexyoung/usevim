---
layout: post
title: "Script Roundup: vim-neatstatus"
author: "Alex Young"
tags: 
- plugins
- statusbar
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###vim-neatstatus

[Powerline](https://github.com/Lokaltog/powerline) is a popular solution for pimping out Vim and tmux, but sometimes you just want something simple you can easily hack.  [vim-neatstatus](http://www.vim.org/scripts/script.php?script_id=4587) (GitHub: [maciakl / vim-neatstatus](https://github.com/maciakl/vim-neatstatus)) by Lukasz Grzegorz Maciak is just the thing -- it has a clear, colour changing mode indicator, and various bits of metadata about the current file.

To hook into mode changes, neatstatus adds autocommands to `InsertEnter`, `InsertChange`, and `InsertLeave`.  It then sets the statusline by setting `stl`.  Everything is broken into functions so it's easy to see how it works.  In fact, if you want to customise your statusline without relying on something like Powerline, then you could use [this as a template](https://github.com/maciakl/vim-neatstatus/blob/master/plugin/neatstatus.vim) -- I did something similar for my tmux settings.
