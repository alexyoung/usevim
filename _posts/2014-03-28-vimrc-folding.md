---
layout: post
title: "Folding a vimrc"
author: "Alex Young"
tags:
- dotfiles
- vimrc
---

![vimrc with folding](/images/posts/vimrcfolding.png)

Something that surprises people when they see my `.vimrc` is the fact I use folding to keep it tidy.  Because it's a Vim-specific file, I don't mind having a modeline at the top that ensures folding is enabled by default: `" vim:fdm=marker`.  This sets `foldmethod` to `foldmarker` so comments can define folds:

{% highlight viml %}
" Mouse {{{
set ttyfast
set ttymouse=xterm2
set mouse=a
" }}}
{% endhighlight %}

My `.vimrc` is 109 lines, which I think is way too long, but even if it was shorter I'd probably still use folds to organise it.

I currently use Vundle, and I like to periodically run `:BundleInstall` and to make sure the plugins I'm using are current.  I've had cases where repositories have moved, which meant every time I did anything with Vundle like adding a new plugin I'd get errors.

It's a good idea to keep your plugins updated -- Vundle displays a nice changelog after updates as well, which is usually fairly readable.

If you want to read more about curating your `.vimrc`, take a look at [How to Write a Cleaner vimrc](http://usevim.com/2012/05/09/clean-vimrc/) which I wrote back in 2012.
