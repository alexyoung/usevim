---
layout: post
title: "Terminology: Macro"
author: "Alex Young"
tags: 
- macros
- registers
- terminology
---

In general terms, a macro is a reusable set of instructions.  Intermediate and advanced Vim users use "complex repeats" to record typed characters into registers, then play back the register's contents later on.  Most of us refer to complex repeats as macros, but Vim's documentation calls key mappings "macros":

{% highlight text %}
1. Key mapping				*key-mapping* *mapping* *macro*

Key mapping is used to change the meaning of typed keys.  The most common use
is to define a sequence commands for a function key.

	:map <F2> a<C-R>=strftime("%c")<CR><Esc>
{% endhighlight %}

Contrast this to complex repeats, which are initialised by pressing `q` in Normal mode.  I previously wrote about this in [Vim 101: A Gentle Introduction to Macros](http://usevim.com/2012/08/10/macros/).

Is it correct to call complex repeats _macros_, given that Vim's documentation distinguishes between them?  Well, almost the entire community calls complex repeats macros, as they are technically macros in the broadest sense.  However, it's useful to be aware that recording a sequence of characters to a register is referred to as a "complex repeat" by Vim's documentation, should any confusion arise when using both terms together.

I searched on the Vim Wiki for references to both complex repeats and macros, and I found a few cases where authors had duplicated pages by using the terms distinctly:

* [Recording keys for repeated jobs](http://vim.wikia.com/wiki/VimTip144)
* [Macros](http://vim.wikia.com/wiki/Macros)

Here are the manual pages for both concepts:

* [:help macro](http://vimdoc.sourceforge.net/htmldoc/map.html#macro)
* [:help complex-repeat](http://vimdoc.sourceforge.net/htmldoc/repeat.html#complex-repeat)

