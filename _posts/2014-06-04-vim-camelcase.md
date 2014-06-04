---
layout: post
title: "Cross-Platform Swiss Army Knife"
author: "Alex Young"
tags: 
- substitute
---

I found myself working on Objective-C, JavaScript, and C# all at the same time today.  One issue I ran into was our C# model classes used camel case property names, but the JSON from the Node server used underscores.

I wrote a dictionary to map the fields by using Vim to convert all the underscore field names into something C#-friendly.  This is what I ended up with:

{% highlight csharp %}
private static readonly Dictionary&lt;string, string&gt; FieldMap = new Dictionary&lt;string, string&gt;
{
    {"ExampleFieldOne", "example_field_one"},
    {"ExampleFieldTwo", "example_field_two"},
{% endhighlight %}

The data on the server originally came from an sqlite database, so I pulled out the column names which used underscores, and then put them in a text file.

{% highlight text %}
example_field_one
example_field_two
{% endhighlight %}

Then I opened this in Vim and converted the entire file with `:%s#_\(\l\)#\u\1#g`.  I found this on the Vim Wiki: [Converting variables to or from camel case](http://vim.wikia.com/wiki/Converting_variables_to_or_from_camel_case).

By using some [blockwise Visual mode techiques](http://usevim.com/2012/05/18/vim101-visual-mode-2/), I manged to get my C# dictionary and actually got my data converted from the server mapped to my model objects.

When I'm doing cross platform development I often find Vim becomes my swiss army knife for text manipulation.  Admittedly I often end up searching for regex help, but the results can save a lot of time!
