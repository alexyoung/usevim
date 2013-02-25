---
layout: post
title: "Script Roundup: Git Gutter, vim-nodejs-complete"
author: "Alex Young"
tags: 
- plugins
- git
- node
- javascript
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a>.
</div>

###Git Gutter

Vim Git Gutter (GitHub: [airblade / vim-gitgutter](https://github.com/airblade/vim-gitgutter), License: _MIT_) by Andrew Stewart shows a symbol in the sign column to indicate where lines have been added, modified, or deleted.  This is based on [Git Gutter](https://github.com/jisaacks/GitGutter) for Sublime Text 2.

Vim's documentation in `:help sign-intro` explains what the sign column is for if you're not familiar with it.

###vim-nodejs-complete

vim-nodejs-complete (GitHub: [myhere / vim-nodejs-complete](https://github.com/myhere/vim-nodejs-complete)) by Lin Zhang adds `'omnifunc'` support for [Node](http://nodejs.org/) developers.  For example, typing:

{% highlight javascript %}
var fs = req
{% endhighlight %}

And then pressing `CTRL-X_CTRL-O` will complete `require`:

{% highlight javascript %}
var fs = require(
{% endhighlight %}

Pressing `CTRL-X_CTRL-O` again will display module name completion.
