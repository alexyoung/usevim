---
layout: post
title: "Plugin Roundup: Headlights, vim-slime, xsnippet"
author: "Alex Young"
tags: 
- plugins
- slime
- bundles
---

###Headlights

![Headlights](/images/posts/headlights_ss.png)

[Headlights](http://www.vim.org/scripts/script.php?script_id=3455) (GitHub: [mbadran / headlights]) by Mohammed Badran adds a `Bundles` menu to Vim, displaying the installed plugins and the features they provide.  It's inspired by [TextMate](http://macromates.com/)'s Bundles menu, and includes a handy search dialog for Mac OS:

> Hit `CMD-?` to bring up a search dialog for menu items, then type `fugitive` open to reveal the `fugitive.vim` file as the first result.

###vim-slime

In [vim-slime](http://tarnbarford.net/journal/vimslime), a blog post by Tarn Barford, the author discusses his experiences using [vim-slime](https://github.com/jpalardy/vim-slime) and how it helps him work with Clojure.

> Text can be sent from any process to the stdin of a gnu screen or tmux session. The process in this case is vim and the screen/tmux session is a terminal.

###xsnippet

[xsnippet](http://www.vim.org/scripts/script.php?script_id=3903) (GitHub: [bloodeclipse / vim-xsnippet](https://github.com/bloodeclipse/vim-xsnippet), License: _GNU GPL v3_) by Roman Podolyaka is an easy way to post code to the [xsnippet](http://www.xsnippet.org/) service (also created by Roman).

Running `:call PostToXsnippet()` will post the contents of the current buffer to the service, and put the resulting URL in the clipboard.
