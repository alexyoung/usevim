---
layout: post
title: "Script Roundup: rsi.vim, Tablify"
author: "Alex Young"
tags: 
- plugins
- readline
- mappings
---

<div class="intro">
Send in your Vim scripts for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/vimnews">@vimnews</a>.
</div>

###rsi.vim

[rsi.vim](http://www.vim.org/scripts/script.php?script_id=4359) (GitHub: [tpope / vim-rsi](https://github.com/tpope/vim-rsi), License: _Vim_) by Tim Pope adds Readline/Emacs-style bindings to Vim.  It does sometimes feel like everything apart from Vim has the same shortcuts, and so Tim has made a plugin that brings them to Vim without overriding commonly used existing bindings.

The Readline mappings work in the Insert and Command-line modes.  You can review the mappings here: [rsi.vim](https://github.com/tpope/vim-rsi/blob/master/plugin/rsi.vim).

###Tablify

[Tablify](http://www.vim.org/scripts/script.php?script_id=4358) (GitHub: [Stormherz / tablify](https://github.com/Stormherz/tablify)) by Vladimir Shvets turns structured data into tables.  Pressing `\tt` turns a selection into a table with left-aligned text.  The example from the readme is as follows:

{% highlight text %}
Artist | Song | Album | Year
Tool | Useful idiot | Ænima | 1996
Pantera | Cemetery Gates | Cowboys from Hell | 1990
Ozzy Osbourne | Let Me Hear You Scream | Scream | 2010
{% endhighlight %}

Becomes:

{% highlight text %}
+---------------+------------------------+-------------------+------+
| Artist        | Song                   | Album             | Year |
+---------------+------------------------+-------------------+------+
| Tool          | Useful idiot           | Ænima             | 1996 |
+---------------+------------------------+-------------------+------+
| Pantera       | Cemetery Gates         | Cowboys from Hell | 1990 |
+---------------+------------------------+-------------------+------+
| Ozzy Osbourne | Let Me Hear You Scream | Scream            | 2010 |
+---------------+------------------------+-------------------+------+
{% endhighlight %}

Selecting the table and pressing `\tu` will return the table to the original text.  There's also special handling for headers to make them look visually distinct from other rows.
