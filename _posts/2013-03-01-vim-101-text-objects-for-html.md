---
layout: post
title: "Vim 101: Efficient HTML Editing with Text Objects"
author: "Alex Young"
tags: 
- vim101
- motions
- text-objects
- html
---

If you're working with XML or HTML, then the `at` and `it` text objects are useful.  You can remember `at` with the mnemonic "a tag block", and `it` as "inner tag block".  The difference is that `at` includes the tags.

Consider the following example:

{% highlight html %}
&lt;p&gt;&lt;a href=&quot;http://example.com/1&quot;&gt;This is a link&lt;/a&gt; and &lt;em&gt;this is an emphasis&lt;/em&gt;.
&lt;a href=&quot;http://example.com/2&quot;&gt;This is another link&lt;/a&gt;, which points to another page.&lt;/p&gt;
{% endhighlight %}

If I position the cursor anywhere inside the `<em>` tags and type `dat`, it'll remove the text _and_ tags, because it means "delete a tag block":

{% highlight html %}
&lt;p&gt;&lt;a href=&quot;http://example.com/1&quot;&gt;This is a link&lt;/a&gt; and .
&lt;a href=&quot;http://example.com/2&quot;&gt;This is another link&lt;/a&gt;, which points to another page.&lt;/p&gt;
{% endhighlight %}

What's probably more useful is replacing the text inside the `<em>`.  Typing `dit` will delete the inner tag block, meaning the text content in this case:

{% highlight html %}
&lt;p&gt;&lt;a href=&quot;http://example.com/1&quot;&gt;This is a link&lt;/a&gt; and &lt;em&gt;&lt;/em&gt;.
&lt;a href=&quot;http://example.com/2&quot;&gt;This is another link&lt;/a&gt;, which points to another page.&lt;/p&gt;
{% endhighlight %}

In most cases you don't want to just delete the text, you want to change it.  That's where the "change" operator comes in handy.  Rather than typing `dit`, `cit` is more useful because it'll leave the editor in Insert mode:

<div class="image">
  <img src="/images/posts/change-inner-tag.gif" alt=""/>
  <small>Editing text content using <code>cit</code>.</small>
</div>

If I wanted to change the inner text of that anchor tag, `cit` would even work if the cursor was inside the `href` attribute, or the tag itself.

<div class="image">
  <img src="/images/posts/change-inner-tag.png" alt=""/>
  <small>Changing inner tags from inside an element.</small>
</div>

That's the main difference between movement commands and text objects: movements (with operators) apply from the cursor to the point the cursor will move to, while objects are less dependent on cursor location.

Another common HTML editing task is changing the text within quotes.  Vim has text objects that are perfect for this task: `a"`, `a'`, `i"`, and `i'`.  If I moved the cursor inside of of the `href` attributes and typed `ci"`, the URL would disappear and Vim would enter Insert mode so a new URL can be entered.

Sometimes you want to change the tag to another element.  If I wanted to change `<em>` to `<strong>`, then I could move the cursor to the tag and type `ci>`.

