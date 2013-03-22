---
layout: post
title: "Vim 101: Practicing Motions with Visual Mode"
author: "Alex Young"
tags: 
- vim101
- visual-mode
- modes
---

I often find myself using [Visual mode](http://usevim.com/2012/05/11/visual/) purely to figure out the best motion to use for a given task.  For example, let's say I'm trying to duplicate the following function's body:

{% highlight javascript %}
function specialAdd(a, b) {
  if (!a || !b) {
    return 0;
  }
  return a + b;
}
{% endhighlight %}

If the cursor was on `function` and I pressed `v/}` it would select up to and including the curly bracket that closes the `if` condition.  Pressing `n` would select the whole function.

The next thing I might try would be the `}` motion (for moving over a paragraph).  Typing `v}` would select the whole function, which is what I wanted.  By using Visual mode I can easily see what the outcome of typing the `}` motion was.  From that point on I can combine `}` with operators, like `y}` to yank the function.

If the function has spaces in it, then things become a little trickier:

{% highlight javascript %}
function specialAdd(a, b) {
  if (!a || !b) {
    return 0;
  }

  return a + b;
}
{% endhighlight %}

Now `y}` won't work because the entire function isn't a "paragraph".  Vim also has the notion of a "section", the meaning of which is determined by the `'sections'` option.  Typing `v][` will select the whole function, even with a space, but typing `y][` will miss the final closing brace.

How about block selection?  Typing `vaB` will select either the inside of the `if` condition, or the function's body, depending on where the cursor is.  If the cursor is on the first brace, typing `v%` will select the function body because `%` is the motion for finding the next bracket.  Typing `y%` would cause Vim to yank the text enclosed by the curly braces and it would also include the braces themselves.

My advice is to use Visual mode sparingly -- purely as a way to literately visualise editing operations.  Ultimately using `v` or `V` (linewise Visual mode) can be less efficient than mastering the operator commands and motions.
