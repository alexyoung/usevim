---
layout: post
title: "Plugin Roundup: Syntastic, CSS3 Syntax, Source"
author: "Alex Young"
tags:
- plugins
- syntax
- css
---

<div class="intro">
Send in your Vim plugins for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###Syntastic

![Syntastic screenshot](/images/posts/syntastic.png)

[Syntastic](https://github.com/suderman/source.vim) (vim.org: [Syntastic](http://www.vim.org/scripts/script.php?script_id=2736)) by Martin Grenfell is a syntax checking plugin.  Syntax can be checked on demand, or when a file is saved and opened.

The syntax checking plugins have their own dependencies, so have a look at the `syntax_checkers` directory to see how they work -- some should work out of the box.

###CSS3 Syntax Highlighting

[CSS3-syntax-file-for-vim](https://github.com/kight/CSS3-syntax-file-for-vim) (vim.org: [css3 syntax file addon](http://www.vim.org/scripts/script.php?script_id=3972)) by "kight" is a syntax file for CSS3.  It supports vendor prefixes, and various CSS3 properties like `border-radius` and `box-shadow`.

###Source

[Source](https://github.com/suderman/source.vim) (vim.org: [source.vim](http://www.vim.org/scripts/script.php?script_id=3969), License: _Vim_) by Jon Suderman can open remote files or plugins in a similar way to `source`:

{% highlight text %}
Source git://github.com/mileszs/ack.vim.git
Source git://gist.github.com/1229444.git
Source https://raw.github.com/gist/1229444/6d07d825fa99a26d2dcc0fd83e9a8b1c78978bfa/statusline-help.vim
{% endhighlight %}

It actually downloads the files, so it shouldn't cause Vim to download them every time it's opened:

> Automatic updates occur once a week when starting Vim. This will `git pull` any repositories and re-download any other files.

The author hasn't written any help documentation yet, but the project's readme file has enough details to get started.
