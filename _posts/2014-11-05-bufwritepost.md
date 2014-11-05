---
layout: post
title: "Intercepting Writes to Files with BufWritePost"
author: "Alex Young"
tags: 
- scripting
- files
- buffers
---

Sometimes you find yourself frequently running the same command whenever you save a file.  Maybe it's restarting a local web server, running a build script, or checking your code with a linter.  This can be scripted quite easily with `BufWritePost` command.  The basic usage is:

{% highlight javascript %}
autocmd BufWritePost *.ext call methodName()
{% endhighlight %}

This is used in lots of scripts.  [jshint.vim](https://github.com/wookiehangover/jshint.vim) uses it to invoke a linter, and [HgCi](https://github.com/vim-scripts/HgCi) will make a commit in Mercurial whenever a file changes.

There's even a newer Git equivalent called [YUNOcommit.vim](https://github.com/esneider/YUNOcommit.vim) which shows a message with `echo` and `echohl` when you haven't committed frequently enough.  This plugin is actually quite short and readable, so you can use it as a basis for your own `BufWritePost` experiments.

