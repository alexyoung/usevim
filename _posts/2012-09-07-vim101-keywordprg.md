---
layout: post
title: "Vim 101: External Help"
author: Alex Young
tags:
- vim101
- keywordprg
---

Vim has a built in way to look up help for keywords -- the `K` command.  Moving the cursor over a word then typing `K` will attempt to load a man page by running the `man` command in the terminal.

Many programming languages have manual systems that work in a similar way -- Ruby's `ri` and Go's `godoc` spring to mind -- Vim can support these languages by setting a custom command with `keywordprg`.

For example, the file that integrates Ruby's `ri` command (`ftplugin/ruby.vim`) uses `setlocal` to make `ri` the default keyword program:

{% highlight viml %}
if has("gui_running") && !has("gui_win32")
  setlocal keywordprg=ri\ -T
else
  setlocal keywordprg=ri
endif
{% endhighlight %}

External manual pages are opened outside of Vim, obscuring the view of the current file.  Vim's documentation suggests a way to make it open in a new window instead (under `:help find-manpage`).  By loading the `man.vim` file like this: `:runtime! ftplugin/man.vim`, typing `:Man` will open manual pages in a new window.
