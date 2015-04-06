---
layout: post
title: "Underscore.vim"
author: "Alex Young"
tags: 
- scripting
- vimrc
- functional
---

[Underscore.vim](http://www.vim.org/scripts/script.php?script_id=5149) (GitHub: [haya14busa/underscore.vim](https://github.com/haya14busa/underscore.vim), License: _MIT_) by haya14busa is a library of functional programming helpers for Vim:

{% highlight text %}
echo s:_.reject([1, 2, 3, 4, 5, 6], 'v:val % 2 == 0')
" => [1, 3, 5]
{% endhighlight %}

It's inspired by [Underscore.js](http://underscorejs.org), but also [lodash](https://github.com/lodash/lodash) which I always felt was more "functional" than Underscore.  There are a lot of functions in the library -- take a look at [the documentation to find each one](https://github.com/haya14busa/underscore.vim/blob/master/doc/underscore.txt).
