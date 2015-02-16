---
layout: post
title: "The Vim Regular Expression Dialect"
author: "Alex Young"
tags: 
- regex
---

If you look at the "pattern" help page, then you'll see this: "Vim's regexes are most similar to Perl's" which sounds great, until you continue reading to find "in terms of what you can do." One thing to keep in mind about Vim's regular expressions is they behave like other regular expression syntaxes that you might be familiar with, until they don't, in which case you start randomly escaping characters until your pattern works.

Sarcasm aside, you should think of regular expressions in Vim as a unique dialect. If something doesn't work, refer to `:help pattern-searches`.  Here's an example: today I was converting a large Objective-C `switch` statement into a JSON file.  I used a few regular expressions to slice and dice the entire file, and ended up with something close to what I wanted.  I even managed to join every other line with `:%normal J`.  I went from lots of these:

{% highlight text %}
case ExampleTypeName:
  return @"TypeName";  
{% endhighlight %}

To JSON properties and values:

{% highlight javascript %}
"ExampleTypeName": "TypeName",  
{% endhighlight %}

However, Xcode is undisciplined when it comes to whitespace, so there was a lot of line endings with extra space that I wanted to remove.  I tried `%s/\s+$//` and was confused when it didn't work.  Then I remembered you have to escape `+` in Vim, and after escaping the "match one or more of the preceding atom" character everything was cleaned up.

If you're used to Perl-style regular expressions, then there's one more thing you need to know: you can use the `\v` sequence to escape all ASCII characters except alphanumerics and underscores.  This is documented in `:help \v`, and is known as "very magic".  There's a [Vim wiki page on magic and no magic](http://vim.wikia.com/wiki/Simplifying_regular_expressions_using_magic_and_no-magic) that shows how to use it by default with mappings.

The next time one of your regular expressions fails to match, just remember that Vim has its own dialect, and is a little bit magical after all.
