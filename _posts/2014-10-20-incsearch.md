---
layout: post
title: "Improved Incremental Searching"
author: "Alex Young"
tags: 
- plugin
- scripts
- search
---

![incsearch.vim](/images/posts/incs.gif)

[incsearch.vim](http://www.vim.org/scripts/script.php?script_id=5038) (GitHub: [haya14busa / incsearch.vim](https://github.com/haya14busa/incsearch.vim), License: _MIT_) by haya14busa is an improved incremental search.  It highlights all pattern matches, and it also works in all modes: Normal, Visual, and Operator-pending.

You'll need to set up some mappings to make it feel natural.  The author has suggested the following:

{% highlight text %}
map /  <Plug>(incsearch-forward)
map ?  <Plug>(incsearch-backward)
map g/ <Plug>(incsearch-stay)
{% endhighlight %}

The results look very impressive -- it reminds me of some of the features you see in recent GUI editors, while still feeling as immediate as Vim's standard regex search.  The readme has lots of animated gifs so you can see how it works.
