---
layout: post
title: "Local Settings"
author: "Alex Young"
tags: 
- dotfiles
- source
---

If you're like me then you have a centralised repository for Vim's settings.  There are situations, however, where local settings are required.  For example, I may want subtly different settings when working on files on a server, but still want to load my preferred `.vimrc` as well.

One way to solve this that I've seen used in [dotfiles on GitHub](https://github.com/lungu/dotfiles/blob/master/vim/vimrc) is to `source` a "local" settings file:

{% highlight viml %}
if filereadable('~/.vim/local.vim')
  so ~/.vim/local.vim
endif
{% endhighlight %}

This snippet can be placed in your centralised `.vimrc`, and then machines or accounts that require tailoring can be supported by creating a suitable `~/.vim/local.vim` file.  In the other cases where this isn't required, `filereadable` is used to prevent loading a non-existent file.

This concept can be extended to support project-specific configuration by checking for a settings file in the current directory:

{% highlight viml %}
if filereadable('.local.vim')
  so .local.vim
endif
{% endhighlight %}

There are plugins that implement more elegant versions of this, including [localvimrc](http://www.vim.org/scripts/script.php?script_id=441) by Markus Braun.
