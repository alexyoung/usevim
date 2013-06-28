---
layout: post
title: "More Expressions"
author: "Alex Young"
tags: 
- plugins
- expressions
- echo
---

When I previously wrote about [Counting and Calculating with Vim](/2013/06/14/counting-with-vim/) I mentioned the use of the expression register for inserting the results of calculations: when in Insert mode, press `CTRL-R =` then type an expression.  Expressions can do a lot more than simple mathematical calculations -- this article outlines a few interesting things you can do with them.

###Interrogating and Experimenting

When experimenting with expressions, you sometimes just want to see the output before doing anything with the results.  One easy way to explore registers is to use `:echo` to print the results first.  When in Normal mode, type the following:

{% highlight text %}
:echo $VIMRUNTIME
{% endhighlight %}

This will print the environmental variable, `$VIMRUNTIME`.  To perform a simple calculation, use the same command:

{% highlight text %}
:echo 10 * 3.14
{% endhighlight %}

Another thing you can do that is occasionally useful is print the contents of a register:

{% highlight text %}
:echo @a
{% endhighlight %}

Options can be interrogated as well:

{% highlight text %}
:echo &columns
:echo &tabstop
{% endhighlight %}

###Expression Syntax

The syntax used for expressions (`:help expression-syntax`) should be fairly familiar to anyone who writes high-level programming languages.  Expressions are parsed from left to right, and include simple boolean operators and even the C-like ternary operator:

{% highlight text %}
:echo 1 == 0 ? 'Yep' : 'Nope'
{% endhighlight %}

All of the usual boolean operators are there, like greater and less than:

{% highlight text %}
:echo 5 &gt; 10
:echo 5 &lt; 10
{% endhighlight %}

There are some operators for working with strings as well.  Regular expressions can be used with `=~`, and case insensitive string comparisons are nicely succinct with `==?`.  The follow expressions are both true (`1`):

{% highlight text %}
:echo 'alex' =~ '^al'
:echo 'alex' ==? 'Alex'
{% endhighlight %}


