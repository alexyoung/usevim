---
layout: post
title: "Vim 101: Search and Replace"
author: "Alex Young"
tags:
- vim101
- editing
- substitute
---

In this article I assume the reader has a basic knowledge of regular expressions.  To read about how Vim uses regular expressions, take a look at the pattern section of the Vim manual in `:help pattern`.

###Substitution

The most fundamental _search and replace_ command in Vim is `:substitute`, which is almost always shortened to `:s`.  By default this operates on the first match on the current line, and it's used in the form `:s/search/replace/`.

![Using substitute](/images/posts/vim101-sub1.png)

This is easy enough, but what about global replacements?  Appending the `g` flag replaces all of the matches on the current line: `:s/search/replace/g`.  Performing the same operation across the file requires the `:global` command, which is shortened to `:g`.  Typing `:help :s` and `:help :g` will display detailed help text for both of these commands.

The way the global command works is to internally flag every matching line, and then apply a command to it.  That's why it's often seen used in this form:

{% highlight text %}
:g/Empire/s//Wookies/g
{% endhighlight %}

An equivalent shorthand is the following:

{% highlight text %}
:%s/Empire/Wookies/g
{% endhighlight %}

Once `:%` has been memorised it's incredibly useful, but it's interesting to note that it isn't actually a command -- `:%` is the same as a range of `1,$` which equates to the entire file.  Since the substitute command accepts a range to operate on, anything can be supplied.  More advanced users will often use ranges to constrain the effects of the substitute command:

{% highlight text %}
:100,1413s/Ewoks/Care Bears/g
{% endhighlight %}

###Substitute Flags

The most common flags are probably `g` and `i` -- as we've seen, `g` works on every match, while `i` performs a case-insensitive match.  This would change `STAR`, `Star`, `star`, and any other way of typing the word `star`:

{% highlight text %}
:%s/star/blackhole/gi
{% endhighlight %}

I like using the `c` command to confirm each match.  Sometimes it's hard to visualise a global substitute, so this is where the confirm flag comes in handy:

{% highlight text %}
:%s/star/blackhole/gic
{% endhighlight %}

Vim will prompt to confirm each substitution.

![:%s/star/blackhole/gic](/images/posts/vim101-sub2.png)

###Further Reading

There are a few interesting tricks that can be performed with ranges and patterns.  Read more about how Vim implements patterns in particular to get a handle on this, in `:help pattern`.  As an example of more advanced usage, consider this: `:%s/Leia/<c-r>a/g`.

The `<c-r>` sequence here works as if the `ctrl r` keys were pressed on the keyboard, followed by the `a` key.  This causes Vim to insert the contents of register `a` directly into the replacement.  I'll cover registers in a future Vim 101 post.
