---
layout: post
title: "Script Roundup: En Masse, vim-expand"
author: "Alex Young"
tags: 
- scripts
- plugins
- visual-mode
---

###En Masse

En Masse (GitHub: [Wolfy87/vim-enmasse](https://github.com/Wolfy87/vim-enmasse)) by Oliver Caldwell is for those of you who like to work with the quickfix list.  Given a quickfix list, `:EnMasse` will open a new buffer that contains each of the lines.  You can edit these lines in the same buffer.  When you save, each of the relevant files will be updated.

The project includes tests and [documentation](https://github.com/Wolfy87/vim-enmasse/blob/master/doc/enmasse.txt).

###vim-expand

vim-expand (GitHub: [Wolfy87/vim-expand](https://github.com/Wolfy87/vim-expand)), also by Oliver Caldwell, allows text to be expanded based on Visual mode selections.  It uses the [expand function](http://vimdoc.sourceforge.net/htmldoc/eval.html#expand%28%29).

Oliver's example expands this function:

{% highlight javascript %}
function {add,remove}User() {
  // ...
}
{% endhighlight %}

Into two:

{% highlight javascript %}
function addUser() {
  // ...
}

function removeUser() {
  // ...
}
{% endhighlight %}

To invoke it, just type `:Expand` when a selection has been made.
