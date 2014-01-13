---
layout: post
title: "Script Roundup: ag.vim, WakaTime"
author: "Alex Young"
tags: 
- scripts
- plugins
- searching
---

###ag.vim

Someone known as "sw dev" replied to the Usevim Feedburner email with [ag.vim](https://github.com/rking/ag.vim), a fork of ack.vim which has been adapted to work with [The Silver Searcher](https://github.com/ggreer/the_silver_searcher).

It's possible to continue to use ack.vim with `ag` installed, but ag.vim supports the features `ag` has that `ack` doesn't.  If you look at the [ag.vim documentation](https://github.com/rking/ag.vim/blob/master/doc/ag.txt), you'll see the extended options that it supports.

###WakaTime

[WakaTime](https://www.wakati.me/) is a time tracking service [that has Vim support](https://www.wakati.me/help/plugins/vim) (GitHub: [wakatime / vim-wakatime](https://github.com/wakatime/vim-wakatime)).  Once you've installed it time will be tracked automatically -- the current project is derived from Git.  You can also sign in at WakaTime to configure how projects are recognised.

The Vim support is provided by Python plugin, so technically many editors can work with WakaTime.  There are also plugins for Emacs and Sublime.
