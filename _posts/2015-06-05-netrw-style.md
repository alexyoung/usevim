---
layout: post
title: "The netrw Style Options"
author: "Alex Young"
tags: 
- netrw
- config
- file-browsing
- files
---

I use netrw a fair bit mainly because of Tim Pope's [vinegar.vim](https://github.com/tpope/vim-vinegar) plugin.  I press `-` to see a list of files in the current directory, and then navigate around using Vim shortcuts and search.  You can open netrw in a similar way without installing vinegar.vim, just type `:e .` and you'll see a list of files.

The way Vim displays files in this view is actually configurable -- you can press `i` to toggle through the available view types.  This is what the "long" view looks like:

![netrw long](/images/posts/netrw-long.png)

I like this mode, so to make it permanent I added the following line to my `.vimrc`:

{% highlight text %}
let g:netrw_liststyle=1
{% endhighlight %}

The available options are:

* `0`: Thin, one file per line
* `1`: Long, one file per line with file size and time stamp
* `2`: Wide, which is files in columns
* `3`: Tree style

The tree works well if you're working on a project with nested folders and you want to jump around a lot.  Again, you can press `i` to toggle between modes, so you can switch to the one that's right for the task at hand.

