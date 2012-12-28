---
layout: post
title: "Vim 101: runtimepath"
author: "Alex Young"
tags: 
- vim101
- runtimepath
---

Vim looks for scripts and documentation in various directories, both in your home directory and system-wide.  This is controlled by the `'runtimepath'` option.

Depending on your system, the `'runtimepath'` option will be set to several paths, separated by commas.  Typing `:set runtimepath?` will display it.  At the end of this list should be some 'after' directories:

{% highlight text %}
runtimepath=~/.vim,/var/lib/vim/addons,/usr/share/vim/vimfiles,/usr/share/vim/vim72,/usr/share/vim/vimfiles/after,/var/lib/vim/addons/after,~/.vim/after
{% endhighlight %}

Typing `:help 'rtp'` will show documentation that includes a list of every type of file that Vim searches for, as well as the standard locations.

There is also a `:runtime` command, which will load files (like plugins) based on the `'runtimepath'`.

Finally, there's also `$VIMRUNTIME`.  This is used to locate the documentation and plugins that ship with Vim.  It's not actually necessary to define it in your shell -- Vim has a default and a strategy for figuring it out when necessary.

### Relationship to Pathogen and Vundle

If you use [Pathogen](http://www.vim.org/scripts/script.php?script_id=2332), you may have noticed that the author refers to it as a `'runtimepath'` manager.  There's a good reason for this: it modifies the `'runtimepath'` to include each directory within your "bundle" directory to make plugins easier to manage.  If you're using Pathogen you'll see a lot of `~/.vim/bundle` directories when typing `:set runtimepath`.

Although [Vundle](https://github.com/gmarik/vundle) works differently to Pathogen, it also manages the runtime path of installed scripts.

Most beginners discover Pathogen or Vundle and realise they make managing plugins easier, but don't fully appreciate the relevance of `'runtimepath'` management.  Now you should be able to understand a little bit about why this is useful.
