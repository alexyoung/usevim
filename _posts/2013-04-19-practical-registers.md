---
layout: post
title: "Practical: Registers"
author: "Alex Young"
tags: 
- practicals
- registers
---

Continuing with the trite university themed [Vim 101](/tags.html#vim101) posts, I thought it would be useful to drop in the occasional _practical_ lesson.  Something for you to practice to develop good habits when using Vim.

One thing that tripped me up early on was registers.  I managed to get used to yanking and putting text, but I kept overwriting the default register when I actually wanted to keep that content hanging around.

A few weeks ago I wrote about [the black hole register](http://usevim.com/2013/03/29/blackhole/), and I included a note about copying the default register.  I believe that it's better to get used to thinking "should I yank this into a register?" before applying an operator command.

Even if I'm deleting text with `d`, or using the change operator -- particularly `cit` (_change inner tag_) or `ci"` (_change in a quote_) I'll consider using a register.

Let's say I've got some HTML and I want to replace the contents:

{% highlight html %}
&lt;strong&gt;Read usevim!&lt;/strong&gt;
{% endhighlight %}

If I wanted to retain the text but still replace it, I could dump it into a register with `"acit`.  This might seem like a complex command, but you can break it down like this:

* `"a` -- Before doing anything else, put the result of the operator command into register `a`
* `cit` -- Remove the text inside the nearest XML tags, and enter Insert mode

So that huge, weird-looking `"acit` can be regarded as two relatively simple operations.  Now I can rewrite the contents of the tag and put the text somewhere else later on.

Try to get used to thinking "should I prefix this operator command with a register?" -- it'll slow you down at first, but after a while it becomes second nature and more efficient.
