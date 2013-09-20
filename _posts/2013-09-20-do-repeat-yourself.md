---
layout: post
title: "Vim: Do Repeat Yourself"
author: "Alex Young"
tags: 
- repeat
---

Do yourself a favour: learn _how_ and _what_ you can repeat in Vim.  I'm tired of people looking at me like I'm a wizard when I make an edit and repeat it a bunch of times with `.`.  This happens a lot with document types that are naturally repetitive -- HTML for example.

It's easy to get the hang of.  Let's say you've got this:

{% highlight html %}
&lt;p&gt;This is a story all about how,&lt;/p&gt;
&lt;p&gt;My life got flipped, turned upside down,
&lt;p&gt;And I'd like to take a minute just sit right there,&lt;/p&gt;
&lt;p&gt;I'll tell you all about why my Vim skills are rare
{% endhighlight %}

If I typed `</p>` and then pressed `.` at the end of the second line, it would add a paragraph tag.  You can keep pressing `.` wherever needed.

The essence of the `.` command is it _repeats the last change_.  What's a change?  Typing text in Insert mode is a change.  Once you press escape to go back to Normal mode, you can repeat what you just typed with `.` -- but other Normal mode changes can be repeated as well.

These so-called "simple changes" are documented in `:help simple-change`.  Some examples that you probably already use are `r` for replacing a character, `~` for switching case, and `>>` for indenting text.

You can even repeat indentation with `=`.  In the following example, I could move the cursor to the first curly brace, then press `=%` to indent up to the matching brace.  Then I could move the cursor to the next `{` and repeat the change with `.`.

{% highlight javascript %}
function a() {
a;
b;
c;
}

function b() {
d;
}

e;
{% endhighlight %}

With the standard Vim distribution `=` knows how to indent that entire example, but if you're using non-standard indentation rules in some sections or have code that won't behave, it can be useful to repeat chunks of auto-indent where needed.

Remember: you can combine changes with motions and repeat the whole thing!
