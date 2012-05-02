---
layout: post
title: "Dotfile Diving"
author: "Alex Young"
tags:
- dotfiles
- vimrc
---

I learn a lot about programming by reading open source code.  The same is true of learning Vim by reading configuration files and Vim script source.  Fortunately, since GitHub was launched with the slogan *Social Coding*, the imperative for sharing configuration files has never been stronger.  Of course, there are other code sharing sites out there, and I encourage you to try them out, but a search for "dotfiles" on GitHub alone currently yields 11,610 results.

Lots of these repositories illustrate how well-known developers use Vim, from their `.vimrc` to the scripts and syntax highlighting files they use.  Quite a few are derived from [Joe Ferris' config_files](https://github.com/jferris/config_files/blob/master/vimrc) repository.  His Vim configuration file contains a lot of keyboard shortcuts for working with Ruby on Rails projects.

[thoughtbot, inc](http://thoughtbot.com/) also has a [vimrc that leans towards Rails development](https://github.com/thoughtbot/dotfiles/blob/master/vimrc).  The thoughtbot employees also write about Vim at [robots.thoughtbot.com](http://robots.thoughtbot.com/).

Vim hacker [Tim Pope's dotfiles](https://github.com/tpope/tpope) include just about everything to simulate using his computer, it's more like the portable parts of his home directory than a curated list of configuration files.  Tim's vimrc includes lots of useful nuggets, including one of my favourites -- the `write !sudo tee %` hack:

{% highlight viml %}
command! -bar -nargs=0 SudoW   :setl nomod|silent exe 'write !sudo tee % >/dev/null'|let &mod = v:shell_error
{% endhighlight %}

It's worth spending some time exploring this huge wealth of material -- it's definitely worth the potential productivity gains.
