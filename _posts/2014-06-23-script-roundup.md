---
layout: post
title: "Script Roundup: v"
author: "Alex Young"
tags: 
- scripts
- plugins
- shell
---

###v

Oz Tiram sent in [v](https://github.com/rupa/v) which is like `z` for Vim:

> v  uses  viminfo's list of recently edited files to open one quickly no
> matter where you are in the filesystem.

He found it through this blog post: [v: Re-edit files quickly with vim](http://inconsolation.wordpress.com/2014/06/18/v-re-edit-files-quickly-with-vim/)

There's also [MRU](https://github.com/yegappan/mru) which is a pure-Vim implementation:

> The Most Recently Used (MRU) plugin provides an easy access to a list of
> recently opened/edited files in Vim. This plugin automatically stores the
> file names as you open/edit them in Vim.
>
> This plugin will work on all the platforms where Vim is supported. This
> plugin will work in both console and GUI Vim. This version of the MRU
> plugin needs Vim 7.0 and above. If you are using an earlier version of
> Vim, then you should use an older version of the MRU plugin.

It uses some autocommands to log the recently used files:

{% highlight viml %}
" MRU autocommands {{{1
" Autocommands to detect the most recently used files
autocmd BufRead * call s:MRU_AddFile(expand('<abuf>'))
autocmd BufNewFile * call s:MRU_AddFile(expand('<abuf>'))
autocmd BufWritePost * call s:MRU_AddFile(expand('<abuf>'))
{% endhighlight %}
