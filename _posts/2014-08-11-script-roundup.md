---
layout: post
title: "Script Roundup: Clickable.vim, SearchInRange"
author: "Alex Young"
tags: 
- scripts
- plugins
- mouse
---

###Clickable.vim

I have this in my `.vimrc`:

{% highlight text %}
set ttyfast
set ttymouse=xterm2
set mouse=a
{% endhighlight %}

Combined with this in `.tmux.conf`:

{% highlight text %}
set -g mode-mouse on
set-option -g mouse-select-pane on
set-option -g mouse-select-window on
set-option -g mouse-resize-pane on
{% endhighlight %}

It means I can resize panes and navigate with the mouse.  I don't use it very often, but it can be a nice surprise when people pair program with me and realise my console setup isn't as hard to learn as they expected.

[Clickable.vim](http://www.vim.org/scripts/script.php?script_id=5000) (GitHub: [Rykka / clickable.vim](https://github.com/Rykka/clickable.vim)) by Rykka makes more things accessible to the mouse.  It makes folding, links, and files work, which means clicking a file opens a new buffer.

You can add more clickable file types with `g:clickable_filetypes` and it also supports extensions with `g:clickable_extensions`.

###SearchInRange

[SearchInRange](http://www.vim.org/scripts/script.php?script_id=4997) by Ingo Karkat limits searches to a range:

> Vim can limit the scope of searches to the remainder of the buffer with the
> `'wrapscan'` option, but it cannot limit searches to a particular range, other
> than by including special regular expression atoms like `/\%l`. It's not easy
> to restrict a search to the current function, or next 100 lines, even though
> such is often useful to avoid getting lost in the buffer.

`:[range]SearchInRange` searches forward for the current search pattern, and supplying a pattern will start a new forward search.  There are also shortcuts on `gor` and `goR`, which stands for "go once to special match".
