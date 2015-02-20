---
layout: post
title: "Five Time-Saving Vim Tricks"
author: "Alex Young"
tags: 
- vimrc
---

Benjamin Klein, who wrote [The VimL Primer](https://pragprog.com/book/bkviml/the-viml-primer), recently published a blog post entitled [Save time in Vim NOW with these five weird tricks](http://blog.unixphilosopher.com/2015/02/five-weird-vim-tricks.html).  I was looking for one weird trick, so I was very happy to receive five weird tricks.  Anyway, one of them is about switching windows with `CTRL` and then a direction (`hjkl`), which saves a key press.

This is what the mapping looks like:

{% highlight text %}
noremap &lt;c-j&gt; &lt;c-w&gt;j
noremap &lt;c-k&gt; &lt;c-w&gt;k
noremap &lt;c-l&gt; &lt;c-w&gt;l
noremap &lt;c-h&gt; &lt;c-w&gt;h
{% endhighlight %}

I've accidentally enabled this before when I've tried out `.vimrc` files from GitHub, or those Vim plugin packs aimed at beginners.  For some reason I've never got used to it, I don't know if pressing `CTRL` and then a key with the right-hand just feels weird to me or what, but I find it tricky.

In the comments, "syath" recommends combining the mappings with [Vim Tmux Navigator](https://github.com/christoomey/vim-tmux-navigator).  This allows you to navigate between Vim and tmux panes... painlessly.  It requires tmux version 1.8 or higher, so you might want to update your packages if it doesn't seem to work.
