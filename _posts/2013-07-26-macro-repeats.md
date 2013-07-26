---
layout: post
title: "Repeat Side-Effects"
author: "Alex Young"
tags: 
- macros
- repeats
---

I'm writing a book in an XML format derived from DocBook, and I often have to deal with repeated lines of XML with incremented numbers:

{% highlight xml %}
&lt;callout arearefs=&quot;co1&quot;&gt;Here be dragons.&lt;/callout&gt;
{% endhighlight %}

That example is from a code listing that has been annotated with "callouts" -- they're numerical symbols that point to descriptive text, making code examples easier to follow.

I found myself yanking and putting these lines of XML, then doing `:s/1/2/`, `:s/1/3`, etc.  I realised there must be a better way, so I searched for tips on `CTRL-A`, which is Vim's increment command.  I found an awesome tip on the Vim Wiki that basically did what I wanted: [Increasing or decreasing numbers: Making a list](http://vim.wikia.com/wiki/Increasing_or_decreasing_numbers).

Given a line like this:

{% highlight xml %}
&lt;callout arearefs=&quot;co1&quot;&gt;&lt;/callout&gt;
{% endhighlight %}

We can repeat it _n_ times by creating a macro then putting it _n - 1_ times.  With the cursor over that line, `qa Y p CTRL-A q` (spaces added for clarity) and then `8@a` will result in 10 lines with the correct numbering.  You don't need to move the cursor to the numbers due to how `CTRL-A` works.

Breaking it down:

* `qa`: Start recording typed characters into register `a`
* `Y`: Linewise yank into the `"` register
* `p`: Paste the line
* `CTRL-A`: Increment the number _after the cursor_.  The `A` here is case insensitive, so you don't have to type `CTRL-A` (I think... I write it as `CTRL-A` to be consistent with Vim's documentation, but I press `CTRL-a` myself)
* `q`: Stop recording characters into the macro

Now for the second part:

* `8`: Do the next thing 8 times
* `@a`: Execute the contents of register `a`

If you try this out for yourself, you should see the following steps in Vim:

![Repeated increments](/images/posts/side-effects.png)

1. Type the text
2. Yank, put, then increment the number on the line
3. Repeat step two by using `@`

This works because repeated execution of `@a` causes the current line to be yanked, put, then incremented.  The original line isn't stored anywhere, so no counter is required between applications of the register.  I like this example: it demonstrates how creative you can get with something as simple as applying incrementing numbers to repeating key sequences.

