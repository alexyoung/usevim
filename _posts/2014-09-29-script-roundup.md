---
layout: post
title: "Script Roundup: vim-line-jump"
author: "Alex Young"
tags: 
- scripts
- plugins
- nerdtree
---

###vim-line-jump

I like plugins for plugins, and I noticed something interesting in [vim-line-jump](http://www.vim.org/scripts/script.php?script_id=5023) (GitHub: [rargo / vim-line-jump](https://github.com/rargo/vim-line-jump)) -- you can specify mappings based on the current buffer with an `autocmd`.  That means you can add NERDTree-specific mappings with something like this:

{% highlight text %}
autocmd BufEnter NERD_tree_\d\+ nnoremap &lt;buffer&gt; &lt;nowait&gt; &lt;silent&gt; f &lt;ESC&gt;:silent! call LineJumpSelectForward()&lt;cr&gt;
{% endhighlight %}

The rest of the examples are for NERDTree and Tagbar so you can navigate between files more easily.
