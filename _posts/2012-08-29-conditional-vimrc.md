---
layout: post
title: "Conditional Executables"
author: "Alex Young"
tags:
- dotfiles
- vimrc
- viml
---

If you're one of the growing number of people who synchronises their dotfiles using a service like GitHub, then you've probably found that certain systems need different configuration options.  For example, if you switch between Mac OS and Linux then some executables won't be present on both.

Vim provides a few ways to mitigate this, and one of the best is the `executable` function.  By using this function, you can make your `.vimrc` adapt to the system.

I use this to conditionally use `ack` instead of `grep` if it's available:

{% highlight viml %}
if executable("ack")
  set grepprg=ack\ -H\ --nogroup\ --nocolor
endif
{% endhighlight %}

I don't really care if `ack` hasn't been installed, so my `grep` commands will still run whether it's present or not.  This is great when you want to drop dotfiles on something like a shell account or virtual machine that you use infrequently.
