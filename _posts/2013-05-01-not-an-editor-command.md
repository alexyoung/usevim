---
layout: post
title: "E492: Not an editor command: W"
author: "Alex Young"
tags: 
- dotfiles
- commands
- saving
- errors
---

I was looking at dotfiles on GitHub for something completely unrelated, and noticed this snippet by [Gianni Chiappetta](https://github.com/gf3/dotfiles/blob/master/.vimrc):

{% highlight text %}
" Remap :W to :w
command W w
{% endhighlight %}

This will help when `:W` is accidentally typed instead of `:w` and Vim displays `E492: Not an editor command: W`. I occasionally do this when I'm making a lot of rapid changes and my finger lingers on the shift key.

Creating an alias with `:command` (or `:com` for short) will result in something slightly different to the real `:w` though, because it won't copy the arguments.  Ingo Karkat posted a response to a Stack Overflow question about the same problem: [Is there a way in vim to make :W to do the same thing as :w?](http://stackoverflow.com/questions/10590165/is-there-a-way-in-vim-to-make-w-to-do-the-same-thing-as-w).

> But I think for your use case it's best to define your own uppercase command-variants. The main challenge is to support all the options that the original one has:

> `command! -bang -range=% -complete=file -nargs=* W <line1>,<line2>write<bang> <args>`

> `command! -bang Q quit<bang>`

Adding the `!` causes `command` to replace any existing mappings.

Although the simpler mapping will suffice for the more command mistake of hitting `:W`, it's interesting how far you can take a simple question about Vim configuration.
