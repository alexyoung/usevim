---
layout: post
title: "Anti-patterns of vimrc"
author: "Alex Young"
tags: 
- scripting
- vimrc
---

Most of us collect fragments in our `vimrc` files without ever considering best practices.  [Anti-pattern of vimrc](http://rbtnn.hateblo.jp/entry/2014/12/28/010913) by rbtnn lists some common mistakes with the fixed alternatives.

The author suggests that it's better to use strict options instead of mixing in abbreviations.  Also, you should always use the right scope instead of leaking global variables.

Another interesting point is using groups to define auto-commands to avoid reevaluating them:

{% highlight text %}
" define a group `vimrc` and initialize.
augroup vimrc
  autocmd!
augroup END

" register autocmds to group `vimrc`.
autocmd vimrc FileType cpp setlocal expandtab
autocmd vimrc FileType make setlocal noexpandtab
{% endhighlight %}
