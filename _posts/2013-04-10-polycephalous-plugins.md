---
layout: post
title: "Polycephalous Plugins"
author: "Alex Young"
tags: 
- plugins
- asynchronous
---

<iframe src="http://player.vimeo.com/video/63116209" width="400" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

Working in a modern command-line environment can offer several ways to manage multiple windows: Vim itself supports split windows and tabs, and many Vim users also use terminal multiplexers like tmux and GNU screen.  However, there are those of us who also use a terminal that supports split windows and tabs, like [iTerm2](http://www.iterm2.com/).

A new breed of Vim plugins can take advantage of all of these features to better support asynchronous tasks.  For example, [dispatch.vim](https://github.com/tpope/vim-dispatch) by Tim Pope is a new one that can talk to tmux, screen, and iTerm to run time-consuming tasks in the background using Vim's standard compiler plugins.  The intention is that you can asynchronously run test suites while continuing to work.

There's also [Vitality](https://github.com/sjl/vitality.vim) by Steve Losh which enables Vim to communicate with iTerm2 and tmux.

Another approach is to use terminals as the recipients of piped commands, which might suit a REPL-like workflow.  One popular plugin that does this is [tube.vim](http://www.vim.org/scripts/script.php?script_id=4400) by Giacomo Comitti.

These plugins aren't just handy for running tests, but anything that might interrupt your workflow.  Searching, even with fast tools like ack, can be relatively slow, so if you search a lot you could try one of these tools.

In case you were wondering, communicating with iTerm2 requires AppleScript, so the behaviour isn't portable.  To support other platforms, dispatch.vim is designed in a modular fashion: each supported terminal type is an "adapter," allowing platform-specific behaviour.
