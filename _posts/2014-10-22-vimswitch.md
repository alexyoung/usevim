---
layout: post
title: "Switch Settings with VimSwitch"
author: "Alex Young"
tags: 
- scripts
- config
---

[VimSwitch](https://priomsrb.github.io/vimswitch/) (GitHub: [priomsrb/vimswitch](https://github.com/priomsrb/vimswitch), License: _GPL_) is a Python program that can change Vim's settings based on a GitHub repository.  That means you can switch to a totally different setup like this:

{% highlight text %}
./vimswitch amix/vimrc
{% endhighlight %}

Why would you want to do that?  I'd probably use it to try out someone else's vimrc from GitHub, particularly if I wanted to write about a set of dotfiles that's suddenly getting hundreds of stars on GitHub.  It may also be useful if you regularly ssh into new servers, or Vagrant virtual machines.

