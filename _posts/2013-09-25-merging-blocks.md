---
layout: post
title: "Merging Blocks"
author: "Alex Young"
tags: 
- tips
- ex
---

[Your problem with Vim is that you don't grok vi](http://stackoverflow.com/a/1220118) was an e-book distributed as a Stack Overflow answer.  You probably saw it crop up on Hacker News a year or so ago.  As a result of this tour de force in web comments I now keep track of interesting Stack Overflow questions and answers.

A [recent find](https://news.ycombinator.com/item?id=6438235) that intrigued me was about [merging multiple lines](http://stackoverflow.com/a/10760494):

> If you want to do this with just Ex commands

{% highlight text %}
:5,8del | let l=split(@") | 1,4s/$/\=remove(l,0)/
{% endhighlight %}

> In Vim, you can use the pipe character (|) to chain multiple Ex commands, so the above is equivalent to

{% highlight text %}
:5,8del
:let l=split(@")
:1,4s/$/\=remove(l,0)/
{% endhighlight %}

> Many Ex commands accept a range of lines as a prefix argument - in the above case the `5,8` before the `del` and the `1,4` before the `s///` specify which lines the commands operate on.

The discussion after the answer is also quite enlightening, and it has garnered 803 upvotes so far.
