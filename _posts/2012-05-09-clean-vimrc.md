---
layout: post
title: "How to Write a Cleaner vimrc"
author: "Alex Young"
tags:
- dotfiles
- vimrc
---

Writing a clean `.vimrc` comes down to taste, but there are a few things we can do to keep them tidy.

###Work Without It

There are plenty of sources of Vim tips online.  When we're busily programming away and hit a Vim configuration issue, it's only natural to find a snippet from one of these sites and paste it into `~/.vimrc`.  The problem comes when so many of these snippets have been pasted that we can't remember what they do anymore.

Vim can be loaded without a `.vimrc` by running it with `vim -u NONE`.  At this point, settings can be entered in Command-line mode, allowing some experimentation.

Alternatively, another settings file can be loaded using the same command-line switch: `vim -u ~/vimrc-new`.

###Add Comments to Each Line

Coming back to refactor an old `.vimrc` can be difficult, so always add comments to settings.  Comments are preceded with a double quote:

{% highlight viml %}
" Backspace over autoindent, line breaks, start of insert (see :help 'backspace')
set backspace=indent,eol,start
{% endhighlight %}

This also helps others follow your configuration files.  I've noticed that most of the `vimrc` files on GitHub have a lot of comments.

###Folding

![vimrc with folding](/images/posts/vimrc-folding.png)

I took a relatively complex `.vimrc`, grouped each related command, then added comments with fold markers.  This makes it easy to navigate to a section that requires modification.

Notice how the first line is `" vim:fdm=marker`.  This tells Vim to set `foldmethod` to `fold-marker`, which means comments can be used to indicate folds:

{% highlight viml %}
" Mouse {{{
set ttyfast
set ttymouse=xterm2
set mouse=a
" }}}
{% endhighlight %}

As `.vimrc` files aren't edited too often, these groups of related settings will be a lot easier to digest in the future.

###Separate Files

In [The cleanest vimrc you’ll ever see](http://yanpritzker.com/2012/01/20/the-cleanest-vimrc-youve-ever-seen/), Yan Pritzker recommends using separate files to organise related settings:

{% highlight viml %}
for f in split(glob('~/.vim/plugin/settings/*.vim'), '\n')
  exe 'source' f
endfor
{% endhighlight %}

I actually force myself to keep my settings in one file so it stops me from overcomplicating it too much, but this approach will help if you don't like the folding method.
